let nome = document.querySelector("#nome_completo")
let email = document.querySelector('#email')
let telefone = document.querySelector('#telefone')
let cpf = document.querySelector('#cpf')
let password = document.querySelector('#password')
let alertError = document.querySelector('#alertError')
let alertSuccess = document.querySelector('#alertSuccess')



function handleForm() {
    event.preventDefault();
    alertError.style.display = 'none'
    alertSuccess.style.display = 'none'
    if(validationInputs()){
        alertSuccess.style.display = 'block'
        clearInputs()
    } else {
        alertError.style.display = 'block'
    }

}

function validationInputs() {
    if (nome.value === '' ||
        email.value === '' ||
        telefone.value === '' ||
        cpf.value === '' ||
        password.value === ''
    ) {
        return false;
    } 

    return true;
}

function clearInputs() {
    nome.style.value = '' 
    email.style.value = '' 
    telefone.style.value = '' 
    cpf.style.value = '' 
    password.style.value = ''
}

