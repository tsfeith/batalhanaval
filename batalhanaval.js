//variável que cria um número aleatório para atribuir a posição do navio
var posicaoAleatoria = Math.ceil(Math.random() * 5);

//conjunto de 3 variáveis de determina as três posições ocupadas pelo navio
var parte1 = posicaoAleatoria;
var parte2 = parte1+1;
var parte3 = parte2 +1;

// variável de controlo para impedir que o utilizador repita números
var partesUsadas = [];

//variáveis de controlo para selecionar a quadrícula, controlar o número
//de atingidas e o número de jogadas, respetivamente
var jogada;
var atingidas = 0;
var totalJogadas = 0;

//variável que irá determinar quando para o jogo
var foiAfundado = false;

//este ciclo irá correr enquanto o barco não estiver afundado, ou seja
//enquanto a variável foiAfundado corresponder ao valor booleano 'false'
while (foiAfundado === false) {
	
	//obtém a quadrícula selecionada pelo utilizador
	jogada = prompt("Pode jogar - Escolha um número entre 1 e 7:"); 
	
	//bloco 'if' que determina se o valor dado pelo utilizador é um número
	//se não for, o ciclo recomeça até ser dado uma resposta aceitável
	if (isNaN(jogada)) {
	
		alert("Por favor insira um número.");
	
	//bloco 'if' que garante que a resposta dada está entre parâmetros aceitáveis, ou seja,
	// que o valor dado está dentro da matriz do jogo
	} else if (jogada < 1 || jogada > 7) {

		alert("Jogada inválida. Tente de novo!");
	
	//bloco 'if' que garante que o número dado é um número inteiro
	//este bloco e os três anteriores garantem que não são desperdiçadas jogadas
	//entradas inválidas
	} else if (jogada % 1 !== 0) {
		
		alert("Por favor insira um número inteiro.");
		
	} else {
	    //variável de controlo que irá ser usada no ciclo 'for' em baixo
		var controlo = 0; 
		
		//este ciclo itera por cada um dos valores do array 'partesUsadas' e, se
		//esse valor for igual ao valor 'jogada', incrementa uma unidade à variável de controlo 'controlo'
		for (i=0; i < partesUsadas.length; i++) {
		    if (jogada == partesUsadas[i]) {
		        controlo++;
		    }
		}
		//se 'controlo' não for zero, é porque o ciclo for encontrou um número em partesUsadas igual
		//ao valor dado, ou seja, o utilizador está a repetir um número, que não pode ser
		if (controlo !== 0) {
		    
		alert("Por favor insira um número não repetido.");
		
		//se for zero, o número é novo e o programa decorre normalmente
		} else {  
		
		    totalJogadas += 1;
		
		    //adição da jogada a um array
		    //assim é controlado quais as quadrículas já selecionadas
		    partesUsadas.push(jogada);
        
            //bloco 'if' que verifica se a jogada acertou numa das partes do navio...
		    if (jogada == parte1 || jogada == parte2 || jogada == parte3) {

			    alert("Acertaste em mais uma parte!");

			    atingidas += 1;
            
                //se o jogador já tiver acertado em 3 partes
                //o navio afunda e o jogo acaba
			    if (atingidas == 3) {

				    foiAfundado = true;

				    alert("Navio totalmente afundado!");

			    }
        
            //...se não o jogo avisa o utilizador de que falhou o navio
		    } else {

			    alert("Falhaste...");

		    }

	    }

    }

}
//no final, calcula-se a pontaria do jogador, 
//fazendo a razão entre disparos realizados e disparos certeiros (3)
var estatistica = "Foi preciso um total de " + totalJogadas + " jogadas para afundar o navio, " + 
                          "o que quer dizer que a tua pontaria foi de " + ((3/totalJogadas)*100) + "%.";

alert(estatistica);
