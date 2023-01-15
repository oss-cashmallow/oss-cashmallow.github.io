
git add .

pnpm docs:build

firebase login

firebase deploy

git checkout HEAD -- docs/

echo "╞╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╡╞╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╡"
# git clean -fd --dry-run

git clean -fdi
echo "╞╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╡╞╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╡"

echo "STG DEPLOY OK!"
echo "https://oss-cashmallow.web.app"
