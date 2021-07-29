var form=document.getElementById('form')

 form.addEventListener('submit',function(e){
  e.preventDefault()
  var song_name=document.getElementById('song_name').value
  var genre_song=document.getElementById('genre_song').value
  var author=document.getElementById('author').value
  var youtube=document.getElementById('youtube').value
  addSong(song_name,genre_song,author,youtube);
  
  
  });

function addSong(song_name,genre_song,author,youtube){
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
      alert("Song added successfully!!")
    })
}







