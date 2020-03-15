class MappingTool {
    constructor() {
        this.map = {
            "1": "A.png",
            "2": "B.png"
        }
    }

    getUri(id) {
        return this.map[id];
    }
}