// Declaração das variáveis
let nomeHeroi = "Lino91br";
let experiencia = 7500;
let nivel;

// Estrutura de decisão para classificar o nível do herói com base na experiência (XP)
if (experiencia < 1000) {
    nivel = "Ferro";
} else if (experiencia <= 2000) {
    nivel = "Bronze";
} else if (experiencia <= 5000) {
    nivel = "Prata";
} else if (experiencia <= 7000) {
    nivel = "Ouro";
} else if (experiencia <= 8000) {
    nivel = "Platina";
} else if (experiencia <= 9000) {
    nivel = "Ascendente";
} else if (experiencia <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

// Exibe a mensagem final com o nível do herói
console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`);
