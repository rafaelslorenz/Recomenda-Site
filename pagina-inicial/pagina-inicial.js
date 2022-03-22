function selecionarCategoria(categoria, ev){
    debugger
    let btnFiltrar = ev.currentTarget;
    if (btnFiltrar.style.background == 'lightgrey'){
        btnFiltrar.style.backgroundColor = '#3434ff !important';
    };
    if (btnFiltrar.style.backgroundColor == '#3434ff'){
        btnFiltrar.style.backgroundColor = 'lightgrey';
    }
}


function selecionarGenero(genero, ev){
    let btnFiltrar = ev.currentTarget;
    btnFiltrar.style.backgroundColor = 'blue';
}