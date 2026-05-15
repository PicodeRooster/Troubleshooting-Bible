#!/bin/bash
read -p "Enter citation registry title:" -r registry_title

prompt_field() {
    local label="$1"
    local varname="$2"
    read -r -p "$label (press Enter to skip): " value
    eval "$varname='$value'"
}

fields=(
    "Author (please use format Last Name, First Name):author"
    "Source Title:source_title"
    "Container Title:container_title"
    "Contributor (if website, enter Access Date):contributor"
    "Version:version"
    "Number:number"
    "Publisher:publisher"
    "Publication Date:publication_date"
    "Location:location"
)

for field in "${fields[@]}"; do
    label="${field%%:*}"
    varname="${field##*:}"
    prompt_field "$label" "$varname"
done

if ! [ -z "$author" ]; then
  author="$author."
else
  author=""
fi

if ! [ -z "$source_title" ]; then
  source_title="*$source_title*."
else
  source_title=""
fi

if ! [ -z "$container_title" ]; then
  container_title="\"$container_title\"."
else
  container_title=""
fi

if ! [ -z "$contributor" ]; then
  contributor="$contributor,"
else
  contributor=""
fi

if ! [ -z "$version" ]; then
  version="v. $version,"
else
  version=""
fi

if ! [ -z "$number" ]; then
  number="no. $number,"
else
  number=""
fi

if ! [ -z "$publisher" ]; then
  publisher="$publisher,"
else
  publisher=""
fi

if ! [ -z "$publication_date" ]; then
  publication_date="$publication_date,"
else
  publication_date=""
fi

if ! [ -z "$location" ]; then
  location="pp. $location."
else
  location=""
fi

#docs/biblio.json

source=$(cat <<EOF
{
  "\$registry_title\": {
      "author": "\"$author"\,"
      "source_title": "\"$source_title"\,"
      "container_title": "\"$container_title"\,"
      "contributor": "\"$contributor"\,"
      "version:" "\"$version"\,"
      "number:" "\"$number"\,"
      "publisher:" "\"$publisher"\,"
      "publication_date:" "\"$publication_date"\,"
      "location:" "\"$location"\"
  }
}
EOF
)

cat source >> "/media/pico/Coco/Troubleshooting Bible/docs/biblio.json"