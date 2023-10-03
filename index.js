
const url = 'https://random-anime-img.p.rapidapi.com/anime';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '714685b24cmshe2dc3655d4e352ep16f772jsn2766f3f047b9',
		'X-RapidAPI-Host': 'random-anime-img.p.rapidapi.com'
	}
};
const myAnime = async () => {
    
try {
	const response = await fetch(url, options);
	const result = await response.json();
    const imgs = result.url
    document.querySelector('img').src = imgs;
	document.querySelector('a').href = imgs
	document.querySelector('a').target = "blank"
	console.log(result);
} catch (error) {
	console.error(error);
}
}

//myAnime()