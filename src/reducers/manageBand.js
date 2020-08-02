export default function manageBand(state = {
  bands: []
}, action) {
  
  
  console.log(action, state)
  switch (action.type) {
    case 'ADD_BAND':
      const band = {
        id: Math.random()*10000000000000,
        name: action.name
      }

      return { ...state, bands: [...state.bands, band] }

    case 'REMOVE_BAND': 
      return {bands: [...state.bands.filter(band => band.id !== action.bandId)]}

    default:
      return state;
  }
};
