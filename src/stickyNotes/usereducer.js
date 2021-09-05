export const initialState = [{ val: "", len: 0 }];

export const useReducerFn = (prevState, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_NOTE": {
      console.log("we are add Note ");
      return [...prevState, action.currentVal];
    }
    case "DELETE_NOTE": {
      console.log("We are in delete notes");
      let filteredNotes = prevState.filter((item, index) =>
        index != action.payload.id ? 1 : 0
      );
      console.log(filteredNotes);
      return [...filteredNotes];
    }
    default:
      return [...prevState];
  }
};
