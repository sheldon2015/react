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

     属性API:
     
    getDefaultProps(){

    }




## day02