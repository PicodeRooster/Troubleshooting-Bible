The Encryption File System (EFS) provides an additional level of security for files and directories. It provides cryptographic protection of individual files on NTFS file system volumes using a public-key system. Designed with low portability, tied to NTFS and the user, it is ideal for local security and protecting confidentiality.

- Native to NTFS volumes, EFS encrypts files using keys tied to user’s Windows account.
- Seamless for the owner- once logged in, encryption is decoded on files
- Unreadable if copied to another system or user account w/o encryption certificate.
- Enable: Right-click file > Properties > Advanced > Check “Encrypt contents to secure data”

*CompTIA A+*, *Microsoft*