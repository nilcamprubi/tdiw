function confirmaRegistre(){
    alert("registrant estudiant");
    document.getElementById("formDiv").innerHTML = "<p class='important'>T'has registrat amb èxit!</p>";
    console.log("registrant estudiant");
    return false;
}

async function carregaMencions(){
    //completa
    alert('hi');
    let response = await fetch('http://localhost/mencions.php?grau='
        + document.getElementById("graus").value
    );
    let opcions = await response.text();
    document.getElementById("mencions").innerHTML = opcions;
}