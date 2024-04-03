let registros = [
    ["Juan","juan@sindato.com", 19, 36.234],
    ["Luis","luis@sindato.com", 18, 23.234],
    ["Andrea","Andrea@sindato.com", 22, 23.50],
    ["Pedro","Pedro@sindato.com", 12, 65.234],
    ["Maria","maria@sindato.com", 16, 123]
    ]
    
    let total=0

    for(let i=0; i<registros.length; i++){
        console.log("Registro "+(i+1))

        for(let j=0; j<registros[i].length; j++){
            console.log(" "+registros[i][j])
        
        }
    }