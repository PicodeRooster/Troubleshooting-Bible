# Command-Line Interface (CLI)

A **command-line interface (CLI)** is a text-based mechanism for interacting with a computer's operating system by typing commands directly into a terminal or shell. It is one of the two primary ways users communicate with a computer — the other being a **graphical user interface (GUI)**, which relies on visual elements such as icons, windows, and menus. All major operating systems — including Windows, macOS, and Linux — provide a CLI for direct, keyboard-driven system interaction.

While a GUI is accessible and well-suited for everyday desktop tasks, it is inefficient for system administration, automation, and remote environments where no graphical display is available. The CLI addresses these limitations by allowing a user to perform complex, repeatable operations through precise text commands — often in a fraction of the time a GUI would require.

---

## Anatomy of a CLI Command

A CLI command follows a consistent structure. Each command is composed of up to four components, always arranged in the same order:

1. **Command name** — specifies the task to be performed. For example, `mkdir` creates a directory and `ls` lists the contents of one. The command name is always the first element entered.

2. **Flags** — optional modifiers that change how the command behaves. Flags are preceded by a hyphen (`-`). For example, `-h` typically displays a help reference for the command. Some flags apply universally across commands; others are specific to a single command and invalid elsewhere.

3. **Flag parameters** — values that certain flags require in order to function. For example, a `-user` flag requires a username as its parameter. Flag parameters are variables — their values change depending on the situation. When multiple values are accepted, they are separated by commas with no spaces. If a flag parameter is omitted and a default exists, the default is assumed.

4. **Command parameters** — the final component of a command, providing the core information needed to complete the task. Unlike flag parameters, command parameters are not preceded by a flag. When a command accepts multiple parameters, they are separated by spaces. Some commands assume a default value (such as `all`) when no parameter is provided.

The following example illustrates the full structure. `lsrank` is the command name; `-dev` and `-l` are flags; `IBM.2107-75FA120` is the flag parameter for `-dev`; and `R1`, `R2`, `R3` are command parameters:

```
dscli> lsrank -dev IBM.2107-75FA120 -l R1 R2 R3
```

---

## How a CLI Works

### The Shell

The component that powers a CLI is called a **shell** — a program that acts as an interpreter between the user and the operating system. Common shells include **Bash** (standard on Linux and macOS), **cmd.exe** (Windows Command Prompt), and **PowerShell** (Windows). Each shell handles command parsing, environment variable management, and process execution.

Shells also support several productivity features:

- **Command history** — previously entered commands can be recalled using arrow keys or keyboard shortcuts
- **Input and output redirection** — the source of a command's input or the destination of its output can be changed
- **Piping** — the output of one command is passed directly as the input of another
- **Aliases** — long or frequently used commands can be shortened to custom shorthand
- **Shell scripts** — sequences of commands can be saved to a file and run automatically

### How Commands Are Processed

When a command is entered, the shell processes it through the following steps:

1. The shell **parses** the command, separating the command name, flags, and parameters.
2. It **looks up** the command name in its list of known commands.
3. It searches the system's **PATH variable** — a list of directories where executable files are stored — to locate the corresponding program file.
4. The shell **calls** that file, passing along any specified flags and parameters.
5. The **operating system** performs the requested action.
6. The OS **produces output** — which may be data, a confirmation message, or an error.
7. The shell **displays** the output so the user can see the result.

This cycle repeats continuously, with the shell waiting for the next command after each operation completes.

---

## Benefits of a CLI

**Efficiency.** A single CLI command can perform actions across many files or system components simultaneously — tasks that would require navigating multiple menus in a GUI. Commands can also be chained together or saved as scripts to automate repetitive or monotonous work.

**Remote access.** CLI applications consume significantly fewer network resources than graphical ones. This makes the CLI the preferred method for managing remote servers and cloud instances, particularly over low-bandwidth connections or in headless environments where no display is attached. Secure Shell (SSH) allows administrators to submit commands to a remote machine as if they were sitting in front of it.

**Troubleshooting and reproducibility.** The CLI encourages a deeper understanding of tools and system utilities. Because commands are text-based, they can be logged, shared, and reproduced exactly — making it easier to document a problem, collaborate on a fix, and verify that the same steps produce the same result every time.

---

## Common Use Cases

**System administration.** Administrators use CLIs to check and modify OS configurations, apply updates, manage users, and control systems at scale — including on remote machines they may never physically access.

**Software development.** Developers use CLI tools to manage dependencies, run build systems, interact with version control (such as Git), and access third-party libraries. A task that would require searching through a GUI can instead be executed with a single command.

**Cloud computing.** In cloud environments, CLIs are essential for managing virtual machines, containers, and services. Developers and administrators use them to interact with cloud provider APIs, automate resource provisioning, and deploy applications.

**Network management.** Network administrators use CLIs to configure routers, switches, and firewalls, monitor traffic, troubleshoot connectivity issues, and implement security policies. Penetration testers also rely on CLI tools for vulnerability scanning and network reconnaissance.

---

## Accessing the CLI

Each major operating system provides its own way of opening a command-line interface.

**Windows:** Press the Windows key and `S` to open search, type `cmd`, then right-click **Command Prompt** and select **Run as Administrator**.

**macOS:** Open Finder, navigate to **Applications > Utilities**, and select **Terminal**.

**Linux:** Press `Ctrl+Alt+T` to open a terminal directly. Alternatively, press `Alt+F2` and enter `gnome-terminal`.

---

## Common CLI Commands

CLI command syntax varies between operating systems. The tables below show equivalent commands for Windows and Linux across three common categories.

### File System Commands

| Action | Windows | Linux |
|---|---|---|
| Change directory | `cd` | `cd` |
| List files | `dir` | `ls` |
| Create directory | `mkdir` | `mkdir` |
| Remove directory | `rmdir` | `rmdir` |
| Copy files | `copy` | `cp` |
| Move files | `move` | `mv` |
| Rename files | `ren` | `mv` |
| Display file contents | `type` | `cat` |
| Delete files | `del` | `rm` |
| Change permissions | — | `chmod` |

### Network Commands

| Action | Windows | Linux |
|---|---|---|
| Ping | `ping` | `ping` |
| Traceroute | `tracert` | `traceroute` |
| Network configuration | `ipconfig` | `ifconfig` |
| Route table | `route` | `route` |
| DNS lookup | `nslookup` | `nslookup` |
| Network diagnostics | `netsh` | `netstat` |

### System Information Commands

| Action | Windows | Linux |
|---|---|---|
| List processes | `tasklist` | `ps` |
| End process | `taskkill` | `kill` |
| System info | `systeminfo` | `uname -a` |
| Disk usage | `wmic` / `fsutil` | `df` |
| System monitoring | `perfmon` | `top` / `htop` |

---

## Best Practices

**Know a command before running it.** The CLI executes instructions exactly as entered — a mistyped or misunderstood command can produce unintended results. Research unfamiliar commands before use, and ensure syntax is correct.

**Restrict access for non-privileged users.** Administrator-level CLI access carries significant power. Granting it only to trusted users limits the risk of accidental or unauthorized changes to critical system resources.

**Keep the system updated.** CLI tools and the underlying OS receive regular updates that include bug fixes, performance improvements, and security patches. Running outdated software increases exposure to known vulnerabilities.

**Log CLI activity.** Recording CLI sessions creates an audit trail that helps detect unauthorized changes, identify suspicious behavior, and reconstruct the sequence of actions when troubleshooting.

---

### Sources

Amazon Web Services. "What Is a CLI (Command Line Interface)?" *AWS*, aws.amazon.com/what-is/cli/.

IBM. "About CLI Commands." *IBM Documentation*, 1 Aug. 2023, www.ibm.com/docs/en/ds8900/9.3.2?topic=command-about-cli-commands.
