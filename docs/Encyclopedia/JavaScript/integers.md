\# Declaration

$count = 10

$age = 25



\# Explicit type

\[int]$x = 42          # 32-bit (-2,147,483,648 to 2,147,483,647)

\[long]$y = 10000000000  # 64-bit (much larger range)



Key points:



\- PowerShell defaults to `int` for whole numbers

\- Use `long` if your value might exceed \~2.1 billion

\- Dividing two integers can return a float: `5 / 2` gives `2.5`



\--------------------------------------------------------------



\# Arithmetic

$a = 10

$b = 3



$a + $b    # 13

$a - $b    # 7

$a \* $b    # 30

$a / $b    # 3.3333... (returns double)

$a % $b    # 1  (modulus / remainder)

\[Math]::Floor($a / $b)   # 3  (integer division)



\# Increment / Decrement

$count++       # add 1

$count--       # subtract 1

$count += 5    # add 5

$count -= 5    # subtract 5



\--------------------------------------------------------------

\# Checking type

$x = 42

$x.GetType().Name    # "Int32"



\[long]$y = 10000000000

$y.GetType().Name    # "Int64"



