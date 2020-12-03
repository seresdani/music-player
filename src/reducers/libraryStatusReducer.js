export const libraryStatusReducer = (state = false, action) => {
  switch (action.type) {
    case "SET_LIBRARY_STATUS":
      return !state;
    default:
      return state;
  }
};
