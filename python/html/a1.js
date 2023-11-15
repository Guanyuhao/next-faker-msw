import React from "react";
import Link from "next/link";

import { HOME_TEXT_MAP, NEWS_IMAGES, NEWS_DATA } from "@/config/prime-home-page-config";

export default function NewsPage() {
    return (
        <main className="w-full flex flex-col items-center">
            <div className="flex justify-center w-full bg-[url('~/assets/image/news/m-news-banner.svg')] md:bg-[url('~/assets/image/news/news-banner.svg')] bg-no-repeat bg-cover bg-center ">
                <div className="z-10 max-w-screen-xl w-full pt-[88px] pb-[55px] px-6 md:px-[60px] md:pt-40 md:pb-32">
                    <div className="text-4xl font-bold text-[#202228]">
                        {"{#新闻#}"}
                    </div>
                    <div className="mt-2.5 text-xl text-[#202228]">
                        {"{#在这里了解我们的最新动态#}"}
                    </div>
                </div>
            </div>
            <div className="max-w-screen-xl w-full px-6 md:px-[120px]">
                <Link href={`/{#LANG#}/news/${NEWS_DATA[0].id}`}>
                    <div className="w-full md:h-[320px] md:flex md:flex-row bg-[#F5F6F8] my-10 md:mt-20 md:mb-12 rounded overflow-hidden hover:shadow-[0_1px_4px_0px_rgba(0,0,0,0.2)]">
                        <div className="md:flex-[5] relative">
                            <img
                                src={NEWS_IMAGES[0].src}
                                alt="Picture of the author"
                                style={{
                                    objectFit: "cover",
                                }}
                                className="w-full h-full"
                            />
                        </div>
                        <div className="px-6 py-4 md:flex-[6] md:ml-8">
                            <div className="text-base text-[#4B4D52] md:mt-6">
                                {"{#新闻#}"}
                            </div>
                            <div className="text-2xl text-[#202228] mt-4 h-16 line-clamp-2 overflow-hidden">
                                {NEWS_DATA[0].title}
                            </div>
                            <div className="text-sm text-[#202228] mt-4 h-16 line-clamp-2 overflow-hidden">
                                {NEWS_DATA[0].abstract}
                            </div>
                            <div className="text-sm text-[#78797D] opacity-40 mt-4">
                                {NEWS_DATA[0].date}
                            </div>
                        </div>
                    </div>
                </Link>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 auto-cols-max">
                    <div className="w-full bg-[#F5F6F8] rounded overflow-hidden hover:shadow-[0_1px_4px_0px_rgba(0,0,0,0.2)]">
                        <Link href={`/{#LANG#}/news/${NEWS_DATA[1].id}`}>
                            <div className="relative">
                                <img
                                    src={NEWS_IMAGES[1].src}
                                    alt="Picture of the author"
                                    style={{
                                        objectFit: "cover",
                                    }}
                                    className="w-full h-auto"
                                />
                            </div>
                            <div className="mr-4 px-6 py-4">
                                <div className="text-base text-[#4B4D52]">
                                    {"{#新闻#}"}
                                </div>
                                <div className="text-2xl text-[#202228] mt-4 h-16 line-clamp-2 overflow-hidden">
                                    {NEWS_DATA[1].title}
                                </div>
                                <div className="text-sm text-[#202228] mt-4 h-16 line-clamp-3 overflow-hidden">
                                    {NEWS_DATA[1].abstract}
                                </div>
                                <div className="text-sm text-[#78797D] mt-4">
                                    {NEWS_DATA[1].date}
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="w-full bg-[#F5F6F8] rounded overflow-hidden hover:shadow-[0_1px_4px_0px_rgba(0,0,0,0.2)]">
                        <Link href={`/{#LANG#}/news/${NEWS_DATA[2].id}`}>
                            <div className="relative">
                                <img
                                    src={NEWS_IMAGES[2].src}
                                    alt="Picture of the author"
                                    style={{
                                        objectFit: "cover",
                                    }}
                                    className="w-full h-auto"
                                />
                            </div>
                            <div className="mr-4 px-6 py-4">
                                <div className="text-base text-[#4B4D52]">
                                    {"{#新闻#}"}
                                </div>
                                <div className="text-2xl text-[#202228] mt-4 h-16 line-clamp-2 overflow-hidden">
                                    {NEWS_DATA[2].title}
                                </div>
                                <div className="text-sm text-[#202228] mt-4 h-16 line-clamp-3 overflow-hidden">
                                    {NEWS_DATA[2].abstract}
                                </div>
                                <div className="text-sm text-[#78797D] mt-4">
                                    {NEWS_DATA[2].date}
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="w-full bg-[#F5F6F8] rounded overflow-hidden hover:shadow-[0_1px_4px_0px_rgba(0,0,0,0.2)]">
                        <Link href={`/{#LANG#}/news/${NEWS_DATA[3].id}`}>
                            <div className="relative">
                                <img
                                    src={NEWS_IMAGES[3].src}
                                    alt="Picture of the author"
                                    style={{
                                        objectFit: "cover",
                                    }}
                                    className="w-full h-auto"
                                />
                            </div>
                            <div className="mr-4 px-6 py-4">
                                <div className="text-base text-[#4B4D52]">
                                    {"{#新闻#}"}
                                </div>
                                <div className="text-2xl text-[#202228] mt-4 h-16 line-clamp-2 overflow-hidden">
                                    {NEWS_DATA[3].title}
                                </div>
                                <div className="text-sm text-[#202228] mt-4 h-16 line-clamp-3 overflow-hidden">
                                    {NEWS_DATA[3].abstract}
                                </div>
                                <div className="text-sm text-[#78797D] mt-4">
                                    {NEWS_DATA[3].date}
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="flex justify-center my-10 md:mb-[114px]">
                    {/* <div className='border-2 border-solid border-[#202228] px-20 py-3'>{"{#查看更多#}"}</div> */}
                </div>
            </div>
            <div className="flex justify-center w-full bg-[url('~/assets/image/news/news-footer-m.svg')] md:bg-[url('~/assets/image/news/news-footer-pc.svg')] bg-no-repeat bg-cover bg-center ">
                <div className="max-w-screen-xl w-full px-6 pt-[50px] pb-[100px] md:px-10 md:py-[60px] ">
                    <div className="text-3xl md:text-4xl md:leading-[56px] font-bold ">
                        {"{#品牌合作请联系我们#}"}
                    </div>
                    <div className="mt-4">
                        <Link
                            href={`/{#LANG#}/request-access`}
                            className="text-base text-white bg-[#2222FF] hover:bg-[#4A4AFF] py-2 px-6"
                        >
                            {"{#联系我们#}"}
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
