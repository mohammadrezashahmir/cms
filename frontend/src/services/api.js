import axios from "axios";

// ایجاد یک نمونه از axios
const api = axios.create({
    baseURL: 'http://localhost:8000/'
});

// Interceptor برای مدیریت انقضای توکن
api.interceptors.response.use(
    response => response,
    async (error) => {
        const originalRequest = error.config;

        // اگر توکن منقضی شده باشد و خطای 401 دریافت شود
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            // دریافت توکن تازه‌سازی از localStorage
            const refreshToken = localStorage.getItem('refreshToken');

            if (refreshToken) {
                try {
                    // درخواست توکن جدید با استفاده از توکن تازه‌سازی
                    const { data } = await axios.post('http://localhost:8000/user/token/refresh/', {
                        refresh: refreshToken,
                    });

                    // ذخیره توکن جدید در localStorage
                    localStorage.setItem('accessToken', data.access);

                    // تنظیم توکن جدید در هدر درخواست اصلی
                    originalRequest.headers['Authorization'] = `Bearer ${data.access}`;

                    // ارسال مجدد درخواست اصلی
                    return api(originalRequest);
                } catch (refreshError) {
                    console.log('Refresh token expired or invalid', refreshError);
                    // اگر توکن تازه‌سازی نامعتبر است، کاربر باید دوباره لاگین کند
                    return Promise.reject(refreshError);
                }
            }
        }

        return Promise.reject(error);
    }
);


export const getDataFromServer = async (url) => {
    const token = localStorage.getItem('accessToken');
    const response = await api.get(url, {
        headers: {
            'Authorization': `Bearer ${token}`,
        }
    });
    console.log(response.data);
    return response.data;
};


export const sendDataToServer = async (url, data, method = 'POST') => {
    try {
        const token = localStorage.getItem('accessToken');
        const response = await api({
            url,
            method,
            data,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
            }
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(`An error occurred while ${method === 'POST' ? 'posting' : 'putting'} data to server:`, error);
        throw error;
    }
};


export const deleteDataFromServer = async (url) => {
    const token = localStorage.getItem('accessToken');
    const response = await api.delete(url, {
        headers: {
            'Authorization': `Bearer ${token}`,
        }
    });
    return response.data;
};
