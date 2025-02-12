const estudante = "Caroline";
const docente = "Ana";
const cumprimento = "Nosso lema é 'estudar bastante!'";
const citação = "ju diz: 'nosso lema é estudar bastante!'";

console.log (cumprimento);
console.log (citação);
console.log ("a estudante" + estudante);

//template string
console.log (`a estudante é doida ${estudante}`);

//site para pegar as string
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String

const senha = "Senhasegura" + estudante.toUpperCase();
console.log (senha)