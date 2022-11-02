function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');


    function recebeEvento(evento) {
        evento.preventDefault();

        let pesoPessoa = form.querySelector('#peso');
        let alturaPessoa = form.querySelector('#altura');
        console.log(pesoPessoa);
        console.log(alturaPessoa);
        pesoPessoa = Number(pesoPessoa.value);
        alturaPessoa = Number(alturaPessoa.value);
        console.log(pesoPessoa);
        console.log(alturaPessoa);

        const resultadoIMC = pesoPessoa / (alturaPessoa * alturaPessoa);
        console.log(resultadoIMC);

        if (resultadoIMC < 18.5) {
            resultado.innerHTML = `<p>Seu IMC é ${resultadoIMC.toFixed(2)} (Abaixo do peso)</p>`;
            resultado.style.backgroundColor = 'rgb(86, 233, 142)';
            
        }
        else if (resultadoIMC >= 18.5 && resultadoIMC <= 24.9) {
            resultado.innerHTML = `<p>Seu IMC é ${resultadoIMC.toFixed(2)} (Peso normal)</p>`;
            resultado.style.backgroundColor = 'rgb(86, 233, 142)';
        }
        else if (resultadoIMC >= 25 && resultadoIMC <= 29.9) {
            resultado.innerHTML = `<p>Seu IMC é ${resultadoIMC.toFixed(2)} (Sobrepeso)</p>`;
            resultado.style.backgroundColor = 'rgb(86, 233, 142)';
        }
        else if (resultadoIMC >= 30 && resultadoIMC <= 34.9) {
            resultado.innerHTML = `<p>Seu IMC é ${resultadoIMC.toFixed(2)} (Obesidade grau 1)</p>`;
            resultado.style.backgroundColor = 'rgb(86, 233, 142)';
        }
        else if (resultadoIMC >= 35 && resultadoIMC <= 39.9) {
            resultado.innerHTML = `<p>Seu IMC é ${resultadoIMC.toFixed(2)} (Obesidade grau 2)</p>`;
            resultado.style.backgroundColor = 'rgb(86, 233, 142)';
        }
        else if (resultadoIMC > 40) {
            resultado.innerHTML = `<p>Seu IMC é ${resultadoIMC.toFixed(2)} (Obesidade grau 3)</p>`;
            resultado.style.backgroundColor = 'rgb(86, 233, 142)';
        } 
        else if (resultadoIMC === NaN && pesoPessoa === NaN) {
            resultado.innerHTML = `<p>Peso Inválido</p>`;
            resultado.style.backgroundColor = 'rgb(212, 78, 78)';
        } 
        else if (resultadoIMC === NaN && alturaPessoa === NaN) {
            resultado.innerHTML = `<p>Altura inválida.</p>`;
            resultado.style.backgroundColor = 'rgb(212, 78, 78)';
        } 
        else if (!pesoPessoa) {
            resultado.innerHTML = `<p>Peso Inválido</p>`;
            resultado.style.backgroundColor = 'rgb(212, 78, 78)';
        } 
        else if (!alturaPessoa) {
            resultado.innerHTML = `<p>Altura Inválida.</p>`;
            resultado.style.backgroundColor = 'rgb(212, 78, 78)';
        }
    }
    form.addEventListener('submit', recebeEvento);
}
meuEscopo();