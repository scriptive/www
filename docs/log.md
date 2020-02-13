# Log

## Visit

> app.visit.csv

...records

format: `ip requests`

> app.visit.log

...production

format: `datetime visits requests totalvisits totalrequests`

## Word

> app.word.csv

...records

format: `word count`

> app.word.log

...production

format: `datetime wordCount`

## cli

```shell
# python log.py myordbok
python log.py myordbok visit scan
python log.py myordbok word scan
python log.py zaideih visit scan

python log.py myordbok word sortedToJSON
```

1577105824 1 10
3 368564

sed -e 's/\s\+/,/g' myordbok.ip.log > myordbok.visit.csv
sed -e 's/\s\+/,/g' zaideih.ip.log > zaideih.visit.csv

myordbok:visit
0.0.0.0,889993835920279
::1,889993835920279

zaideih:visit
1576839650850,993835240704
