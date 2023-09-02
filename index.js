//http://api.anidb.net:9001/httpapi?request=anime
//https://api.jikan.moe/v4/anime/{id}/pictures pictures
/*  const query = document.getElementById('searchInput').value.trim();
if (query) {
    fetchAndDisplayAnime(`https://api.jikan.moe/v4/anime?q=${query}`);
 */
async function main(){
    const anime = await fetch(`https://api.jikan.moe/v4/anime`)
    const animeCard = await anime.json();
    
    console.log(animeCard);
}


main();