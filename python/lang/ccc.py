import json

def merge_and_translate(d_json, f_json):
    g_json = {}

    for key_f, value_f in f_json.items():
        key_d = d_json.get(value_f, value_f)
        g_json[key_f] = key_d

    return g_json

def main():
    with open('./C.json', 'r', encoding='utf-8') as file_d:
        d_json = json.load(file_d)

    with open('./888_繁体还原英文.json', 'r', encoding='utf-8') as file_f:
        f_json = json.load(file_f)

    g_json = merge_and_translate(d_json, f_json)

    with open('./G.json', 'w', encoding='utf-8') as file_g:
        json.dump(g_json, file_g, ensure_ascii=False, indent=2)

if __name__ == "__main__":
    main()
