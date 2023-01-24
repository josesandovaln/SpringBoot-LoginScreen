const nome = document.getElementById("nome")
const usuario = document.getElementById("usuario")
const email = document.getElementById("email")
const senha = document.getElementById("senha")



function cadastroUsuario () {

    fetch("http://localhost:8082/cadastrar", 
        {

            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-type' : 'application/json'
            },

            body: JSON.stringify({
                nome : nome.value,
                usuario : usuario.value,
                email : email.value,
                senha : senha.value
            })

        })

        .then( function(res) { console.log(res)})
        .catch( function(res){ console.log(res)})
}