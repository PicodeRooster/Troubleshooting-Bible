Every open port is a potential invitation, and every active service a potential vulnerability. Reducing the attack surface begins with eliminating what is unnecessary. 

Legacy services such as Telnet, FTP or SMBv1 are often enabled by default or left behind after software is removed. These should be identified and disabled unless explicitly needed - and even then, used only within tightly controlled environments. 

Disabling Unused Ports: Prevents external probes from detecting services that could be exploited. For example, blocking inbound port 3389 (RDP) from the internet significantly reduces the risk of brute-force attacks. Port and service scans using tools like Nmap or Advanced IP Scanner help admins map exposure and verify that only essential services remain accessible. 

This principle applies not only to servers and desktops, but also to embedded systems such as printers, cameras and IoT devices. Many of these ship with insecure web interfaces or default credentials and open ports. 

*When in doubt, turn it off. If a service isn’t essential to business operations, it shouldn’t be running. Security isn’t just about adding controls - it’s also about smart subtraction. 

*CompTIA A+*
