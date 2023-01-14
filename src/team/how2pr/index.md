# The Beginning of Collaboration

### STEP 1 - kanban
- 칸반 미팅 통해여 서로의 작업 공유 - 09:15
- 서로 도와 재밋고 효율적 방법 찾기

### STEP 2 - create branch
``` bash
$ pwd
~/code/oss-cashmallow.github.io

$ git pull

$ git describe --tags
v0.9.6

$ git branch v0.9.7/how2write-code-with-PR
$ git checkout v0.9.7/how2write-code-with-PR

$ git branch --show-current
v0.9.7/how2write-code-with-PR
```

### STEP 3 - writing todo
``` bash
$ perl -p -i -e '$.==3 and print "### 0.9.7\n- [ ] The Beginning of Collaboration\n\n"' ChangeLog.md

$ head -n 5 ChangeLog.md
# ChangeLog

### 0.9.7
- [ ] The Beginning of Collaboration
```

### STEP 4 - create PR to signal the start of coding
``` bash
$ git add .

$ git status
현재 브랜치 v0.9.7/how2write-code-with-PR
커밋할 변경 사항:
	수정함:        ChangeLog.md

$ git commit -m "start write - tiger coding 101"

$ git push --set-upstream origin v0.9.7/how2write-code-with-PR
remote: Create a pull request for 'v0.9.7/how2write-code-with-PR' on GitHub by visiting:
remote:      https://github.com/oss-cashmallow/oss-cashmallow.github.io/pull/new/v0.9.7/how2write-code-with-PR
```

### STEP 5 - art coding and testing

### STEP 6 - code review

### STEP 7 - deploy STG & UAT

### STEP 8 - deploy PRD & SRE

