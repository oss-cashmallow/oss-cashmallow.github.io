# The Beginning of Collaboration

::: tip
좋은 팀은 좋은 제품을 만든다 - 선릉역호랭이들의 일하는 방식
:::

### STEP 1 - kanban
::: details 매일 매일 서로 도움을 주고 받기 - Daily Meeting
```
- 칸반 미팅 통해여 서로의 작업 공유 - 09:15
- 서로 도와 재밋고 효율적 방법 찾기
- 타이거팀에서는 책임을 공유하기 때문에 좋든 나쁘든 그 성과는 어떤 개인이 아니라 팀 전체의 것
- 매일 같은 시간, 같은 장소에서 협업에 필요한 최신 정보들을 공유

.　/＼＿／ヽ
／ _ノ　ヽ_ ＼
|　　━　 ━　i
＼ミ (_人_) 彡
　／￣￣⌒＼/⌒)――――
. /　　　　＿／　
. |　　　＼
　＼ 〇_　 ＼
　　＼ノ.＼_ノ

```
- 1. 어떤 일을 끝마쳤는지
- 2. 어떤 일을 진행할 예정인지
- 3. 그리고 업무에 지장을 줄 수 있는 요소가 무엇이고 - 힐러와 히어로를 찾기
[kanban-guide](https://kanban.university/kanban-guide/#download)
![ygwg](https://i0.wp.com/congruentagile.com/wp-content/uploads/2021/11/%E1%84%8F%E1%85%A1%E1%86%AB%E1%84%87%E1%85%A1%E1%86%AB-%E1%84%86%E1%85%A1%E1%86%AB%E1%84%92%E1%85%AA.png?resize=1024%2C777&ssl=1)
:::

### STEP 2 - create branch
``` bash
$ pwd
~/code/oss-cashmallow.github.io

$ git pull

$ git describe --tags
v0.9.6

$ git branch v0.9.7/how2write-code-with-PR
$ git checkout v0.9.7/how2write-code-with-PR

# 버전 규칙은 https://semver.org/ 를 따름
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
::: details 개발의 시작과 끝은 테스트입니다.
```
.　 ∧,,∧
∩(＾ 0 ＾)∩
ヽ　　　ノ
　.|　　|
　 U⌒U.
```
:::

### STEP 6 - code review
::: details 개발자가 마스터가 되어가는 긴 여정
- [소프트웨어 장인정신](http://guruble.com/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4-%EC%9E%A5%EC%9D%B8%EC%A0%95%EC%8B%A0software-craftsmanship/)
```
애자일 선언문 (Agile Manifesto)

우리는 스스로 소프트웨어를 개발하고, 
다른 사람들이 개발하는 것을 도와주면서
더 나은 소프트웨어 개발 방법들을 찾고 있다.

이 과정에서 우리는 다음과 같은 가치를 중요하게 생각한다.

1. 절차와 도구보다는 개성과 화합을 - Individuals and interactions over processes and tools
2. 방대한 문서 작업보다는 동작하는 소프트웨어를 - Working software over comprehensive documentation
3. 계약 조건에 대한 협상보다는 고객과의 협업을 - Customer collaboration over contract negotiation
4. 계획을 따르는 것을 넘어서서 변화에 대처하는 것을 - Responding to change over following a plan
더 가치있게 여긴다.

좌측의 사항도 가치가 있음을 인정하지만
우리는 우측의 사항에 더 높은 가치를 둔다는 것이다.
.　　　　　　　　　　　　　　　　　　　∧,, ∧
　　　　　　　　　　　　　　　　　　 (`・ω・´)
　　　 　　　　　　　　　　　　 　 　 Ｕ θ Ｕ
　　　　 　　　　　　　　　　　 ／￣￣Ⅰ￣￣＼
　　　　　 　　　　　　　　　　|二二二二二二二|
　　　　　　　　　　　　　　 　｜　　　　　　　　｜
찰칵 　찰칵 　찰칵 　찰칵 　찰칵 　찰칵 　찰칵 　찰칵 　찰칵
　　　찰칵 　찰칵 　찰칵 　찰칵 　찰칵 　찰칵 　찰칵 　찰칵 　찰칵
　∧_∧　　　 　　∧_∧ 　　　 ∧_∧　　∧_∧　　　　∧_∧　　　　 ∧_∧
　(　　 )】 　 　 　(　　 )】　　　 (　　 )】 【(　　 )　　　 【(　　 )　　　 【(　　 )
　/　 /┘　.　 　/　 /┘.　 　　/　 /┘ └＼ ＼　 　└＼ ＼　　 └＼ ＼
ノ￣ゝ　 　　　ノ￣ゝ 　　　 　ノ￣ゝ　 　　　ノ￣ゝ 　　 ノ￣ゝ　 　 　ノ￣ゝ
```
:::

### STEP 7 - deploy STG & UAT
::: details User Acceptance Testing . 사용자 수락 테스트
```
Agile Team Tiger@cashmallow 는
개발자 모두가 "비즈니스 요구사항에 익숙한" 사용자를 추구하며
이를 통해 SIT & UAT 를 작은 스프린트 단위로 함께 진행
가능한 빠른 결함 찾기를 추가 - 낭비와 비용의 최적화 달성
```
- 개발자 : Development -> Unit Test -> Code Review
- 개발팀 : SIT(System Intergration Testing)
---
- 모두가 : UAT(User Acceptance Testing / 사용자 수락 테스트)
```
- 비즈니스 요구사항에 대해 sw를 검증
- 이 유효성 검사는 비즈니스 요구사항에 익숙한 최종 사용자가 수행
- 소프트웨어가 출시되기 전 수행되는 마지막 테스트
- 시장용 소프트웨어를 출시하기 전
- 모든 비즈니스 요구사항(TC)이 충족되었는지 여부를 확인
```
:::

### STEP 8 - deploy PRD
::: details 팀은 새 기능을 적기에 출시하고 사용자에게 신뢰성을 보장
 - [SRE(사이트 신뢰성 엔지니어링)란?](https://www.redhat.com/ko/topics/devops/what-is-sre)
 - SRE 팀은 소프트웨어를 툴로 활용하여 
 - 시스템을 관리하고,
 - 문제를 해결하고,
 - 운영 태스크를 자동화
---
- SRE를 활용하는 팀은 새 기능을 적기에 출시하고 사용자에게 신뢰성을 보장
```
.　 　 ∩　 ∩
　　 / |／ /
　　/ 　　/
⊂二 　 　 二⊃
　（ ､σ， ）& SRE～
　　Ｖ"Ｖ
```
:::

### STEP 9 - 애자일 회고
::: details 업무를 민주적이고 객관적 시작으로 돌아보기
- [회고 진행 방식](https://brunch.co.kr/@sweetsavasana/40)
![Aglie Big Thing](https://i0.wp.com/congruentagile.com/wp-content/uploads/2019/10/122_3.jpeg?fit=800%2C326&ssl=1)
- 팀이 정기적으로 만나 이터레이션 기간 동안 무슨 일이 있었는지, 
- 그리고 자신들이 일하는 방식은 어떠한지 돌아보고
- 무엇을 개선하면 좋을지 논의하는 자리
:::