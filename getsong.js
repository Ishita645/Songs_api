const songList=document.getElementById('song-card');
// var form=document.getElementById('form')

// form.addEventListener('submit',function(e){
//   e.preventDefault()
//   var song_name=document.getElementById('song_name').value
//   var genre_song=document.getElementById('genre_song').value
//   var author=document.getElementById('author').value
//   var youtube=document.getElementById('youtube').value
//   song.addSong();
  
  
//  });

let song={
  fetchSong: function(singer_name){
    //  url="https://mfc-song-api.herokuapp.com/api/songs/?genre="+genre
    //  url="https://sheltered-meadow-41183.herokuapp.com/https://mfc-song-api.herokuapp.com/api/songs/?genre="+genre
    url="https://sheltered-meadow-41183.herokuapp.com/https://mfc-song-api.herokuapp.com/api/songs/?singer_name="+singer_name
  fetch(url)
         .then((response)=>{ return response.json()})
      .then((data)=> this.displaysong(data));
    // .then(data=>console.log(data));

  },
  displaysong: function(data){
    let html="";
    if(data.length==0)
    {
      //console.log("Empty list")
      html+=`<h1>Empty List !</h1>`;
      
    }
    else{
      console.log(data.length)    
      data.forEach(music => {
           html+=`
           <div class="song-item">
                <h2 class="city">Song Details</h2>
                 
                <div class="name">Name: ${music.name} </div>
                
                <div class="genre">Genre:${music.genre} </div>
                <div class="author">Author: ${music.singer_name}</div>
                <div class="link">Youtube link:<a>${music.youtube_link}</a> </div>

               
    
            </div> `;
          });
          // songList.innerHTML=html;

      }
      songList.innerHTML=html;
    },
    search:function(){
      this.fetchSong(document.querySelector(".search").value);
  },
  addSong:function(){
      url='https://sheltered-meadow-41183.herokuapp.com/https://mfc-song-api.herokuapp.com/api/songs/';
      //data='{ "name": "Makhna","genre": "Indi-pop", "singer_name": "Tanishk Bagchi", "youtube_link": "https://youtu.be/HqUeSjsYLNU" }'
      params={
        method:'POST',
        headers:{
                 "Content-type":"application/json"

        },
         body: JSON.stringify({name:song_name,genre:genre_song,singer_name:author,youtube_link:youtube}),
        //body: data,
      }
      fetch(url,params).then((response)=>{
        return response.json();
      }).then((data)=>{
        console.log(data);
      })





  }
  
};
document.querySelector(".search-bar button").addEventListener("click",function(){
     song.search();
});
// document.querySelector(".card button").addEventListener('click',function(){
//      song.addSong();
// });








// window.onload = function () {
//   song.fetchSong();
//   }


 //  for(let i=0;i<data.length;i++)
    //   {  
       //var {genre,name,singer_name,youtube_link}=data[i]
      //  genre_1=data[i].genre
      //  var genre_arr=[];
      //  genre_arr[i]=genre_1;
      //  var name_arr=[];
      //  name_arr[i]=name;
      //  var youtube_link_arr=[];
      //  youtube_link_arr[i]=youtube_link;
       //var details=[];
       //var details=[genre,name,singer_name,youtube_link]
       //console.log(details[i])



      //console.log(genre_arr.length)
      // console.log(name_arr.length)
      // console.log(youtube_link_arr.length)
     // console.log(genre_arr[0])

    
    //  for(let i=0;i<genre_arr.length;i++)
    //  {
    //        console.log(genre_arr[i])
    //      // document.writeln(details[i])
    //  } 
    // for(let i=0;i<name_arr.length;i++)
    // {
    //       console.log(name_arr[i])
         
    // } 
    // for(let i=0;i<youtube_link_arr.length;i++)
    // {
    //       console.log(youtube_link_arr[i])
         
    // } 

      //const{genre:genre1,name:name1,singer_name,youtube_link:yt1}=data[1]
    //console.log(genre1,name1,singer_name,yt1)