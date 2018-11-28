window.onload=llenadoMensaje();

function llenadoMensaje() {
    txtA1=document.getElementById('mensaje1');
    txtA2=document.getElementById('mensaje2');
    txtA3=document.getElementById('mensaje3');
    if(localStorage.getItem('mensaje1')!=null)
        txtA1.value=localStorage.getItem('mensaje1');
    if(localStorage.getItem('mensaje2')!=null)
        txtA2.value=localStorage.getItem('mensaje2');
    if(localStorage.getItem('mensaje3')!=null)
        txtA3.value=localStorage.getItem('mensaje3')

}

function GroupCards() {
    console.log("entre al metodo");
    let cards;
    let colapsible;
}

function enviar1() {
    let textarea=document.getElementById('mensaje1');
    let mensaje=textarea.value;
    localStorage.setItem('1','hola');
    if(localStorage.getItem('mensaje1')==null){
        console.log("entre al primer if");
        localStorage.setItem('mensaje1',mensaje);
        alert('mensaje enviado correctamente');
        textarea.value=mensaje;
        console.log(localStorage.getItem('mensaje1'));
    }
    else {
        console.log("else");
        localStorage.setItem('mensaje1',mensaje);
        textarea.value=mensaje;
        console.log(localStorage.getItem('mensaje1'));
        alert('mensaje enviado correctamente');

    }
}

function enviar2(){
    let textarea=document.getElementById('mensaje2');
    let mensaje=textarea.value;
    if(localStorage.getItem('mensaje2')==null){
        console.log("entre al primer if");
        console.log("este es el segundo if");
        localStorage.setItem('mensaje2',mensaje);
        textarea.value=mensaje;
        console.log(localStorage.getItem('mensaje1'));
        alert('mensaje enviado correctamente')
    }
    else {
        localStorage.setItem('mensaje2',mensaje);
        alert('mensaje enviado correctamente');
        textarea.value=mensaje;
    }
}

function enviar3() {
    let textarea=document.getElementById('mensaje3');
    let mensaje=textarea.value;
    if(localStorage.getItem('mensaje3')==null){
        console.log("entre al primer if");
        localStorage.setItem('mensaje3',mensaje);
        textarea.value=mensaje;
        alert('mensaje enviado correctamente')
    }
    else {
        localStorage.setItem('mensaje3',mensaje);
        textarea.value=mensaje;
        alert('mensaje enviado correctamente');

    }
}
