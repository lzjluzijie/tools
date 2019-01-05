package main

import (
	"fmt"
	"html/template"
	"log"
	"os"
	"path/filepath"
)

var pages = []string{
	"index",
	"todo",
}

func main() {
	err := os.Mkdir("gh-pages", 0777)
	if err != nil && !os.IsExist(err) {
		panic(err)
	}

	t := template.New("")

	paths, err := filepath.Glob("templates/*")
	if err != nil {
		panic(err)
	}

	for _, path := range paths {
		log.Println(path)
		t, err = t.ParseFiles(path)
		if err != nil {
			panic(err)
		}
	}

	for _, page := range pages {
		file, err := os.Create(fmt.Sprintf("gh-pages/%s.html", page))
		err = t.ExecuteTemplate(file, page, nil)
		if err != nil {
			panic(err)
		}
	}
	return
}
