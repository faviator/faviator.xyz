#!/usr/bin/env bash
KEY=$1
OUTPUT_FILE="./static/googleFonts.json"

echo '[' > $OUTPUT_FILE

curl -s "https://www.googleapis.com/webfonts/v1/webfonts?key=$KEY&sort=alpha" | \
  sed -n 's/ *"family": "\(.*\)",/  "\1",/p' | \
  sed '$s/\(.*\),/\1/' >> $OUTPUT_FILE

echo ']' >> $OUTPUT_FILE
