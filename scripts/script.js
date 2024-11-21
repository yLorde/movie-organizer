function main() {
    loadDatabase();
    
    const list = document.getElementById('list');

    filmes.map((filme) => {
        render(filme);
    })
}