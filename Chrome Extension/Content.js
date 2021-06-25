image = [
    "https://unsplash.com/photos/nVkPg-lHhak",
    "https://unsplash.com/photos/-8AlrPHZr1A",
    "https://unsplash.com/photos/hbyi6LzmbIw",
    "https://unsplash.com/photos/TxaCblSfXwM"
];

const images = document.getElementsByTagName("img")
for (let i = 0; i < images.length; i++){
    const randomImage = Math.floor(Math.random()*image.length);
    images[i].src = image[randomImage]
}

const headers = document.getElementsByTagName("h2");
for (let i = 0; i<headers.length; i++){
    header[i].innerText = "HashC0d3z";
}