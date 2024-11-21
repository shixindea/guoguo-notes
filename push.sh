pnpm docs:build

git add .

git commit -m "update:$(date +%F%n%T)更新文档"

echo "😀😀😀💨💨💨 update:$(date +%F%n%T)更新文档"
# git commit -m "feat:搜索框插件$(date +%F%n%T)"

git push && echo "Push 成功！" || echo "Push 失败！"
