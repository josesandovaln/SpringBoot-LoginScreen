function logar () {

    let email = document.getElementById("email-logar").value;
    let senha = document.getElementById("senha-logar").value;

    if(email == "admin" && senha == "admin") {
        alert('Sucesso');
        location.href = "index2.html";
    } else {
        alert('Usuario ou senha incorretos');
    }

}