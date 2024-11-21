pnpm docs:build

git add .

git commit -m "update:$(date +%F%n%T)更新文档"

echo "\n\n\n😀😀😀 💨💨💨 commit成功\n\n\n"
# git commit -m "feat:搜索框插件$(date +%F%n%T)"

git push && echo "😀😀😀 💨 Push 成功！" || echo "😭😭😭 💨 Push 失败！"
