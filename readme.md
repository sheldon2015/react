# 学习react ，类比之前学过的一点vue.js

## day01

    1. js的迭代函数map的用法(注意他有返回值);

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

    ReactDOM.findDOMNode()(不能用到无状态的组件)


    子元素上通过ref标示，然后通过refs访问子元素。

    6. 绑定事件

    7. 表单元素和表单事件，有别于html中的

        受控组件

        非受控组件
    








## day02