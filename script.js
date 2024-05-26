async function getData(){
    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=f8aebf69-da65-4c3f-8940-bd28cac88d6f&offset=0")
       .then(data=>data.json())
       .then(data=>{
        if(data.status != "success") return;

        const matchList = data.data;

        if(!matchList) return [];

        const relevtData = matchList.map(match => `${match.name}, ${match.status}`);

        document.getElementById("matches").innerHTML = relevtData.map(match => `<li>${match}</li>`).join('');
        return relevtData;
       })
       .catch(e=> console.log(e));
}

getData();