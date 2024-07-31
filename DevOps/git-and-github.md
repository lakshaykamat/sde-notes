---
tags:
  - "#devops"
---
# Git and GitHub
### Table of Contents
- [[#Git commands|Git commands]]
	- [[#Git commands#Initialization:|Initialization:]]
	- [[#Git commands#Configuration:|Configuration:]]
	- [[#Git commands#Basic Commands:|Basic Commands:]]
	- [[#Git commands#Branching:|Branching:]]
	- [[#Git commands#Remote Repositories:|Remote Repositories:]]
	- [[#Git commands#History and Logs:|History and Logs:]]
	- [[#Git commands#Undo Changes:|Undo Changes:]]
	- [[#Git commands#Remote Collaboration:|Remote Collaboration:]]
	- [[#Git commands#Tagging:|Tagging:]]
	- [[#Git commands#Submodules:|Submodules:]]


Git is a distributed version control system used for tracking changes in source code during software development. 

GitHub is a web-based platform that hosts Git repositories, facilitating collaborative coding, version control, and project management. Developers use Git to manage code, while GitHub provides a platform for sharing and collaborating on projects.

## Git commands

### Initialization:
- `git init`: Initialize a new Git repository.

### Configuration:
- `git config --global user.name "Your Name"`: Set your name for commits.
- `git config --global user.email "your.email@example.com"`: Set your email for commits.

### Basic Commands:
- `git add <file>`: Add changes to the staging area.
- `git commit -m "Message"`: Commit changes with a descriptive message.
- `git status`: Check the status of your working directory.
- `git diff`: Show changes between commits.

### Branching:
- `git branch`: List branches.
- `git branch <branch_name>`: Create a new branch.
- `git checkout <branch_name>`: Switch to a branch.
- `git merge <branch_name>`: Merge changes from another branch.

### Remote Repositories:
- `git remote add origin <repository_url>`: Add a remote repository.
- `git pull origin <branch_name>`: Pull changes from a remote repository.
- `git push origin <branch_name>`: Push changes to a remote repository.

### History and Logs:
- `git log`: View commit history.
- `git log --oneline`: View compact commit history.
- `git show <commit_hash>`: Show details of a specific commit.

### Undo Changes:
- `git reset <file>`: Unstage changes.
- `git checkout -- <file>`: Discard changes in the working directory.

### Remote Collaboration:
- `git clone <repository_url>`: Clone a repository to your local machine.
- `git pull`: Fetch and merge changes from a remote repository.
- `git push`: Push changes to a remote repository.

### Tagging:
- `git tag <tag_name>`: Create a lightweight tag.
- `git tag -a <tag_name> -m "Message"`: Create an annotated tag.
- `git push --tags`: Push tags to a remote repository.

### Submodules:
- `git submodule add <repository_url>`: Add a submodule to the repository.
- `git submodule update --init --recursive`: Initialize and update submodules.