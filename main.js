var waze = './waze.json'

fetch(waze)
  .then(response => response.json())
  .then(data => {
    
    // VOLTA
    var nomeVolta = document.getElementById('nomeVolta')
    var voltaPartida = document.getElementById('voltaPartida')
    var voltaChegada = document.getElementById('voltaChegada')
    var voltaTempo = document.getElementById('voltaTempo')
    var voltaDistancia = document.getElementById('voltaDistancia')

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


    // IDA
    var nomeIda = document.getElementById('nomeIda')
    var idaPartida = document.getElementById('idaPartida')
    var idaChegada = document.getElementById('idaChegada')
    var idaTempo = document.getElementById('idaTempo')
    var idaDistancia = document.getElementById('idaDistancia')

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

    console.log(rotaIda)
    console.log(rotaVolta)
});
















// let lastJson = null;

// function checkForChanges() {
//     fetch("https://www.waze.com/row-partnerhub-api/feeds-tvt/?id=11497612172")
//       .then(response => response.json())
//       .then(json => {
//         if (JSON.stringify(json) !== JSON.stringify(lastJson)) {
//           console.log("JSON mudou:", json);
//           lastJson = json;
//         }
//       })
//       .catch(error => console.error(error));
//   }
//   setInterval(checkForChanges, 5000);