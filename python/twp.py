import json
from googletrans import Translator

# 读取 JSON 文件
json_data = {
    "home.test": "{#测试#}",
    "home.banner.title": "{#鏈接數字資產与机构的桥梁#}",
    "home.banner.secondTitle": "{#面向机构客户的 B2B 數字資產技術服務平台#}",
    "home.banner.requestDemo": "{#請求演示#}",
    "home.banner.message1": "{#MPC 托管解決方案保障資產存儲安全#}",
    "home.banner.message2": "{#甄選全球底層資產一站式資產配置#}",
    "home.banner.message3": "{#資產披露清晰，风控為先開放透明#}",
    "home.swiper.title": "{#為机构提供定制化資產配置解決方案#}",
    "home.swiper.bitmain.title":
        "{#安全的加密貨幣私鑰托管商和資產配置管理操作平台#}",
    "home.swiper.bitmain.content":
        "{#比特大陸是全球領先的數字貨幣礦機厂商，旗下品牌 ANTMINER 长期在行业內保持技術和市場優勢地位，客户覆盖全球100多个国家和地區。#}",
    "home.swiper.bitmain.message1":
        "{#通過 MPC 私鑰托管服务，管理保护數億美金的自營資金#}",
    "home.swiper.bitmain.message2":
        "{#通過定制理財，鏈接 Staking 和 Defi 的服务商，獲取穩健收益#}",
    "home.swiper.bitmain.message3":
        "{#通過交易服务商網絡，轉賬至交易所并在同交易所賬戶间進行資產管理#}",
    "home.swiper.antpool.title":
        "{#安全的加密貨幣私鑰托管商和資產配置管理操作平台#}",
    "home.swiper.antpool.content":
        "{#比特大陸是全球領先的數字貨幣礦機厂商，旗下品牌 ANTMINER 长期在行业內保持技術和市場優勢地位，客户覆盖全球100多个国家和地區。#}",
    "home.swiper.antpool.message1":
        "{#通過 MPC 私鑰托管服务，管理保护數億美金的自營資金#}",
    "home.swiper.antpool.message2":
        "{#通過定制理財，鏈接 Stacking 和 Defi 的服务商，獲取穩健收益#}",
    "home.swiper.antpool.message3":
        "{#通過交易服务商網絡，轉賬至交易所并在同交易所賬戶间進行資產管理#}",
    "home.bridge.title": "{#“橋” 接机构客戶與數字資產#}",
    "home.bridge.message1.title": "{#配置型買方#}",
    "home.bridge.message1.content":
        "{#持幣機構、對沖基金、家族辦公室、平臺機構方#}",
    "home.bridge.message2.title": "{#礦業生態機構#}",
    "home.bridge.message2.content": "{#礦場主、礦工、礦業算力平臺#}",
    "home.bridge.message3.title": "{#大宗交易商#}",
    "home.bridge.message3.content":
        "{#提供交易、場外大宗、經紀商、API等多種數字資產流動性解決方案，支持14家交易所的流动性鏈接#}",
    "home.bridge.message4.title": "{#礦機融資租賃服務商#}",
    "home.bridge.message4.content":
        "{#鏈接數字資產借貸服務及定制化獨特礦業金融產品#}",
    "home.bridge.message5.title": "{#資產服务提供商#}",
    "home.bridge.message5.content": "{#固定收益、結構化產品、RWA等#}",
    "home.bridge.card1.title": "{#合規#}",
    "home.bridge.card1.content": "{#機構KYC流程，僅在合規地區展業#}",
    "home.bridge.card2.title": "{#安全#}",
    "home.bridge.card2.content": "{#MPC 多簽安全存儲方案#}",
    "home.bridge.card3.title": "{#風控#}",
    "home.bridge.card3.content": "{#甄選全球優質底層資產供應商#}",
    "home.advantage.title": "{#平台優勢#}",
    "home.advantage.message1.title": "{#“橋”接全球資產資產配置多元化#}",
    "home.advantage.message1.content":
        "{#平臺提供多元化資產，滿足用戶不同的風險偏好與收益需求,用戶可以根據市場環境構建更加穩定的投資組合,降低組合波動風險,實現穩定增值。#}",
    "home.advantage.message2.title": "{#去中心化存儲技術保障資產安全#}",
    "home.advantage.message2.content":
        "{#平臺採用業內領先的 MPC-TSS 技術多方簽名方式存儲加密資產，用去中心化的方式保障安全，排除單一方作惡风险，有效降低第三方平臺風險。#}",
    "home.advantage.message3.title": "{#風控第一，開放透明打造安心投資體驗#}",
    "home.advantage.message3.content":
        "{#從廣泛的投資渠道和機會中甄選被市場驗證的底層資產供應商，進行全流程風控，堅持開放透明的信息披露原則，各類資產標的數據實時呈現。#}",
    "home.advantage.message4.title": "{#灵活定制化24*7服务#}",
    "home.advantage.message4.content":
        "{#在專業團隊的全天候交互中，机构體驗到定制化服务，根据不同的資產配置需求和风险偏好，資產端可以更灵活的按机构需求提供定制方案。#}",
    "home.MPC.title": "{#MPC 托管技術 保障資產安全#}",
    "home.MPC.content.text1":
        "{#Antalpha Prime 採用了全新的基於多方計算（MPC）技術的自托管解決方案，具有更流暢的工作流程、更強大的私鑰安全管理和更多元的投資資產選擇。#}",
    "home.MPC.content.text2":
        "{#私鑰分片在安全的環境下獨立生成。然後各方共同簽署交易，而無需在任何時候嚮彼此暴露各自的私鑰分片或完整形成私鑰，由此消除了單點故障風險。#}",
    "home.MPC.tips.tip1": "{#切片1 - 客户通過 Antalpha Prime 控制#}",
    "home.MPC.tips.tip2": "{#切片2 - 客户通過 Cobo Auth 控制#}",
    "home.MPC.tips.tip3": "{#切片3 - NUMEN 冷儲存，日常離線不参与簽署交易#}",
    "home.assetConfig.title": "{#隨時隨地，掌控資產配置#}",
    "home.assetConfig.message1.title": "{#借貸#}",
    "home.assetConfig.message1.content":
        "{#提供包括礦業融資租賃和配資貸款等貸款產品#}",
    "home.assetConfig.message2.title": "{#閃兌#}",
    "home.assetConfig.message2.content":
        "{#使用法定貨幣或其他加密貨幣購買加密貨幣#}",
    "home.assetConfig.message3.title": "{#收益#}",
    "home.assetConfig.message3.content":
        "{#提供包括固定收益產品、DeFi 質押等產品#}",
    "home.assetConfig.message4.title": "{#投資#}",
    "home.assetConfig.message4.content":
        "{#提包括加密基金、RWA和衍生品等產品#}",
    "home.assetConfig.message5.title": "{#交易#}",
    "home.assetConfig.message5.content":
        "{#鏈接交易所和外部經紀商服務，便捷大宗交易#}",
    "home.footer.title": "{#马上开始無與倫比的數字資產配置之旅#}",
    "home.footer.btn": "{#請求演示#}",
    "home.latestNews.title": "{#最新動態#}",
    "home.latestNews.seeMore": "{#了解更多#}",
    "header.login": "{#產品#}",
    "header.requestDemo": "{#请求演示#}",
    "footer.copyright":
        "{#Copyright © 2021 - 2023 Antalpha Platform Technologies Limited.#}",
    "footer.privacyPolicy": "{#隱私政策#}",
    "footer.cookiePolicy": "{#Cookie 政策#}",
    "footer.company": "{#關於我們#}",
    "footer.News": "{#新聞#}",
    "about.banner.title": "{#鏈接數字資產与机构的桥梁#}",
    "about.mission.title": "{#我們的使命與價值觀#}",
    "about.mission.content":
        "{#團隊秉承 “風控第一，開放透明” 的服務理念，利用技術與金融創新，創造 可監控、可審計、可追溯、規則統一的第三方平臺環境，為机构客戶建立起數字資產與資本的橋梁。與客戶、員工和社區實現共同成長。#}",
    "about.mission.card1.title": "{#開放透明  內外一致#}",
    "about.mission.card1.content":
        "{#我們极力保持我們的文化，真誠、真实、良性、主动，是我們追求的組織狀態，未來我們還會不斷優化和迭代自身！#}",
    "about.mission.card2.title": "{#保持敏銳  專注優質資產#}",
    "about.mission.card2.content":
        "{#我們熱愛這個个行业，重视周期和尊重法律，我們認為好的產品是解决問題的并被需要的；所以保持鮮活的视角，不斷發現新的資產，親自評估和驗證风险，站在机构视角去選擇。#}",
    "about.mission.card3.title": "{#多元包容全球化團隊#}",
    "about.mission.card3.content":
        "{#我們在全球有着多元化的伙伴們，总部駐扎在新加坡；他們精通于自己的領域，并常葆熱情的与18个地區，5大洲的伙伴協同，專注机构所需。#}",
    "about.growing.title": "{#不斷成長#}",
    "about.growing.content": "{#一路走來，我們已經達到了重要的里程碑#}",
    "about.growing.one.content":
        "{#比特大陸是全球最大的比特幣礦業公司。BTC和其他加密貨幣挖礦服務器的市場份額第一，設計、制造和銷售用於比特幣挖礦的專用集成電路 (ASIC) 芯片#}",
    "about.growing.two.content":
        "{#Antpool 是由比特大陸科技於 2014 年創立的中國加密貨幣礦池，是目前世界上最大的礦池之一#}",
    "about.growing.three.content": "{#Antalpha 成立#}",
    "about.growing.four.item1.title": "{#全球化#}",
    "about.growing.four.item1.content": "{#業務範圍擴展到全球#}",
    "about.growing.four.item2.title": "{#收益#}",
    "about.growing.four.item2.content1": "{#有效把握ETH2.0機遇#}",
    "about.growing.four.item2.content2": "{#亞太最大鏈上流動性提供方#}",
    "about.growing.five.content":
        "{#5月，推出核心產品 Antalpha Prime 技術平臺，提供礦業生態一站式金融服務#}",
    "about.growing.five.item1.title": "{#借貸#}",
    "about.growing.five.item1.content":
        "{#6月，鏈接特色供應鏈金融，總規模突破7億美金#}",
    "about.growing.five.item2.title": "{#RWA#}",
    "about.growing.five.item2.content":
        "{#7月，鏈接 RWA 加密資產，投資現實世界的資產#}",
    "about.global.title": "{#我們的全球辦公室#}",
    "about.global.content":
        "{#Antalpha 總部位於新加坡，在英國、澳洲、韓國、日本、美國、香港等多地設有辦事處#}",
    "about.footer.title": "{#馬上開啟您的Antalpha Prime 資產配置之旅#}",
    "about.footer.btnText": "{#請求演示#}",
    "requestAccess.title": "{#了解為什麼組織信任Antalpha#}",
    "requestAccess.form.firstName": "{#名#}",
    "requestAccess.form.lastName": "{#姓氏#}",
    "requestAccess.form.jobTitle": "{#職稱#}",
    "requestAccess.form.companyName": "{#公司名稱#}",
    "requestAccess.form.email": "{#電子郵件地址#}",
    "requestAccess.form.description": "{#您會如何描述您自己或您的公司#}",
    "requestAccess.form.hobbity": "{#您對什麼類型的業務感興趣#}",
    "requestAccess.form.submit": "{#提交#}",
    "requestAccess.form.enterPlaceholder": "{#请输入#}",
    "requestAccess.form.selectPlaceholder": "{#请选择#}",
    "requestAccess.form.select.DeFi": "{#DeFi/加密基金#}",
    "requestAccess.form.select.Hedge": "{#對衝基金#}",
    "requestAccess.form.select.Family": "{#家庭企業#}",
    "requestAccess.form.select.Asset": "{#資產管理#}",
    "requestAccess.form.select.Fintech": "{#金融科技/交易所/B2C平台#}",
    "requestAccess.form.select.Service": "{#服務商#}",
    "requestAccess.form.select.Custody": "{#託管/錢包技術#}",
    "requestAccess.form.select.Corporate": "{#企業#}",
    "requestAccess.form.select.NFT": "{#NFT/遊戲#}",
    "requestAccess.form.select.Venture": "{#風險基金/私募股權基金#}",
    "requestAccess.form.select.DAO": "{#DAO(去中心化自助組織)/DeFi協議#}",
    "requestAccess.form.select.Media": "{#媒體/公關/品牌#}",
    "requestAccess.form.multSelect.Lending":
        "{#借貸（礦業融資租賃/抵押貸款）#}",
    "requestAccess.form.multSelect.Trading": "{#交易（經紀服務）#}",
    "requestAccess.form.multSelect.Asset":
        "{#資產管理（固定收益/對衝基金/礦業基金）#}",
    "requestAccess.form.multSelect.Crypto": "{#加密資產儲存（MPC-TSS技術）#}",
    "requestAccess.form.multSelect.Media": "{#媒體/報刊#}",
    "requestAccess.form.multSelect.Partnership": "{#合伙#}",
    "requestAccess.form.multSelect.Referral": "{#推薦計劃#}",
    "requestAccess.form.multSelect.Careers": "{#職業機會#}",
    "news.banner.title": "{#新聞#}",
    "news.banner.content": "{#在這裡了解我們的最新動態#}",
    "news.footer.title": "{#品牌合作請聯係我們#}",
    "news.footer.btnText": "{#聯繫我們#}",
};

def translate_to_zhcn(json_data):
    # 初始化翻译器
    translator = Translator()

    # 创建一个空的字典用于存储翻译结果
    translated_dict = {}

    # 遍历 JSON 数据进行翻译
    for key, value in json_data.items():
        # 只翻译以 "{#" 开头，以 "#}" 结尾的字符串
        if value.startswith("{#") and value.endswith("#}"):
            text_to_translate = value[2:-2]  # 去除 "{#" 和 "#}"
            translation = translator.translate(text_to_translate, src='auto', dest='zh-CN').text
            translated_dict[key] = f"{{#{translation}#}}"
        else:
            # 对于不需要翻译的内容，保持原样
            translated_dict[key] = value

    return translated_dict



# 进行翻译
translated_data = translate_to_zhcn(json_data)

# 输出翻译结果到新的 JSON 文件
with open('zh_cn.json', 'w', encoding='utf-8') as json_output:
    json.dump(translated_data, json_output, ensure_ascii=False, indent=4)

print("翻译完成，并已保存到 zh_cn.json 文件。")
