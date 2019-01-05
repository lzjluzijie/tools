#!/usr/bin/env bash
hit="false"
head=""
foot=""
cat html/base.html | while read line
do
echo ${line:0:18}
    if "$hit" = "true"; then
        foot="$foot$line"
    else
        if [ "${line:0:18}" == "<!-- base.html -->" ]; then
            hit="true"
            continue
        fi
        head="$head$line"
    fi
done

echo 123
echo "$head"

for file in `ls html`
do
	if [ "$file" != "base.html" ]; then
	    content=$(cat html/$file)
        > test/$file
        echo "$head$content$foot" > test/$file
    fi
done