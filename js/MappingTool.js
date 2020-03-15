class MappingTool {
    constructor() {
        this.map = {
            "1": "/icons/A.png",
            "2": "/icons/B.png"
        }
    }

    getUri(id) {
        return this.map[id];
    }
}