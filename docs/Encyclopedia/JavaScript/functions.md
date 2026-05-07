\# With parameters

function Get-Sum {

&#x20;   param($a, $b)

&#x20;   return $a + $b

}



\# With typed parameters and defaults

function Get-Greeting {

&#x20;   param(

&#x20;       \[string]$Name = "World"

&#x20;   )

&#x20;   return "Hello, $Name"

}



\# Inline parameters (shorthand)

function Get-Sum($a, $b) {

&#x20;   return $a + $b

}

