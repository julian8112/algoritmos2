

function suma() {
    let a=0;
    // la variable a capturara el primer valor
    let b=0;
    //  la variable b captura el segundo valor
    let s=0;
    // la variable s captura la suma de a y b
    a=parseInt(prompt("por favor ingrese el primer valor"));
    b=parseInt(prompt("por favor ingrese el segundo valor"));
    s=a+b;
    alert("el resultado de la suma es: " + s);
}

function opBasicas(){
    let a=0;
    // la variable a capturara el primer valor
    let b=0;
    //  la variable b captura el segundo valor
    let s=0;
    // la variable s captura la suma de a y b
    let r=0;
    // la variable r captura la resta de a y b
    let m=0;
    // la variable m captura la multiplicacion de a y b
    let d=0;
    // la variable d captura la division de a y b
    a=parseInt(prompt("por favor ingrese el primer valor"));
    b=parseInt(prompt("por favor ingrese el segundo valor"));
    s=a+b;
    r=a-b;
    m=a*b;
    d=a/b;
    alert("el resultado de la suma es: " + s);
    alert("el resultado de la resta es: " + r);
    alert("el resultado de la multiplicacion es: " + m);
    alert("el resultado de la division es: " + d);
}

function cuadrado(){
    let base=0;
    // let expo=0;
    let r=0;
    base=parseFloat(prompt("por favor ingrese la base "));
    // expo=parseFloat(prompt("por favor ingrese el exponente "));
    r=base*base;
    alert(" el resultado es: " +r);

}

function areaTriangulo(){
    let base=0;
    let altura=0;
    const d=2;
    let r=0;
    base=parseInt(prompt("por favor ingrese la base: "));
    altura=parseFloat(prompt("por favor ingrese la altura: "));
    r=(base*altura)/d;
    alert("el area del triangulo es: " + r);
}

function inversionCapital(){
    let inversion=0;
    const interes=1.7;
    let años=0;
    let ganancia=0;
    let diferencia=0;
    let interanual=0;
    inversion=parseFloat(prompt("por favor ingrese el dinero de la inversion: "));
    años=parseInt(prompt("por favor ingrese la cantidad de años a la que desea la inversion: "));
    interanual=interes*12;
    ganancia=inversion*(1+interanual)**años;
    diferencia=ganancia-inversion;
    alert("el saldo durante el periodo solicitado es: " +ganancia+"$");
    alert("las ganancias totales de su inversion son: " + diferencia+"$");
}