import{_ as t,c as e,o as r,a as n}from"./app-B2JSkSgd.js";const a={},c=n(`<h2 id="_1-求和案例-redux精简版" tabindex="-1"><a class="header-anchor" href="#_1-求和案例-redux精简版"><span>1.求和案例_redux精简版</span></a></h2><pre><code>	(1).去除Count组件自身的状态
	(2).src下建立:
					-redux
						-store.js
						-count_reducer.js

	(3).store.js：
				1).引入redux中的createStore函数，创建一个store
				2).createStore调用时要传入一个为其服务的reducer
				3).记得暴露store对象

	(4).count_reducer.js：
				1).reducer的本质是一个函数，接收：preState,action，返回加工后的状态
				2).reducer有两个作用：初始化状态，加工状态
				3).reducer被第一次调用时，是store自动触发的，
								传递的preState是undefined,
								传递的action是:{type:&#39;@@REDUX/INIT_a.2.b.4}

	(5).在index.js中监测store中状态的改变，一旦发生改变重新渲染&lt;App/&gt;
			备注：redux只负责管理状态，至于状态的改变驱动着页面的展示，要靠我们自己写。
</code></pre><h2 id="_2-求和案例-redux完整版" tabindex="-1"><a class="header-anchor" href="#_2-求和案例-redux完整版"><span>2.求和案例_redux完整版</span></a></h2><pre><code>	新增文件：
		1.count_action.js 专门用于创建action对象
		2.constant.js 放置容易写错的type值
</code></pre><h2 id="_3-求和案例-redux异步action版" tabindex="-1"><a class="header-anchor" href="#_3-求和案例-redux异步action版"><span>3.求和案例_redux异步action版</span></a></h2><pre><code>	 (1).明确：延迟的动作不想交给组件自身，想交给action
	 (2).何时需要异步action：想要对状态进行操作，但是具体的数据靠异步任务返回。
	 (3).具体编码：
	 			1).yarn add redux-thunk，并配置在store中
	 			2).创建action的函数不再返回一般对象，而是一个函数，该函数中写异步任务。
	 			3).异步任务有结果后，分发一个同步的action去真正操作数据。
	 (4).备注：异步action不是必须要写的，完全可以自己等待异步任务的结果了再去分发同步action。
</code></pre><h2 id="_4-求和案例-react-redux基本使用" tabindex="-1"><a class="header-anchor" href="#_4-求和案例-react-redux基本使用"><span>4.求和案例_react-redux基本使用</span></a></h2><pre><code>		(1).明确两个概念：
					1).UI组件:不能使用任何redux的api，只负责页面的呈现、交互等。
					2).容器组件：负责和redux通信，将结果交给UI组件。
		(2).如何创建一个容器组件————靠react-redux 的 connect函数
						connect(mapStateToProps,mapDispatchToProps)(UI组件)
							-mapStateToProps:映射状态，返回值是一个对象
							-mapDispatchToProps:映射操作状态的方法，返回值是一个对象
		(3).备注1：容器组件中的store是靠props传进去的，而不是在容器组件中直接引入
		(4).备注2：mapDispatchToProps，也可以是一个对象
</code></pre><h2 id="_5-求和案例-react-redux优化" tabindex="-1"><a class="header-anchor" href="#_5-求和案例-react-redux优化"><span>5.求和案例_react-redux优化</span></a></h2><pre><code>		(1).容器组件和UI组件整合一个文件
		(2).无需自己给容器组件传递store，给&lt;App/&gt;包裹一个&lt;Provider store={store}&gt;即可。
		(3).使用了react-redux后也不用再自己检测redux中状态的改变了，容器组件可以自动完成这个工作。
		(4).mapDispatchToProps也可以简单的写成一个对象
		(5).一个组件要和redux“打交道”要经过哪几步？
						(1).定义好UI组件---不暴露
						(2).引入connect生成一个容器组件，并暴露，写法如下：
								connect(
									state =&gt; ({key:value}), //映射状态
									{key:xxxxxAction} //映射操作状态的方法
								)(UI组件)
						(4).在UI组件中通过this.props.xxxxxxx读取和操作状态
</code></pre><h2 id="_6-求和案例-react-redux数据共享版" tabindex="-1"><a class="header-anchor" href="#_6-求和案例-react-redux数据共享版"><span>6.求和案例_react-redux数据共享版</span></a></h2><pre><code>		(1).定义一个Pserson组件，和Count组件通过redux共享数据。
		(2).为Person组件编写：reducer、action，配置constant常量。
		(3).重点：Person的reducer和Count的Reducer要使用combineReducers进行合并，
				合并后的总状态是一个对象！！！
		(4).交给store的是总reducer，最后注意在组件中取出状态的时候，记得“取到位”。
</code></pre><h2 id="_7-求和案例-react-redux开发者工具的使用" tabindex="-1"><a class="header-anchor" href="#_7-求和案例-react-redux开发者工具的使用"><span>7.求和案例_react-redux开发者工具的使用</span></a></h2><pre><code>		(1).yarn add redux-devtools-extension
		(2).store中进行配置
				import {composeWithDevTools} from &#39;redux-devtools-extension&#39;
				const store = createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))
</code></pre><h2 id="_8-求和案例-react-redux最终版" tabindex="-1"><a class="header-anchor" href="#_8-求和案例-react-redux最终版"><span>8.求和案例_react-redux最终版</span></a></h2><pre><code>		(1).所有变量名字要规范，尽量触发对象的简写形式。
		(2).reducers文件夹中，编写index.js专门用于汇总并暴露所有的reducer
</code></pre>`,16),d=[c];function o(s,u){return r(),e("div",null,d)}const i=t(a,[["render",o],["__file","尚硅谷react-redux笔记.html.vue"]]),l=JSON.parse(`{"path":"/React%E7%AC%94%E8%AE%B0/%E5%B0%9A%E7%A1%85%E8%B0%B7react-redux%E7%AC%94%E8%AE%B0.html","title":"React redux笔记","lang":"zh-CN","frontmatter":{"title":"React redux笔记","date":"2023-09-25T00:00:00.000Z","tags":["笔记","React","redux"],"categories":["自学篇"]},"headers":[{"level":2,"title":"1.求和案例_redux精简版","slug":"_1-求和案例-redux精简版","link":"#_1-求和案例-redux精简版","children":[]},{"level":2,"title":"2.求和案例_redux完整版","slug":"_2-求和案例-redux完整版","link":"#_2-求和案例-redux完整版","children":[]},{"level":2,"title":"3.求和案例_redux异步action版","slug":"_3-求和案例-redux异步action版","link":"#_3-求和案例-redux异步action版","children":[]},{"level":2,"title":"4.求和案例_react-redux基本使用","slug":"_4-求和案例-react-redux基本使用","link":"#_4-求和案例-react-redux基本使用","children":[]},{"level":2,"title":"5.求和案例_react-redux优化","slug":"_5-求和案例-react-redux优化","link":"#_5-求和案例-react-redux优化","children":[]},{"level":2,"title":"6.求和案例_react-redux数据共享版","slug":"_6-求和案例-react-redux数据共享版","link":"#_6-求和案例-react-redux数据共享版","children":[]},{"level":2,"title":"7.求和案例_react-redux开发者工具的使用","slug":"_7-求和案例-react-redux开发者工具的使用","link":"#_7-求和案例-react-redux开发者工具的使用","children":[]},{"level":2,"title":"8.求和案例_react-redux最终版","slug":"_8-求和案例-react-redux最终版","link":"#_8-求和案例-react-redux最终版","children":[]}],"git":{"updatedTime":1727229103000,"contributors":[{"name":"袁果锅","email":"2914310412@qq.com","commits":1}]},"filePathRelative":"React笔记/尚硅谷react-redux笔记.md","excerpt":"<h2>1.求和案例_redux精简版</h2>\\n<pre><code>\\t(1).去除Count组件自身的状态\\n\\t(2).src下建立:\\n\\t\\t\\t\\t\\t-redux\\n\\t\\t\\t\\t\\t\\t-store.js\\n\\t\\t\\t\\t\\t\\t-count_reducer.js\\n\\n\\t(3).store.js：\\n\\t\\t\\t\\t1).引入redux中的createStore函数，创建一个store\\n\\t\\t\\t\\t2).createStore调用时要传入一个为其服务的reducer\\n\\t\\t\\t\\t3).记得暴露store对象\\n\\n\\t(4).count_reducer.js：\\n\\t\\t\\t\\t1).reducer的本质是一个函数，接收：preState,action，返回加工后的状态\\n\\t\\t\\t\\t2).reducer有两个作用：初始化状态，加工状态\\n\\t\\t\\t\\t3).reducer被第一次调用时，是store自动触发的，\\n\\t\\t\\t\\t\\t\\t\\t\\t传递的preState是undefined,\\n\\t\\t\\t\\t\\t\\t\\t\\t传递的action是:{type:'@@REDUX/INIT_a.2.b.4}\\n\\n\\t(5).在index.js中监测store中状态的改变，一旦发生改变重新渲染&lt;App/&gt;\\n\\t\\t\\t备注：redux只负责管理状态，至于状态的改变驱动着页面的展示，要靠我们自己写。\\n</code></pre>"}`);export{i as comp,l as data};
