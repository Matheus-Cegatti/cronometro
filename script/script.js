var sec = 0;
var min = 0;
var hour = 0;

var btnIniciar = document.querySelector(".btn-iniciar");
var btnPause = document.querySelector(".btn-pausar");
var btnReiniciar = document.querySelector(".btn-reiniciar");


console.log(btnIniciar);


btnIniciar.addEventListener("click", function () {
    iniciar()
});

btnPause.addEventListener("click", function () {
    console.log("pausou");
    pausar()
})

btnReiniciar.addEventListener("click", function () {
    console.log("Reiniciou");
    resetar()
    if(sec == 0){
        btnIniciar.disabled = false;
        console.log(sec);
    }
})

function doisDigitos(digito) {
    if (digito < 10) {
        return ("0" + digito)
    } else {
        return (digito)
    }
}


function cronometro() {
    sec++
    if (sec == 60) {
        min++
        sec = 0
        if (min == 60) {
            hour++
            min = 0
        }
    }

    document.querySelector(".tempo").innerText = doisDigitos(hour) + ":" + doisDigitos(min) + ":" + doisDigitos(sec)
};


function pausar() {
    clearInterval(intervalo)

    if(pausar){
        btnIniciar.disabled = false;
    }
}

function resetar() {
    sec = 0;
    min = 0;
    hour = 0

    

    document.querySelector(".tempo").innerText = "00:00:00"
    pausar()
}

function iniciar() {
    cronometro();
    intervalo = setInterval(cronometro, 1000);
    console.log(sec);
    if(sec >= 1){
        btnIniciar.disabled = true;
        console.log("SEGUNDO MAIOR");
    }
}