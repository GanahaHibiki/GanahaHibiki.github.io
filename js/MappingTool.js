class MappingTool {
    constructor() {
        this.map = {
            "卡": "图片.jpg",
            "希安": "希安.png",
            "楚楚": "楚楚.png",
            "莱托利": "莱托利.png",
            "羊": "羊.png",
            "刺猬": "刺猬.png",
            "大狮子": "大狮子.png",
            "罗姆": "罗姆.png",
            "yaiba": "yaiba.png",
            "好旺": "好旺.png",
            "himeko": "himeko.png",
            "黛露敏": "黛露敏.png",
            "rufuyu": "rufuyu.png",
            "yasu": "yasu.png",
            "蜜蜂": "蜜蜂.png",
            "joe": "joe.png",
            "双循": "双循.png",
            "太夫": "太夫.png",
            "修造": "修造.png",
            "小狮子": "小狮子.png",
            "拉拉林": "拉拉林.png",
        }
    }

    getUri(id) {
        return "/icons/" + this.map[id];
    }
}