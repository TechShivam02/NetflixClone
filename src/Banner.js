import React , {useState,useEffect} from 'react'
import axios from './axios';


import "./banner.css"

const base_url = "https://image.tmdb.org/t/p/original/";




const Banner = (props) => {

    const fetchUrl = props.fetchUrl;   //   banner url 

   

    const [movie,setMovie] = useState([]);


    useEffect(() => {
 
            async function fetchData(){
                    const request = await axios.get(fetchUrl);

                    const index = Math.floor(Math.random() * request.data.results.length);
    
                    // console.log(request.data.results[index]);

                    const img = request.data.results[index];


                    setMovie(img);


            }


            fetchData();


    }, [fetchUrl]);

    

            console.log(movie);



    return(


        <>


        <header className='banner'

        style={{
            backgroundSize:"cover",
            backgroundImage:`url(${base_url}${movie?.backdrop_path})`,
            backgroundPosition:"center center"
        }}
        >


            <div className='banner_contests'>

                {/* title */}
                <h1 className='banner_title'>{movie?.title || movie?.name|| movie?.original_name}</h1>


                {/* div >> 2 btn */}
                <div className='banner_btns'>
                        <button className='banner_btn'>Play</button>
                        <button className='banner_btn'>My List</button>

                </div>


                {/* description */}
                <h1 className='banner_des'>
                    {movie?.overview}
                </h1>



            </div>


            <div className='banner_fadebottom'></div>


        </header>


        </>
    )
}

export default Banner;
