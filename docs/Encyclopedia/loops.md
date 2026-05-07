## Loops in PowerShell

PowerShell has four main loop types:

---

### 1. `for` — when you know the iteration count
for ($i = 0; $i -lt 5; $i++) {
    Write-Host "Iteration $i"
}

---

### 2. `foreach` — iterate over a collection

$fruits = @("apple", "banana", "cherry")

foreach ($fruit in $fruits) {
    Write-Host $fruit
}

# Shorthand pipeline version
$fruits | ForEach-Object { Write-Host $_ }

---

### 3. `while` — loop while a condition is true

$count = 0
while ($count -lt 5) {
    Write-Host $count
    $count++
}


---

### 4. `do...while` / `do...until` — runs **at least once**

# do...while: runs while condition is TRUE
$count = 0
do {
    Write-Host $count
    $count++
} while ($count -lt 5)

# do...until: runs until condition is TRUE
$count = 0
do {
    Write-Host $count
    $count++
} until ($count -ge 5)


---

### Loop Control Keywords

| Keyword | Effect |
|---|---|
| `break` | Exit the loop entirely |
| `continue` | Skip to the next iteration |


for ($i = 0; $i -lt 10; $i++) {
    if ($i -eq 3) { continue }  # skip 3
    if ($i -eq 7) { break }     # stop at 7
    Write-Host $i
}
# Output: 0 1 2 4 5 6


---

### Quick Guide: Which loop to use?

- **Known count** → `for`
- **Iterating a list/array** → `foreach`
- **Condition-based, may run 0 times** → `while`
- **Must run at least once** → `do...while` / `do...until`