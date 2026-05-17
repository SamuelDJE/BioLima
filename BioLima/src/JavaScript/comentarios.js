// CONTROLE DO CARROSSEL DE DEPOIMENTOS (2 TELAS)
const trilho = document.querySelector('.carrossel-trilho');
const btnEsquerda = document.getElementById('btn-esquerda');
const btnDireita = document.getElementById('btn-direita');
const bolinhas = document.querySelectorAll('.bolinha');

// Como temos 6 cartões e cabem 3 por tela, temos exatamente 2 páginas (0 e 1)
let paginaAtual = 0;

// Função que calcula a movimentação e move o trilho para o lado
function mudarParaPagina(numeroPagina) {
    paginaAtual = numeroPagina;

    // Move o trilho exatamente 50% para o lado (metade do caminho) quando vai para a página 1
    trilho.style.transform = `translateX(-${paginaAtual * 50}%)`;

    // Atualiza o destaque visual azul nas bolinhas de baixo
    document.querySelector('.bolinha.ativa').classList.remove('ativa');
    bolinhas[paginaAtual].classList.add('ativa');
}


// Ouvinte para clique na seta da direita
btnDireita.addEventListener('click', () => {
    if (paginaAtual === 0) {
        mudarParaPagina(1); // Vai para a segunda tela
    } else {
        mudarParaPagina(0); // Se já estiver no fim, volta para a primeira tela
    }
});

// Ouvinte para clique na seta da esquerda
btnEsquerda.addEventListener('click', () => {
    if (paginaAtual === 1) {
        mudarParaPagina(0); // Volta para a primeira tela
    } else {
        mudarParaPagina(1); // Se estiver no início e voltar, vai para a última tela
    }
});

// Permite clicar direto nas duas bolinhas inferiores para alternar as páginas
bolinhas.forEach((bolinha, indice) => {
    bolinha.addEventListener('click', () => {
        mudarParaPagina(indice);
    });
});
