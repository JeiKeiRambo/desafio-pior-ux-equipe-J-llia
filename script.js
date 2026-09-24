const formulario = document.getElementById("formulario");

const nome = document.getElementById("nome");
const senha = document.getElementById("senha");

const final = document.getElementById("final");

const mensagemCaos = document.getElementById("mensagemCaos");

const cancelar = document.getElementById("cancelar");


formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    jogarTomates();

    /*
     * REGRA ABSURDA:
     * exatamente 12 letras + emoji de fruta
     */

    const texto = senha.value;

    const quantidadeLetras =
        (texto.match(/[a-zA-ZÀ-ÿ]/g) || []).length;

    const temFruta =
        /🍎|🍐|🍊|🍋|🍌|🍉|🍇|🍓|🫐|🍒|🍑|🥭|🍍|🥝|🥥/u.test(texto);


    if (nome.value.trim() === "") {

        mostrarCaos(
            "ERRO! Você esqueceu seu nome. Que surpresa."
        );

        return;
    }


    if (quantidadeLetras !== 12) {

        mostrarCaos(
            "SENHA INVÁLIDA! Ela precisa ter EXATAMENTE 12 LETRAS!"
        );

        return;
    }


    if (!temFruta) {

        mostrarCaos(
            "CADÊ A FRUTA?! 🍎 A senha precisa de uma fruta!"
        );

        return;
    }


    /*
     * SE CHEGOU AQUI,
     * O USUÁRIO VENCEU.
     */

    mostrarCaos(
        "PARABÉNS! Você descobriu como usar este site."
    );

    final.classList.remove("escondido");

    final.scrollIntoView({
        behavior: "smooth"
    });

});


/* TOMATES */

function jogarTomates() {

    const quantidade = 25;

    for (let i = 0; i < quantidade; i++) {

        const tomate = document.createElement("div");

        tomate.classList.add("tomate");

        tomate.innerText = "🍅";

        tomate.style.left =
            Math.random() * 100 + "vw";

        tomate.style.setProperty(
            "--deslocamento",
            (Math.random() * 500 - 250) + "px"
        );

        tomate.style.animationDuration =
            (1.5 + Math.random() * 2.5) + "s";

        tomate.style.animationDelay =
            (Math.random() * 0.5) + "s";

        document
            .getElementById("tomates")
            .appendChild(tomate);


        setTimeout(() => {

            tomate.remove();

        }, 5000);

    }

}


/* MENSAGEM CHATA */

function mostrarCaos(texto) {

    mensagemCaos.innerText = texto;

    mensagemCaos.style.display = "block";


    setTimeout(() => {

        mensagemCaos.style.display = "none";

    }, 3000);

}


/* BOTÃO CANCELAR */

cancelar.addEventListener("click", function () {

    mostrarCaos(
        "Você clicou em CANCELAR. Mas por que desistir agora? 😈"
    );

    cancelar.innerText = "NÃO DESISTE!";

    setTimeout(() => {

        cancelar.innerText = "CANCELAR";

    }, 1500);

});