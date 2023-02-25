const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6c44de9273msh0850216d0ca870fp14ceeejsnc7d5412f7757',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};

//async await
async function getData(url){
    let response=await fetch(url,options)
    let data=await response.json();
    console.log(data);
}

getData('https://imdb8.p.rapidapi.com/auto-complete?q=Harry%20Potter');