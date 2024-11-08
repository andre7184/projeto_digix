async function puxarMenu(){ 
    fetch('../../components/menu/menu_admin.html').then(response => response.text()).then(data =>{document.getElementById('menuAdmin').innerHTML = data})

    
}

puxarMenu()