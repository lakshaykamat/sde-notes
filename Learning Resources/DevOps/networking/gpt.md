# Networking Fundamentals

## Basics of Networking

### What is Networking?

Networking involves the interconnection of computers and other devices to share resources, communicate, and access information. It forms the basis of our connected digital world.

### Types of Networks

- **Local Area Network (LAN):** A network that spans a small geographic area, such as a home, office, or campus.
- **Wide Area Network (WAN):** A network that covers a broader geographical area, often connecting multiple LANs.

### Network Topologies

- **Star Topology:** Devices are connected to a central hub or switch.
- **Bus Topology:** Devices are connected in a linear fashion on a single cable.
- **Ring Topology:** Devices are connected in a circular formation.

### Network Devices

- **Router:** Connects different networks, directing data between them.
- **Switch:** Connects devices within a network, facilitating communication.
- **Hub:** Basic networking device for connecting multiple devices in a LAN.

## Protocols

Protocols are sets of rules governing communication between devices or applications in computing. Examples include HTTP for web browsing and TCP/IP for network communication. They ensure standardized data exchange, facilitating interoperability and secure interactions in various domains such as networking, security, and file transfer.

### TCP (Transmission Control Protocol)

TCP is a foundational communication protocol in computer networks, ensuring reliable and ordered data delivery. It breaks information into packets, establishes connections, and confirms successful receipt. Widely used for internet communication, TCP enables error-free and ordered data transmission between devices.

![TCP Image](https://images.spiceworks.com/wp-content/uploads/2022/04/05123619/10-2.png)

### UDP (User Datagram Protocol)

UDP is a lightweight communication protocol in computer networks. Unlike TCP, UDP doesn't guarantee reliable or ordered data delivery but offers faster, connectionless transmission. Often used for real-time applications like video streaming and online gaming, UDP excels in scenarios prioritizing speed over absolute data integrity.

![UDP Image](https://www.datocms-assets.com/41207/1627941441-header.jpg)

### HTTP (Hypertext Transfer Protocol)

HTTP is the foundation of data communication on the World Wide Web. It defines how messages are formatted and transmitted, allowing browsers to request and display web pages. HTTP operates as a stateless protocol, enabling the transfer of text, images, files, and other content between servers and clients.

## IP (Internet Protocol)

- Every system has a unique address.
- IP addresses are written as X.X.X.X, where each X can have a value between 0-255.

## ISP (Internet Service Provider)

ISP stands for Internet Service Provider. An ISP provides users with access to the internet, offering various types of connections like broadband or dial-up. ISPs play a crucial role in facilitating connectivity between end-users and the broader internet infrastructure.

## DHCP (Dynamic Host Configuration Protocol)

DHCP automates the assignment of IP addresses and configuration information to devices on a network. It allows computers and devices to obtain network settings dynamically, eliminating the need for manual configuration.

### NAT (Network Address Translation)

NAT is a method used in computer networking to map private IP addresses within a local network to a single public IP address. It enhances security and conserves public IP addresses, enabling communication between devices in a private network and the broader internet.

### PORTS

- **Port Definition:** A communication endpoint on a device in a network, identified by a port number.
    
- **Port Number Range:** 16-bit unsigned integers, ranging from 0 to 65,535 (2^16).
    
- That means you have 16 cells, and you have 2^16 ports available
    
- **Types of Ports:**
    
    1. **Well-Known Ports (0-1023):** Reserved for widely used services (e.g., HTTP on port 80, HTTPS on port 443).
        
    2. **Registered Ports (1024-49151):** Assigned by the Internet Assigned Numbers Authority (IANA) for specific applications.
        
    3. **Dynamic or Private Ports (49152-65535):** Available for private use and dynamic assignment by applications.
        
- **Port Functionality:** Enables multiple applications or services to run on a single device and communicate with the network.
    
- **Role in Networking:** Ports, in conjunction with IP addresses, facilitate data flow between devices. For example, accessing a website involves communication between a computer and a server on a specific port, like port 80 for HTTP.
    

Understanding port numbers is essential for devices to identify and route data to the appropriate services on a network.

### Internet Speed

- 1 Mb/s means 1,000,000 bits/s.
- 1 Gb/s means 1,000,000,000 bits/s.
- 1 Kb/s means 1,000 bits/s.

### Internet Cables

Internet cables, including Ethernet, Fiber-Optic, Coaxial, USB, Patch, Cross-Over, and Submarine cables, transmit data between devices and networks. Each type serves specific purposes, contributing to the robustness and efficiency of the internet.

### Wireless Internet

Wireless internet, or Wi-Fi, enables devices to connect without physical cables. Standards like Wi-Fi 6, Wi-Fi 5, and others define wireless communication specifications. Security measures like WPA and WPA2/WPA3 protect wireless networks. Wi-Fi operates in 2.4 GHz and 5 GHz frequency bands, supporting devices such as laptops, smartphones, and IoT devices.

# Additional Concepts

## Data Transmission

Data comes in packets, which are units of data transmitted over a network.

## Guided and Unguided Communication

- Guided way involves wired connections.
- Unguided way involves wireless connections like Wi-Fi and Bluetooth.

# Conclusion

Understanding these networking fundamentals is crucial for effective communication and data exchange in the digital world. Whether through wired connections, wireless technologies, or internet protocols, these elements collectively shape the infrastructure that powers our interconnected world.