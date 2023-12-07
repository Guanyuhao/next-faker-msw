import { Noto_Sans_HK } from "next/font/google";
import LocalFont from "next/font/local";

const dinproLocalFont = LocalFont({
    src: [
        {
            path: "./dinpro-regular.woff2",
            weight: "normal",
            style: "normal",
        },
        {
            path: "./dinpro-regular.woff",
            weight: "normal",
            style: "normal",
        },
    ],
    display: "swap",
    variable: "--dinpro",
    adjustFontFallback: false,
    preload: true,
});

const sansHk = Noto_Sans_HK({
    weight: "400",
    display: "swap",
    subsets: ["latin"],
    variable: "--noto-sans-hk",
    adjustFontFallback: false,
    fallback: ["var(--dinpro)"],
    preload: false,
});

const variableStr = `${dinproLocalFont.variable} ${sansHk.variable}`;
const zhTwVariableStr = `${dinproLocalFont.variable} ${sansHk.variable}`;

export default {
    "en-us": variableStr,
    "zh-tw": zhTwVariableStr
};
