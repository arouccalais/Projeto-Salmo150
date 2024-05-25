function cadastrar(){
    var nomeVar = nome.value;
    var telefoneVar = telefone.value;
    var emailVar = email.value;
    var senhaVar = senha.value;
    console.log('Chegou até aqui')

    if (
      nomeVar == "" ||
      telefoneVar == "" ||
      emailVar == "" ||
      senhaVar == ""
    ) { 
        alert ("Mensagem de erro para todos os campos em branco");
    } else {
      console.log('Chegou ate aqui')
      fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // crie um atributo que recebe o valor recuperado aqui
          // Agora vá para o arquivo routes/usuario.js
          nomeServer : nomeVar,
          telefoneServer : telefoneVar,
          emailServer: emailVar,
          senhaServer: senhaVar
        }),
      })
        .then(function (resposta) {
          console.log("resposta: ", resposta);
          setTimeout(() => {
            window.location = "./login.html";
          }, "1000");
        })
        .catch(function (resposta) {
          console.log(`#ERRO: ${resposta}`);
        });


    }
    }