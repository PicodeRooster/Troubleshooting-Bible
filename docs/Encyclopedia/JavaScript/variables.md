\# Basic assignment

$name = "Alice"

$age = 30

$price = 9.99

$isActive = $true



\-----------------------------------------------------------------------------

\# Explicit typing (optional but good practice)

\[string]$name = "Alice"

\[int]$age = 30

\[double]$price = 9.99

\[bool]$isActive = $true



\# Multiple assignment

$a = $b = $c = 0



\# Swap

$a, $b = $b, $a



\-----------------------------------------------------------------------------

Key points:



\- Variables are loosely typed by default — PowerShell infers the type

\- Adding a type like `\[int]` enforces it — assigning the wrong type will throw an error

\- Variable names are case-insensitive (`$Name` and `$name` are the same)

\- `$true` and `$false` are built-in constants for booleans (not `true`/`false` like other languages)

