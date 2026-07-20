import axios from "axios";
import toast from "react-hot-toast";
import { API_URL } from "../config/api";

// Shared HTTP client: attaches the auth token automatically and gives
// every caller consistent error handling, instead of each component
// re-reading localStorage and building headers by hand.
const apiClient = axios.create({
    baseURL: API_URL,
    timeout: 30000,
});

apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = token;
    }
    return config;
});

apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        const status = error.response?.status;
        const message = error.response?.data?.message;

        if (status === 401) {
            // Token missing/expired/invalid — clear local session so the UI
            // doesn't keep sending a dead token on every subsequent request.
            localStorage.removeItem("token");
            localStorage.removeItem("user");
        } else if (status === 429) {
            toast.error(message || "Too many requests. Please slow down.");
        } else if (!error.response) {
            toast.error("Network error. Please check your connection.");
        }

        return Promise.reject(error);
    }
);

export default apiClient;
