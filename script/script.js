var sec = 0;
var min = 0;
var hour = 0;

var btnIniciar = document.querySelector(".btn-iniciar");
var btnPause = document.querySelector(".btn-pausar");
var btnReiniciar = document.querySelector(".btn-reiniciar");

console.log(btnIniciar);


btnIniciar.addEventListener("click", function(){
    console.log("clicou");
    iniciar()
});

btnPause.addEventListener("click", function(){
    console.log("pausou");
})

btnReiniciar.addEventListener("click", function(){
    console.log("Reiniciou");
})

function doisDigitos(digito){
    if(digito <10){
        return("0" + digito)
    }else {
        return(digito)
    }
}


function cronometoro() {
    sec++
    if(sec == 60){
        min++
        sec = 0
        if(min == 60) {
            hour++
            min = 0
        }
    }

    document.querySelector(".tempo").innerText = doisDigitos(hour)+ ":" + doisDigitos(min) + ":" + doisDigitos(sec)
};

function iniciar() {
    cronometoro();
    intervalo = setInterval(cronometoro, 1000)
}