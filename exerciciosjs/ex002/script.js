let valores = [], i 
    for(i=0;i<6;i++){
        valores [i] = parseInt(prompt("Digite um número inteiro: "))
    }
    for(i=0;i<6;i++){
        alert("O valor "+ (i+1) + " é : " + valores [i])
    }