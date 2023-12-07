"use client"
import Posts from "@/components/Posts";
import Login from "@/components/Login";
import { MswContext, useMswInterceptionRequest } from "@/mocks/useMsw"

export default function Home() {
  const mswWorker = useMswInterceptionRequest();
  return (
    <main>
      <h1>前端mock方案：faker造假数据，msw拦截请求</h1>
      <MswContext.Provider value={mswWorker}>
        <Posts/>
        <Login/>
      </MswContext.Provider>
      <h2>你生效，了，吗 生效了 ， 在中间</h2>
      <h2 style={{fontFamily: "var(--noto-sans-hk)"}}>你生效，了，吗 生效了 ， 在中间: noto-sans-hk</h2>
      <h2>12.12 : 不知道你命中了什么</h2>
      <h2 style={{fontFamily: "var(--dinpro)"}}>12.12 dinpro</h2>

      <h3>比特大陸是全球領先的數字貨幣礦機厂商，旗下品牌 ANTMINER 长期在行业內保持技術和市場優勢地位，客户覆盖全球100多个国家和地區</h3>
    
    </main>
  )
}
