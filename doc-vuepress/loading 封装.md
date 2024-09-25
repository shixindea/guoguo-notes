# page-loading





```html
 <page-loading>
     <view>
      	内容....
      </view>
 </page-loading>
```



```js

  this.$store.commit('loading/setState', true)           //页面初始化 给true  启动loading
    
	调用接口   //接口异步请求
  
 this.$store.commit('loading/setState', false)            //接口完成 false  关闭loading

```

