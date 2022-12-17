let medicamentos = []

function addMedicamentos() {
    event.preventDefault();
    let novoMedicamento = {
        "id": medicamentos.length + 1,
        "nome": document.getElementById('fnomeMedicamento').value,
        "qtdDisponivel": document.getElementById('fqtdDisponivelMedicamento').value,
        "precoUnidade": document.getElementById('fprecoUnidaddeMedicamento').value,
        "classeMedicamento": document.getElementById('fclasseMedicamento').value,

    }
    medicamentos.push(novoMedicamento)
    clearInputs()
}

function clearInputs() {
    document.getElementById('fnomeMedicamento').value = ''
    document.getElementById('fqtdDisponivelMedicamento').value = ''
    document.getElementById('fprecoUnidaddeMedicamento').value = ''
    document.getElementById('fclasseMedicamento').value = ''
}