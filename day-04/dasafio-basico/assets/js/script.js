let medicamentos = []

function addMedicamentos() {
    event.preventDefault();
    let nome = document.getElementById('fnomeMedicamento').value;
    let qtdDisponivel = document.getElementById('fqtdDisponivelMedicamento').value;
    let precoUnidade = document.getElementById('fprecoUnidaddeMedicamento').value;
    let classeMedicamento = document.getElementById('fclasseMedicamento').value;

    let novoMedicamento = {
        "id": medicamentos.length + 1,
        "nome": nome,
        "qtdDisponivel": qtdDisponivel,
        "precoUnidade": precoUnidade,
        "classeMedicamento": classeMedicamento,

    }

    if (nome === '' || qtdDisponivel === '' || precoUnidade === '' || classeMedicamento === '') {
        renderAlert();
    } else  {
        medicamentos.push(novoMedicamento)
        renderPaginaDetalhe(nome, qtdDisponivel, precoUnidade)
    }


}
function renderPaginaDetalhe(nome, qtdDisponivel, precoUnidade) {
    let formSection = document.getElementById('formSection')
    formSection.innerHTML = `<div class="detalhesMedicamento">
    <h1>Novo Medicamento adicionado!</h1>
    <div class="informacoes">
        <h3>${nome}</h3>
        <h3>${qtdDisponivel} unidades do disponíveis</h3>
        <h3>${precoUnidade} reais por unidade</h3>
    </div>
    <div class="areaBotao">
        <button onclick="renderAddMedicamento()">Voltar</button>
    </div>
</div>`
}

function renderAddMedicamento() {
    let formSection = document.getElementById('formSection')
    formSection.innerHTML =`
<form onsubmit="addMedicamentos()">
    <p>
        <label for="fnomeMedicamento">Nome do medicamento</label><br>
        <input type="text" id="fnomeMedicamento" name="nomeMedicamento">
    </p>
    <p>
        <label for="fqtdDisponivelMedicamento">Quantidade Disponível</label><br>
        <input type="text" id="fqtdDisponivelMedicamento">
    </p>
    <p>
        <label for="fprecoUnidaddeMedicamento">Preço por Unidade</label><br>
        <input type="text" id="fprecoUnidaddeMedicamento">
    </p>
    <p>
        <label for="fclasseMedicamento">Classe de Medicamento</label><br>
        <input type="text" id="fclasseMedicamento">
    </p>

    <div class="areaBotao">
        <button type="submit">Cadastrar</button>
    </div>
</form>`
}

function renderAlert() {
    let formSection = document.getElementById('formSection')
    formSection.innerHTML =`
        <div class="areaAlert">
            <div>
                <h2>Desculpe, não foi possível concluir o cadastro</h2>
                <p>Você precisa preencher todos os campos para cadastrar o medicamento</p>
            </div>
            <div class="areaBotao">
                <button class="buttonAlert" onclick="renderAddMedicamento()">OK</button>
            </div>
        </div>
    `
}