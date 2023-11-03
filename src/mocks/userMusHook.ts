"use client";
import { useEffect } from "react";

export default () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && process.env.NODE_ENV === "development") {
        import("@/mocks/browser").then(res => {
            res?.worker.start()
        })
    }
  }, []);

  return null;
};