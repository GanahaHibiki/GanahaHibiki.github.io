class MappingTool {
    constructor() {
        this.map = {
            "1": "baidu.gif",
            "2": "yuna.jpg"
        }
    }

    getUri(id) {
        return this.map[id];
    }
}