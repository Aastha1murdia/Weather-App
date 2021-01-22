let previous=document.querySelector("#pre");
let play=document.querySelector("#play");
let next=document.querySelector("#next");
let title=document.querySelector("#title");
let recent_volume=document.querySelector("#volume");
let volume_show=document.querySelector("#volume_show");
let slider=document.querySelector("#duration_slider");
let show_duration=document.querySelector("#show_duration");
let track_image=document.querySelector("#track_image");
let auto_play=document.querySelector("#auto");
let present=document.querySelector("#present");
let total=document.querySelector("#total");
let artist=document.querySelector("#artist");
let timer;
let autoplay=0;
let index_no=0;
let playing_song=false;
let track=document.createElement("audio");
let All_song=[
    {
        name:"first song",
        path:"file:///C:/Users/LENOVO/Desktop/Music%20App/ek-ajnabi-hasina-se.mp3",
        img:"file:///C:/Users/LENOVO/Desktop/Music%20App/chandani.PNG",
        singer:"Jolly Mukherjee and Sridevi"
    },
    {
        name:"second song",
        path:"file:///C:/Users/LENOVO/Desktop/Music%20App/ek-ajnabi-hasina-se.mp3",
        img:"file:///C:/Users/LENOVO/Desktop/Music%20App/ek%20ajnabi%20hasina.PNG",
        singer:"Asha Bhosle,Kishor Kumar"
    },
    {
        name:"third song",
        path:"file:///C:/Users/LENOVO/Desktop/Music%20App/WhatsApp%20Audio%202020-12-24%20at%2006.35.43%20(1).mpeg",
        img:"file:///C:/Users/LENOVO/Desktop/Music%20App/lag%20ja%20gale.PNG",
        singer:"Lata Mangeshkar"
    },
    {
        name:"fourth song",
        path:"file:///C:/Users/LENOVO/Desktop/Music%20App/WhatsApp%20Audio%202020-12-24%20at%2006.35.43%20(3).mpeg",
        img:"file:///C:/Users/LENOVO/Desktop/Music%20App/mere%20sapno%20ki%20rani.PNG",
        singer:"Kishor Kumar"
    },
    {
        name:"fifth song",
        path:"file:///C:/Users/LENOVO/Desktop/Music%20App/WhatsApp%20Audio%202020-12-24%20at%2006.35.43%20(8).mpeg",
        img:"file:///C:/Users/LENOVO/Desktop/Music%20App/o%20%20hasina%20julfo%20vali.PNG",
        singer:"Asha Bhosle and Mohammaed Rafi"
    },
    {
        name:"sixth song",
        path:"file:///C:/Users/LENOVO/Desktop/Music%20App/WhatsApp%20Audio%202020-12-24%20at%2006.35.43%20(4).mpeg",
        img:"file:///C:/Users/LENOVO/Desktop/Music%20App/likhe%20jo%20khat%20tuje.PNG",
        singer:"Mohammaed Rafi"
    }  
];
function load_track(index_no){
    track.src=All_song[index_no].path;
    title.innerHTML=All_song[index_no].name;
    track_image.src=All_song[index_no].img;
    artist.innerHTML=All_song[index_no].singer;
    track.load();
}
load_track(index_no);
function justplay(){
    if(play_song==false){
        playsong();
    }
    else{
        pausesong();
    }
}
function playsong(){
    track.play();
    playing_song=true;
    play.innerHTML='<i class="fa fa-pause"></i>';
}