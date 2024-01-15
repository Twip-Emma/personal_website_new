import axios from "axios"

export default {
    // 获取一个新密钥
    async getRandomImageByType(type) {
        var _data = undefined
        await axios.get("/blog/image/getRandomImageByType?type=" + type, {
            headers: {
                "Admin": "F0D2015A4F16E181841D22E469E3F458"
            }
        }).then(
            response => {
                _data = response.data
            }
        )
        return _data
    }
}