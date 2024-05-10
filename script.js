//botão fora do modal, para abrir popUp
let buttonModal = document.querySelector('#msgError')
let modal = document.querySelector('dialog')
let buttonBack = document.querySelector('dialog button')

let buttonReject = document.querySelector('#buttonReject')

var newText = document.createElement('div');
newText.id = 'revealText';

document.getElementById('revealButton').addEventListener('click', function() {
  var contentSection = document.querySelector('.content');
  contentSection.innerHTML = ''; // Limpa todo o conteúdo da seção
  

  newText.innerHTML = `
  <p class="texto-convidando">Você com toda certeza clicou nos 2,00 né?!eu sei, te conheço kkkkkk
  Então primeiramente quero agradecer por todos momentos juntos, por cada puxão de orelha necessário e sempre me incentivar na vida. Essa distância é muito ruim, mas necessária para o seu crescimento e o meu. Nunca vou esquecer que no momento mais difícil da minha vida você esteve comigo, sou grata demais pela sua vida e sempre vou torcer e orar pela sua felicidade. Quando eu anunciei pela primeira vez que estava grávida, você foi uma das primeiras pessoas que soube. E não quero ser grosseira com ninguém, mas eu e o Guilherme observamos muito todos que julgou e esteve ajudando a gente. E sem dúvida alguma, você esteve do meu lado. Conversava com a Luna na barriga, contando do "tio negao" e as histórias (que obviamente eu deixava contar). Exatamente no dia 12/07/2022 foi exatos 2 dias depois de ter tido a Luna, ainda no hospital com uma recém nascida, você fez questão de ir me visitar, mesmo sendo o dia da sua mudança pro Paraguai. Exatamente naquele dia, e o hospital foi do outro lado de SP kkkkk e desde então você sempre foi presente mesmo estando tão distante, não deixa de ligar pra falar com a gente e tem até uma tatuagem do nascimento da Luna kkkkk doido.
  Cara nunca te pedi formalmente, mesmo já te considerando padrinho.
  <br>
  Você aceita uma promoção, ser oficialmente Dindo da Luna?</p>

  <button onclick="aceitou()">Lógico que aceito, tonta</button>
  <button id="btnRecusa" onclick="naoAceitou()">Não, Vsfd</button>
  `;
  contentSection.appendChild(newText);
});


buttonModal.onclick = function() {
    modal.showModal();
}

buttonBack.onclick = function() {
    modal.close();
}

function naoAceitou() {
  console.log("Funcionou!")
  newText.innerHTML = `
    <p class="texto-convidando">
    ????VAI ACEITAR SIM OX</p>

    <button id="buttonReject" onclick="aceitou()">LÓGICO QUE ACEITO, TONTA</button>
  `;
}

function aceitou() {
  window.location.href = "./contadorDeCliques.html"
}


