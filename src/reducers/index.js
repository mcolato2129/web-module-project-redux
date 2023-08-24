import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import favoriteReducer from './FavoriteReducer';

const rootReducer = combineReducers({
    movieReducer,
    favoriteReducer
})

export default rootReducer;