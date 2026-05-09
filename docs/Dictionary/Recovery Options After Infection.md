Malware removal does not immediately return the system to full stability. A strong post-infection recovery plan includes:

- System restore: when available, roll back to point before infection. Reverts system files and settings without affecting user data.
- SFC and DISM scans: run these commands to repair intact
  - sfc /scannow
  - DISM /Online /Cleanup-Image /RestoreHealth
- Windows Reset or Refresh: Modern vs. of Windows allow you to reinstall OS while keeping user data intact.
- Review scheduled tasks, startup entries and services: Ensure no malware components were left behind to trigger infections.
- Check hosts file and DNS settings: Often altered by malware to redirect traffic.
- Update and patch: After cleanup, immediately update Windows and all security software to prevent re-exploitation.

If full trust can't be recovered, consider clean reimage using a known good baseline - may be faster and safer than trying to fix every subsystem manually.

*CompTIA A+*
