const accessKey = "4A5H0QzCbbqhCTwDkWGPS-LY5SJ59ACI4g4b_dhLl-M";

const div = document.querySelector('.fans-container')
const imageContainer = document.querySelector('.bewakoof-fans')

const showMore = document.createElement('button')
showMore.innerHTML = "Show more"

let page = 1;
async function searchImages() {

     const inputData = 'Random People'
     const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;


     const response = await fetch(url);
     const data = await response.json();

     const results = data.results;

     results.map((result) => {
         const imege = document.createElement('img');
         imege.src = result.urls.small;
         imageContainer.append(imege)
         console.log(result);
     })
     
     showMore.classList.add('show-search-image');
     div.append(showMore)
     page++;
}

if (page > 0) {
     showMore.style.display = 'block';
}

showMore.addEventListener('click', () => {
     searchImages();
})
searchImages()
