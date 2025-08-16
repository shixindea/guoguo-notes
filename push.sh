
#为了保险 建议手动执行手动  pnpm build
#pnpm build


git add .

git commit -m "update:更新文档$(date +%F%n%T)"

echo "😀😀😀 💨💨💨 commit成功"
# git commit -m "feat:搜索框插件$(date +%F%n%T)"

git push && echo "😀😀😀 💨 Push 成功！" || echo "😭😭😭 💨 Push 失败！"



pnpm release