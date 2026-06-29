aff = document.querySelector(".affiche")

s= ""
nbre1 = ""
nbre2 = ""
affichresultat = ""
btn = document.querySelectorAll(".signe")
for ( let i = 0; i<btn.length; i++)
btn[i].addEventListener("click",
        (event) => {
                   if (affichresultat != ""){
                        aff.innerHTML = ""
                        affichresultat = ""
                   }
                 s = event.target.textContent
                 if (s === "clear"){
                        s = ""
                        nbre1 = ""
                        nbre2 = ""
                        aff.innerHTML = s,nbre1,nbre2
                }
                affich()

        }
)
btnchiffre = document.querySelectorAll(".chiffre")
for ( let c = 0; c<btnchiffre.length; c++)
btnchiffre[c].addEventListener("click",
        (event) => {
                if (affichresultat != ""){
                        affichresultat = ""
                        aff.innerHTML = ""

                }
                 if (s === ""){
                nbre1 += event.target.textContent
                affich()
        }else if( s != "" ){
                nbre2 += event.target.textContent
                affich()}
        
})
function affich (){
       let  afficher = `${nbre1}${s}${nbre2}`
        aff.innerHTML= afficher
}


btnegale = document.querySelector(".egale")
btnegale.addEventListener("click",
        ()=>{
                if (s === "+"){
                        nbre1 = Number(nbre1)
                        nbre2 = Number(nbre2)
                        affichresultat = `${(nbre1)+(nbre2)}`
                       aff.innerHTML =affichresultat
                       s = ""
                       nbre1 = ""
                       nbre2 = "" 
                }else if(s === "-"){
                        affichresultat = `${nbre1-nbre2}`
                        aff.innerHTML =affichresultat
                        s = ""
                        nbre1 = ""
                        nbre2 = "" 
                }else if(s === "x"){
                        affichresultat = `${nbre1*nbre2}`
                        aff.innerHTML =affichresultat
                        s = ""
                        nbre1 = ""
                        nbre2 = "" 
                }else if(s === "/"){
                        affichresultat = `${nbre1/nbre2}`
                        aff.innerHTML =affichresultat
                        s = ""
                        nbre1 = ""
                        nbre2 = "" 
                }else if(s === "clear"){
                        affichresultat = ""
                        aff.innerHTML =affichresultat
                        s = ""
                        nbre1 = ""
                        nbre2 = "" 
                }
                }
)