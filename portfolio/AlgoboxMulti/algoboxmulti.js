let i = 1; //multiplicateur
let n = 0; //multiplié
let r; //résultat

function frappe() {
  document.getElementById("fondpage").innerHTML;

} 

document.getElementById("fondpage").addEventListener("keyup", frappe);

 
  //  console.log(e.keyCode)

function calcul(){
  for (n = 1; n < 10; i++)
  {
      for (i = 1; i < 10; i++)
  
      r = n * i

      console.log=(n + "x" + i + "=" + r)

      r = document.getElementById("tables").innerHTML = n + "x" + i + "=" + r;
        
  } 
}  



                            //bouton rafraichir//
function reset() {
    window.location.href = "algoboxmulti.html";
}
document.getElementById("reset").addEventListener("click", reset);


