import React,{ useState } from "react";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import NavDrawer from "./NavDrawer";
import { Button,Input } from "antd";
import logo from "./movie-logo.png";
import axios from 'axios';
import { Link } from 'react-router-dom';
import MovieInfo from '../MovieDetail/Sections/MovieInfo'

function Navbar() {
    const [visible,setVisible] = useState(false);
    const [searchQuery,setSearchQuery] = useState("");
    const [searchResult,setSearchResult] = useState([])

    const [selectedMovie,setSelectedMovie] = useState("")

    const handleSearch = async () => {
        try {
            // const searchQuery = encodeURIComponent(movieTitle.original_title)
            const response = await fetch(
                `https://api.themoviedb.org/3/search/movie?api_key=c99bddfda6ad985cef6ce0beac31a9de&query=${searchQuery}`
            );

            if(!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log(data);
            setSearchResult(data.results);
            // Do something with the search results (data) from the TMDB API
            console.log('Search Results:',data);
        } catch(error) {
            console.error('Error fetching search results:',error);
        }
    };

    const showDrawer = () => {
        setVisible(true);
    };
    const handleMovieClick = (movie) => {
        setSelectedMovie(movie);
    };
    const redirect = (id) => {
        window.location.href = `/movies/${id}`;
    };
    const onClose = () => {
        setVisible(false);
    };
    return (
        <div>

            <nav className="menuBar" style={{display:"flex"}}>
                <div className="logo">
                    {/* <a href="/"> */}
                    <img src={logo} style={{width: 50,}}/>
                    {/* </a> */}
                </div>

                <div className="menuCon">
                    <div className="leftMenu">
                        <LeftMenu />
                        
                    </div>
                    
                    

                    <div className="rightMenu ">
                        
                        <RightMenu />
                    </div>

                    <Button className="barsMenu" type="link" onClick={showDrawer}>
                        <span className="barsBtn"></span>
                    </Button>

                    <div className="searchBar">
                        <Input.Search
                            placeholder="Search movies..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onSearch={handleSearch}
                            style={{ width: 600,margin: 8 }}
                        />
                    </div>

                    <NavDrawer onClose={onClose} visible={visible} />
                </div>

            </nav>
            <div className="searchResults" >
                {searchResult.map((movie) => (
                    // <Link key={movie.id} to={`/movie/${movie.id}`}>


                    <div
                        key={movie.id}
                        style={{
                            width: 200,
                            margin: 8,
                            border: '1px solid #ccc',
                            borderRadius: 8,
                            padding: 8,
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                            textAlign: 'center',
                            display: 'inline-block',
                            cursor: 'pointer',
                        }}
                        onClick={() => redirect(movie.id)}
                    // onClick={() => handleMovieClick(movie)}
                    >
                        <h3 style={{ marginBottom: 8 }}>{movie.title}</h3>
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            style={{ width: '100%',height: 300,objectFit: 'cover',borderRadius: 8 }}
                        />
                        <p style={{ marginTop: 8 }}>Release Date: {movie.release_date}</p>
                        <p>Vote Average: {movie.vote_average}</p>
                        {/* Add other movie details as needed */}

                    </div>


                    // {/* </Link> */ }
                ))}
            </div>
            {/* {selectedMovie && <MovieInfo movie={selectedMovie} />} */}
        </div>
    );
}
export default Navbar;
