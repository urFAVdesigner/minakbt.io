const button1 = document.querySelector('#b1');
const button2 = document.querySelector('#b2');
const button3 = document.querySelector('#b3');
const page1 = document.querySelector('#p1');
const page2 = document.querySelector('#p2');
const page3 = document.querySelector('#p3');
const style = document.querySelector('#sty');
button1.onclick = move;
button2.onclick= move2;
button3.onclick= move3;

function move(){
    page1.style.display = "inline";
  page2.style.display = "none";
  page3.style.display = "none";

}
function move2(){
    page1.style.display = "none";
    page2.style.display = "inline";
    page3.style.display = "none";


  }

  function move3(){
    page2.style.display = "none";
    page1.style.display = "none";
    page3.style.display = "inline";
  }

  const list = document.querySelectorAll('.list');
function activeLink(){
  list.forEach((item) => 
  item.classList.remove('active'));
  this.classList.add('active');
}

list.forEach((item) => 
item.addEventListener('click', activeLink));