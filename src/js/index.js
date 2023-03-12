// Passo 1 - Pegar o Elemento HTML dos Botões
const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");

// Passo 2 - Dar um jeito de identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    desativarBotaoSelecionado();
    selecionarBotaoCarrosel(botao);
    esconderImagemAtiva();
    mostrarImagemDeFundo(indice);
  });
});

function mostrarImagemDeFundo(indice) {
  imagens[indice].classList.add("ativa");
}

function selecionarBotaoCarrosel(botao) {
  botao.classList.add("selecionado");
}

function esconderImagemAtiva() {
  const imagemAtiva = document.querySelector(".ativa");
  imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
  const botaoSelecionado = document.querySelector(".selecionado");
  botaoSelecionado.classList.remove("selecionado");
}
