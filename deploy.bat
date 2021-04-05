@echo off

REM 构建生成静态文件
echo building...
call build.bat
echo building-complete

REM 进入生成的文件夹
cd src/.vuepress/dist

REM 如果是发布到自定义域名
REM echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

REM git push -f git@github.com:webchenxu/webchenxu.github.io.git master


git push -f git@gitee.com:fan_qing_rong/fan_qing_rong.git master

cd ..
cd ..
cd ..
echo Auto-Deploy-Complete