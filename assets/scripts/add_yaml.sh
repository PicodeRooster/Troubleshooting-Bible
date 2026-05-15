#!/bin/bash
if [[ "$1" == *.md ]]; then
  file_name="${1}"
else 
  file_name="${1}.md"
fi

yaml=$(cat <<EOF
---
title: ${file_name%.*}
type: $(dirname "${file_name}")
tags: [windows, operating-systems, security]
sources: [CompTIA A+]
---
EOF
)

if [[ $(sed -n '1p' "$file_name")  == "---" ]]; then
  echo "Metadata template is already added to $file_name"
  sed -n '1,6p' "$file_name"
  exit;
else
  printf '%s\n' "$yaml" | cat - "$file_name" > /tmp/_add_yaml_tmp && mv /tmp/_add_yaml_tmp "$file_name"
  echo "Added metadata template to $file_name"
fi