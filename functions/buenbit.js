// functions menu desplegable
// cotizaciones
let i = 0;
let coti = document.querySelectorAll('.menu')[0].addEventListener('click',function(){
if (!i) {
  document.querySelectorAll('.coti__li')[0].style.display = 'block';
  i = 1;
}
else {
  document.querySelectorAll('.coti__li')[0].style.display = 'none';
  i = 0;
}
})
// productos
let a = 0;
let prod = document.querySelectorAll('.menu')[1].addEventListener('click',function(){
if (!a) {
  document.querySelectorAll('.coti__li')[1].style.display = 'block';
  a = 1;
}
else {
  document.querySelectorAll('.coti__li')[1].style.display = 'none';
  a = 0;
}
})
// aprende
let b = 0;
let apre = document.querySelectorAll('.menu')[2].addEventListener('click',function(){
if (!b) {
  document.querySelectorAll('.coti__li')[2].style.display = 'block';
  b = 1;
}
else {
  document.querySelectorAll('.coti__li')[2].style.display = 'none';
  b = 0;
}
})
// ayuda
let c = 0;
let ayuda = document.querySelectorAll('.menu')[3].addEventListener('click',function(){
if (!c) {
  document.querySelectorAll('.coti__li')[3].style.display = 'block';
  c = 1;
}
else {
  document.querySelectorAll('.coti__li')[3].style.display = 'none';
  c = 0;
}
})
