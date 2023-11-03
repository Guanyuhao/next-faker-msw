"use client"
import { useCallback, type FC, useState } from 'react';
import { Button, Space } from '@arco-design/web-react';
import posts from "@/mocks/posts"
import { worker } from "@/mocks/browser"
worker.use(...posts)

interface PostsProps {}

const Posts: FC<PostsProps> = () => {
    const [data1, setData1 ] = useState<any>();
    const createdFetch = useCallback((method: string) => {
        fetch("api/posts", {method}).then(res => {
            setData1(res);
        })
    }, [])

    return <Space size='large'>
    <Button type='primary' onClick={() => createdFetch("get")}>添加</Button>
    <Button type='secondary' onClick={() => createdFetch("delete")}>删除</Button>
    <Button type='dashed' onClick={() => createdFetch("post")}>修改</Button>
    {JSON.stringify(data1)}
  </Space>;
}

export default Posts;
