"use client"
import Posts from "@/components/Posts";
import Login from "@/components/Login";
import { MswContext, useMswInterceptionRequest } from "@/mocks/useMsw"

import "@arco-design/web-react/dist/css/arco.css";

export default function Home() {
  const mswWorker = useMswInterceptionRequest();
  return (
    <main>
      <h1>前端mock方案：faker造假数据，msw拦截请求</h1>
      <MswContext.Provider value={mswWorker}>
        <Posts/>
        <Login/>
      </MswContext.Provider>
    </main>
  )
}
