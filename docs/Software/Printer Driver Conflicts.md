Symptoms:

- Inconsistent printing across different user profiles
- Jobs stuck in the queue or spooler crashes
- Duplicate printer entries in Device and Printers
- "Driver unavailable" messages

Common causes:

- Mixing different printer types (e.g. PCL vs. PostScript)
- Installing 32-bit driver on 64-bit system OS or vice versa
- Incomplete removal of previous printer or driver

Troubleshooting steps:

- Restart the Print Spooler: services.msc or net stop spooler / net start spooler
- Delete driver packages: Print Management console or C:\Windows\System32\spool\drivers
- Use Printer troubleshooter in Windows Settings
- Reinstall using Universal Print Drivers when compatibility is an issue

Pro Tip: In network environments, always test driver behaviour under limited user permissions. Some drivers install services or require admin-level access for proper function.

*CompTIA A+*
