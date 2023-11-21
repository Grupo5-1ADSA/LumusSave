// JavaScript para exibir a data atual
var dataAtual = new Date();
var dia = dataAtual.getDate();
var mes = dataAtual.getMonth() + 1; // Os meses em JavaScript começam de 0 (janeiro) a 11 (dezembro)
var ano = dataAtual.getFullYear();

var dataFormatada = dia + '/' + mes + '/' + ano;

document.getElementById('data-atual').textContent += dataFormatada;



function botaoEntrar() {
    var email = input_email.value;
    var senha = input_senha.value;

    if (email == "" || senha == "") {
        alert(`Preencha todos os campos!`)
    }

    aguardar();

    console.log("FORM LOGIN: ", email);
    console.log("FORM SENHA: ", senha);

    fetch("http://localhost:3333/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: email,
            senhaServer: senha
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nome;
                sessionStorage.ID_USUARIO = json.id;
                sessionStorage.AQUARIOS = JSON.stringify(json.aquarios)

                setTimeout(function () {
                    // window.location.href = "dashboards/DashGeral.html";
                    window.location = "dashboards/DashGeral.html";

                }, 1000); // apenas para exibir o loading

            });

        } else {

            console.log("Houve um erro ao tentar realizar o login!");

            resposta.text().then(texto => {
                console.error(texto);
                finalizarAguardar(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;

    function sumirMensagem() {
        cardErro.style.display = "none"
    }
}


// sessão
// function validarSessao() {
//     var email = sessionStorage.EMAIL_USUARIO;
//     var nome = sessionStorage.NOME_USUARIO;

//     var b_usuario = document.getElementById("b_usuario");

//     if (email != null && nome != null) {
//         b_usuario.innerHTML = nome;
//     } else {
//         window.location = "../login.html";
//     }
// }

// function limparSessao() {
//     sessionStorage.clear();
//     window.location = "../login.html";
// }

// // carregamento (loading)
// function aguardar() {
//     var divAguardar = document.getElementById("div_aguardar");
//     divAguardar.style.display = "flex";
// }

// function finalizarAguardar(texto) {
//     var divAguardar = document.getElementById("div_aguardar");
//     divAguardar.style.display = "none";

//     var divErrosLogin = document.getElementById("div_erros_login");
//     if (texto) {
//         divErrosLogin.style.display = "flex";
//         divErrosLogin.innerHTML = texto;
//     }
// }