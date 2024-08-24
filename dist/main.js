fetch("http://localhost:3000/contacts").catch((t => console.log(t))).then((t => t.json())).then((t => function (t) {
    for (let n in t) {
        let e = document.createElement("tr");
        e.innerHTML = `\n        <td>${t[n].id}</td>\n        <td>${t[n].name}</td>\n        <td>${t[n].email}</td>\n        <td>${t[n].phone}</td>\n        `, document.querySelector(".contacts").appendChild(e)
    }
}(t)));