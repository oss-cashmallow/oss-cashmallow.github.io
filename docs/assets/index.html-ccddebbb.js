import{_ as l,M as t,p as d,q as r,R as e,t as n,N as a,a1 as s}from"./framework-603319ee.js";const c={},o=s('<h1 id="the-beginning-of-collaboration" tabindex="-1"><a class="header-anchor" href="#the-beginning-of-collaboration" aria-hidden="true">#</a> The Beginning of Collaboration</h1><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>좋은 팀은 좋은 제품을 만든다 - 선릉역호랭이들의 일하는 방식</p></div><h3 id="step-1-kanban" tabindex="-1"><a class="header-anchor" href="#step-1-kanban" aria-hidden="true">#</a> STEP 1 - kanban</h3>',3),v={class:"custom-container details"},u=s(`<summary>매일 매일 서로 도움을 주고 받기 - Daily Meeting</summary><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- 칸반 미팅 통해여 서로의 작업 공유 - 09:15
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),m=e("li",null,[e("ol",null,[e("li",null,"어떤 일을 끝마쳤는지")])],-1),h=e("li",null,[e("ol",{start:"2"},[e("li",null,"어떤 일을 진행할 예정인지")])],-1),b={start:"3"},p={href:"https://kanban.university/kanban-guide/#download",target:"_blank",rel:"noopener noreferrer"},g=e("img",{src:"https://i0.wp.com/congruentagile.com/wp-content/uploads/2021/11/칸반-만화.png?resize=1024%2C777&ssl=1",alt:"ygwg"},null,-1),_=s(`<h3 id="step-2-create-branch" tabindex="-1"><a class="header-anchor" href="#step-2-create-branch" aria-hidden="true">#</a> STEP 2 - create branch</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">pwd</span>
~/code/oss-cashmallow.github.io

$ <span class="token function">git</span> pull

$ <span class="token function">git</span> describe <span class="token parameter variable">--tags</span>
v0.9.6

$ <span class="token function">git</span> branch v0.9.7/how2write-code-with-PR
$ <span class="token function">git</span> checkout v0.9.7/how2write-code-with-PR

<span class="token comment"># 버전 규칙은 https://semver.org/ 를 따름ㅎ</span>
$ <span class="token function">git</span> branch --show-current
v0.9.7/how2write-code-with-PR
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="step-3-writing-todo" tabindex="-1"><a class="header-anchor" href="#step-3-writing-todo" aria-hidden="true">#</a> STEP 3 - writing todo</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ perl <span class="token parameter variable">-p</span> <span class="token parameter variable">-i</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;$.==3 and print &quot;### 0.9.7\\n- [ ] The Beginning of Collaboration\\n\\n&quot;&#39;</span> ChangeLog.md

$ <span class="token function">head</span> <span class="token parameter variable">-n</span> <span class="token number">5</span> ChangeLog.md
<span class="token comment"># ChangeLog</span>

<span class="token comment">### 0.9.7</span>
- <span class="token punctuation">[</span> <span class="token punctuation">]</span> The Beginning of Collaboration
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="step-4-create-pr-to-signal-the-start-of-coding" tabindex="-1"><a class="header-anchor" href="#step-4-create-pr-to-signal-the-start-of-coding" aria-hidden="true">#</a> STEP 4 - create PR to signal the start of coding</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>

$ <span class="token function">git</span> status
현재 브랜치 v0.9.7/how2write-code-with-PR
커밋할 변경 사항:
	수정함:        ChangeLog.md

$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;start write - tiger coding 101&quot;</span>

$ <span class="token function">git</span> push --set-upstream origin v0.9.7/how2write-code-with-PR
remote: Create a pull request <span class="token keyword">for</span> <span class="token string">&#39;v0.9.7/how2write-code-with-PR&#39;</span> on GitHub by visiting:
remote:      https://github.com/oss-cashmallow/oss-cashmallow.github.io/pull/new/v0.9.7/how2write-code-with-PR
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="step-5-art-coding-and-testing" tabindex="-1"><a class="header-anchor" href="#step-5-art-coding-and-testing" aria-hidden="true">#</a> STEP 5 - art coding and testing</h3><details class="custom-container details"><summary>개발의 시작과 끝은 테스트입니다.</summary><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.　 ∧,,∧
∩(＾ 0 ＾)∩
ヽ　　　ノ
　.|　　|
　 U⌒U.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="step-6-code-review" tabindex="-1"><a class="header-anchor" href="#step-6-code-review" aria-hidden="true">#</a> STEP 6 - code review</h3>`,9),w={class:"custom-container details"},f=e("summary",null,"개발자가 마스터가 되어가는 긴 여정",-1),k={href:"http://guruble.com/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4-%EC%9E%A5%EC%9D%B8%EC%A0%95%EC%8B%A0software-craftsmanship/",target:"_blank",rel:"noopener noreferrer"},x=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>애자일 선언문 (Agile Manifesto)

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
　　　　　　　　　　　　　　　　　　 (\`・ω・´)
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),T=s(`<h3 id="step-7-deploy-stg-uat" tabindex="-1"><a class="header-anchor" href="#step-7-deploy-stg-uat" aria-hidden="true">#</a> STEP 7 - deploy STG &amp; UAT</h3><details class="custom-container details"><summary>User Acceptance Testing . 사용자 수락 테스트</summary><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Agile Team Tiger@cashmallow 는
개발자 모두가 &quot;비즈니스 요구사항에 익숙한&quot; 사용자를 추구하며
이를 통해 SIT &amp; UAT 를 작은 스프린트 단위로 함께 진행
가능한 빠른 결함 찾기를 추가 - 낭비와 비용의 최적화 달성
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>개발자 : Development -&gt; Unit Test -&gt; Code Review</li><li>개발팀 : SIT(System Intergration Testing)</li></ul><hr><ul><li>모두가 : UAT(User Acceptance Testing / 사용자 수락 테스트)</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- 비즈니스 요구사항에 대해 sw를 검증
- 이 유효성 검사는 비즈니스 요구사항에 익숙한 최종 사용자가 수행
- 소프트웨어가 출시되기 전 수행되는 마지막 테스트
- 시장용 소프트웨어를 출시하기 전
- 모든 비즈니스 요구사항(TC)이 충족되었는지 여부를 확인
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="step-8-deploy-prd" tabindex="-1"><a class="header-anchor" href="#step-8-deploy-prd" aria-hidden="true">#</a> STEP 8 - deploy PRD</h3>`,3),E={class:"custom-container details"},C=e("summary",null,"팀은 새 기능을 적기에 출시하고 사용자에게 신뢰성을 보장",-1),y={href:"https://www.redhat.com/ko/topics/devops/what-is-sre",target:"_blank",rel:"noopener noreferrer"},P=e("li",null,"SRE 팀은 소프트웨어를 툴로 활용하여",-1),S=e("li",null,"시스템을 관리하고,",-1),R=e("li",null,"문제를 해결하고,",-1),A=e("li",null,"운영 태스크를 자동화",-1),$=s(`<hr><ul><li>SRE를 활용하는 팀은 새 기능을 적기에 출시하고 사용자에게 신뢰성을 보장</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.　 　 ∩　 ∩
　　 / |／ /
　　/ 　　/
⊂二 　 　 二⊃
　（ ､σ， ）&amp; SRE～
　　Ｖ&quot;Ｖ
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),B=e("h3",{id:"step-9-애자일-회고",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#step-9-애자일-회고","aria-hidden":"true"},"#"),n(" STEP 9 - 애자일 회고")],-1),q={class:"custom-container details"},U=e("summary",null,"업무를 민주적이고 객관적 시작으로 돌아보기",-1),I={href:"https://brunch.co.kr/@sweetsavasana/40",target:"_blank",rel:"noopener noreferrer"},D=e("img",{src:"https://i0.wp.com/congruentagile.com/wp-content/uploads/2019/10/122_3.jpeg?fit=800%2C326&ssl=1",alt:"Aglie Big Thing"},null,-1),L=e("li",null,"팀이 정기적으로 만나 이터레이션 기간 동안 무슨 일이 있었는지,",-1),N=e("li",null,"그리고 자신들이 일하는 방식은 어떠한지 돌아보고",-1),V=e("li",null,"무엇을 개선하면 좋을지 논의하는 자리",-1);function M(G,j){const i=t("ExternalLinkIcon");return d(),r("div",null,[o,e("details",v,[u,e("ul",null,[m,h,e("li",null,[e("ol",b,[e("li",null,[n("그리고 업무에 지장을 줄 수 있는 요소가 무엇이고 - 힐러와 히어로를 찾기 "),e("a",p,[n("kanban-guide"),a(i)]),g])])])])]),_,e("details",w,[f,e("ul",null,[e("li",null,[e("a",k,[n("소프트웨어 장인정신"),a(i)])])]),x]),T,e("details",E,[C,e("ul",null,[e("li",null,[e("a",y,[n("SRE(사이트 신뢰성 엔지니어링)란?"),a(i)])]),P,S,R,A]),$]),B,e("details",q,[U,e("ul",null,[e("li",null,[e("a",I,[n("회고 진행 방식"),a(i)]),D]),L,N,V])])])}const H=l(c,[["render",M],["__file","index.html.vue"]]);export{H as default};
