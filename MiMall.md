## Node环境
```git
npm i -g n  //下载 n 模块
n stable    //稳定版本
n lts       //长期支持版本
n latest    //最新版本
n 10.0.0    //指定版本
```
## Git
### Git 安装和配置
```git
git config -l
git config -global user.name 'chiefgunner'
git config -global user.email 'mall@chiefgunner.com'
git config -global credential.helper sotre              //记住用户及密码
ssh -keygen -t rsa -C 'youremail@example.com'
```
![git 速查表](https://pic.iqy.ink/2020/06/15/eccd2d9a8903a.jpg)

### 分支与标签
```git
git branch <new branch>                //创建分支
git branch -d <branch>                 //删除本地分支
git tag <tagname>                      //基于最新提交创建标签
git tag -d <tagname>                   //删除本地标签
git checkout <branch / tag>            //切换到指定分支或标签
```
### 合并与衍合
```git
git merge <branch>                     //合并指定分支到当前分支
git rebase <branch>                    //衍合指定分支到当前分支
```
### 远程操作
```git
git remote -v                          //查看远程版本信息库
git remote show <remote>               //查看指定远程版本信息
gitremote add <remote> <url>           //添加远程版本库

git fetch <remote>                     //从远程库获取代码
git pull <remote> <branch>             //下载代码并快速合并
git push <remote> <branch> <bach>      //上传代码并快速合并
git push <remote> :<branch/tag-name>   //删除远程分支或标签
git push --tags                        //上传所有标签
git pust <remote> <branch> --force     //强推
```
### 撤销

```git
git reset --hard HEAD                  //
git checkout HEAD <file>               //撤销指定的未提交文件的修改内容
git revert <commit>                    //撤销指定的提交（记录日志）
```

### 基础流程

```git
//git 初始化
//1、克隆项目
git clone git@github.com:chiefgunner/git.git
git add -A
git commit -m 'init'
git push
//2、本地创建项目推送到远端
git init
git add -A
git commit -m 'init'
git remote add origin git@github.com:chiefgunner/git.git
git push -u origin master
```
### 分支流程

```git
//创建分支
git checkout -b branch-name     //创建 branch-name 分支
git add -A
git commit -m 'vranch-name'
git push origin branch-name     //推送分支

//合并分支
git checkout master
git merge branch-name
git push                        //推送 master 分支
```
## VueCli 安装
```bash
npm i -g @vue/cli
yarn global add @vuecli
vue -V
```
