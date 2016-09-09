#flux架构

- **flux架构的理解**

	flux并不比mvc模式简单，其中最大的不同点就是数据的流向是单一的

	application的UI展现，可以看作是当前时间点下对数据的一种表现，当前时间点的数据即状态

	**自我理解:**

	1. 用户操作(或者server响应)，会处理事件响应如click事件处理函数createNewItem（view ->action）

		`<MyButton  onClick={this.createNewItem}/>; `

		`createNewItem: function (event) {    ButtonActions.addNewItem('new item'); }`

	2. 在响应函数中,通常调用action creator函数生成一个action信息	
	
		`{type:ADD_ITEM,playload:'xxxxx'}`

	3. 在action creator函数中，通常会调用dispatcher，将action分发出去(action ->dispatcher)

	4. 在dispatcher中将action分发给注册的store(dispatcher -> store)

		`AppDispatcher.register(function (action) {

	      switch(action.actionType) {

	    case 'ADD_NEW_ITEM':

	      ListStore.addNewItemHandler(action.text);

	      ListStore.emitChange();

	      break;

	    default:

	      // no op
	      }
	    })`

	5. 通过函数之间的调用逻辑进入store，在store中处理业务逻辑


- **在react中经常会出现immutable的概念。immutable的理解**：

	一旦创建出来之后，就不能再改变。因此，当你想对其做修改，就得弄一个新的。所以说react中的组件也是immutable的，每次状态的改变他都是重新生成了一个新的view，并不是修改之前view


- **纯函数**	

	纯函数是函数式编程的思想，只要参数相同，函数返回的结果永远是一致的，并且不会对外部有任何影响（不会改变参数对象的数据）。

- **mvc模式**
	
	mvc模式中model和view之间数据流向是双向的，可以互相直接影响,在flux架构中是store和view之间的数据流向单向，view的展现由store中的数据决定,view 不能直接操作store

- **flux的官方实现**
	1. 用户操作，在组件内会有一个事件处理函数,在事件处理函数内部会引入action模块，创建action,通常action会包含一个type定
义action的类型，和其他字段（比如text)携带需要传入的信息

	2. 在action内部会引入dispatcher模块，dispatcher会分发出action

	3. 在dispathcer内部会引入store模块，在dispather内部，会注册store的回调函数

	4. 在store内部会有监听action处理数据的函数以及触发事件的函数每次在dispatcher中只有一个action可以通过   

-  **flux架构的redux实现**   
	
	
	redux的三大原则
	
	1. 单一数据源,数据全部管理在唯一的store中

	2. store中数据(状态)的改变,只能通过触发action

	3. react-redux绑定react和redux库，建立view和store之间的联系



- **redux理解**

	1.	

 



	






		
  


	

	