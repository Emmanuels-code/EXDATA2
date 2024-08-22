async function start() {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
    const data = await response.json()
    createMovieList(data.message)
    }

    start()

    function createMovieList(MovieList) {
        document.getElementById("Movie").innerHTML = `
        <select>
            <option> Choose a Movie title</option>
            <option>shows</option>
            <option>Networks</option>
            <option>Web channels</option>
        </select>
        `
        
    }