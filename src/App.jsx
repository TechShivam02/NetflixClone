import React from 'react';

// 2fe1972a02320d87558cfade9220814f

import "./App.css";

import Row from "./Row.js";
import requests from './requests.js';


import Nav from "./Nav.js"
import Banner from "./Banner.js"


const App = () => {
    return (
        <>
            <div className='App'>

            {/* Navbar*/}   

            <Nav/>


            
            <Banner fetchUrl = {requests.fetchNetflixOriginals}/>

            <Row  isLarge={true}  title="NETFLIX ORIGINALS"  fetchUrl = {requests.fetchNetflixOriginals} />
            
            
            <Row title="Trending Now" fetchUrl = {requests.fetchTrending} />


            <Row title="Top Rated" fetchUrl = {requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl = {requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl = {requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl = {requests.fetchHorrorMovies} />
            <Row title="Romance Movies" fetchUrl = {requests.fetchRomanceMovies} />
            <Row title="Documentaries" fetchUrl = {requests.fetchDocumentaries} />


            </div>   
        </>
    )
}

export default App;
