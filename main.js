const ingressos = [];

function highlightCard(selector){

    var element = document.getElementById(selector);

    element.classList.toggle("card-highlight");
}
function checkKeyboardCode(){
    document.addEventListener('keydown', (dnc) => {
        var name = dnc.key;
        var code = dnc.code;
        alert(`Tecla Pressionada ${name} \r\n code : ${code}`);

    }, false);
}
function addKeyboardEventListeners(){
    document.addEventListener('keydown' , (dnc) =>{
        var ingresso1 = document.getElementById("quinta");
        var ingresso2 = document.getElementById("sexta");
        var ingresso3 = document.getElementById("sabado");
        var ingresso4 = document.getElementById("domingo");

        var code = dnc.code;
        if(code == 'Digit1'){
            ingresso1.classList.toggle("card-highlight");
            ingresso2.classList.remove("card-highlight");
            ingresso3.classList.remove("card-highlight");
            ingresso4.classList.remove("card-highlight");
        }
        var code = dnc.code;
        if(code == 'Digit2'){
            ingresso1.classList.remove("card-highlight");
            ingresso2.classList.toggle("card-highlight");
            ingresso3.classList.remove("card-highlight");
            ingresso4.classList.remove("card-highlight");
        }
        var code = dnc.code;
        if(code == 'Digit3'){
            ingresso1.classList.remove("card-highlight");
            ingresso2.classList.remove("card-highlight");
            ingresso3.classList.toggle("card-highlight");
            ingresso4.classList.remove("card-highlight");
        }
        var code = dnc.code;
        if(code == 'Digit4'){
            ingresso1.classList.remove("card-highlight");
            ingresso2.classList.remove("card-highlight");
            ingresso3.classList.remove("card-highlight");
            ingresso4.classList.toggle("card-highlight");
        }
    }, false);
}
selectCard = (selector) => {
    var element = document.querySelector(selector);
    element.classList.toggle("card-selected");
    if(ingressos.includes(selector)) ingressos.pop(selector);
    else ingressos.push(selector)
}
showSelectedCards = () =>{
    if(ingressos.length > 0) alert("ingressos selecionados:" + ingressos);
}

addKeyboardEventListeners();
