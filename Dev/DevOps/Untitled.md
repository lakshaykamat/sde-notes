- Data comes in packets

### IP
- Every system has a unique address
- Ip address X.X.X.X every x can have value between 0-255

## ISP
ISP stands for Internet Service Provider. An ISP is a company or organization that provides users with access to the internet. They offer various types of internet connections, such as broadband or dial-up, and play a crucial role in facilitating connectivity between end-users and the broader internet infrastructure. ISPs enable individuals and businesses to access online services, websites, and other internet resources.

## DHCP
DHCP stands for Dynamic Host Configuration Protocol. It is a network management protocol used to automate the assignment of IP addresses and other configuration information to devices on a network. DHCP allows computers and other devices to obtain network settings dynamically, eliminating the need for manual configuration. This makes it easier to manage and scale network environments.

- When you make a request to the internet, like accessing Google, the service will detect the global IP address assigned to your modem. This unique address identifies your network, enabling servers to send data back to your device. Additionally, each device within your network has its own unique local IP address, facilitating communication and data exchange within the internal network.

### NAT
Network Address Translation (NAT) is a method used in computer networking to manage the mapping of private IP addresses within a local network to a single public IP address. It allows multiple devices in a local network to share the same public IP address when accessing resources on the internet. NAT enhances security and conserves public IP addresses, facilitating communication between devices in a private network and the broader internet.

### PORTS
- **Port Definition:** A communication endpoint on a device in a network, identified by a port number.
  
- **Port Number Range:** 16-bit unsigned integers, ranging from 0 to 65,535 (2^16).
- That means you have 16 cells and you have 2^16 ports available

- **Types of Ports:**
  1. **Well-Known Ports (0-1023):** Reserved for widely used services (e.g., HTTP on port 80, HTTPS on port 443).
  
  2. **Registered Ports (1024-49151):** Assigned by the Internet Assigned Numbers Authority (IANA) for specific applications.
  
  3. **Dynamic or Private Ports (49152-65535):** Available for private use and dynamic assignment by applications.

- **Port Functionality:** Enables multiple applications or services to run on a single device and communicate with the network.

- **Role in Networking:** Ports, in conjunction with IP addresses, facilitate data flow between devices. For example, accessing a website involves communication between a computer and a server on a specific port, like port 80 for HTTP.

Understanding port numbers is essential for devices to identify and route data to the appropriate services on a network.


### Internet speed
- 1 mb/s means 1000000 bit/s
- 1 gb/s means 10^9 bit/s
- 1 kb/s means 1000 bit/s
 
 
Two ways to communicating computers guided and unguided way
- **Guided way:** two computers connected with wires
- **Unguided way:** Two computers are connected but no single path example wifi, bluetooth


### Internet cables
Internet cables, often referred to as network cables or data cables, are physical cables used to transmit data between devices and networks, facilitating internet connectivity. These cables come in various types, each serving specific purposes in networking. Here are key aspects related to internet cables:

1. **Ethernet Cables:** Commonly used for wired internet connections, Ethernet cables (e.g., Cat 5 e, Cat 6, Cat 6 a) connect devices like computers, routers, and modems to form local area networks (LANs) within homes or offices.

2. **Fiber-Optic Cables:** Employing optical fibers made of glass or plastic, fiber-optic cables transmit data using light signals. They offer high bandwidth, faster data transfer rates, and are crucial for long-distance internet connections and backbones of the internet infrastructure.

3. **Coaxial Cables:** Traditionally used for cable television, coaxial cables are also utilized for broadband internet connections. They have a copper core and are capable of transmitting both data and television signals.

4. **USB Cables:** Universal Serial Bus (USB) cables are commonly used for connecting devices like computers, printers, and modems. While not dedicated to internet connectivity, they play a role in connecting peripherals that might contribute to internet usage.

5. **Patch Cables:** These short-length cables are often used to connect devices within the same rack or immediate proximity, commonly in data centers or home networks.

6. **Cross-Over Cables:** Similar to patch cables, cross-over cables allow direct communication between two devices, such as connecting two computers without a router.

7. **Twisted Pair Cables:** Commonly used in Ethernet cables, twisted pair cables consist of pairs of insulated copper wires twisted together. The twisting helps reduce electromagnetic interference and crosstalk.

8. **Internet Backbone Cables:** Large-scale fiber-optic cables form the backbone of the internet infrastructure, connecting continents and facilitating global data transfer.

9. **Submarine Cables:** As mentioned earlier, submarine cables laid on the ocean floor are a specific type of internet cable that connects countries and continents, enabling global internet connectivity.

The choice of internet cables depends on factors like the type of connection, distance, required bandwidth, and the specific networking equipment involved. Different cables contribute to the overall robustness and efficiency of the internet, supporting the diverse needs of users and organizations worldwide.


### Wireless internet
Wireless internet, often referred to as Wi-Fi (Wireless Fidelity), is a technology that enables devices to connect to the internet without the need for physical cables. It relies on wireless communication protocols to transmit data between devices and wireless access points. Here are key points about wireless internet:

1. **Wireless Standards:** Various wireless standards, such as Wi-Fi 6 (802.11 ax), Wi-Fi 5 (802.11 ac), Wi-Fi 4 (802.11 n), and earlier standards, define the specifications for wireless communication.

2. **Wireless Routers:** Wireless routers are devices that provide a central point for devices to connect wirelessly to the internet. They often include a built-in modem for broadband internet access.

3. **Wi-Fi Hotspots:** Public places like cafes, airports, and libraries often offer Wi-Fi hotspots, allowing users to connect their devices to the internet without using cellular data.

4. **Wireless Network Adapters:** Devices such as laptops, smartphones, tablets, and smart TVs are equipped with built-in or external wireless network adapters, enabling them to connect to Wi-Fi networks.

5. **SSID (Service Set Identifier):** Wireless networks are identified by their SSID, a unique name that users select or that is preconfigured by the network administrator.

6. **Security Measures:** To protect wireless networks, security measures like WPA (Wi-Fi Protected Access) and WPA 2/WPA 3 encryption are employed, requiring users to enter a password to access the network.

7. **Frequency Bands:** Wi-Fi operates in 2.4 GHz and 5 GHz frequency bands. The 5 GHz band typically offers higher data transfer rates but may have a shorter range compared to the 2.4 GHz band.

8. **Mesh Networks:** In larger spaces or areas with poor Wi-Fi coverage, mesh networks use multiple interconnected routers to provide seamless and extended wireless coverage.

9. **Internet of Things (IoT):** Wireless internet is fundamental for connecting various IoT devices, enabling smart homes, smart appliances, and other connected devices to communicate and function.

10. **Mobile Data Offloading:** Wireless internet is commonly used for offloading mobile data traffic by connecting devices to Wi-Fi networks, reducing the load on cellular networks.

While wireless internet provides convenience and flexibility, factors like signal strength, interference, and security should be considered for optimal performance and protection of data during wireless communication.


## Types of Network
### LAN
LAN stands for Local Area Network. It is a network of interconnected computers, devices, and resources within a limited geographic area, such as a home, office, or campus. LANs are commonly used to facilitate communication and resource sharing among connected devices.

Key characteristics of LANs include:

1. **Limited Geographic Area:** LANs typically cover a small, well-defined geographic area, such as a single building or a group of nearby buildings.

2. **High Data Transfer Rates:** LANs often provide high data transfer rates compared to wide area networks (WANs) or the internet. This high-speed communication allows for efficient sharing of resources and quick data exchange among connected devices.

3. **Private Ownership:** LANs are often owned, set up, and maintained by a single organization, such as a business or educational institution. This allows the owner to have control over the network and its resources.

4. **Components:** LANs consist of various components, including computers, servers, routers, switches, hubs, and other networking devices. These components work together to enable communication and resource sharing.

5. **Topology:** LANs can have different topologies, such as star, bus, ring, or a combination of these. The topology defines how devices are connected within the network.

6. **Protocols:** LANs use specific communication protocols to ensure that devices can understand and exchange information. Common LAN protocols include Ethernet and Wi-Fi for wireless LANs.

7. **High Reliability:** LANs are designed to be highly reliable, with redundant components and failover mechanisms to minimize downtime.

8. **Scalability:** LANs can be easily scaled by adding more devices or expanding the network infrastructure to accommodate growing needs.

Examples of LAN applications include file sharing, printer sharing, collaborative work, and local internet access. LANs are an essential part of modern computing, providing the foundation for connectivity within organizations and homes.

### MAN
MAN stands for Metropolitan Area Network. It is a type of network that covers a larger geographic area than a Local Area Network (LAN) but is smaller than a Wide Area Network (WAN). A MAN typically spans a city or a large campus and is designed to provide high-speed connectivity for businesses, educational institutions, and government entities within that metropolitan area.

Key characteristics of Metropolitan Area Networks (MANs) include:

1. **Geographic Coverage:** MANs cover a larger geographical area than LANs but are typically confined to a single metropolitan area or city. They may also connect multiple LANs within that geographic region.

2. **High Data Transfer Rates:** MANs provide high-speed data transfer rates, allowing for efficient communication and data exchange between different locations within the metropolitan area.

3. **Interconnection of LANs:** MANs often interconnect multiple LANs, enabling seamless communication and resource sharing between various local networks.

4. **Ownership:** MANs can be owned and operated by a single organization, multiple collaborating organizations, or a service provider. The ownership structure can vary based on the specific requirements and arrangements in place.

5. **Fiber Optic Infrastructure:** MANs often use fiber optic cables as the primary transmission medium due to their ability to transmit data at high speeds over longer distances.

6. **Scalability:** MANs are designed to be scalable to accommodate the growing needs of the connected organizations and users within the metropolitan area.

7. **Applications:** MANs support a variety of applications, including data sharing, video conferencing, voice communication, and other networking services.

8. **Reliability:** Like LANs, MANs are designed to be reliable, with redundant components and backup systems to ensure minimal downtime.

Metropolitan Area Networks play a crucial role in connecting various entities within a city or metropolitan area, facilitating efficient communication and collaboration. They serve as a middle ground between the limited coverage of LANs and the extensive coverage of WANs, providing a balance of speed and coverage suitable for regional connectivity.

### WAN
WAN stands for Wide Area Network. It is a type of computer network that spans a large geographic area, often a country, continent, or even globally. WANs connect multiple local area networks (LANs) and metropolitan area networks (MANs) to enable communication and resource sharing over long distances.

Key characteristics of Wide Area Networks (WANs) include:

1. **Geographic Scope:** WANs cover a wide geographic area, allowing organizations to connect their remote offices, branches, or facilities over long distances. This can include connections between cities, countries, or even continents.

2. **Public and Private Networks:** WANs can be built using both public and private network infrastructures. Public networks, such as the internet, are commonly used to connect geographically dispersed locations. Private networks, such as leased lines or dedicated connections, provide secure and controlled communication between sites.

3. **High Data Transfer Rates:** While WANs may not offer the same high data transfer rates as local networks, they provide sufficient bandwidth for the transmission of data, voice, and video over long distances.

4. **Reliability:** WANs are designed for reliability and often incorporate redundant paths and failover mechanisms to ensure continuous connectivity, especially over vast distances where the likelihood of network disruptions may be higher.

5. **Wide Variety of Technologies:** WANs use a variety of technologies for connectivity, including leased lines, frame relay, MPLS (Multiprotocol Label Switching), ATM (Asynchronous Transfer Mode), and VPNs (Virtual Private Networks). The choice of technology depends on factors such as data requirements, security, and cost considerations.

6. **Global Connectivity:** WANs enable global connectivity, allowing organizations to connect their offices, data centers, and resources worldwide. This is essential for multinational corporations and businesses with a global presence.

7. **Data Encryption and Security:** Due to the longer transmission distances and the use of public networks, WANs often employ encryption and security measures to protect data during transit.

8. **Centralized Management:** WANs allow for centralized management of resources, applications, and data, which is particularly important for organizations with distributed offices.

WANs play a crucial role in connecting geographically dispersed locations, allowing for efficient communication, data sharing, and collaboration on a global scale. They are vital for businesses and organizations that operate in multiple locations and need seamless connectivity to support their operations.

## MODEM
A modem, short for Modulator-Demodulator, is a device that facilitates the transmission of digital data over analog communication channels. The primary purpose of a modem is to modulate and demodulate signals, converting digital information from a computer or other digital device into a format suitable for transmission over analog communication mediums and vice versa.

Here are the key functions and aspects of modems:

1. **Modulation (MOD):** The modem modulates digital data into analog signals for transmission over analog communication channels such as telephone lines or cable systems. Modulation involves varying the characteristics of a carrier wave to represent digital information.

2. **Demodulation (DEM):** On the receiving end, the modem demodulates the incoming analog signals back into digital data that can be understood by a computer or other digital device. Demodulation is the process of extracting the original digital information from the modulated carrier wave.

3. **Data Transmission:** Modems are commonly used for transmitting data over various communication mediums, including telephone lines (DSL modems), cable systems (cable modems), and radio frequency channels (wireless modems).

4. **Types of Modems:**
   - **DSL Modems:** Used for Digital Subscriber Line (DSL) broadband internet connections over telephone lines.
   - **Cable Modems:** Used for broadband internet connections over cable television lines.
   - **Dial-up Modems:** An older technology that uses standard telephone lines for internet connectivity.
   - **Wireless Modems:** Used for connecting to wireless networks, such as 3 G, 4 G, or 5 G networks.

5. **Speeds and Standards:** Modems come in various speeds and standards, indicating their data transmission capabilities. For example, a modem might support a specific data transfer rate, measured in bits per second (bps) or kilobits per second (Kbps).

6. **Built-in Modems:** Some devices, such as routers, may have built-in modems. For example, a combination of a router and a DSL modem in a single device is often referred to as a DSL modem router.

7. **Digital Communication:** While modems are traditionally associated with converting digital signals to analog for transmission over analog mediums, advancements in technology have led to the widespread use of digital communication channels. In these cases, the term "modem" is still used, but the modulation and demodulation processes may involve other methods, such as phase-shift keying or quadrature amplitude modulation.

Modems have been crucial in the history of telecommunications, enabling the widespread adoption of the internet and other digital communication technologies. While newer technologies have largely replaced traditional dial-up modems, various types of modems continue to play a key role in providing connectivity in different contexts.

## ROUTER
A router is a networking device that forwards data packets between computer networks. It operates at the OSI (Open Systems Interconnection) model's network layer (Layer 3) and is a crucial component in modern computer networks, including home networks and the broader internet. Routers connect different networks and facilitate the exchange of data between them.

Here are the key functions and features of routers:

1. **Packet Forwarding:** Routers are responsible for examining the destination address of data packets and deciding the most efficient path for forwarding them to their destination. This process is known as packet forwarding.

2. **Network Address Translation (NAT):** Routers often perform NAT, which allows multiple devices in a local network to share a single public IP address. NAT helps conserve the limited pool of public IP addresses.

3. **Routing Table:** Routers maintain a routing table that contains information about the available paths to different networks. This table is used to make decisions about where to forward packets based on their destination addresses.

4. **Interconnecting Networks:** Routers play a crucial role in connecting different networks. For example, a home router connects the local network to the internet, while core routers in the internet backbone connect various networks globally.

5. **Firewall Functionality:** Many routers include basic firewall capabilities to help protect the local network from unauthorized access. They can filter incoming and outgoing traffic based on predefined rules.

6. **Wireless Connectivity:** Wireless routers, a common type of home router, include built-in wireless access points to enable Wi-Fi connectivity. This allows wireless devices like laptops, smartphones, and tablets to connect to the local network.

7. **Quality of Service (QoS):** Routers may support QoS features, allowing them to prioritize certain types of traffic to ensure a better user experience for applications like voice or video calls.

8. **Security Features:** Routers often include security features such as VPN (Virtual Private Network) support, access controls, and the ability to update firmware for protection against known vulnerabilities.

9. **DHCP (Dynamic Host Configuration Protocol):** Routers can act as DHCP servers, dynamically assigning IP addresses to devices on the local network. This simplifies the process of configuring devices for network connectivity.

10. **Logging and Monitoring:** Routers may log network activity and provide monitoring tools to help network administrators track performance, troubleshoot issues, and analyze traffic patterns.

11. **Gateway Function:** Routers serve as gateways between different networks, directing traffic between the local network and external networks like the internet.

In home networks, a router is often the central device that connects various devices within the household to the internet. It plays a pivotal role in managing and directing data traffic, ensuring efficient communication between devices and networks. In more extensive networks, routers form the backbone infrastructure, connecting various segments of the internet and facilitating global communication.