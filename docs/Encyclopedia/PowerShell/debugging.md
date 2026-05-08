Write-Host "Checkpoint reached"         # Displays to console (not pipeline)

Write-Output $variable                  # Sends to pipeline/output stream

Write-Debug "Debug info"                # Only shows when $DebugPreference = 'Continue'

Write-Verbose "Verbose info"            # Only shows when $VerbosePreference = 'Continue'

Write-Warning "Something looks off"    # Yellow warning message

Write-Error "Something failed"         # Red error message



$DebugPreference = 'Continue'

$VerbosePreference = 'Continue'



\--------------------------------


\# Break at a specific line in a script

Set-PSBreakpoint -Script "C:\\scripts\\myscript.ps1" -Line 15



\# Break when a variable is read or written

Set-PSBreakpoint -Variable "myVar" -Mode ReadWrite



\# Break when a command is called

Set-PSBreakpoint -Command "Invoke-WebRequest"



Debugger Commands

=================



Command   Action

\-------   ------

s         Step into

v         Step over

o         Step out

c         Continue

q         Quit debugger

l         List code around current line

k         Show call stack

\---	---	---



Get-PSBreakpoint          # List all breakpoints

Remove-PSBreakpoint -Id 0 # Remove specific breakpoint



\-------------------------------------------

function Placeholder\_Function {

&#x20;   $result = Get-Process

&#x20;   Wait-Debugger        # Execution pauses here

&#x20;   return $result

}



\-------------------------------------------

\# Check the last error

$Error\[0]

$Error\[0] | Format-List \* -Force   # Full detail



\# Structured error handling

try {

&#x20;   Get-Item "C:\\nonexistent\\path" -ErrorAction Stop

}

catch \[System.IO.FileNotFoundException] {

&#x20;   Write-Host "File not found: $($\_.Exception.Message)"

}

catch {

&#x20;   Write-Host "Unexpected error: $($\_.Exception.GetType().Name)"

&#x20;   Write-Host $\_.ScriptStackTrace

}

finally {

&#x20;   Write-Host "Always runs"

}



\---------------------------------------------

\# Set strict mode

Set-StrictMode -Version Latest



\---------------------------------------------

\#Best practice for any reusable function — wire in \[CmdletBinding()] so callers can pass -Debug or -Verbose

function Get-Data {

&#x20;   \[CmdletBinding()]

&#x20;   param(\[string]$Path)



&#x20;   Write-Debug "Path received: $Path"

&#x20;   Write-Verbose "Starting data retrieval..."

&#x20;   # ...

}



\# Caller enables output on demand

Get-Data -Path "C:\\data" -Debug -Verbose

