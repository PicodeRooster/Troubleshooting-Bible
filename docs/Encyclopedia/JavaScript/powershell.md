**PowerShell** is a Microsoft proprietary cross-platform command-line shell and scripting language that's built for task automation and configuration management. It was designed as a task engine that uses cmdlets to wrap tasks that people need to do. In PowerShell, you can run commands on local or remote machines. You can do tasks like managing users and automating workflows. PowerShell offers many helpful commands, but you can expand its capabilities at any time by installing modules.

 Unless you're signing your scripts, I recommend using the RemoteSigned execution policy. RemoteSigned prevents you from running downloaded scripts that aren't signed by a trusted publisher.
[about_Execution_Policies](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.5)

Compiled commands in PowerShell are known as cmdlets, pronounced as "command-let", not "CMD-let". The naming convention for cmdlets follows a singular Verb-Noun format to make them easily discoverable. For instance, Get-Process is the cmdlet to determine what processes are running, and Get-Service is the cmdlet to retrieve a list of services. Functions, also known as script cmdlets, and aliases are other types of PowerShell commands that are discussed later in this book. The term "PowerShell command" describes any command in PowerShell, regardless of whether it's a cmdlet, function, or alias.

A parameter that doesn't require a value is called a switch parameter. You can easily identify switch parameters because there's no datatype following the parameter name. When you specify a switch parameter, its value is true. When you don't specify a switch parameter, its value is false.

The second parameter set includes a List parameter, which is a switch parameter. When you specify the List parameter, it returns a list of event logs on the local computer.

`[-List]`

PowerShell is an object-oriented scripting language. It represents data and system states using structured objects derived from .NET classes defined in the .NET Framework. By leveraging the .NET Framework, PowerShell offers access to various system capabilities, including file system, registry, and Windows Management Instrumentation (WMI) classes. PowerShell also has access to the .NET Framework class library, which contains a vast collection of classes that you can use to develop robust PowerShell scripts.

`Get-Member`
In PowerShell, each item or state is an instance of an object that can be explored and manipulated. The `Get-Member` cmdlet is one of the primary tools provided by PowerShell for object discovery, which reveals an object's characteristics. This chapter explores how PowerShell leverages objects and how you can discover and manipulate these objects to streamline your scripts and manage your systems more efficiently.

Provides insight into the objects, properties, and methods associated with PowerShell commands. You can pipe any PowerShell command that produces object-based output to Get-Member. When you pipe the output of a command to Get-Member, it reveals the structure of the object returned by the command, detailing its properties and methods.

Properties: The attributes of an object.
Methods: The actions you can perform on an object.
To illustrate this concept, consider a driver's license as an analogy. Like any object, a driver's license has properties, such as eye color, which typically includes blue and brown values. In contrast, methods represent actions you can perform on the object. For instance, Revoke is a method that the Department of Motor Vehicles can perform on a driver's license.

**Get-Help**
The `Get-Help` cmdlet displays help at the command line from content in help files on your computer. Without help files, `Get-Help` displays basic help about cmdlets and functions. You can also use `Get-Help` to display online help for cmdlets and functions.

[Chapter 2 - The Help system](https://learn.microsoft.com/en-us/powershell/scripting/learn/ps101/02-help-system?view=powershell-7.5)

**Aliases**
Alternate names that can be used to run commands. PowerShell supports the use of common aliases such as cls (clear the screen) and ls (list the files)Therefore, new users can use their knowledge of other frameworks and don't necessarily have to remember the PowerShell name for familiar commands.

To see a list of available commands with aliases, use:
`Get-Command -Noun Alias`

To create an alias, use the `Set-Alias` command. You can create aliases for cmdlets, functions, scripts, and native executables files. For example:

`Set-Alias -Name np -Value Notepad.exe`

PowerShell

[Alias_Table](https://learn.microsoft.com/en-us/powershell/scripting/learn/shell/using-aliases?view=powershell-7.5)


**Useful Commandlets and Frequently Used Commands**

`^C` (Ctrl + C)                 Cancels a running script or command and starts a new line. 

`Get-Help -Name Get-Help -Full` PowerShell returns the complete help article when using Get-Help with the Full parameter, making it easier to understand a command's usage.

`New-Item "hello.txt" -ItemType File` Creates a file in the current folder. Takes in the `-Path` parameter to specify the desired path. For example: `New-Item -Path "C:\Users\cmoreau\scripts\hello.txt" -ItemType File` creates the file `hello.txt` inside C:\Users\cmoreau\scripts.

`Remove-Item`                   Deletes the desired object in a specified directory. For example, `Remove-Item -Path "C:\Users\cmoreau\scripts\hello.txt"`. You can use it with `-Path` to delete an empty folder. Use `Recurse` parameter for folders with content. Additionally, you can add the `-Force` parameter to bypass the confirmation prompt. For example, `Remove-Item "BoraBora" -Force -Recurse` deletes the BoraBora folder without question. :warning: Use with caution and only use the `-Recurse` parameter when absolutely certain of the item you wish to delete.

`Get-Location`                  Gets the current directory. Same as alias `pwd`.

`Set-Location`                  Change the current directory. For Example: `Set-Location -Path C:\Temp` or `Set-Location -Path "C:\My Test Folder"`. Same as alias `cd`, `gci` or `dir`.

`Get-Item`                     Gets the item at the specified location. For example,  `Get-Item .` gets the current directory, while `Get-Item *` gets all the items in the listed directory. Commonly used to get the attributes of a desited object. 

`Get-ChildItem`                 Gets the items in one or more specified locations. Same as alias `ls`.

`Add-Content`                   Adds content to the specified items, such as adding words to a file. Ex: `Add-Content -Path "C:\Users\cmoreau\scripts\hello.txt" -Value "Hello World"`. If no file with the specified name exist, it will create it automatically with the assigned content for the `-Value` parameter. 

`Get-Content`                   Displays content of the item at the specified location. Ex: `Get-Content -Path C:\Users\cmoreau\scripts\hello.txt` (Outputs: Hello World)

`Set-TimeZone`                  Sets the system time zone to a specified time zone. Ex: `Set-TimeZone -Name "Central Standard Time"` or `Set-TimeZone -Id "UTC"` 

`code`                          Launches VS code in restricted mode

`code .`                        Launches VS code in a trusted window

`Notepad`                       Launches Notepad. You can specify a file name as a parameter, as well.

`Get-ExecutionPolicy`           Check the execution policy setting on your computer.

`Get-ExecutionPolicy -List`     List the execution policy settings for all scopes.

`Invoke-Item`                   Gets an item.

`Start-Process`                 Begins running the specified process