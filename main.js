var waze = './waze.json'

// Cores transito
var verde = "#1AB277"
var amarelo = "#FFDC5A"
var laranja = "#F5A762"
var vermelho = "#FE546E"



fetch(waze)
  .then(response => response.json())
  .then(data => {
    
    // VOLTA
    const nomeVolta = document.getElementById('nomeVolta')
    const voltaPartida = document.getElementById('voltaPartida')
    const voltaChegada = document.getElementById('voltaChegada')
    const voltaTempo = document.getElementById('voltaTempo')
    const voltaDistancia = document.getElementById('voltaDistancia')
    const transitoVoltaTexto = document.getElementById('transitoVoltaTexto')
    const transitoVoltaCor = document.getElementById('transitoVoltaCor')

    let rotaVolta = data.routes[0]

    nomeVolta.innerHTML = rotaVolta.name
    voltaPartida.innerHTML = rotaVolta.fromName
    voltaChegada.innerHTML = rotaVolta.toName

    function ajusteTempoVolta(){
        let segundos = rotaVolta.time;
        let horas = Math.floor(segundos / 3600);
        let minutos = Math.floor((segundos % 3600) / 60);
        let seg = segundos % 60;

        voltaTempo.innerHTML = (horas + "h " + minutos + "min " + seg + "s")
    }
    ajusteTempoVolta()

    function ajusteDistanciaVolta(){
        rotaVolta.length = parseInt(rotaVolta.length / 1000)
        voltaDistancia.innerHTML = rotaVolta.length + " km"
    }
    ajusteDistanciaVolta()

    function transitoVolta(){
        var transitoVolta = rotaVolta.jamLevel
        if(transitoVolta == 0 || transitoVolta == 1){
            transitoVoltaTexto.innerHTML = "Livre"
            transitoVoltaCor.style.background = verde
        }else if(transitoVolta == 2){
            transitoVoltaTexto.innerHTML = "Moderado"
            transitoVoltaCor.style.background = amarelo
        }else if(transitoVolta == 3){
            transitoVoltaTexto.innerHTML = "Intenso"
            transitoVoltaCor.style.background = laranja
        }else if(transitoVolta == 4){
            transitoVoltaTexto.innerHTML = "Paralizado"
            transitoVoltaCor.style.background = vermelho
        }
    }
    transitoVolta()


    // IDA
    const nomeIda = document.getElementById('nomeIda')
    const idaPartida = document.getElementById('idaPartida')
    const idaChegada = document.getElementById('idaChegada')
    const idaTempo = document.getElementById('idaTempo')
    const idaDistancia = document.getElementById('idaDistancia')
    const transitoIdaTexto = document.getElementById('transitoIdaTexto')
    const transitoIdaCor = document.getElementById('transitoIdaCor')

    let rotaIda = data.routes[1]
    nomeIda.innerHTML = rotaIda.name
    idaPartida.innerHTML = rotaIda.fromName
    idaChegada.innerHTML = rotaIda.toName

    function ajusteTempoIda(){
        let segundos = rotaIda.time;
        let horas = Math.floor(segundos / 3600);
        let minutos = Math.floor((segundos % 3600) / 60);
        let seg = segundos % 60;

        idaTempo.innerHTML = (horas + "h " + minutos + "min " + seg + "s")
    }
    ajusteTempoIda()

    function ajusteDistanciaIda(){
        rotaIda.length = parseInt(rotaIda.length / 1000)
        idaDistancia.innerHTML = rotaIda.length + " km"
    }
    ajusteDistanciaIda()

    function transitoIda(){
        var transitoIda = rotaIda.jamLevel
        if(transitoIda == 0 || transitoIda == 1){
            transitoIdaTexto.innerHTML = "Livre"
            transitoIdaCor.style.background = verde
        }else if(transitoIda == 2){
            transitoIdaTexto.innerHTML = "Moderado"
            transitoIdaCor.style.background = amarelo
        }else if(transitoIda == 3){
            transitoIdaTexto.innerHTML = "Intenso"
            transitoIdaCor.style.background = laranja
        }else if(transitoIda == 4){
            transitoIdaTexto.innerHTML = "Paralizado"
            transitoIdaCor.style.background = vermelho
        }
    }
    transitoIda()

    console.log(rotaIda)
    console.log(rotaVolta)
});











