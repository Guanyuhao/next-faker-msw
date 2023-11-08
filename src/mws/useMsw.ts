"use client";
import { useEffect, useState, createContext } from "react";
import { type SetupWorker } from "./typing";

export const MswContext = createContext<ReturnType<typeof useMswInterceptionRequest>>(undefined);

export const useMswInterceptionRequest = () => {
  const [worker, setWorker] = useState<SetupWorker>();

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      process.env.NODE_ENV === "development" &&
      process.env.NEXT_PUBLIC_MOCK_API === "enabled"
    ) {
      // 利用 webpack 来加载所有的 mock 文件
      const browserWorker = require("msw/browser").setupWorker();
      // 需要配置根目录
      console.log("process:", process.cwd())
      // @ts-ignore
      const context = require.context("/src/mocks", true, /\.(ts$|js$)/, 'sync');
      context.keys().forEach((key: string) => {
        // const moduleName = key.replace(/\.\/(.*)\.(ts$|js$)/, "$1");
        const module = context(key).default;
        if (module && Array.isArray(module)) {
          browserWorker?.use(...module);
        }
      });
      browserWorker?.start();
    }
  }, []);

  return worker;
};
