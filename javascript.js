const imagens = [
    {
        id: 1,
        titulo: "Imagem 1",
        url: "https://picsum.photos/id/237/300/300"
    },
    {
        id: 2,
        titulo: "Imagem 2",
        url: "https://picsum.photos/id/238/300/300"
    },
    {
        id: 3,
        titulo: "Imagem 3",
        url: "https://picsum.photos/id/239/300/300"
    },
    {
        id: 4,
        titulo: "Imagem 4",
        url: "https://picsum.photos/id/240/300/300"
    },
    {
        id: 5,
        titulo: "Imagem 5",
        url: "https://picsum.photos/id/241/300/300"
    },
    {
        id: 6,
        titulo: "Imagem 6",
        url: "https://picsum.photos/id/242/300/300"
    },
    {
        id: 7,
        titulo: "Imagem 7",
        url: "https://picsum.photos/id/243/300/300"
    },    
    {
        id: 8,
        titulo: "Imagem 8",
        url: "https://picsum.photos/id/244/300/300"
    },
    
    
];

imagens.map((imagem) => {
    document.getElementById("gallery").innerHTML += `
    <div class="col-md-3 mb-3">
    <img src="${imagem.url}" onclick="abrirModal('${imagem.id}')" />
    </div>
    `
})

function abrirModal(id){
    const imagemSelecionada = imagens.find(imagem => imagem.id == id);
    document.querySelector("#imgSelecionada").src = imagemSelecionada.url;
    document.querySelector("#modalImgTitulo").innerHTML = imagemSelecionada.titulo;
    new bootstrap.Modal('#modalImg').show();
}
