const domain = "http://localhost:3000"

// Запрос данных с сервера юзера + комнат
function viewUserCard() {
    fetch(domain + '/contacts')
        .catch(err => console.log(err))
        .then(response => response.json())
        .then(result => printUserCard(result))
}

viewUserCard();

function printUserCard(result) {
    for (let key in result) {
        let row = document.createElement('tr')
        row.innerHTML = `
        <td>${result[key].id}</td>
        <td>${result[key].name}</td>
        <td>${result[key].email}</td>
        <td>${result[key].phone}</td>
        `
        document.querySelector('.contacts').appendChild(row)

    }
}