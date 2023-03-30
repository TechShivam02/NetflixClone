import React, { useEffect, useState } from 'react'
import axios from './axios';
import "./Row.css";


import YouTube from 'react-youtube';
import movieTrailer from "movie-trailer";


    

const base_url = "https://image.tmdb.org/t/p/original/";

 

const Row = (props) => {

    const title = props.title;
    const fetchUrl = props.fetchUrl;
    const islarge = props.isLarge;



    const [movies , setMovies] = useState([]);
    const [trailerUrl , settrailerUrl] = useState("");
    


    useEffect(()=> {

        const fetchData = async ()=>{
            const request = await axios.get(fetchUrl);
                // https://api.themoviedb.org/3   +  /discover/tv?api_key=${API_KEY}&with_networks=213
                        // from axiox file  + current

            // console.log(request.data.results);

            setMovies(request.data.results);

            return request;

        }

        fetchData();

        
    } , [fetchUrl]);  // when u using something inside it , that is outside of the block(from props) you have to tell u are using that is outside the block  , and it knows something changes or updated i have to refile the code  



    // console.log(movies);




        const opts = {
            height : "390",
            width : "100%",

            playerVars: {
                //https://developers.google.com/youtube/player_parameters
                autoplay : 1,
            },
        };



        const handleClick = (movie) => {

                // console.log(movie);


                
                if(trailerUrl){
                    settrailerUrl("");
                }

                else{
                    movieTrailer(movie?.name || "")
                    .then( (url) =>{                   

                     // url  ------>  // https://www.youtube.com/watch?v=gyZDDW69dRk

                     // we need only last paramter  i.e  "gyZDDW69dRk"

                     const urlParams = new URLSearchParams(new URL(url).search);   // to get everything after the question mark  from the url 
                                // i.e   this will give   "v=gyZDDW69dRk"

                    settrailerUrl(urlParams.get("v")); // u will get the value of v=".."   , if here v=shivam&last=bansal    then also  u will get the value of "v" i.e "shivam"  ,   if u pass "last"  inside the uelparams.get   then u got bansal 

                     })

                    .catch( (error) => console.log(error));
                }

            


        };





        
         

    return (
        <>

            <div className='row'>
                    <h2> {title} </h2>

                    <div className="row_posters">
                             
                        {movies.map(movie => (
                            

                                <img onClick={() => handleClick(movie) } className={ `row_poster  ${islarge && "row_poster_large"}` }  src={` ${base_url}${islarge ? movie.poster_path :  movie.backdrop_path} `}
                                                                                                                                // thumbnails           // original path
                                alt={movie.name}  title={movie.name} key={movie.id} />
                                
                                
                        ))}

                    </div>



                    {/* <YouTube videoId="gyZDDW69dRk" opts={opts} /> */}

                    {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} /> }




            </div>
        </>
    )
}
export default Row