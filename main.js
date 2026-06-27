aff = document.querySelector(".affiche")





s= ""
u = ""
d = ""
btn = document.querySelectorAll(".signe")
for ( let i = 0; i<btn.length; i++)
btn[i].addEventListener("click",
        (event) => {
                 b = event.target.textContent
                affich()

        }
)
btnchiffre = document.querySelectorAll(".chiffre")
for ( let c = 0; c<btnchiffre.length; c++)
btnchiffre[c].addEventListener("click",
        (event) => {
                l = event.target.textContent
                affich()

        }
)
btnchiffre1 = document.querySelectorAll(".chiffre")
for ( let r = 0; r<btnchiffre1.length; r++)
btnchiffre1[r].addEventListener("click",
        (event) => {
                l = event.target.textContent
                affich()

        }
)
function affich (){
   let afficher = `${l}${b}${l}`
   aff.innerHTML = afficher
}

btnegale = document.querySelector(".egale")
btnegale.addEventListener("click",
        ()=>{
                if (b === "+"){
                       let affichresultat = `${l+l}`
                       affich.innerHTML =affichresultat 
                }else if(b === "-"){
                        affichresultat = `${l-l}`
                        affich.innerHTML =affichresultat 
                }else if(b === "x"){
                        affichresultat = `${l*l}`
                        affich.innerHTML =affichresultat 
                }else if( b === "/"){
                        affichresultat = `${l/l}`
                        affich.innerHTML =affichresultat 
                }else if( b === "%"){
                        affichresultat = `${l%l}`
                        affich.innerHTML =affichresultat 
                }
                }
)