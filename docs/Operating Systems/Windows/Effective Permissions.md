The process ensuring access controls are established with precision, security and policy enforcements in mind. In Windows, NFTS and Share are two main permission systems that work in unison, often overlapping, but have very specific differences. When both NTFS and Share permissions have been applied, the most restrictive of the two takes precedence. If NTFS allows full control, but Share only allows Read access, Read is all the user gets. 

**NTFS:** operate at the file system level, applied directly to files and folders stored on NTFS-formatted drives. Permissions stay with the data, even if the file is moved to a different folder on the same partition. Includes permissions like read, write, modify, execute and take full control of a file or directory. 

**Share:** Come into play when a folder is made available over a network. Less detailed - limited to Read, Change or Full-Control-and affect only users connected remotely. 

**Best practice:** Apply Full Control at the Share level for all users, the enforce restrictions through NTFS permissions. This provides clarity and centralized control. When in the doubt, use the Effective Access tab under folder properties to verify what a specific user can actually do.

*CompTIA A+*