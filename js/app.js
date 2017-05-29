
document.getElementById("0").addEventListener("click", function () {
    numero("0");
});

document.getElementById("1").addEventListener("click", function () {
    numero("1");
});

document.getElementById("2").addEventListener("click", function () {
    numero("2");
});

document.getElementById("3").addEventListener("click", function () {
    numero("3");
});

document.getElementById("4").addEventListener("click", function () {
    numero("4");
});

document.getElementById("5").addEventListener("click", function () {
    numero("5");
});

document.getElementById("6").addEventListener("click", function () {
    numero("6");
});

document.getElementById("7").addEventListener("click", function () {
    numero("7");
});

document.getElementById("8").addEventListener("click", function () {
    numero("8");
});

document.getElementById("9").addEventListener("click", function () {
    numero("9");
});

document.getElementById("on").addEventListener("click", function () {
    borradoTotal();
});

document.getElementById("sign").addEventListener("click", function () {
    opuest();
});

document.getElementById("raiz").addEventListener("click", function () {
    raizc();
});

document.getElementById("dividido").addEventListener("click", function () {
    operar("/");
});

document.getElementById("por").addEventListener("click", function () {
    operar("*");
});

document.getElementById("menos").addEventListener("click", function () {
    operar("-");
});

document.getElementById("punto").addEventListener("click", function () {
    numero(".");
});

document.getElementById("igual").addEventListener("click", function () {
    igualar();
});

document.getElementById("mas").addEventListener("click", function () {
    operar("+");
});




window.onload = function () { 
    pantalla = document.getElementById("display");

}
x = "0"; //número en pantalla
xi = 1; //iniciar número en pantalla: 1=si; 0=no;
coma = 0; //estado coma decimal 0=no, 1=si;
ni = 0; //número oculto o en espera.
op = "no"; //operación en curso; "no" =  sin operación.
inter = 0;


function numero(xx) {
   
        if (x == "0" || xi == 1) {
            pantalla.innerHTML = xx;
            x = xx;
            if (xx == ".") {
                pantalla.innerHTML = "0.";
                x = xx;
                coma = 1;
            }
        }
        else {
            if (xx == "." && coma == 0) {
                pantalla.innerHTML += xx;
                x += xx;
                coma = 1;
            }
            else if (xx == "." && coma == 1) { }
            else {
                pantalla.innerHTML += xx;
                x += xx;
                coma = 0;//cambiar el estado de la coma 
            }
        }
        xi = 0
       
   }

function operar(s) {
    igualar() 
    ni = x; 
    op = s; 
    xi = 1; 
    
    }   

function igualar() {
    if (op == "no") { 
      		pantalla.innerHTML = x;
    }
    else { 
        sl = ni + op + x; 
        sol = eval(sl);
        pantalla.innerHTML = sol
        x = sol; 
        op = "no"; 
        xi = 1;
        inter = x
    }
}

function raizc() {
    
    x = Math.sqrt(x) 
    pantalla.innerHTML = x; 
    op = "no"; 
    xi = 1;
    
}

function opuest() {
    nx = Number(x); 
    nx = -nx; 
    x = String(nx); 
    pantalla.innerHTML = x; 
}

function borradoTotal() {
    pantalla.innerHTML = 0; 
    x = "0"; 
    coma = 0; 
    ni = 0
    op = "no"
}