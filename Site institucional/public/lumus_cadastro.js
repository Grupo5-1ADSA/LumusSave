// JavaScript para exibir a data atual
var dataAtual = new Date();
var dia = dataAtual.getDate();
var mes = dataAtual.getMonth() + 1; // Os meses em JavaScript começam de 0 (janeiro) a 11 (dezembro)
var ano = dataAtual.getFullYear();

var dataFormatada = dia + '/' + mes + '/' + ano;

document.getElementById('data-atual').textContent += dataFormatada;



function botaoCadastro() {
  var nome = input_nome.value
  var username = input_username.value
  var email = input_email.value
  var conf_email = input_confemail.value
  var senha = input_senha.value
  var conf_senha = input_confsenha.value
  var celular = input_celular.value
  var alerta = "";

  validacao.innerHTML = "";

  if (nome == "" || username == "" || email == "" || conf_email == "" || senha == "" || conf_senha == "" || celular == "") {
    alert(`Preencha todos os campos!`)
  }
  else if (email.endsWith(`.com`) == false) {
    validacao.innerHTML += `Email incorreto! <br>`
  }

  else if (conf_email != email) {
    validacao.innerHTML += `Os emails não conferem.<br>`
  }
  else if (username.indexOf(` `) > 0) {
    validacao.innerHTML += `Username não deve conter espaços!<br>`

  } else if (senha.length < 8) {
    validacao.innerHTML += `A senha deve conter no mínimo 8 caracteres.<br>`
  }
  else if (conf_senha != senha) {
    validacao.innerHTML += `As senhas não conferem.<br>`
  }
  else if (celular.length != 11) {
    validacao.innerHTML += `Celular inválido!<br>`
  } else {
    alert(`Cadastro realizado com sucesso`);
  }




  // Enviando o valor da nova input
  fetch("http://localhost:3333/usuarios/cadastrar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // crie um atributo que recebe o valor recuperado aqui
      // Agora vá para o arquivo routes/usuario.js
      nomeServer: nome,
      apelidoServer: username,
      emailServer: email,
      senhaServer: senha,
      telefoneServer: celular
    }),
  })
    .then(function (resposta) {
      console.log("resposta: ", resposta);

      if (resposta.ok) {
        cardErro.style.display = "block";

        mensagem_erro.innerHTML =
          "Cadastro realizado com sucesso! Redirecionando para tela de Login...";

        setTimeout(() => {
          window.location = "login.html";
        }, "2000");

        limparFormulario();
        finalizarAguardar();
      } else {
        throw "Houve um erro ao tentar realizar o cadastro!";
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
      finalizarAguardar();
    });

  return false;
}

// function listar() {
//   fetch("/empresas/listar", {
//     method: "GET",
//   })
//     .then(function (resposta) {
//       resposta.json().then((empresas) => {
//         empresas.forEach((empresa) => {
//           listaEmpresas.innerHTML += `<option value='${empresa.id}'>${empresa.cnpj}</option>`;
//         });
//       });
//     })
//     .catch(function (resposta) {
//       console.log(`#ERRO: ${resposta}`);
//     });
// }

function sumirMensagem() {
  cardErro.style.display = "none";
}


