async function puxarMenu(){
    await fetch('../../components/menu/menu_colaborador.html').then(response => response.text()).then(data =>{document.getElementById('menuColaborador').innerHTML = data})
    const flecha = document.getElementById('flecha')
    const perfilMenu = document.getElementById('perfilMenu')

    flecha.addEventListener('click',()=>{
        if(flecha.className == "flecha"){
            flecha.className = "flecha flechaCima"
        }else{
            flecha.className = "flecha"
        }

    })
   
}
puxarMenu()

