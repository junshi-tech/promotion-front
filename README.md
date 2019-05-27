# junshi

> 目录介绍
- container:容器配置文件目录
- dist:网站实际发布目录(只做发布不能在此做开发)
- src:网站源文件目录(在此做开发)
- test:测试文件

> 本地如何运行
1. fork [上游](https://github.com/junshi-tech/promotion-front) 到自己仓库
2. 进入工作空间,运行命令:git clone https://github.com/yougitname/promotion-front.git
3. cd promotion-front && docker-composer up -d
4. 访问 localhost 即可
5. 建立新分支并进行代码修改, 然后提交至自己仓库。
6. 提交 PR(pull request) 至上游
7. 登录上游账号,合并你刚刚提交的PR进master分支。
8. 登录服务器,进入 /root/www/promotion-front/ 目录, 运行 ./start.sh 脚本.会从上游拉取最新的代码到服务器。
9. 打开网站,查看最新代码 

> 注意事项
- 需要 docker 支持。
- src 目录中的 index.html, career.html, ranking.html 为三个业务页面
- 不要在 master 分支上开发，尽量建立新分支进行开发。

