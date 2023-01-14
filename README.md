# tech blog@cashmallow
- Cashmallow development team's technology blog about wanting to contribute to the open source ecosystem

<img src="https://oss-cashmallow.github.io/images/tiger-cute.svg" alt="tiger cute" style="width:200px;"/>

### Connecting
- PRD - https://oss.cashmallow.com / oss-cashmallow.github.io
- STG - https://oss-cashmallow.web.app

### Contribute guide
- Anyone can do it's possible. Let's send the PR first and make it a better team by joining.

0. created based on [vuepress](https://v2.vuepress.vuejs.org/)
1. git clone https://github.com/oss-cashmallow/oss-cashmallow.github.io.git
2. edit with [vscode](https://code.visualstudio.com/)
3. run - development environment [install pnpm](https://pnpm.io/installation)
- connecting to localhost 8080
```
pnpm install
pnpm docs:dev
```

### build & deploy
1. STG
``` bash
$ sh deploy-stg.sh

> oss-cashmallow.github.io@0.9.6 docs:build /Users/m2/code/cashmallow/oss-cashmallow/oss-cashmallow.github.io
> vuepress build src

▲ [WARNING] Duplicate key "locales" in object literal [duplicate-object-key]

    src/.vuepress/config.js:39:2:
      39 │   locales: {
         ╵   ~~~~~~~

  The original key "locales" is here:

    src/.vuepress/config.js:23:2:
      23 │   locales: {
         ╵   ~~~~~~~

warning plugin @vuepress/plugin-back-to-top has been used multiple times, only the last one will take effect
✔ Initializing and preparing data - done in 109ms
✔ Compiling with vite - done in 1.98s
⠋ Rendering 7 pages[Vue warn]: Failed to resolve component: CaptionedImage
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.
[Vue warn]: Component <Anonymous> is missing template or render function.
✔ Rendering 7 pages - done in 77ms
success VuePress build completed in 2.21s!
Already logged in as mgg@cashmallow.com

   ╭───────────────────────────────────────────────────────────────────╮
   │                                                                   │
   │                Update available 11.19.0 → 11.20.0                 │
   │          To update to the latest version using npm, run           │
   │                   npm install -g firebase-tools                   │
   │   For other CLI management options, visit the CLI documentation   │
   │                                                                   │
   │                                                                   │
   │                                                                   │
   ╰───────────────────────────────────────────────────────────────────╯


=== Deploying to 'oss-cashmallow'...

i  deploying hosting
i  hosting[oss-cashmallow]: beginning deploy...
i  hosting[oss-cashmallow]: found 44 files in ./docs
✔  hosting[oss-cashmallow]: file upload complete
i  hosting[oss-cashmallow]: finalizing version...
✔  hosting[oss-cashmallow]: version finalized
i  hosting[oss-cashmallow]: releasing new version...
✔  hosting[oss-cashmallow]: release complete

✔  Deploy complete!

Project Console: https://console.firebase.google.com/project/oss-cashmallow/overview
Hosting URL: https://oss-cashmallow.web.app
HEAD의 현재 위치는 87dae45입니다 add ignore .firebase
deploy-stg.sh 제거할 예정
docs/assets/app-b15f0e51.js 제거할 예정
docs/assets/index.html-82b612ae.js 제거할 예정
docs/assets/index.html-dba8ee3a.js 제거할 예정
docs/team/how2pr/ 제거할 예정
deploy-stg.sh 제거
docs/assets/app-b15f0e51.js 제거
docs/assets/index.html-82b612ae.js 제거
docs/assets/index.html-dba8ee3a.js 제거
docs/team/how2pr/ 제거
```

2. PRD
- github pages -> docs
- sh build.sh -> push -> pr merge -> deploy - end
- https://oss-cashmallow.com

<img src="https://user-images.githubusercontent.com/120996497/212484360-1b212db0-5a5c-449f-8cc2-35de2126bd66.png" alt="cashmallow" style="width:600px;"/>
<img src="https://oss-cashmallow.github.io/images/hero.png" alt="cashmallow" style="width:200px;"/>
