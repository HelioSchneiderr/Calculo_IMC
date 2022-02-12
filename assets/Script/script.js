function main() {

    const form = document.getElementById("form")
    const peso = document.getElementById("input-teste-1")
    const altura = document.getElementById("input-teste-2")
    const mensagem = document.getElementById("mensage")



    function recebeEvento(evento) {
        evento.preventDefault(); //prevenir o evento de reiniciamento quando o usuario clicar

        //Calculo do imc
        function imcCalcule(peso, altura) {
            return peso / (altura * altura)
        }

        let imcCalculo = imcCalcule(peso.value, altura.value);
    
        

        //Resttições caso seja números absurdos
        if (peso.value > 600 || peso.value === String) {

            alert("ERRO, peso não permitido");
        
        }else if(altura.value < 0.30 || altura.value === String ){

            alert("ERRO, altura não permitida");

        

        }else if(imcCalculo < 18.5){

            mensagem.innerHTML = `IMC ${imcCalculo.toFixed(2)} = Abaixo do peso`
            mensagem.style.color = "orange";
            

        }else if(imcCalculo > 18.6 && imcCalculo < 24.9){

            mensagem.innerHTML = `IMC ${imcCalculo.toFixed(2)} = Saudável`
            mensagem.style.color = "rgb(21, 133, 95)";
        
        }else if(imcCalculo > 25.0 && imcCalculo < 29.9){

            mensagem.innerHTML = `IMC ${imcCalculo.toFixed(2)} = Sobrepeso`
            mensagem.style.color = "orange";

        }else if(imcCalculo > 30.0 && imcCalculo < 34.9){

            mensagem.innerHTML = `IMC ${imcCalculo.toFixed(2)} = Obesidade Grau 1`
            mensagem.style.color = "rgb(139, 10, 10)";

        }else if(imcCalculo > 35.0 && imcCalculo < 39.9 ){

            mensagem.innerHTML = `IMC ${imcCalculo.toFixed(2)} = Obesidade Grau 2`
            mensagem.style.color = "rgb(139, 10, 10)";

        }else{

            mensagem.innerHTML = `IMC ${imcCalculo.toFixed(2)} = Obesidade Grau 3`
            mensagem.style.color = "rgb(139, 10, 10)";

        }

        

    }

    form.addEventListener('submit', recebeEvento);

}

main();