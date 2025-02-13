// parâmetros/argumentos
// retorno

function exibeInfoEstudante(nome, nota) {
    console.log (`O nome é ${nome} e a nota é ${nota}`);
}

exibeInfoEstudante("caroline", 9);
exibeInfoEstudante("ana", 8)


function exibeInfoEstudante2(nome, nota) {
    return `o nome é ${nome} e a nota é ${nota}`;
  }
  
  console.log(exibeInfoEstudante2('Caroline', 10));
  console.log(exibeInfoEstudante2('Ana', 7));