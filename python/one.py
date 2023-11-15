from googletrans import Translator
import json
import time
# 记录开始时间
start_time = time.time()

with open('./lang/keys_888.json', 'r', encoding='utf-8') as json_file:
    text_to_translate = json.load(json_file)

# 初始化翻译器
translator = Translator()

# 创建一个空的字典用于存储翻译结果
translated_dict = {}

# 遍历文本进行翻译
for key, value in text_to_translate.items():
    translation = translator.translate(value, src='zh-cn', dest='en').text
    translated_dict[key] = translation

# 输出翻译结果到 en.json 文件
with open('./lang/en-us.json', 'w', encoding='utf-8') as json_file:
    json.dump(translated_dict, json_file, ensure_ascii=False, indent=4)


# 记录结束时间
end_time = time.time()

print("翻译完成，并已保存到 en-us.json 文件。")

# 计算执行时间
execution_time = end_time - start_time

print(f"代码执行时间：{execution_time} 秒")