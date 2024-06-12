console.log("test");

const movieNameRef = document.getElementById("movie-name");
const searchBtn = document.getElementById("searchBtn");
const result = document.getElementById("results");
const apiKey='de48f529';

searchBtn.addEventListener('click', () => {
    const movieName = movieNameRef.value;
    const lang='es';
    const url = `http://www.omdbapi.com/?t=${encodeURIComponent(movieName)}&apikey=${apiKey}&lang=${lang}=language=es`;
    console.log("test2");
    if(movieName.length <=0){
        result.innerHTML= `<h3 class="inicio-principal">Ingresar un nombre</h3>`;
    }else {
        fetch(url).then(response => response.json())
        .then((data)=>{
            console.log(data);
            console.log(data.Poster);
            console.log(data.Title);
            console.log(data.imdbRating);
            console.log(data.Rated);
            console.log(data.Runtine);
            console.log(data.Genre);
            console.log(data.Plot);
            console.log(data.Actors);

            const posterImg = document.createElement('img');
            posterImg.src = data.Poster;

            
            console.log("test3");

            result.innerHTML= `
                <div class="info">
                   <img src="${data.Poster}" class="poster">
                    <div>
                        <h2>${data.Title}</h2>
                        <div class="rating">
                            <img src="assets/images/palomitas-de-maiz.png">
                            <h4>${data.imdbRating}</h4> 
                        </div>
                        <div class="details">
                            <span> ${data.Rated}</span>
                            <span> ${data.Year}</span>
                            <span> ${data.Runtime}</span>
                        </div>
                        <div class="genre">
                            <div>${data.Genre.split(",").join("<div></div>")}
                            </div>

                        </div>

                    </div>
                </div>
                <h3 class="details">Plot:</h3>
                <p class="details">${data.Plot}</p>
                <h3 class="details">Cast:</h3>
                <p class="details">${data.Actors}</p>

            
            `;

        });
    };
})











/* 

const apiKey = 'de48f529';
const searchInput = document.getElementById('movie-name');
const searchBtn = document.getElementById('searchBtn');
const resultsContainer = document.getElementById('results');

searchBtn.addEventListener('click', () => {
    const searchTerm = searchInput.value;
    const lang = 'es'; 
    const url = `http://www.omdbapi.com/?t=${encodeURIComponent(searchTerm)}&apikey=${apiKey}&lang=${lang}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.Response === "True") {
                displayResults(data);
            } else {
                resultsContainer.innerHTML = '<div class="inicio-principal"><p>No se encontraron resultados.</p></div>';
            }
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});

function displayResults(movie) {
    const title = movie.Title;
    const releaseDate = movie.Year;
    const overview = movie.Plot;
console.log(movie);
    const movieElement = document.createElement('div');
    movieElement.classList.add('movie');
    movieElement.innerHTML = `
        <h2>${title} (${releaseDate})</h2>
        <p>${overview}</p>
    `;
    resultsContainer.innerHTML = '';
    resultsContainer.appendChild(movieElement);
}
  */