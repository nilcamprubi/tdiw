function confirmaRegistre(){
    alert("registrant estudiant");
    document.getElementById("formDiv").innerHTML = "<p class='important'>T'has registrat amb èxit!</p>";
    console.log("registrant estudiant");
    return false;
}

async function carregaMencions(){
    var tagGraus = document.getElementById("graus");
    var resposta = await fetch("mencions.php?grau="+tagGraus.value);
    var respostaTxt = await resposta.text();
    document.getElementById("mencions").innerHTML = respostaTxt;
}