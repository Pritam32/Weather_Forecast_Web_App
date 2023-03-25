var city=document.querySelector('input[type="search"]');
var temp=document.querySelector('.temp');
var desc=document.querySelector('.weather');
var button=document.querySelector('button');
var moment=document.querySelector('.moment');

var ic=document.querySelector('#main');
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = weekday[d.getDay()];
let time = new Date().toLocaleString('en-US', { hour: 'numeric',minute:'numeric', hour12: true });

fetch("https://api.openweathermap.org/data/2.5/weather?q=bhubaneswar&appid=53a4da560cc2fa6fe4c1b41b0ef4c793")
    .then((response)=>response.json())
    .then(data=>{
        temp.innerHTML=String(data['main']['temp']).substring(0,2)+" ℃";
        desc.innerHTML=data['weather'][0]['description'];
        moment.innerHTML=day+" , "+time;
        ic.src="http://openweathermap.org/img/w/" + data['weather'][0]['icon'] + ".png";
})
fetch("https://api.openweathermap.org/data/2.5/forecast?q=bhubaneswar&appid=53a4da560cc2fa6fe4c1b41b0ef4c793")
.then(response=>response.json())
.then(data=>{
    for(let i=4;i<17;i=i+4){
        document.getElementById('a'+(i)).innerHTML = String(data.list[i].main.temp).substring(0,2)+" ℃";
        document.getElementById('day'+(i)).innerHTML=data.list[i].weather[0].description;
        document.getElementById('i'+(i)).src="http://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png";
        
    }
    for(let j=0;j<4;j++){
        document.getElementById('week'+(j+1)).innerHTML=weekday[d.getDay()+(j+1)]+" , "+time;
    }
})



fetch("https://api.openweathermap.org/data/2.5/forecast?q=bhubaneswar&appid=53a4da560cc2fa6fe4c1b41b0ef4c793")
    .then((response)=>response.json())
    .then(data=>{
       for(let i=0;i<4;i++){
        document.getElementById('s'+(i+1)).innerHTML = String(data.list[i].main.temp).substring(0,2)+" ℃";
        document.getElementById('sam'+(i+1)).innerHTML=data.list[i].weather[0].description;
        document.getElementById('q'+(i+1)).src="http://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png";
       }
        
        console.log(data.list.length);
})

button.onclick=()=>{
    

    fetch("https://api.openweathermap.org/data/2.5/weather?q="+city.value+"&appid=53a4da560cc2fa6fe4c1b41b0ef4c793")
    .then((response)=>response.json())
    .then(data=>{
        temp.innerHTML=String(data['main']['temp']).substring(0,2)+" ℃";
        desc.innerHTML=data['weather'][0]['description'];
        moment.innerHTML=day+" , "+time;
        ic.src="http://openweathermap.org/img/w/" + data['weather'][0]['icon'] + ".png";
    })
    .catch(e=>{
        console.log("Invalid City Name");
    })
    
    fetch("https://api.openweathermap.org/data/2.5/forecast?q="+city.value+"&appid=53a4da560cc2fa6fe4c1b41b0ef4c793")
.then(response=>response.json())
.then(data=>{
    for(let i=4;i<17;i=i+4){
        document.getElementById('a'+(i)).innerHTML = String(data.list[i].main.temp).substring(0,2)+" ℃";
        document.getElementById('day'+(i)).innerHTML=data.list[i].weather[0].description;
        document.getElementById('i'+(i)).src="http://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png";
        
    }
    for(let j=0;j<4;j++){
        document.getElementById('week'+(j+1)).innerHTML=weekday[d.getDay()+(j+1)]+" , "+time;
    }
})



fetch("https://api.openweathermap.org/data/2.5/forecast?q="+city.value+"&appid=53a4da560cc2fa6fe4c1b41b0ef4c793")
    .then((response)=>response.json())
    .then(data=>{
       for(let i=0;i<4;i++){
        document.getElementById('s'+(i+1)).innerHTML = String(data.list[i].main.temp).substring(0,2)+" ℃";
        document.getElementById('sam'+(i+1)).innerHTML=data.list[i].weather[0].description;
        document.getElementById('q'+(i+1)).src="http://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png";
       }
        
        console.log(data.list.length);
})
    
    
}
