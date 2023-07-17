      /*
      Exemplo de comentário de multiplas linhas, usar // para comentário de uma linha 
    */
   //passo 1
const personagens = document.querySelectorAll(".personagem");

personagens.forEach((personagem) =>{
    personagem.addEventListener('mouseenter', () =>{
        if (window.innerWidth < 450){
            window.scrollTo({top:0, behavior:"smooth "})
        }
        //passo3
        const personagemSelecionado = document.querySelector(".selecionado");
        personagemSelecionado.classList.remove("selecionado");
        //inverteu o passo 2 com o passo 3 pra não bugar
        //passo 2
        personagem.classList.add("selecionado");
        //passo3
        //objetivo 2 ->mudar a imagem grande de acordo com a deleção do personagem pequeno
        //passo1 obj2
        const imagemPersonagemGrande = document.querySelector(".personagem-grande")
        //passo2 obj2
        const idPersonagem = personagem.attributes.id.value;

        imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
    
        //passo 3 ->Mudar nome de acordo com a imagem grande
        const nomePersonagem = document.getElementById("nome-personagem");
        nomePersonagem.innerText = personagem.getAttribute("data-name");
        //passo 4 alterer o texto descritivo
        const descricaoPersonagem = document.getElementById("descricao-personagem");
        descricaoPersonagem.innerText = personagem.getAttribute("data-description");
    })
})