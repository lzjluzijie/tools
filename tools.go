package main

import (
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"strings"
	"time"
)

func main() {
	log.SetFlags(log.LstdFlags | log.Lshortfile)

	if len(os.Args) == 1 {
		generate()
		return
	}

	if os.Args[1] == "dev" {
		go func() {
			err := http.ListenAndServe(":80", http.FileServer(http.Dir("gh-pages")))
			if err != nil {
				panic(err)
			}
		}()

		for {
			generate()
			time.Sleep(time.Second)
		}
	}
}

func generate() {
	err := os.Mkdir("gh-pages", 0777)
	if err != nil && !os.IsExist(err) {
		panic(err)
	}

	base := readHTML("html/base.html")

	paths, err := filepath.Glob("html/*")
	if err != nil {
		panic(err)
	}

	for _, path := range paths {
		if strings.HasSuffix(path, "base.html") || !strings.HasSuffix(path, ".html") {
			continue
		}
		log.Println(path)

		content := readHTML(path)
		content = strings.Replace(base, "<!-- base.html -->", content, 1)

		err = ioutil.WriteFile(strings.Replace(path, "html", "gh-pages", 1), []byte(content), 0777)
		if err != nil {
			panic(err)
		}
	}
	return
}

func readHTML(filename string) (content string) {
	data, err := ioutil.ReadFile(filename)
	if err != nil {
		panic(err)
	}

	content = string(data)
	return
}
