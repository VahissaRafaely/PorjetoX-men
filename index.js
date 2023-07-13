

//OBJETIVO 1- Quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo.

//Passo 1- Pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles.

const personagens = document.querySelectorAll('.personagem');

//Passo 2- Adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse.
personagens.forEach(personagem => {
    personagem.addEventListener('mouseenter', () =>{
        
        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

//Passo 3- Verificar se já existia um personagem selecionado, se sim, devemos remover a seleção dele.
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');

        personagem.classList.add('selecionado');
        
//OBJETIVO 2- Quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande.

//   Passo 1- Pegar o elemento do personagem grande pra adicionar as informações nele.
        const imagemPersonagemGrande = document.querySelector('.personagem-grande');

// Passo 2- Alterar a imagem do personagem grande.
        const idPersonagem = personagem.attributes.id.value;
        imagemPersonagemGrande.src = `./img/imagens/card-${idPersonagem}.png`;

//Passo 3- Aleterar o nome do personagem grande.
        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');

//Passo 4- Alterar a descrição do personagem grande.
        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');
       
    })
})