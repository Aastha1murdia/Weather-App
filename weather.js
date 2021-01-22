let loc =document.getElementById("location");
let tempicon=document.getElementById("temp-icon");
let tempvalue=document.getElementById("temp-value");
let climate=document.getElementById("climate");
let iconfile;
const searchInput=document.getElementById("search-input");
const searchButton=document.getElementById("search-button");




searchButton.addEventListener("click",(e)=>
{
    e.preventDefault();
    getWeather(searchInput.value);
    searchInput.value='';
});
const getWeather=async(city)=>{
    try{
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=69c469856d59f8f79d8a85c41a270196`,
        
           {mode:'cors'}
        
        );
        const weatherData=await response.json();
        console.log(weatherData);
        const{name}=weatherData;
        const{feels_like}=weatherData.main;
        const{id,main}=weatherData.weather[0];
        loc.textContent=name;
        climate.textContent=main;
        tempvalue.textContent=Math.round(feels_like-273);
        if(id<300 && id>200){
            tempicon.src="file:///C:/Users/LENOVO/Desktop/Weather%20app/thunderstorm.svg"
        }
        else if(id<400 && id>300){
            tempicon.src="file:///C:/Users/LENOVO/Desktop/Weather%20app/artificial-atmosphere.svg"
        }
        
        else if(id<600 && id>500){
            tempicon.src="file:///C:/Users/LENOVO/Desktop/Weather%20app/rain.svg"
        }
        else if(id<700 && id>600){
            tempicon.src="file:///C:/Users/LENOVO/Desktop/Weather%20app/snowman.svg"
        }
        else if(id<800 && id>700){
            tempicon.src="file:///C:/Users/LENOVO/Desktop/Weather%20app/atmosphere.svg"
        }
        else if(id==800){
            tempicon.src="file:///C:/Users/LENOVO/Desktop/Weather%20app/sun.svg"
        }
    }
    catch(error){
        alert('City not found');
    }
};





window.addEventListener("load",()=>{
    let long;
    let lat;
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
        long=position.coords.longitude;
        lat=position.coords.latitude;
        const proxy="https://cors-anywhere.herokuapp.com/";
        const api=`${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=69c469856d59f8f79d8a85c41a270196`

        fetch(api).then((response)=>{
            return response.json();
        })
        .then(data=>{
            const{name}=data;
            const{feels_like}=data.main;
            const{id,main}=data.weather[0];
            loc.textContent=name;
            climate.textContent=main;
            tempvalue.textContent=Math.round(feels_like-273);
            if(id<300 && id>200){
                tempicon.src="file:///C:/Users/LENOVO/Desktop/Weather%20app/thunderstorm.svg"
            }
            else if(id<400 && id>300){
                tempicon.src="file:///C:/Users/LENOVO/Desktop/Weather%20app/artificial-atmosphere.svg"
            }
            
            else if(id<600 && id>500){
                tempicon.src="file:///C:/Users/LENOVO/Desktop/Weather%20app/rain.svg"
            }
            else if(id<700 && id>600){
                tempicon.src="file:///C:/Users/LENOVO/Desktop/Weather%20app/snowman.svg"
            }
            else if(id<800 && id>700){
                tempicon.src="file:///C:/Users/LENOVO/Desktop/Weather%20app/atmosphere.svg"
            }
            else if(id==800){
                tempicon.src="file:///C:/Users/LENOVO/Desktop/Weather%20app/sun.svg"
            }
            console.log(data);
        })
    

}


        )}
})