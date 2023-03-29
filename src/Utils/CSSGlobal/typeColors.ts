export type coresSistema = "--branco" 
 | "--cinza-100"
 | "--cinza-200"
 | "--cinza-300"
 | "--cinza-400"
 | "--cinza-600"
 | "--cinza-700"
 | "--cinza-800"
 | "--cinza-900"


 | "--verde-300"
 | "--verde-500"

 | "--vermelho"

 | "--laranja-500"
 | "--laranja-700"

 | "--roxo-300-20"
 | "--roxo-300"
 | "--roxo-500"
 | "--roxo-900"

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;
type VAR = `var(${coresSistema})`;

export type Color = RGB | RGBA | HEX | VAR;