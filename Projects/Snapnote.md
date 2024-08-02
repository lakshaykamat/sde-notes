---
tags:
  - "#dev"
---

# Snap Note (share store and organise)
## Screenshots
![image](https://gist.github.com/assets/93321969/e54997d3-b581-4396-a21b-0ca3f0136efe)
Markdown editor


![image](https://gist.github.com/assets/93321969/0f25586c-37d7-4501-9453-66f7c4fdb153)
Profile page


![image](https://gist.github.com/assets/93321969/5e7647fc-74a9-4f91-89f4-e080d1b6609b)
Collection page (notes folder of user)

![image](https://gist.github.com/assets/93321969/3b01467d-15e6-428d-bc45-81ab9f98af63)
Home page of user


![image](https://gist.github.com/assets/93321969/cd8a0ebf-48db-4c8f-a712-27de93c2022c)
Search Page of user

# Setup
Prerequisites:
Ensure the following software is installed on your system before proceeding:

**Git:** Git is necessary to clone the repositories.

**Node.js** and npm: Install Node.js and npm to manage dependencies and run scripts.


## Step 1: Clone the repositories
Clone the following directories using the provided commands:

```bash
git clone https://github.com/lakshaykamat/snap-note.git
git clone https://github.com/lakshaykamat/snap-note-server.git
```

## Step 2: Set environment variables
Place the respective environment files in the root directory of each cloned repository. These files contain confidential data, so ensure they are kept private and not shared.
Name the file for Client `.env.local`
Name the file for server `.env`

## Step 3: Install dependencies
Navigate to each folder (Client and Server) in their respective root directories and run the following command to install dependencies:

```bash
cd snap-note # Changing to client directory 
npm install --force
cd ../snap-note-server # Changing to server directory
npm install --force
```

## Step 4: Run the server
In the server's root directory, execute the command:

```bash
npm run dev
```

## Step 5: Run the client
In the client's root directory, execute the command:

```bash
npm run dev
```

Now, you can view the result by accessing [http://localhost:3000](http://localhost:3000) in your web browser.