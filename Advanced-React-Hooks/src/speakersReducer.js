const speakersReducer = (state, action) => {
    let updateFavorite = (isFavourite) => {
      return state.map((speaker, index) => {
        if (speaker.id === action.sessionId) {
          speaker.favorite = isFavourite;
          return speaker;
        }
        return speaker;
      })
    }
    switch (action.type) {
      case "setSpeakerList": {
        return action.data;
      }
      case "favorite": {
        return updateFavorite(true);
      }
      case "unfavorite": {
        return updateFavorite(false);
      }
      default:
        return state;
    }
};
export default speakersReducer;