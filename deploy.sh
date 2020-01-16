#!/usr/bin/env bash
export TZ='Asia/Shanghai'
git config --global user.email circleci@halu.lu
git config --global user.name halulu-circleci
git clone git@github.com:lzjluzijie/tools.git -b gh-pages gh-pages

git log -1 --pretty=format:"{%n  \"commit\": \"%H\",%n  \"abbreviated_commit\": \"%h\",%n  \"tree\": \"%T\",%n  \"abbreviated_tree\": \"%t\",%n  \"parent\": \"%P\",%n  \"abbreviated_parent\": \"%p\",%n  \"refs\": \"%D\",%n  \"encoding\": \"%e\",%n  \"s
ubject\": \"%s\",%n  \"sanitized_subject_line\": \"%f\",%n  \"body\": \"%b\",%n  \"commit_notes\": \"%N\",%n  \"verification_flag\": \"%G?\",%n  \"signer\": \"%GS\",%n  \"signer_key\": \"%GK\",%n  \"author\": {%n    \"name\": \"%aN\",%n    \"email\": \"%aE\",%n
\"date\": \"%aD\"%n  },%n  \"commiter\": {%n    \"name\": \"%cN\",%n    \"email\": \"%cE\",%n    \"date\": \"%cD\"%n  }%n}" > git.json

sudo yarn install
yarn run build
cp gh-pages/.git dist -r

cd dist
git add .
git commit -m "Site updated by circleci: `date +"%Y%m%d-%H:%M:%S"` UTC+8"
git push origin gh-pages
