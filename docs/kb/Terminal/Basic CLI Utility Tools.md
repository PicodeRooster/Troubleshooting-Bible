`dir`
`copy`
`xcopy`
`robocopy`
`ls`
	`-a`
	`-l`
`pwd`
`sudo`
`chmod`
	`+x`
`cd`
`cd..`

`ipconfig`
	`-a`
	`-all`
	
`ping`
`netstat`
`nslookup`
`chkdsk` - Checks file system and physical drive integrity. Useful for slow drive, apps crash or suspected disk corruption.
	`/f` - fixes file system errors
	`/r` - attempts the recovery of bad sectors
`sfc` - Scans for and repairs corrupted or missing system files using cached copies. Run from elevated Command Prompt as the first step when Windows behaves erratically or built-in apps stop working.
	`/scannow`
`DISM` - Targets deeper corruption that SFC can't fix by checking the integrity of the Windows image. Pulls clean files from Windows Update or a mounted ISO image. Esp. valuable when SFC repeatedly fails.
	`/Online /Cleanup-Image /RestoreHealth`
`bootrec` - Accessed from Windows Recovery Environment, can rebuild BCD (Boot Configuration Data), repair the Master Boot Record and fix boot sectors. Critical for resolving boot loops, "Missing OS" errors or start up failures after disk migrations.
	`/fixmbr`
	`/rebuildbcd`
	
`diskpart`
`format`


*CompTIA A+*