# The Beginning of Collaboration

### STEP 1 - kanban

### STEP 2 - create and share PR
``` bash
$ pwd
~/code/oss-cashmallow.github.io

$ git pull
이미 업데이트 상태입니다.

$ git describe --tags
v0.9.6

$ git branch v0.9.7/how2write-code-with-PR
$ git checkout v0.9.7/how2write-code-with-PR

$ git branch --show-current
v0.9.7/how2write-code-with-PR

# perl or vi or vscode ...
$ perl -p -i -e '$.==3 and print "### 0.9.7\n- [ ] The Beginning of Collaboration\n\n"' ChangeLog.md

$ head -n 5 ChangeLog.md
# ChangeLog

### 0.9.7
- [ ] The Beginning of Collaboration

```