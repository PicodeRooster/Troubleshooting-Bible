\# Declaration

$pi = 3.14

$price = 9.99



\# Explicit type

\[float]$x = 3.14

\[double]$y = 3.14159265358979   # More precision

```



Key points:



\- PowerShell defaults to `double` when you assign a decimal number

\- `float` is 32-bit (less precision), `double` is 64-bit (more precision) — use `double` unless you have a reason not to

\- Basic arithmetic works as expected (`+`, `-`, `\*`, `/`)



```powershell

\# Rounding

\[Math]::Round($pi, 2)       # 3.14

\[Math]::Floor(3.99)         # 3

\[Math]::Ceiling(3.01)       # 4



\# Formatting output

"{0:F2}" -f $pi             # "3.14"  (2 decimal places)

"{0:F4}" -f $pi             # "3.1400"



The `\[Math]` class gives you everything you'd expect — `Sqrt`, `Abs`, `Pow`, etc.

