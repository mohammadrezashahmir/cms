function show_message(title, message, icon) {
    Swal.fire({
        title: title,
        text: message,
        icon: icon,
    })
}


function addProp() {
    const key_in = $('#props_key')
    const value_in = $('#props_value')
    if (key_in.val() && value_in.val()) {
        const propsInput = $('#id_props')
        let props = propsInput.val() ? JSON.parse(propsInput.val()) : [];
        props.push({key: key_in.val(), value: value_in.val()});
        propsInput.val(JSON.stringify(props))
        key_in.val('');
        value_in.val('');

        displayProps();
    } else {
        show_message('خطا', 'هر دو فیلد کلید و مقدار باید پر شوند', 'error')
    }
}

function displayProps() {
    const propsInput = $('#id_props')
    const props = propsInput.val() ? JSON.parse(propsInput.val()) : [];
    const propsList = document.getElementById('props_list')
    propsList.innerHTML = '';
    props.forEach((prop, index) => {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        td1.innerHTML = prop.key
        td2.innerText = prop.value
        td3.innerHTML = `<button onclick="delete_prop_item(${index})" type="button" id="" class="btn btn-danger mr-1 delete-prop-btn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash w-4 h-4"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></button>`
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        propsList.appendChild(tr);
    });
}
function delete_prop_item(index) {
    const propsInput = $('#id_props')
    let list_p = JSON.parse(propsInput.val())
    list_p.splice(index, 1)
    propsInput.val(JSON.stringify(list_p))
    displayProps()
}

function sendInputValuesToUrl(input) {
    const url = new URL(window.location.href);
    // حذف پارامترهای قبلی با همان نام
    url.searchParams.delete(input.getAttribute('name'));
    if (input.value) {
        // اضافه کردن پارامترهای ورودی به baseUrl
        url.searchParams.append(input.getAttribute('name'), input.value);
    }
    // به‌روزرسانی URL
    window.location.href = url
}
