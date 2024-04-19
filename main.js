function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("Qual o time que ganhou do chelsea em 2012 na final do mundial de clubes?");

    R
    if (respostaTime.toLowerCase() === "Corinthians") {
      alert("Isso mesmo o colossal da zona leste bateu nos blues e conquistou o mundial!");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Não é isso! Tente novamente.");
    }
  }
}