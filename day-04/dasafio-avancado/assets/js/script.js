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
    medicamentos.push(novoMedicamento)
    clearInputs()
    renderRowTable()
}

function renderRowTable() {
    let table = document.getElementById('table')
    table.innerHTML = `
    <tr>
        <th>ID</th>
        <th>Medicamento</th>
        <th>Quantidade</th>
        <th>classe de medicamento</th>
        <th>Remover</th>
    </tr>
    `;

    for (let i = 0; i < medicamentos.length; i++) {
        table.innerHTML += `
        <tr>
            <td>${medicamentos[i].id}</td>
            <td>${medicamentos[i].nome}</td>
            <td>${medicamentos[i].qtdDisponivel}</td>
            <td>${medicamentos[i].classeMedicamento}</td>
            <td style="cursor: pointer;" onclick="removeMedicamento(${medicamentos[i].id}, ${i})"><img src="assets/img/iconRemove.svg"/></td>
        </tr>
        `
    }
}
function clearInputs() {
    document.getElementById('fnomeMedicamento').value = '';
    document.getElementById('fqtdDisponivelMedicamento').value = '';
    document.getElementById('fprecoUnidaddeMedicamento').value = '';
    document.getElementById('fclasseMedicamento').value = '';
}
function removeMedicamento(id, index) {
    medicamentos.map((medicamento) => {
        if(medicamento.id === id){
            if(medicamento.qtdDisponivel === 0) {
                medicamentos.splice(index, 1)
                renderRowTable();
            } else {
                medicamento.qtdDisponivel -= 1
                renderRowTable();
            }
        }
    })
}