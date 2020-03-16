class MappingTool {
    constructor() {
        this.map = {
            "卡": "图片.jpg",
            "希安": "シアン.png",
            "楚楚": "チュチュ.png",
            "莱托利": "レトリー.png",
            "羊": "モア.png",
            "刺猬": "クロウ.png",
            "大狮子": "アイオーン.png",
            "罗姆": "ロム.png",
            "yaiba": "ヤイバ.png",
            "好旺": "ほわん.png",
            "himeko": "マシマヒメコ.png",
            "黛露敏": "デルミン.png",
            "rufuyu": "ルフユ.png",
            "yasu": "ヤス.png",
            "蜜蜂": "ハッチン.png",
            "joe": "ジョウ.png",
            "双循": "双循.png",
            "太夫": "ダル太夫.png",
            "修造": "ショウゾー.png",
            "小狮子": "アイレーン.png",
            "拉拉林": "ララリン.png",
        }
    }

    getUri(id) {
        return "./icons/" + this.map[id];
    }
}