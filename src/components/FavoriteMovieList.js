import React from 'react';
import { connect } from 'react-redux';

import { removeFavorite} from '../actions/favoritesActions';
import { Link } from 'react-router-dom';


const FavoriteMovieList = (props) => {
    const { favorites, removeFavorite } = props;

    const handleClick = (id) => {
        removeFavorite(id)
    }
    
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span onClick={()=> handleClick(movie.id)}><span class="material-icons" >remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}
const mapStateToProps = (state) => {
    return ({
        favorites: state.favoriteReducer.favorites
    })
}

export default connect(mapStateToProps, { removeFavorite })(FavoriteMovieList);