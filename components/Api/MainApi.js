import axios from "axios";
const url='http://54.93.207.96/server/'

export default axios.create({
    baseURL:url
})
