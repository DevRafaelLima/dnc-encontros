let pets = [];

function addPet() {
    event.preventDefault();

    let pet = {
        "id": pets.length + 1,
        "nome": document.getElementById('nomePet').value,
        "raca": document.getElementById('raca').value,
        "donoPet": document.getElementById('donoPet').value,
        "telefone": document.getElementById('telefone').value,
    }
  
    pets.push(pet);
    
    document.getElementById('nomePet').value = ''
    document.getElementById('raca').value = ''
    document.getElementById('donoPet').value = ''
    document.getElementById('telefone').value = ''

    render();
}

function render() {
   
    let table = document.getElementById('table');
    table.innerHTML = `
    <tr>
    <th>ID</th>
    <th>Nome do Pet</th>
    <th>Raça</th>
    <th>Dono do Pet</th>
    <th>Telefone</th>
    <th>Remover</th>
    </tr>
    `
  

    for(let i = 0; i < pets.length; i++) {
        table.innerHTML += `
        <tr>
            <td>${pets[i].id}</td>
            <td>${pets[i].nome}</td>
            <td>${pets[i].raca}</td>
            <td>${pets[i].donoPet}</td>
            <td>${pets[i].telefone}</td>
            <td><img src="assets/img/iconRemove.svg" width="25px" height="25px" onclick="remover(${i})"/></td>
        </tr>
        `
    }
}

function remover(index) {
    pets.splice(index, 1);
    render();
}