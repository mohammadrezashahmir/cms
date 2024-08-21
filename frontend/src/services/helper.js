export const convertToFormData = (values) => {
    const formData = new FormData();
    Object.keys(values).forEach(key => {
        const value = values[key];
        if (Array.isArray(value)) {
            value.forEach(item => formData.append(key, item));
        } else {
            formData.append(key, value);
        }
    });
    
    return formData;
}

export const getRelativeTime = (date) => {
    const now = new Date();
    const postDate = new Date(date);
    const seconds = Math.floor((now - postDate) / 1000);
    let interval = Math.floor(seconds / 31536000);
    if (interval > 1) return `${interval} سال پیش`;

    interval = Math.floor(seconds / 2592000);
    if (interval > 1) return `${interval} ماه پیش`;

    interval = Math.floor(seconds / 86400);
    if (interval > 1) return `${interval} روز پیش`;

    interval = Math.floor(seconds / 3600);
    if (interval > 1) return `${interval} ساعت پیش`;

    interval = Math.floor(seconds / 60);
    if (interval > 1) return `${interval} دقیقه پیش`;

    return `${Math.floor(seconds)} ثانیه پیش`;
}