export const initialState = JSON.parse(localStorage.getItem("notes")) || [{ val: "", date: "" }];

export function reducer(prevState, action) {
  switch (action.type) {
    case "ADD_NOTES": return [...prevState, action.payload];
  case "DELETE_NOTE": return prevState.filter((item, index) => (index !== action.payload.id ? 1 : 0));
             default: return [...prevState];
  }
}
