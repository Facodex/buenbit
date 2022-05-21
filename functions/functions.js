// fomulario de ingreso
let z = 0;
let btning = document.getElementById('buttontwo').addEventListener('click',function(){
if (!z) {
  document.getElementById('formulario').style.display = 'flex';
  // mostrar formulario de ingresp
  z = 1;
}
else {
  document.getElementById('formulario').style.display = 'none';
  // esconder formulario de ingreso
  z = 0;
}
})

 // formulario de registro
let y = 0;
let buttonone = document.getElementById('buttonone').addEventListener("click", function(){
  // motrar formulario
  if (!y) {
    document.getElementById('formulario1').style.display = 'flex';
    y = 1;
  }else {
    // esconder formulario
    document.getElementById('formulario1').style.display = "none";
    y = 0;
  }
})
