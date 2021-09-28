var div1;
var div2;
var div3;
window.onload = function() {
  div1 = document.getElementById("div1");
  div2 = document.getElementById("div2");
  div3 = document.getElementById("div3");
  var bt1 = document.getElementById("btn1");
    bt1.onclick = mostrardiv1;
  var bt2 = document.getElementById("btn2");
    bt2.onclick = mostrardiv2;
  var bt3 = document.getElementById("btn3");
    bt3.onclick = mostrardiv3;

  div1.classList.add("escondido");
  div2.classList.add("escondido");
  div3.classList.add("escondido");
}
function mostrardiv1() {
  div1.classList.remove("escondido");
  div2.classList.add("escondido");
  div3.classList.add("escondido");

}
function mostrardiv2() {
  div1.classList.add("escondido");
  div2.classList.remove("escondido");
  div3.classList.add("escondido");

}
function mostrardiv3() {
  div1.classList.add("escondido");
  div2.classList.add("escondido");
  div3.classList.remove("escondido");

}
