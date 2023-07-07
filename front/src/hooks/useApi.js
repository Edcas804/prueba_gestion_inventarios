import axios from "../api/axios";
import {useEffect} from "react";
const useApi = () => {
    useEffect(() => {
        const requestIntercept = axios.interceptors.request.use(
            config => {
                if (!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer xxx-xxx-xx-xx-xx}`;
                }
                return config;
            }, (error) => Promise.reject(error)
        );

        const responseIntercept = axios.interceptors.response.use(
            response => response,
            async (error) => {
                const prevRequest = error?.config;
                if (error?.response?.status === 403 && !prevRequest?.sent) {}
                if (error?.response?.status === 401 && !prevRequest?.sent) {
                    return error.response
                }
                return Promise.reject(error);
            }
        );

        return () => {
            axios.interceptors.request.eject(requestIntercept);
            axios.interceptors.response.eject(responseIntercept);
        }
    }, [])

    return axios;
}

export default useApi;