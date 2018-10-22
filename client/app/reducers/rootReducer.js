import { combineReducers } from 'redux';
 
import { GET_CURRENT_LOCATION, CHANGE_LOCATION  } from "../actions/"; //Import the actions types constant we defined in our actions
 
let initialState = { data: [], loading:true };
 
const locationReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_CURRENT_LOCATION:
        return { ...state, coords: action.payload};
      case CHANGE_LOCATION:
        return { ...state, coords: action.payload};
      default:
          return state;
    }
};
 
// Combine all the reducers
const rootReducer = combineReducers({
    locationReducer
})
 
export default rootReducer;