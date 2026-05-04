Windows is informing the user that something has gone catastrophically wrong at the system level! Halts the entire OS to prevent further system damage and provides a STOP code with a specific error code number and a descriptive name. It is best practice to always record this code to diagnose the problem.

Common causes include:

- Faulty or outdated drivers
- Failing hardware
- Corrupted system files
- Overheating, unstable clocks or voltage regularities
- Software conflicts


For deeper diagnosis:

- **Event Viewer:** Windows Logs > System - review crash details, driver failures and disk errors
- **Minidump files:** (C:\Windows\Minidump) - small memory dumps created at the time of crash. Use third-party tools to analyze.
- **Windows Reliability Monitor:** Provides history of system stability and failures.
  
Pro Tip: If BSOD is random and error codes vary, suspect failing PSU or RAM.

*CompTIA A+*