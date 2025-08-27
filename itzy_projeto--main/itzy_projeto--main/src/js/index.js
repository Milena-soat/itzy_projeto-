const botoes = document.querySelectorAll(".botao");
const idols = document.querySelectorAll(".idol");

botoes.forEach((botao, indice) => {
	botao.addEventListener("click", () => {
		desselecionarBotao();
		desselecionarIdol();

		botao.classList.add("selecionado");
		idols[indice].classList.add("selecionado");
	});
});

function desselecionarIdol() {
	const idolSelecionado = document.querySelector(".idol.selecionado");
	idolSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
	const botaoSelecionado = document.querySelector(".botao.selecionado");
	botaoSelecionado.classList.remove("selecionado");
}
