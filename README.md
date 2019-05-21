# junshi

> 目录介绍
- container:容器配置文件目录
- dist:网站实际发布目录(只做发布不能在此做开发)
- src:网站源文件目录(在此做开发)
- test:测试文件

> 本地如何运行
1. git clone https://github.com/yougitname/promotion-front.git
2. cd promotion-front && docker-composer up -d
3. 访问 localhost 即可

> 注意事项
- 需要 docker 支持。
- src 目录中的 index.html, career.html, ranking.html 为三个业务页面
- 不要在 master 分支上开发，尽量建立新分支进行开发。