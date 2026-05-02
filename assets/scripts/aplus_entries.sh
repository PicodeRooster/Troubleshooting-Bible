read -p "Enter a name for this vocabulary entry:" -r title
read -p "Enter target directory:" -r dir
read -p "Enter the definition:" -r definition

dir="${dir:-/media/pico/Coco/Troubleshooting Bible/docs}"

echo "$definition

*CompTIA A+*" >> "$dir/$title.md"
