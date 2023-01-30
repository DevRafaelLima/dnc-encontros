# Formação em Tecnologia - DNC

<h2>Objetivo do repositório</h2>

Este repositório tem dois objetivos: 
<ol>
    <li>
    Armazenar as dinâmicas, entregas e trabalhos prático desenvolvidos na formação em tecnologia da dnc. 
</li>
    <li>
        Anotações dos módulos do curso
    </li>
</ol>

## Módulo 5 - JavaScript avançado

Esté módulo é divido nas seguintes seções: JavaScript avançado, o que é?; Introdução ao Jira; Requisitos; Programação Assíncrona e Componentes; Protocolos e REST; Introdução à Node.JS e API; Componentização e CSS Avançado.


### JavaScript avançado, o que é?
Mas o que seria JavaScript avançado? Bom, para você ser avançado não precisa saber de tudo, até porque isso é impossível no mundo da tecnologia. Logo, tem algumas técnicas que se dominar, pode-se considerar avançado em JavaScript, claro que há níveis de avançado, mas isso é outro papo. 

vamos aos pontos que um programador em JavaScript deve saber para considera-se avançado: 

<ul>
    <li> Reusabilidade : Um bom código é feito para ser utilizado quando necessário construindo aplicações com velocidade;</li>
    <li>Manutenção: Um código bem escrito permite que outras pessoas consigam incrementá-lo com facilidade;</li>
    <li>Documentação: Um bom programador documenta com qualidade um software;</li>
    <li>Resolver problemas: Uma programação avançada usa os recursos necessários para resolver um problema; </li>
    <li>Técnicas: 
        <ul>
            <li>Requisições HTTP: São requisições para servidores;</li>
            <li>Framework avançado: Como react e angula;</li>
            <li>CSS Avançado: Olhar para uma e conseguir imaginar como replicá-la;</li>
            <li>Criptografia/segurança: é importante ter uma base sobre esse tema;</li>
            <li>Formulários: formulários é muito importante na área da programação;</li>
            <li>Programação Assíncrona: nossas aplicações rodarem enquanto comunica-se com web service;</li>
        </ul>
    </li>
</ul>

**Pseudoclasses**, são palavras reservadas do css que são utilizadas junto com as classes do css. 

Pseudoclasses **houver** que configura a ação do objeto ao usuário passar o mouse sobre esse obtejo.

``` 
.my-classe:houver {
    minhas configurações
} 
```

## Introdução ao Jira
O Jira é uma plataforma profissiona de gestão de equipes de software.  Com o Jira podemos conectar várias outras ferramentas para auxiliar na gestão das equipes, essas ferramentas são: Teams; GitHbub ou GitLab; Confluence que é uma ferramenta para documentar softeware. 

<ul>
Vantagens, gestão scrum: 
    <li>Criação de Sprints;</li>
    <li>Criação de user stories;</li>
    <li>Criação de features;</li>
    <li>Criação de cerimonias;</li>
    <li>Criação de entre outros;</li>
    <li>Documentação: ajuda a compreender o ciclo de vida do desenvolvimento de uma aplicação, conecta-se com o concluence;</li>
    <li>Gestão das tarefa;</li>
</ul>

## Requisitos

**Porduct Requirements**: Conjunto de caractériscas, funcionalidades, especialidades, especificações e comportamentos que o produto deve possuir.

Regras de outro de um requisito

1. **Claro**: O requisito deve ser claro;
2. **Completo**: Tudo que é necessário e consistente, ou seja, todas as informações devem está no requisto;
3. **Confiável**: Requisito deve ser tecnicamente possível de ser alcançado;
4. **Consistente**: O requisito não entra em conflito com outros requisitos;
5. **Verificável**: O requisito deve ser verificável e de possível validação;
6. **Necessário**: Se alguns requisitos trazem claramente um valor ao negócio ele deve ser tratado como mais necessário do que outros requisitos;

**Resquisitos Funcionais**: Estes requisitos dizem respeito a como as funcionalidades serão entregues ao usuário do software. 
* **Desempenho**
* **Usabilidade**
* **Confiabilidade**
* **Segurança**
* **Disponibilidade**
* **Manuntenção**
* **Eficiência**
* **Implementação**
* **Portabilidade**
* **Responsível**

**O papel do tech lead:** Responsável em buscar informações sobre como resolver determinado problema.

**Requisitos não funcionais**: Dentro da engenharia de uma empresa de software podemos destacer o requisito funcional, onde há a materialização de uma necessidade ou solicitação realizada por um software;


### Programação Assíncrona e Componentes

As funções não são executadas em ordem. Com o assincronismo podemos interromper o código para conseguirmos alguma outra informação necessária para continuar a execução;

Em programação assíncrona usamos muito o conceito de **Promise**, mas o que seria isso? Um objeto que representa o resultado futuro de um comando assíncrono. Ou seja, trata-se do tipo de retorno que uma função assíncrona vai retornar. Esse retorno pode ser simples ou complexo.

Outro conceito muito usado é funções de **Callback**. Trata-se de uma função que é executada quando uma Promise é "resolvida";

**Async-await**: São duas palavras reservadas do JavaScript, onde **Async** é usada na definição de uma feunção que contenha alguma expressão que retorna uma Promise enquanto **Await** é usada antes de uma experssão que retorna uma Promise, dessa forma a função definida com a palavra async irá aguardar a resolução da Promise.

**setTimeout** é uma função do javascript que serve para esperar um determinado preríodo de tempo até que uma função seja executada.
Passamos dois parâmetros, uma função de callback e e tempo em que a função deve ser execatad em millesegundos.

Temos algumas formas de usar:
```
<!-- Armazenando em uma variável -->
const myTimeout = setTimeout(() => {}, 5000)

<!-- Executando diretamente a função -->
setTimeaout(()=>{

}, 5000)
```

Para cancelar a execução de uma função de setTimeout se usa uma outra função.
``clearTimeout()``.

```
clearTimeout(myTimeout)
```
``setInterval()`` tem um funcionamento semelhante ao `settimeout()`. Enquanto o setTimeout executa a função aguardando um determinado tempo, já a função setInterval fica repetindo uma determinda função de callback  periodicamente.

```
const teste = setInterval(() => {

}, 5000)
```
Para cancelar a execução de uma função de setInterval se usa uma outra função.
```
clearInterval(teste)
```
## Protocolos e REST

protocolo **HTTP**: Protocolo que permite a obtenção de recursos, como documentos HTML. É a base de qualquer troca de dados na Web e um protocolo cliente-servidor.

### Promises

O que é uma promise? Trata-se de um objeto usado para prcessamento assíncrono. Uma promise ("promessa") representa um valor que pode estar disponível agora, no futuro ou nunca.

Métodos que podemos usar com promises: `.then()`, é uma função quando é executada quando a promisse acontecer de formar correta.`.cath()`, método que recebe uma função de callback que captura um possível erro lançado pela promisse; `finally()`, vai ser executada independete do resultado.

`resolve()`: quando a promisse dá certo;

`reject()`: Quando a promisse dá errado;

```
const myPromise = new Promise((resolve, reject) => {
    setTimeout(()  => {
        resolve('foo');
    }, 300);
})

//utilizando a promisse

myPromisse.then(() => {
    quando a promisse for resolvida
})
.cath(() => {
    trabalha quando a promessa der error
})
.finally(() => {
    independente do que acontece o finally vai ser executado
})
```

### Fetch

O que é o Fetch? Método para fazer requisições HTTP assíncronas.

```
fetch(rota:string, {
    method?:"GET | "POST" | "PUT" | "DELETE" ,
    mode?:"navigate" | "same-origin" | "no-cors" | "cors" ,
    headers?: { [key:string]:any}
}):Promise<Response>
```

Exemplo: 
```
fecht('http://exemplo.com/usuario')
    .then(T => T.json())
    .then(console.log)
```
O que é JSON?  JSON é basicamente um formato leve de troca de informações/dados entre sistemas. Mas JSON sifnifica JavaScript Object Notation.

### Elementos dinâmicos
Em nossas páginas web é muito comum e recomendável deixar as coisas mais genéricas possível, possibilitando ser reutilizados. 

Pelo javascript podemos alterar um elemento genérico adicionando as informações que desejamos com duas técnicas principais: 

InnerHTML: identifica o elemento dentro da nossa dom e tudo que passarmos para o innerHTML será interpretado como html. 

```
document.getElementById('demo').innerHTML = "I have changed!"
```

AppendChild: é mais trabalho, no entanto tem a melhor performance. 
```
const node = document.createElement('li');
const textNode = document.createText('water');
node.appendChild(textoNode);
document.getElementById('myList').appendChild(node);
```

### Arquitetura REST
Como já foi discutido durante o curso, requisições HTTP é uma forma de trafegar dados na internet. A arquitetura REST são algumas padronizações para esse trafego acontecer. 

**Cliente**: É o comopnente solicitante de um serviço e envia solicitações para vários tipos de serviços ao servidor.

**Servidor**: É o componente que é o provedor de serviços e fornce continuamente serviços ao cliente conforme as solicitações.

Ao fazer uma requisição ao servidor, deve-se informar algumas coisas, que são: 

1. **Verbo**: Define que tipo de operação o servidor vai realizar;
2. **Header**: Com o cabeçalho da requisição que passa informações sobre a requisição;
3. **Path**: Caminho, endereçõ ou rota, para o servidor;
4. **Corpo**: Conjunto de informações mais complexas da requisição;


### Boas práticas

Métodos: 
1. **GET**: Geralmente é usado para solicitar que um servidor envie um recurso;
2. **POST**: Projetado para enviar dados para o servidor;ç
3. **PUT**: Editar e ataulizar documentos no servidor;
4. **Delete**: Deletar certo dado ou celeção de dados;

Status: 
* 200: sucesso;
* 404: Não encontrado;
* 500: Erro no lado do servidor;
* 300: redirecionamento da chamada;
  
## Introdução à Node.JS e API

**NodeJS** é um interpretador de javascript no lado do servidor. Com isso agora é possível codificar tanto o front-end quanto o back-end na mesma linguagem. A comunidade é bastante ativa.

**API REST**, primeiramente, o que seria uma API? API significa Application Programming Interface (Interface de programação de Aplicação). No contexto de APIs, a palavra Aplicação refere-se a qualquer software com uma função distinta. A interface pode ser pensada com um contrato de serviço entre duas aplicações. 

RapidApi é um site que fornece várias api e entre elas está uma seção de api gratuitas

## Componentização e CSS Avançado
Posicionamento com o CSS, existe várias formas de posicionar os elementos. Aqui vamos aprender algumas formas de posicionamento. 

**POSITION**: Ajuda a individualmente definir o comportamento geral de posicionamento de um elemento. seu valores podem ser: static, relative, fixed, absolute e sticky.

**BOXMODEL**: Modelo de "caixa" onde cada elemento tem uma série de propriedades para se posicionar em relação a página.

**GRID**: Modelo recorrente em frameworks CSS para posicionar elementos na tela como que em uma tabela. 

**FLEXBOX**: Posicionamento quando se quer posicionar uma séria de elementos em determinanda direção. 


### Módulo 6 

### Introdução à front-end com React
Começando neste módulo a trabalhar com um dos frameworks mais utilizados no mercado que é o React. 

**Introdução e plugins com React:** é um módulo que explica sobre o que é o React, o que são jsx e plugins, o conceito de virtual DOM etc.

**Componentes e Formulários em React:** Componentes são trechos de código usado para construir nossa aplicação. Podemos criar componentes de duas formas: funções e classes. 



## Encontro ao vivo 04

<p>Dúrante a aula o professor revisou os assuntos de html, css e javascript desenvolvendo a seguinte aplicação: <a href="https://github.com/DevRafaelLima/dnc-encontros/tree/encontro-ao-vivo-4">clique aqui</a>.</p>

<p>Após essa revisão, houve uma dinâmica com dois desafios, um básico e outro avançado.</p>

<p>Desafio básico:  <a href="https://github.com/DevRafaelLima/dnc-encontros/tree/encontro-ao-vivo-04-desafio-basico">clique aqui</a><br>
Desafio Avançado: <a href="https://github.com/DevRafaelLima/dnc-encontros/tree/encontro-ao-vivo-4">clique aqui</a></p>

<h3>Projetos desenvolvidos</h3>

<ul>
    <li><a href="https://github.com/DevRafaelLima/dnc-encontros/tree/landing-page-ccxp">Landing page ccxp</a></li>
</ul>