# 学习react ，类比之前学过的一点vue.js

## day01

    1. js的迭代函数map的用法(注意他有返回值);

       数组在jsx中可以自动拼接;

    2. 两个重要的API

    定义有状态的组件
     React.createClass(  {render (){}})方法

     定义无状态的组件(普通函数)

     function StatelessComponent(props) {
             return <div> Hello {props.name} </div>
      }


     ReactDOM.render(component,  挂载点)

     3.  组件和状态(共同决定组建的render结果)

     区别:

     组件状态维护在组件内部，属性是有外部传入组件,由外部控制

     状态API:

     getInitialState(){

         return  变量

     }

    props属性:

    props单向流动

    getDefaultProps(){}

    props的children属性

    无状态组件的props属性

    4. react组建的生命周期、


    5. 获取dom元素
    （原生元素和自定义组件，统称react组件）

    ReactDOM.findDOMNode(react组件)(不能用到无状态的组件)


    子元素上通过ref标示，然后通过refs访问子元素。

    6. 绑定事件

    7. 表单元素和表单事件，有别于html中的

        受控组件

        非受控组件

## day02


    1. 前端架构

    MVC:

    Model: 负责保存应用数据，和后端交互同步应用数据

    View: 负责渲染页面 HTML DOM

    Controller: 负责连接 View 和 Model ， Model 的任何改变会应用到 View 中，View 的操作会通过 Controller 应用到 Model 中

    关系:Model, View, Controller 都是多对多关系。


    传统的MVC模式带来的问题:

    1. 编写大量的局部渲染函数去更新view

    2. view的渲染取决于当前view的状态，而他的状态，由数据和局部渲染函数决定，容易出现错误。

    solution  和 痛点:

    重新渲染当前view就可以完美解决上面的问题,但会带来性能问题

    flux架构

    解决的问题:

    1. 解决数据传递(流向)问题

    2. 统一了渲染入口，每次都是重新渲染，由于virtual  dom的机制，不影响页面性能

    3. 统一了状态管理，统一由store中的数据决定;

    解决的方案:

    核心思想: 单向数据流

    对比两种架构模式:

    flux模式是自动重新渲染,mvc为手动调用局部渲染

    flux中的dispatcher统一处理action,mvc模式中由view对应的controller处理action


    角色扮演:

    action creater:

    创建action，作为应用改变状态和view改变的入口。
    包装消息，把消息封装成应用其它部分可以理解的信息。
    action创建完成之后，传递给dispatcher

    Dispatcher:

    dispatcher中注册了所有的store，维持了一个store列表，当action消息传递过来，dispatcher会把消息分发给列表中注册的store。


    dispatcher中的行为是同步操作，store之间有依赖关系，可以用waitfor来实现，等待依赖执行完。

    store:
    维持应用的状态,状态改变，就会通知view更新视图




    flux的实现之一:

    redux

    action:通常是带有type字段标识的普通js对象(通常type指定action的类型，另外还有其他字段，携带数据信息)
    (用户操作界面或者server响应会产生一个action对象)


    action的创建一般会用action creator创建

    state

    state只读，只有reducer可以改变state的值

    设计state应该尽量遵循范式

    Object.assign()函数浅拷贝

    reducer

    设计reducer遵循的原则:

    1. reducer函数必须是个纯函数 (纯函数的一些特征:

    传入的参数相同，返回的的结果必然相同

    不会产生副作用如路由跳转  I/O操作等)

     store

    [参考](http://gold.xitu.io/search/flux)



