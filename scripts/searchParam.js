function searchParam(param) {
    if (param === '--total') {
        window.alert(filmes.length+' Filmes cadastrados');
    };
    
    if (param === '--assistidos') {
        window.alert(filmes.filter(filme => filme.assistido === true).length+' Filmes assistidos');
    };
    
    if (param === '--para-assistir') {
        window.alert(filmes.filter(filme => filme.assistido === false).length+' Filmes não assistidos');
    };

    location.reload();
}