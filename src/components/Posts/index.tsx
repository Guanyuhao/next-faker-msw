"use client"
import { useCallback, type FC, useState, useRef } from 'react';
import { Button, Space, Input, } from '@arco-design/web-react';
import axios from "axios"

interface PostsProps {}

const Posts: FC<PostsProps> = () => {
  const [data1, setData1] = useState<any>();

  const createdFetch = useCallback(() => {
    axios.get("/api/posts").then(({ data }) => {
      setData1(data);
    });
  }, []);

  const postFetch = useCallback(() => {
    axios
      .post("/api/posts", { id: parseInt(Math.random() * 10 + "") })
      .then(({ data }) => {
        setData1(data);
      });
  }, []);

  const deleteFetch = useCallback(() => {
    axios.delete("/api/posts/2").then(({ data }) => {
      setData1(data);
    });
  }, []);

  const [inputVal, setInputVal] = useState<string>();
  const [controller, setController] = useState<any>();
  let textVal = ""

  const sendRequest = useCallback(() => {
    const controller = new AbortController()
    setController(controller);
    fetch("http://localhost:3000/api/sse", { signal: controller.signal })
      .then((res) => {
        if (res.status === 200) {
          console.log("status 200");
          return res.body;
        }
      })
      .then((rb: any) => {
        const reader = rb?.getReader();
        let buffer = "";

        return reader
          ?.read()
          .then(function process(
            result: ReadableStreamReadResult<Uint8Array>
          ): Promise<void> {
            if (result.done) {
              console.log("status done");
              return (async () => {})();
            }

            const message = new TextDecoder("utf-8").decode(result.value);
            buffer += message;
            const lines = buffer.split("\n");
            buffer = lines.pop() || "";
            lines.forEach((line) => {
              if (line) {
                const fields = line.split(":");
                const lineValue = fields[1];
                textVal += JSON.parse(lineValue);
              }
            });
            setInputVal(textVal)
            return reader?.read().then(process);
          });
      })
      .catch((e) => {
        console.log("status error");
      });
  }, [])

  function closeSSE() {
    controller?.abort();
    setInputVal(`${inputVal || ''}\n连接关闭\n`);
  }


  return (
    <Space size="large">
      <Button type="primary" onClick={createdFetch}>
        查看一下
      </Button>
      <Button type="secondary" onClick={postFetch}>
        添加
      </Button>
      <Button type="dashed" onClick={deleteFetch}>
        删除
      </Button>
      {JSON.stringify(data1)}
      <Button type="dashed" onClick={sendRequest}>
        链接SSE
      </Button>
      <Input.TextArea
        value={inputVal}
        placeholder="Welcome back! What would you like to chat about?"
      />
      <Button type="dashed" onClick={closeSSE}>
        关闭
      </Button>
    </Space>
  );
};

export default Posts;
