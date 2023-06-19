function initDataTable(id, obje) {
    return table = new DataTable(id, obje);
}

function renderUser(data) {
    var myTable = document.getElementById('myTable');
    var header = myTable.querySelector('thead'), headerTh = '', headerData = [];
    var body = myTable.querySelector('tbody'), bodyTr = '';
    data.forEach(eachEl => {
        var allTd = '';
        Object.keys(eachEl).forEach(function (eachKey) {
            if (!headerData.includes(eachKey)) {
                headerTh += `<th>${getLabel(eachKey)}</th>`
                headerData.push(eachKey);
            }
            allTd += `<td>${getLabel(eachEl[eachKey])}</td>`;
        })
        bodyTr += `<tr>${allTd}<td><a href="/update/${eachEl._id}">Edit</a></td> </tr>`;
    });
    header.querySelector('tr').innerHTML = headerTh + `<th>Update Data</th>`;
    body.innerHTML = bodyTr;
    initDataTable("#myTable", {})
}

function renderUserFormData(obj) {
    // Object.keys(obj).forEach(function (key) {
    //     try {
    //         var allel = document.querySelectorAll('[name=' + key + ']');
    //         allel.forEach(function (el) {
    //             if (el.tagName == 'SELECT') {
    //                 el.value = obj[key];
    //             } else if (el.tagName == 'INPUT') {
    //                 if (el.type == 'checkbox' || el.type == 'radio') {
    //                     el.checked = obj[key];

    //                     el.closest('.btn').classList.add('active');
    //                     el.closest('.btn').classList.add('btn-success');
    //                 }
    //                 else {
    //                     el.value = obj[key];
    //                 }
    //             }
    //         })
    //     } catch (error) {
    //         console.error(error);
    //     }
    // })
}