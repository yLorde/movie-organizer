function buscarFilme() {
    const titulo = document.getElementById('input-titulo').value;
    if (String(titulo).toLowerCase().startsWith('--')) searchParam(String(titulo).toLowerCase());

    const resultado = filmes.filter(filme => filme.nome.toLowerCase().includes(String(titulo).toLowerCase()));

    if (resultado.length > 0) {
        list.innerHTML = ``;
        // list.innerHTML = `<div>Resultados: ${resultado.length}</div><br/>`
        resultado.map((filme) => {
            render(filme);
        })
    } else {
        list.innerHTML = ``;
        list.innerHTML = `<div>Nenhum título encontrado!</div><br/>`
    }
};