// JavaScript para exibir a data atual
var dataAtual = new Date();
var dia = dataAtual.getDate();
var mes = dataAtual.getMonth() + 1; // Os meses em JavaScript começam de 0 (janeiro) a 11 (dezembro)
var ano = dataAtual.getFullYear();

var dataFormatada = dia + '/' + mes + '/' + ano;

// document.getElementById('data-atual').textContent += dataFormatada;


function botaoEntrar() {
    var email = input_email.value;
    var senha = input_senha.value;

    if (email == "" || senha == "") {
        alert(`Preencha todos os campos!`)
    } else {
        console.log("FORM LOGIN: ", email);
        console.log("FORM SENHA: ", senha);

        fetch("/usuarios/autenticar", {
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

                    setTimeout(function () {
                        // window.location.href = "dashboards/DashGeral.html";
                        window.location = "dashboards/DashGeral.html";

                    }, 500); // apenas para exibir o loading

                });

            } else {

                alert (`Os dados inseridos não foram encontrados`)

                console.log("Houve um erro ao tentar realizar o login!");

                resposta.text().then(texto => {
                    // console.error(texto);
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
}