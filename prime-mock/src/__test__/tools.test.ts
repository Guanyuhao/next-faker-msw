import { describe, test, expect } from '@jest/globals';
import { getMockFilesPath, filterPaths } from "../tools";

describe("测试[a|b|c] path", () => {
    const regex = /\[([^[\]]+)]/g;
    test("case1: /mock/a/[user|user1|user2]", () => {
        const inputString = "/mock/a/[user|user1|user2]";
        const matches = (inputString.match(regex) || []).flatMap((match) =>
            match
                .slice(1, -1)
                .split("|")
                .map((value) => inputString.replace(match, value.trim()))
        );
        expect(matches).toEqual([
            "/mock/a/user",
            "/mock/a/user1",
            "/mock/a/user2",
        ]);
    });
});

describe("测试 /* path", () => {
    const regex = /\/\*$/;
    test("case1: /mock/a/*", () => {
        const inputString = "/mock/a/*";
        const result = inputString.replace(regex, "/");
        expect(result).toEqual("/mock/a/");
    });

    test("case2:", () => {
        expect(regex.test("/mock/a/")).toEqual(false);
        expect(regex.test("/mock/a/[2,3]")).toEqual(false);
    });
});

describe("测试 getMockFilesPath", () => {
    const path = `mock/a/[1|2|3],mock/user/login, mock/[user1|user2]/*,mock/post/*`;
    test("case: getMockFilesPath", () => {
        const result = getMockFilesPath(path);
        expect(result.length).toEqual(7)
        console.log(JSON.stringify(result, null, 2));
    });
});

describe("路径匹配计算函数 calculateUnion", () => {
    const allPathArr = [
        "/mock/a/one.ts",
        "/mock/a/three.js",
        "/mock/a/two.ts",
        "/mock/user/login/index.ts",
        "/mock/user/login/index2.ts",
        "/mock/user/login/aaa.ts",
        "/mock/login/index3.ts",
        "/mock/login/vvv.ts",
        "/mock/some/other/file.ts",
    ];

    const filePath = [
        "/mock/a/one",
        "/mock/a/three",
        "/mock/login/*",
        "/mock/user/login/aaa",
    ];
    const result = [
        "/mock/a/one.ts",
        "/mock/a/three.js",
        "/mock/user/login/aaa.ts",
        "/mock/login/index3.ts",
        "/mock/login/vvv.ts",
    ];

    test("*匹配多个路径", () => {
        expect(filterPaths(allPathArr, filePath)).toEqual(result);
    });

});
