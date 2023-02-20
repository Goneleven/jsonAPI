//Metodo fetch() para buscar o arquivo dados.json transformando o resultado em um objeto usando o metodo response.json()

fetch('dados.json')
    .then(response => response.json())
    .then(corpo => {

        //Acessando os dados do objeto JSON e adicionando ao HTML dentro de um elemento div usando a propriedade innerHTML (Front-End)

        document.getElementById('imagens').innerHTML = corpo.girassol.image;

        document.getElementById('nome').innerHTML = corpo.girassol.name;

        document.getElementById('disco').innerHTML = corpo.girassol.album;

        document.getElementById('estilo').innerHTML = corpo.girassol.style;

        document.getElementById('preco').innerHTML = corpo.girassol.price;

        //______________________________________________________________________________________________________

        document.getElementById('imagens2').innerHTML = corpo.peashooter.image;

        document.getElementById('nome2').innerHTML = corpo.peashooter.name;

        document.getElementById('disco2').innerHTML = corpo.peashooter.album;

        document.getElementById('estilo2').innerHTML = corpo.peashooter.style;

        document.getElementById('preco2').innerHTML = corpo.peashooter.price;

        //______________________________________________________________________________________________________

        document.getElementById('imagens3').innerHTML = corpo.wallnut.image;

        document.getElementById('nome3').innerHTML = corpo.wallnut.name;

        document.getElementById('disco3').innerHTML = corpo.wallnut.album;

        document.getElementById('estilo3').innerHTML = corpo.wallnut.style;

        document.getElementById('preco3').innerHTML = corpo.wallnut.price;

        //______________________________________________________________________________________________________

        document.getElementById('imagens4').innerHTML = corpo.carnivora.image;

        document.getElementById('nome4').innerHTML = corpo.carnivora.name;

        document.getElementById('disco4').innerHTML = corpo.carnivora.album;

        document.getElementById('estilo4').innerHTML = corpo.carnivora.style;

        document.getElementById('preco4').innerHTML = corpo.carnivora.price;

    })  