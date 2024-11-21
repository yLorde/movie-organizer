function render(filme) {
    list.innerHTML += `
    <div id="filme-popup">
        <p>
            Filme: <b>${filme.nome}</b> <br />
            Assistido: <b>${status[filme.status]}</b> <br />
            Nota: <b>${filme.nota}/10</b> <br />
            Tipo: <b>${tipo[filme.tipo]}</b> <br />
            Gênero: <b>${genero[filme.genero]}</b> <br />
            Stream: <b>${stream[filme.stream]}</b> <br />
            Id: ${filmes.indexOf(filme) + 1}
        </p>
    </div>
    `
}