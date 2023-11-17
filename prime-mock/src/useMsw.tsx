"use client";
import { useEffect, useState, createContext } from "react";
import { type SetupWorker } from "msw/browser";
import { isArray, isNil, isEmpty } from "lodash-es"
import {getMockFilesPath, filterPaths} from "./tools";

export const MswContext =
    createContext<ReturnType<typeof useMswInterceptionRequest>>(undefined);

export const useMswInterceptionRequest = () => {
    const [worker, setWorker] = useState<SetupWorker>();

    // NEXT_PUBLIC_MOCK_PATH 变更后需要重新启动项目
    // 环境变量的改变不会触发 HMR
    useEffect(() => {
        if (
            typeof window !== "undefined" &&
            process.env.NODE_ENV === "development" &&
            process.env.NEXT_PUBLIC_MOCK_PATH
        ) {
            const browserWorker = require("msw/browser").setupWorker();
            // !!不能在运行时动态执行 静态操作
            // @ts-ignore 
            const context = require.context(
                `@/mocks/`,
                true,
                /\.(ts$|js$)/,
                "sync"
            );
            const contextKeysArr = context?.keys() || [];
            const filesPathArr = getMockFilesPath(process.env.NEXT_PUBLIC_MOCK_PATH || "")?.map((item) => `mocks/${item}`) || [];
            const needUseWorkerArr = filterPaths(contextKeysArr, filesPathArr);
            
            console.info('%c引入的文件路径:', 'color: #3498db; font-weight: bold;', needUseWorkerArr)

            needUseWorkerArr.forEach((key: string) => {
                // const moduleName = key?.replace(/\.\/(.*)\.(ts$|js$)/, "$1");
                const mockModule = context(key).default;
                if (!isNil(mockModule) || (!isEmpty(mockModule) && isArray(mockModule))) {
                    browserWorker.use(...(isArray(mockModule) ? mockModule : mockModule.values()));
                }
            });
            browserWorker?.start({ quiet: true });
            setWorker(browserWorker);
        }
    }, []);

    // 组件卸载时停止 worker
    useEffect(() => {
        return () => {
            worker?.stop();
        };
    }, [worker]);

    return worker;
};
