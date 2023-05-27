const getByName = (name) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${name}`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNWY2YzI3ODM1ODVmNWIwMDYxZTE4NDM2YWYyZGRiOSIsInN1YiI6IjYyZDQyMGRiNTQzN2Y1MDA1MGYyNjc3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.52ccvI5cFvr-Xv6ZH_Lkfdzx7VW26KTjWgQuGjPr0pc'
        }
    };

    fetch(url, options)
        .then(res => res.json())
        .then(json => {
            console.log(json.results[0]);
        })
        .catch(err => console.error('error:' + err));
}
const getRecommendations = (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNWY2YzI3ODM1ODVmNWIwMDYxZTE4NDM2YWYyZGRiOSIsInN1YiI6IjYyZDQyMGRiNTQzN2Y1MDA1MGYyNjc3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.52ccvI5cFvr-Xv6ZH_Lkfdzx7VW26KTjWgQuGjPr0pc'
        }
    };

    fetch(url, options)
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.error('error:' + err));
}

const getReviews = (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNWY2YzI3ODM1ODVmNWIwMDYxZTE4NDM2YWYyZGRiOSIsInN1YiI6IjYyZDQyMGRiNTQzN2Y1MDA1MGYyNjc3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.52ccvI5cFvr-Xv6ZH_Lkfdzx7VW26KTjWgQuGjPr0pc'
        }
    };

    fetch(url, options)
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.error('error:' + err));
}

const getActors = (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNWY2YzI3ODM1ODVmNWIwMDYxZTE4NDM2YWYyZGRiOSIsInN1YiI6IjYyZDQyMGRiNTQzN2Y1MDA1MGYyNjc3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.52ccvI5cFvr-Xv6ZH_Lkfdzx7VW26KTjWgQuGjPr0pc'
        }
    };

    fetch(url, options)
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.error('error:' + err));
}
const getImage = (path) => {
    const url = `https://image.tmdb.org/t/p/original${path}`;
}