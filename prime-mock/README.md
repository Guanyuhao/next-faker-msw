# Prime Mock
> next js 使用的 mock 的方案

## 使用方法

1. 在next项目根目录新建文件 `.env.local` 写入环境变量开启mock配置
```bash
NEXT_PUBLIC_MOCK_PATH="posts,login/user"
```
2. 初始化 msw

```bash
npx msw init public
```
3. 在 'use client' layout 中引入
```jsx
import { MswContext, useMswInterceptionRequest } from "@prime-mock";

const mswWorker = useMswInterceptionRequest();

<MswContext.Provider value={mswWorker}>
  {children}
</MswContext.Provider>
```
4. 本地有mocks 目录下写入需要被mock的文件
> 引入方式 通过环境变量 NEXT_PUBLIC_MOCK_PATH

5. 支持匹配规则

> mocks/user/[one|two|three]
- mocks/user/one.(ts|js)
- mocks/user/two.(ts|js)
- mocks/user/three.(ts|js)

> mocks/user
- mocks/user/user.(ts|js)

> mocks/user/*
- mocks/user/name1.(ts|js)
- mocks/user/name2.(ts|js)
- ...

6. 验证结果，控制台会有

引入的文件路径: [xxxxx]
