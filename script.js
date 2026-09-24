const formulario = document.getElementById("formulario");

const nome = document.getElementById("nome");

const senha = document.getElementById("senha");

const final = document.getElementById("final");

const mensagemCaos =
    document.getElementById("mensagemCaos");

const cancelar =
    document.getElementById("cancelar");


/* =========================================
   QUANDO CLICAR EM AVANÇAR
========================================= */

formulario.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        // Primeiro: TOMATES!
        jogarTomates();


        const nomeDigitado =
            nome.value.trim();

        const senhaDigitada =
            senha.value.trim();


        /* =================================
           VERIFICA O NOME
        ================================= */

        if (nomeDigitado === "") {

            mostrarCaos(
                "ERRO! Você esqueceu seu nome! 🍅"
            );

            return;
        }


        /* =================================
           FRUTAS PERMITIDAS
        ================================= */

        const frutas = [

            "🍎",
            "🍐",
            "🍊",
            "🍋",
            "🍌",
            "🍉",
            "🍇",
            "🍓",
            "🫐",
            "🍒",
            "🍑",
            "🥭",
            "🍍",
            "🥝",
            "🥥"

        ];


        /* =================================
           PROCURA A FRUTA
        ================================= */

        const frutaEncontrada =
            frutas.find(
                function (fruta) {

                    return senhaDigitada.includes(fruta);

                }
            );


        if (!frutaEncontrada) {

            mostrarCaos(
                "CADÊ A FRUTA?! 🍎 Coloque um emoji de fruta!"
            );

            return;
        }


        /* =================================
           REMOVE A FRUTA
        ================================= */

        const numeros =
            senhaDigitada.replace(
                frutaEncontrada,
                ""
            );


        /* =================================
           EXATAMENTE 12 NÚMEROS
           
           Exemplo:
           123456789012
        ================================= */

        const senhaValida =
            /^\d{12}$/.test(numeros);


        if (!senhaValida) {

            mostrarCaos(
                "SENHA ERRADA! Digite 12 números + uma fruta! 🍅"
            );

            return;
        }


        /* =================================
           USUÁRIO VENCEU
        ================================= */

        mostrarCaos(
            "VOCÊ CONSEGUIU! 🐱"
        );


        final.classList.remove(
            "escondido"
        );


        final.scrollIntoView({
            behavior: "smooth"
        });

    }
);


/* =========================================
   FUNÇÃO DOS TOMATES
========================================= */

function jogarTomates() {

    const quantidade = 25;


    for (
        let i = 0;
        i < quantidade;
        i++
    ) {

        const tomate =
            document.createElement("div");


        tomate.classList.add(
            "tomate"
        );


        tomate.innerText = "🍅";


        tomate.style.left =
            Math.random() * 100 + "vw";


        tomate.style.setProperty(
            "--deslocamento",
            (
                Math.random() * 500 - 250
            ) + "px"
        );


        tomate.style.animationDuration =
            (
                1.5 +
                Math.random() * 2.5
            ) + "s";


        tomate.style.animationDelay =
            (
                Math.random() * 0.5
            ) + "s";


        document
            .getElementById("tomates")
            .appendChild(tomate);


        setTimeout(
            function () {

                tomate.remove();

            },
            5000
        );

    }

}


/* =========================================
   MENSAGEM DE CAOS
========================================= */

function mostrarCaos(texto) {

    mensagemCaos.innerText =
        texto;


    mensagemCaos.style.display =
        "block";


    setTimeout(
        function () {

            mensagemCaos.style.display =
                "none";

        },
        3000
    );

}


/* =========================================
   BOTÃO CANCELAR
========================================= */

cancelar.addEventListener(
    "click",
    function () {

        mostrarCaos(
            "Você clicou em CANCELAR... 🐱"
        );


        cancelar.innerText =
            "🐱 CANCELAR 🐱";


        setTimeout(
            function () {

                cancelar.innerText =
                    "CANCELAR";

            },
            2000
        );

    }
);