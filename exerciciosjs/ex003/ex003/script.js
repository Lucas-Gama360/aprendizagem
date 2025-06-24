let conjunto1 = [], i, conjunto2 = []
    for(i=0;i<10;i++){
        conjunto1[i] = parseFloat(prompt("Digite o valor "+ (i+1) + ": "))
        conjunto2[i] = conjunto1[i]*conjunto1[i]
    }
    for(i=0;i<10;i++){
        alert("valor "+(i+1)+": "+ conjunto1[i]+"\n")
    }
    for(i=0;i<10;i++){
        alert("valor "+(i+1)+"^2 : "+ conjunto2[i]+"\n")
    }
