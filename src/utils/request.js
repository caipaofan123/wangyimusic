import axios from "axios";
// axios.defaults.baseURL = "http://localhost:3030"
// export default axios
// axios.create({})====>axios实例
const request = axios.create({
    baseURL: "http://localhost:3000"
})

export default request

