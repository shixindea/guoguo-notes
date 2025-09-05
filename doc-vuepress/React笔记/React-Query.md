## 参数

#### 1. `queryKey: [...url, query]`

- **作用**：作为查询的唯一标识符，用于缓存和去重。

- 说明

  ：

  - React Query 会根据 `queryKey` 来判断是否是同一个请求。
  - 如果 `queryKey` 相同，React Query 会复用缓存，而不是重新发起请求。
  - 通常 `queryKey` 是一个数组，可以包含请求的 URL、参数、页码等。

#### 2. `queryFn: () => requestClient.request(url, { query } as any)`

- **作用**：定义数据获取的逻辑。

- 说明

  ：

  - `queryFn` 是一个返回 Promise 的函数，React Query 会自动调用它来获取数据。
  - 这里使用了 `requestClient.request` 来发起请求，并传递 `url` 和 `query` 参数。
  - `as any` 是 TypeScript 的类型断言，表示忽略类型检查（通常用于临时解决类型不匹配的问题）。

#### 3. `refetchOnMount: true`

- **作用**：当组件挂载时，是否重新获取数据。

- 说明

  ：

  - 如果 `true`，每次组件挂载时都会重新发起请求（即使缓存中有数据）。
  - 如果 `false`，则优先使用缓存数据，不会自动重新获取。

#### 4. `refetchOnWindowFocus: true`

- **作用**：当浏览器窗口重新获得焦点时，是否重新获取数据。

- 说明

  ：

  - 如果 `true`，用户切换回浏览器标签页时会自动刷新数据。
  - 适用于需要实时数据的场景（如聊天、通知）。

#### 5. `staleTime: 0`

- **作用**：数据被视为“陈旧”的时间（单位：毫秒）。

- 说明

  ：

  - 如果 `staleTime: 0`，数据会立即被视为陈旧，React Query 会尝试重新获取。
  - 如果 `staleTime: 5000`，数据在 5 秒内会被视为“新鲜”，不会重新获取。
  - 设置为 `0` 表示每次都会重新获取数据（除非缓存被禁用）。

#### 6. `gcTime: 0`

- **作用**：缓存数据的垃圾回收时间（单位：毫秒）。

- 说明

  ：

  - 如果 `gcTime: 0`，数据会在不再使用时立即从缓存中移除。
  - 如果 `gcTime: 5000`，数据会在 5 秒后从缓存中移除。
  - 适用于内存敏感的场景，但会增加请求次数。







## useQuery 

```tsx
 const { data, ...rest } = useQuery({
    queryKey: [...url, requestData],
    queryFn: () => requestClient.request(url, {
      data: requestData
    }),
    enabled: options?.enabled ?? true,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime:0,// 5 * 60 * 1000, // 5分钟缓存
    gcTime: 0//10 * 60 * 1000, // 10分钟垃圾回收
  });
  return {
    data: data?.data?.data?.list || [],
    ...rest,
  };
```





## useQuery 系统自动触发

## useMutation 自动处理请求

useMutation点
目的:用于服务器端的副作用,如POST,PUT,DELETE。
mutationFn：执行数据变更的异步函数。
mutate:你调用来触发变更的函数。
onSuccess:变更成功后用于处理副作用的回调函数。