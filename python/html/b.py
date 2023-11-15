# 把一个js 文件中带有中文引号的值替换为``
import re

# 读取 JavaScript 文件
with open('./config.js', 'r', encoding='utf-8') as js_file:
    js_code = js_file.read()

# 使用正则表达式进行替换
js_code = re.sub(r'"([^"]*?“[^"]*?”[^"]*?)"', r'`\1`', js_code)

# 将修改后的 JavaScript 代码写回文件
with open('./your_file_modified.js', 'w', encoding='utf-8') as modified_js_file:
    modified_js_file.write(js_code)

print("替换完成")
