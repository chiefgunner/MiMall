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

## Vuex
创建 `index.js` `actions.js` `mutations.js`
> index.js
```js
//index.js
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

//挂载 vuex
Vue.use(Vuex)
//
const state = {
  username:''
}
export default new Vuex.Store({
  state,
  mutations,
  actions
})
```
> actions.js
```js
//actions.js
export default{
  setUsername(content,username){
    content.commit('setUsername',username)
  },
  setUsername({commit},username){
    commit('setUsername',username)
  }
}
```
> mutations.js
```js
//mutations.js
export default{
  setUsername(state,username){
    state.username = username
  }
}
```
> main.js
```js
import store from './store'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
```
### 分发 Action
通过 `store.dispatch()` 方法触发
```js
this.$store.dispatch('setUsername','chiefgunner')
```
### 在组件中分发 Action
你在组件中使用 this.$store.dispatch('xxx') 分发 action，或者使用 mapActions 辅助函数将组件的 methods 映射为 store.dispatch 调用（需要先在根节点注入 store）：
```js
import { mapActions } from 'vuex'

export default{
  //...
  methods:{
    ...mapActions(['setUsername','...'])
    //this.setUsername('chiefgunner')  => this.$store.dispatch('setUsername','chiefgunner')
  }
}
```

### mapState 辅助函数
```js
import mapState from 'vuex'
computed:{
  //...
  ...mapState(['username','...'])
}
```

### `element-ui` `ant-design-vue` `iview`
`element-ui` 使用

安装 element-ui
```bash
npm i element-ui --save-dev
```
按需引入
```bash
npm i babel-plugin-component --save-dev
```
`babel.config.js` 添加配置
```js
module.exports = {
  'presets': [
    '@vue/cli-plugin-babel/preset'
  ],
  'plugins': [
    [
      'component',
      {
        'libraryName': 'element-ui',
        'styleLibraryName': 'theme-chalk'
      }
    ]
  ]
}
```
```js
// main.js
import { Button,Upload,Message } from 'element-ui'

// 全局配置
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };

Vue.use(Button)
Vue.use(Upload)
Vue.prototype.$message = Message
```
`ant-design-vue` 使用

安装所需要包
```bash
npm i ant-design-vue less less-loader --save-dev
```
按需引入
```bash
npm i babel-plugin-import --save-dev
```
`babel.config.js` 配置
```js
plugins:[
  [
    'import',
    { libraryName: 'ant-design-vue', libraryDirectory: 'es', style: true }
  ]
]
```
`vue.config.js` 配置
```js
css: {
  loaderOptions: {
    less: {
      lessOptions: {
        javascriptEnabled: true
      }
    }
  }
}
```
`ant-design-vue` 使用
```js
import { Button, message } from 'ant-design-vue';

Vue.use(Button);
Vue.prototype.$message = message;
```
可以通过以下的写法来按需加载组件。
```js
import Button from 'ant-design-vue/lib/button';
import 'ant-design-vue/lib/button/style'; // 或者 ant-design-vue/lib/button/style/css 加载 css 文件
```
如果你使用了 babel，那么可以使用 `babel-plugin-import` 来进行按需加载，加入这个插件后。你可以仍然这么写：
```js
import { Button } from 'ant-design-vue';
```
插件会帮你转换成 ant-design-vue/lib/xxx 的写法。另外此插件配合 style 属性可以做到模块样式的按需自动加载。

>注意，babel-plugin-import 的 style 属性除了引入对应组件的样式，也会引入一些必要的全局样式。如果你不需要它们，建议不要使用此属性。你可以 import 'ant-design-vue/dist/antd.css 手动引入，并覆盖全局样式。

`iview` 使用

安装 iview
```bash
npm i view-design --save-dev
```
按需引入
```bash
npm i babel-plugin-import --save-dev
```
`babel.config.js` 添加配置
```js
module.exports = {
  'presets': [
    '@vue/cli-plugin-babel/preset'
  ],
  "plugins": [["import", {
    "libraryName": "view-design",
    "libraryDirectory": "src/components"
  }]]
}
```
```js
// main.js
import { Button,Message } from 'view-design'
import 'view-design/dist/styles/iview.css';

Vue.component('Button',Button)
Vue.prototype.$Message = Message
// 全局配置message
Vue.prototype.$Message.config({
  top: 100,
  duration: 3
});

```
>按需引用仍然需要导入样式，即在 main.js 或根组件执行 import 'view-design/dist/styles/iview.css';

### 导航
```js
this.$router.push({
  path:'/index',
  query:{
    from:'login'
  }
})

this.$route.query
```
```js
this.$router.push({
  name:'index',
  params:{
    from:'login'
  }
})

this.$route.params
```




# 常用方法
## filter
用于对数组的过滤
```js
let list = [
  {id:1,selected:true},
  {id:2,selected:false},
  {id:3,selected:false},
  {id:4,selected:true},
];
let new = ''
//得到 select ture 的数据
new = list.filter((item)=>{
  return item.selected
})
new = list.filter((item)=>item.selected)
new = list.filter(item=>item.selected)
//得到 selected 为 false 的数据
new = list.filter((item)=>!item.selected)
```

## map forEach
```js
new = list.map((item,index)=>{
  if(item.id == 3){
    list.splice(index,1)
  }
})
```
## some
```js
//some 判断是否有满足的元素(商品至少选择一件) return boolean
list.some((item)=>item.selected)
```
## every
```js
//every 判断是否全部满足 return boolean
list.every((item)=>item.selected)
```