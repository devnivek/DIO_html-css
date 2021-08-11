    
    function clicou(){
        document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
        //console.log(document.getElementById("agradecimento"));
        //alert("Obrigado por clicar");
    }
    
    function redirecionar(){
        window.open("http://generationbrasil.online/");
        //window.location.href = "http://generationbrasil.online/";
    }

    function trocar(elemento){
        //document.getElementById(elemento).innerHTML = "Obrigado por passar o mouse";
        elemento.innerHTML = "Obrigado por passar o mouse";
        //alert("trocar texto");
    }

    function voltar(elemento){
        //document.getElementById(elemento).innerHTML = "Passe o mouse aqui";
        elemento.innerHTML = "Passe o mouse aqui";
        //alert("trocar texto");
    }

    function load(){
        alert("página carregada");
    }

    function funcaoChange(elemento){
        console.log(elemento.value);
    }
    /* 
    function soma(n1,n2){
        return n1 + n2;
    }

    function setReplace(frase, nome, novo_nome){
        return frase.replace(nome, novo_nome);
    }

    var validar;
    function validaIdade(idade){
        validar;
        if(idade >= 18){
            return true;
        } else {
            return false;
        }
    }

    var idade  = prompt("Qual sua idade?")
    console.log(validaIdade(idade));

    //alert(soma(5, 10));
    //alert(setReplace("Vai Japão","Japão","Brasil"));

    var d = new Date();
    alert(d.getMonth()+1);
    alert(d.getDay());
    alert(d.getHours());
    alert(d.getMinutes());

    var count = 0;
    for(count = 1; count <= 5; count++){
        alert(count);
    }

    var count = 0;
    while (count <= 5){
        console.log(count);
        alert(count);
        count++;
    }

    var idade = prompt("Qual sua idade");
    if (idade >= 18){
        alert("maior de idade");
    } else {
        alert("menor de idade");
    }

    var frutas = [{nome:"maçã", cor:"vermelha"},{nome:"uva", cor:"roxa"}]
    console.log(frutas);
    alert(frutas[1].nome);


    var fruta = {nome:"maçã", cor:"vermelha"}
    console.log(fruta.nome);
    alert(fruta.cor);


    var lista = ["maçã","pêra","laranja"];
    lista.push("uva");
    lista.pop();
    console.log(lista);
    console.log(lista.toString());
    console.log(lista.join(" - "))

    
    var nome = "Kevin Santos";
    var idade = 23;
    var idade2 = 9;
    var frase = "Japão ganhou todas as medalhas"

    alert("Bem Vindo " + nome);
    alert(idade + idade);
    console.log(nome);
    console.log(idade+idade2);
    console.log(frase.replace("ganhou","roubou"));
    alert(frase.toLowerCase());

    */