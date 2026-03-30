### Essential commands

| Command                  | What it does                        |
| ------------------------ | ----------------------------------- |
| `git init`               | Initialise a new repo               |
| `git clone <url>`        | Download a remote repo              |
| `git status`             | See what's changed                  |
| `git add .`              | Stage all changes                   |
| `git add <file>`         | Stage a specific file               |
| `git commit -m "msg"`    | Save a snapshot with a message      |
| `git push origin main`   | Upload commits to remote            |
| `git pull origin main`   | Download + merge from remote        |
| `git branch`             | List all branches                   |
| `git checkout -b <name>` | Create and switch to a new branch   |
| `git checkout <name>`    | Switch to an existing branch        |
| `git merge <name>`       | Merge a branch into the current one |
| `git log`                | See commit history                  |

---

### The flow

```
working directory
      ↓ git add
staging area
      ↓ git commit
local repo
      ↓ git push
remote repo (GitHub)
```
