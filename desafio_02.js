// Curso: Formação Lógica de Programação - DIO
// Projeto: Calculadora de Partidas Rankeadas
// Nome: Yan Moura Lima
// Data: 09/08/2025

// Entradas
let vitorias = 134
let derrotas = 143

// Guarda os resultados das funções
let resultado1 = saldoVitorias (vitorias,derrotas)
let resultado2 = nivel (vitorias)

// Saída
console.log(`O Herói tem de saldo de ${resultado1} e está no nível de ${resultado2}`)
 
// Função que calcula o saldo do jogador
function saldoVitorias(vitorias,derrotas){
let saldo = vitorias - derrotas
return saldo
}

// Função que determina o nível do jogador
function nivel (vitorias) {
	let classe
	if (vitorias<=10){//Se vitórias for menor do que 10 = Ferro
	classe = "Ferro"
	return classe
	}
    
    if (vitorias>=11 && vitorias<=20){//Se vitórias for entre 11 e 20 = Bronze
	classe = "Bronze"
	return classe
	}
    
    if (vitorias>=21 && vitorias<=50){//Se vitórias for entre 21 e 50 = Bronze
	classe = "Prata"
	return classe
	}
    
    if (vitorias>=51 && vitorias<=80){//Se vitórias for entre 51 e 80 = Ouro
	classe = "Ouro"
	return classe
	}
    
    if (vitorias>=81 && vitorias<=90){//Se vitórias for entre 81 e 90 = Diamante
	classe = "Diamante"
	return classe
	}
    
    if (vitorias>=91 && vitorias<=100){//Se vitórias for entre 91 e 100 = Diamante
	classe = "Lendário"
	return classe
	}
    
    if (vitorias>=101){//Se vitórias for entre 91 e 100 = Diamante
	classe = "Imortal"
	return classe
	}
}


