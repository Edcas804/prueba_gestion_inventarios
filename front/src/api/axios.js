import axios from 'axios'
import {CONFIG} from "../config";

const BASE_URL = CONFIG.api.baseUrl

export default axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' }
})
