const app = () => {

    function faixaImc(imc) {
        const faixa = ['Abaixo do peso', 'Peso normal', 'Acima do peso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

        if (imc >= 39.9) return faixa[5];
        if (imc >= 34.9) return faixa[4];
        if (imc >= 29.9) return faixa[3];
        if (imc >= 24.9) return faixa[2];
        if (imc >= 18.9) return faixa[1];
        if (imc < 18.5) return faixa[0];

    }

    function calculoImc(peso, altura) {
        const imc = (peso / altura ** 2);
        return Number(imc.toFixed(2));
    }


    function criaP() {

        const p = document.createElement('p');

        return p;
    }

    const obterDadosUsuario = (event) => {
        const usuarioPeso = event.target.querySelector('#peso');
        const usuarioAltura = event.target.querySelector('#altura');

        const peso = Number(usuarioPeso.value);
        const altura = Number(usuarioAltura.value);

        return [peso, altura]
    }

    const clearInput = (event) => {
        event.target.querySelector('#peso').value = '';
        event.target.querySelector('#altura').value = '';


        event.target.querySelector('#peso').focus();
    }

    const validarValoresFalso = (valores) => {
        if (!valores[0]) {
            saidaRes('Peso Invalido!', false);
            return;
        }

        if (!valores[1]) {
            saidaRes('Altura Invalida!', false);
            return;
        }

    }

    function saidaRes(mensagem, checkValue) {
        const resultado = window.document.querySelector('#resultado');

        resultado.innerHTML = '';

        const p = criaP();

        if (checkValue) {
            p.classList.add('paragrafo-resultado');
        } else {
            p.classList.add('bad');
        }

        p.innerHTML = mensagem;
        resultado.appendChild(p);

    }

    function addImagem(imc) {


        if (imc >= 39.9) {
            return document.getElementById('ilustracao').innerHTML = `<img src="img/grau3Editado.png">`;
        } else if (imc >= 34.9) {
            return document.getElementById('ilustracao').innerHTML = `<img src="img/grau2Editado.png">`;
        } else if (imc >= 29.9) {
            return document.getElementById('ilustracao').innerHTML = `<img src="img/grau1Editado.png">`;
        } else if (imc >= 24.9) {
            return document.getElementById('ilustracao').innerHTML = `<img src="img/sobrepesoEditado.png">`;
        } else if (imc >= 18.9) {
            return document.getElementById('ilustracao').innerHTML = `<img src="img/peso-normalEditado.png">`;
        } else if (imc < 18.5) {
            return document.getElementById('ilustracao').innerHTML = `<img src="img/abaixoEditado.png">`;
        }
    }

    const inputUsuario = document.querySelector('#inputUsuario');
    inputUsuario.addEventListener('submit', function (event) {

        event.preventDefault();

        const valores = obterDadosUsuario(event);

        validarValoresFalso(valores);

        const imc = calculoImc(valores[0], valores[1]);

        const indicador = faixaImc(imc);

        const mensagem = `Seu IMC é ${imc} (${indicador})`

        saidaRes(mensagem, true);

        addImagem(imc);

        clearInput(event);

    });

}


app();















