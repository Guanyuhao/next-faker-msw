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
      import("@/mocks/browser").then((res) => {
        res?.worker.start();
        setWorker(res?.worker);
      });
    }
  }, []);

  return worker;
};
