import re
import json

# 读取 a.json 文件
with open('./a.json', 'r', encoding='utf-8') as json_file:
    json_data = json.load(json_file)

# 读取 a.js 文件
with open('./a.js', 'r', encoding='utf-8') as js_file:
    js_code = js_file.read()

# 遍历 JSON 数据，替换 JS 代码中的值
for key, value in json_data.items():
    # 对于带有中文引号的值，将外层双引号替换为``
    if '“' in value and '”' in value:
        js_code = re.sub(f'HOME_TEXT_MAP\\s*\\[\\s*"{key}"\\s*\\]', f'`{value}`', js_code)
    else:
        js_code = re.sub(f'HOME_TEXT_MAP\\s*\\[\\s*"{key}"\\s*\\]', f'"{value}"', js_code)

# 将修改后的 JS 代码写回 a.js 文件
with open('./a1.js', 'w', encoding='utf-8') as modified_js_file:
    modified_js_file.write(js_code)

print("替换完成")
