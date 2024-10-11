let nome = prompt("Qual o nome do Herói?");
let exp = Number.parseInt(prompt("Qual o exp do Herói?"));
let nivel = "";

if (exp <= 1000) nivel = "Ferro";
if (exp >= 1001 && exp <= 2000) nivel = "Bronze";
if (exp >= 2001 && exp <= 5000) nivel = "Prata";
if (exp >= 5001 && exp <= 7000) nivel = "Ouro";
if (exp >= 7001 && exp <= 8000) nivel = "Platina";
if (exp >= 8001 && exp <= 9000) nivel = "Ascendente";
if (exp >= 9001 && exp <= 10000) nivel = "Imortal";
if (exp > 10000) nivel = "Radiante";

console.log(`O Herói de nome **${nome}** está no nível de **${nivel}**`);

let nomeHeroi = document.querySelector("h2 span");
let nivelHeroi = document.querySelector("h3 span");
let expHeroi = document.querySelector("p span");

nomeHeroi.innerHTML = nome;
nivelHeroi.innerHTML = nivel;
expHeroi.innerHTML = exp.toString();
