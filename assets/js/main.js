    const resultado = document.querySelector('.resultado');
    const form = document.querySelector('.form');

    function recebeEvento(evento) {
        evento.preventDefault();

        let pesoPessoa = form.querySelector('#peso');
        let alturaPessoa = form.querySelector('#altura');
        pesoPessoa = Number(pesoPessoa.value);
        alturaPessoa = Number(alturaPessoa.value);

        const resultadoIMC = getIMC(pesoPessoa, alturaPessoa);

        if (resultadoIMC < 18.5) {
            setResultado(`Seu IMC é ${resultadoIMC} (Abaixo do peso)`, true);       
        }

        else if (resultadoIMC >= 18.5 && resultadoIMC <= 24.9) {
            setResultado(`Seu IMC é ${resultadoIMC} (Peso normal)`, true);
        }

        else if (resultadoIMC >= 25 && resultadoIMC <= 29.9) {
            setResultado(`Seu IMC é ${resultadoIMC} (Sobrepeso)`, true);
        }

        else if (resultadoIMC >= 30 && resultadoIMC <= 34.9) {
            setResultado(`Seu IMC é ${resultadoIMC} (Obesidade grau 1)`, true);
            resultado.style.backgroundColor = 'rgb(86, 233, 142)';
        }
        
        else if (resultadoIMC >= 35 && resultadoIMC <= 39.9) {
            setResultado(`Seu IMC é ${resultadoIMC} (Obesidade grau 2)`, true);
        }

        else if (resultadoIMC > 40) {
            setResultado(`Seu IMC é ${resultadoIMC} (Obesidade grau 3)`, true);
        } 

        else if (!pesoPessoa) {
            setResultado('Peso inválido.', false);
        } 
        
        else if (!alturaPessoa) {
            setResultado('Altura inválida.', false);
        }
    }

    // Funções distintas com seus objetivos:

    function getIMC(peso, altura) {
        const imc = peso / altura **2;
        return imc.toFixed(2);
        //Entrega o resultado do IMC;
    }

    function criaP() {
        const p = document.createElement('p');
        return p;
        //Cria elemento <p> no documento;
    }

    function setResultado(msg, isValid) {
        const p = criaP();
        resultado.innerHTML = '';

        if (isValid) {
            p.classList.add('paragrafo-verde');
        } else {
            p.classList.add('paragrafo-vermelho');
        }
        p.innerHTML = msg;
        resultado.appendChild(p);
        //Insere o elemento <p> criado através da function criaP() na div resultado selecionada através de querySelector('.resultado');
    }
    form.addEventListener('submit', recebeEvento);

    // cor vermelha rgb(212, 78, 78);
    // cor verde rgb(86, 233, 142);