git config --global user.email circleci-bot@halu.lu
git config --global user.name circleci-bot
git clone git@github.com:lzjluzijie/tools.git -b gh-pages gh-pages
go run tools.go
cd gh-pages
git add .
git commit -m "$(date +%s)"
git push origin gh-pages