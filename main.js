// Obtendo referências aos elementos HTML
const dogImage = document.getElementById('dog-image');

// Função para buscar uma imagem aleatória de cachorro da API
async function fetchRandomDogImage() {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        const imageUrl = data.message;
        dogImage.src = imageUrl;
    } catch (error) {
        console.error('Erro ao buscar imagem de cachorro:', error);
    }
}

// Evento de clique na imagem ou no botão para trocar a imagem
dogImage.addEventListener('click', fetchRandomDogImage);

// Carregar uma imagem aleatória ao carregar a página inicial
fetchRandomDogImage();
