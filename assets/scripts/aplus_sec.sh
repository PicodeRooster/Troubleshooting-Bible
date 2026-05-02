entries=(
  "Smart Cards"
  "Tokens"
  "Mobile Authentication Apps"
)

dir="${dir:-/media/pico/Coco/Troubleshooting Bible/docs/Security}"

for i in "${entries[@]}"
do
    read -p "Enter the definition for $i:" -r definition
    echo "$definition

    *CompTIA A+*" >> "$dir/$i.md"
done


