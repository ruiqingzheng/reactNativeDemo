# reactNative

## reactNative参考资料

`https://unbug.gitbooks.io/react-native-training/content/`

## video

`https://www.youtube.com/watch?v=mkualZPRZCs`
`https://www.youtube.com/playlist?list=PLC_rYRxEnwQGLQqrHR0aho33U6DCeJamC`

## android 环境

`https://www.youtube.com/watch?v=KRLLjlpy0r4`

android 环境 启动avd

原本是可以用命令行来启动 `C:\WORKSPACE\android_env\tools\bin` 下的命令`android avd`

但现在要用android studio来启动

## reactNative项目创建

有两种方式来创建项目, 一种是react-native命令行, 一种是expo命令行

react-native命令行方式创建项目

npm install -g react-native-cli
npm install -g yarn

`react-native init projectName`

```js
To run your app on iOS:
   cd C:\WORKSPACE\javascript_nodejs_typescript_workspace\ReactNative\Hello
   react-native run-ios
   - or -
   Open ios\Hello.xcodeproj in Xcode
   Hit the Run button
To run your app on Android:
   cd C:\WORKSPACE\javascript_nodejs_typescript_workspace\ReactNative\Hello
   Have an Android emulator running (quickest way to get started), or a device c
onnected
   react-native run-android
```

`react-native run-android`

## expo 方式创建项目

```js

npm install -g expo-cli
expo init AwesomeProject
cd AwesomeProject
npm start
npm run android
npm run ios

expo eject

```

## 怎么快速创建RN项目

react-native init 创建项目, 一次下载就需要很久

1. 安装yarn ,  全局安装yarn 速度会快很多
2. 利用已有的npm包,  把已有的node_modules目录拷贝到,新项目目录, 创建的时候回提示是否确定, yes即可

这样创建一个项目的速度会快很多

## react-navigation

导航组件, 官方文档中的代码运行起来都有错误, 原因是`react-navigation`版本的不同造成的, 现在安装的是3.0的版本

而RN文档中还是2.0版本的文档

最终还是在`组件的官方文档`中找到解决方法, 3.0 的`react-navigation`需要安装的依赖在RN文档中提都没有提,

`https://facebook.github.io/react-native/docs/navigation#react-navigation`

`react-navigation` 组件的官方文档

`https://reactnavigation.org/docs/en/getting-started.html`

`react-navigation`是个跨平台组件, 可以做`stack navigation` 或者 `tab navigation` , 在iOS and Android都是会显示各自的正常风格样式

如果只需要适配ios样式, 那么用`NavigatorIOS`组件

如果需要ios和andoird的native样式一模一样, 那么可以用`react-native-navigation`

`npm install --save react-navigation`
`npm install`
`npm install --save react-native-gesture-handler`
`react-native link react-native-gesture-handler`

### SwitchNavigator 的使用

`createSwitchNavigator`

SwitchNavigator 的特点是没有后退按钮, 一般用来做验证

`https://snack.expo.io/@react-navigation/auth-flow-v3`

定义启动界面     -- AuthLoadingScreen

登录后跳转到导航     -- AppStack (实际上是StackNavigator)

认证失败跳转到导航   --- Auth: AuthStack (实际上是StackNavigator)

```js
const AppNavigator = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  App: AppStack,
  Auth: AuthStack,
}, {
  initialRouteName: 'AuthLoading',
});
```

![SwitchNavigator](https://raw.githubusercontent.com/ruiqingzheng/images/master/SwitchNavigator.jpg)
