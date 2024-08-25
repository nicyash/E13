/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGVBQWU7QUFDN0IsY0FBYyxpQkFBaUI7QUFDL0IsY0FBYyxrQkFBa0I7QUFDaEMsY0FBYyxrQkFBa0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZTEzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRvbWFpbiA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCJcclxuXHJcbi8vINCX0LDQv9GA0L7RgSDQtNCw0L3QvdGL0YUg0YEg0YHQtdGA0LLQtdGA0LAg0Y7Qt9C10YDQsCArINC60L7QvNC90LDRglxyXG5mdW5jdGlvbiB2aWV3VXNlckNhcmQoKSB7XHJcbiAgICBmZXRjaChkb21haW4gKyAnL2NvbnRhY3RzJylcclxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKHJlc3VsdCA9PiBwcmludFVzZXJDYXJkKHJlc3VsdCkpXHJcbn1cclxuXHJcbnZpZXdVc2VyQ2FyZCgpO1xyXG5cclxuZnVuY3Rpb24gcHJpbnRVc2VyQ2FyZChyZXN1bHQpIHtcclxuICAgIGZvciAobGV0IGtleSBpbiByZXN1bHQpIHtcclxuICAgICAgICBsZXQgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKVxyXG4gICAgICAgIHJvdy5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPHRkPiR7cmVzdWx0W2tleV0uaWR9PC90ZD5cclxuICAgICAgICA8dGQ+JHtyZXN1bHRba2V5XS5uYW1lfTwvdGQ+XHJcbiAgICAgICAgPHRkPiR7cmVzdWx0W2tleV0uZW1haWx9PC90ZD5cclxuICAgICAgICA8dGQ+JHtyZXN1bHRba2V5XS5waG9uZX08L3RkPlxyXG4gICAgICAgIGBcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdHMnKS5hcHBlbmRDaGlsZChyb3cpXHJcblxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9