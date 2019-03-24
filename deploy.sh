#!/usr/bin/env bash
export TZ='Asia/Shanghai'
git config --global user.email circleci@halu.lu
git config --global user.name halulu-circleci
git clone git@github.com:lzjluzijie/tools.git -b gh-pages gh-pages

go run tools.go
cp todo.md gh-pages
cp README.md gh-pages

cd gh-pages
git add .
git commit -m "Site updated by circleci: `date +"%Y%m%d-%H:%M:%S"` UTC+8"
git push origin gh-pages