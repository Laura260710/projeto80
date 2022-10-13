var nomeDasPessoas = [];
function submeter(){

    var nomeConvidado = document.getElementById("nome1").value;
    nomeDasPessoas.push(nomeConvidado);
    console.log(nomeConvidado);
    console.log(nomeDasPessoas);

    var comprimentoNome = nomeDasPessoas.length;
    console.log(comprimentoNome);
    document.getElementById("mostrarNome").innerHTML=nomeDasPessoas.toString();
}

function ordemAlfabetica() {
nomeDasPessoas.sort(); 
var i = nomeDasPessoas.join("<br>");
console.log(nomeDasPessoas);
document.getElementById("organizado").innerHTML = i.toString();

}

function mostrar() {
var i = nomeDasPessoas.join("<br>");
console.log(nomeDasPessoas);
document.getElementById("p1").innerHTML=i.toString();
document.getElementById("alfabeto").style.display="block";
}

function pesquisar(){
var s =document.getElementById("s1").value;
var localizar = 0;
var j; 
for(j=0; j<nomeDasPessoas.length; j++){
    if(s==nomeDasPessoas[j]){
        localizar=localizar+1;
    }
 }
 document.getElementById("p2").innerHTML="nome encontrado "+ localizar+" vez(es)";
console.log("nome encontrado " + localizar + " vez(es)") 
}