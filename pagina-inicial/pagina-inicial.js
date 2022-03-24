function selecionarCategoria(categoria, ev){
    let btnFiltrar = ev.currentTarget;
    verificarSeBtnFiltrado(btnFiltrar);
}

function selecionarGenero(genero, ev){
    let btnFiltrar = ev.currentTarget;
    verificarSeBtnFiltrado(btnFiltrar);
}

function verificarSeBtnFiltrado(btnFiltrar){
    if (!btnFiltrar.classList.contains('btn-filtrar-active')){
    
        btnFiltrar.classList.add('btn-filtrar-active');
    }
    else{
        btnFiltrar.classList.remove('btn-filtrar-active');
    }
}