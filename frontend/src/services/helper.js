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
