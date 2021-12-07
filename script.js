const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');
const tech = document.getElementsByClassName('tech');


// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

function texto()
{
    firstLi.innerHTML = input.value;
}

input.addEventListener("keyup", texto);

function createLi(tech){
    input.tech.innerHTML = 'Testando';
}

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada // Aqui está a primeira tecnologia que mais gostei.';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

function redirect(){
    window.location.href = "https://www.betrybe.com/";
}

myWebpage.addEventListener("dblclick", redirect);

function changeColor(){
    myWebpage.style.color = 'green';
}
myWebpage.addEventListener("mouseover", changeColor);

function returnColor(){
    myWebpage.style.color = 'white';
}
myWebpage.addEventListener("mouseout", returnColor);