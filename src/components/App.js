import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './NavBar/NavBar';
import Movies from './Movies/Movies';
import ModalMovie from './ModalMovie/ModalMovie';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [currentMovie, setCurrentMovie] = useState();

  const MOST_RECENT_API = "https://api.themoviedb.org/3/search/movie?api_key=&query=all";
  const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=&query=";

  useEffect(() => {
	  getMovies(MOST_RECENT_API)
	}, []);

    const getMovies= async (props) =>
    {
      try
      {
        const response = await fetch(props);
        const data = await response.json();
        setMovies([...data.results]);
      } catch (err)
      {
        console.log(err.message)
      }
    
    
    }

    
  
  const handleOnSubmit = (e) => {
    e.preventDefault();
	if(searchValue){
    getMovies(SEARCH_API+searchValue)
        setSearchValue("");
	}
  };


  const handleOnChange = (e) => {
    setSearchValue(e.target.value);
  };

  
  const getMovieDetails = (id) => {
    setCurrentMovie(id);
    setIsOpenModal(true);
  };

  return (
    <div className="app-container">
      <NavBar handleSubmit={handleOnSubmit} handleChange={handleOnChange} />
      <div className="header">
        <h1 className="heading">
          Most Recent Movies
        </h1>
      </div>
      <ModalMovie
        modalOpen={isOpenModal}
        setModalOpen={setIsOpenModal}
        movie={movies.filter((movie) => movie.id === currentMovie)[0]}
      />
	   <Movies movies={movies} getMovieDetails={getMovieDetails} />
    </div>
  );
};

export default App;
