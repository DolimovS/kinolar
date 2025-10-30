import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5267/",
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true
});

// 🔐 Har bir so‘rovga tokenni avtomatik qo‘shish
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        // Fayl yuborilsa (FormData bo‘lsa) headerni o‘zgartirish
        if (config.data instanceof FormData) {
            config.headers["Content-Type"] = "multipart/form-data";
        }

        return config;
    },
    (error) => Promise.reject(error)
);

// ⚠️ Xatoliklarni boshqarish
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            // Token yaroqsiz yoki muddati o‘tgan
            if (error.response.status === 401) {
                console.error("❌ Unauthorized — token eskirgan yoki noto‘g‘ri");
                localStorage.removeItem("token");
            }

            // Fayl hajmi yoki format xatosi
            if (error.response.status === 400) {
                console.error("⚠️ So‘rov xatosi:", error.response.data?.error);
            }

            // Server bilan bog‘liq muammo
            if (error.response.status >= 500) {
                console.error("💥 Serverda xatolik:", error.response.statusText);
            }
        } else if (error.request) {
            console.error("🌐 Tarmoq xatosi — serverga ulanishda muammo:", error.message);
        } else {
            console.error("❗ So‘rov xatosi:", error.message);
        }

        return Promise.reject(error);
    }
);

export default api;