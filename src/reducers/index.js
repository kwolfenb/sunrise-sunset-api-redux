const rootReducer = (state=initialState, action) => {
  // let lat;
  // let long;
  switch (action.type) {
      case 'CALCULATE':
      const {lat, long} = action;
      let newState = Object.assign({}, state, {
      lat: lat,
      long: long
  });
      return newState;
      default: 
          return state;
  }
}


const initialState = {
  lat: 1, 
  long: 1, 
  articles: ['red', 'green', 'blue']
}
export default rootReducer;