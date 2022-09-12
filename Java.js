const form = document.getElementById("form-tabela");
const nome = [];
const telefone = [];

let linhas = "";

form.addEventListener("submit", function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();

})

function adicionaLinha() {
    
    const inputNomeTabela = document.getElementById("nome_agenda")
    const inputTelefoneTabela = document.getElementById("telefone_agenda")

    if (telefone.includes(inputTelefoneTabela.value)) {
        alert(`O numero: ${inputTelefoneTabela.value} já foi inserido`);
    } else {
        nome.push(inputNomeTabela.value);
        telefone.push(inputTelefoneTabela.value);

        let linha = "<tr>";
        linha += `<td>${inputNomeTabela.value}</td>`
        linha += `<td>${inputTelefoneTabela.value}</td>`
        linha += `</tr>`
    
        linhas += linha;
    }

        inputNomeTabela.value = "";
        inputTelefoneTabela.value = ""; 

    }      

    function atualizaTabela() {
        const corpoTabela = document.querySelector("tbody")
        corpoTabela.innerHTML = linhas;
    }




