import React, { useReducer, useRef, useEffect } from "react";
import "./styles.scss";
import { reducer, initialState } from "./reducer.js";
import {
  dropThereHelperFun,
  addNoteFunction,
  addToLocalStorage,
} from "./helperFun.js";
export default function Main() {
  //useRef
  // useReducer
  //localStorage
  //useContext
  //onDragEnd

  let addNoteRef = useRef();
  const [notes, dispatchNotes] = useReducer(reducer, initialState);

  let arr = notes.filter((ele) => (ele.val ? 1 : 0));

  const dispatchFun = (dispatch_notes) => {
    dispatchNotes(dispatch_notes);
  };
  let a2 = JSON.stringify(arr);
  useEffect(() => {
    let a3 = JSON.parse(a2);
    addToLocalStorage(a3);
  }, [a2]);

  const addNote = (e) => {
    e.preventDefault();
    if (!e.target[0].value) return;
    dispatchFun(addNoteFunction(e));
    e.target.reset();
  };

  const dropThere = (event) => {
    let formOffset = addNoteRef.current.getBoundingClientRect();
    dropThereHelperFun(event, formOffset);
  };

  const dragOver = (event) => {
    event.stopPropagation();
    event.preventDefault();
  };

  let notesLength = arr.length > 0 ? arr.length : "";
  let lastDate = arr.length > 0 ? arr[arr.length - 1].date : "";

  return (
    <div className="body" onDragOver={dragOver}>
      <div className="main-note">
         <h1>Sticky Notes({notesLength})</h1>
         <pre> Last Note Added: {lastDate} </pre>
        <form
          action=""
          onSubmit={addNote}
          className="add-notes"
          ref={addNoteRef}
        >
          <textarea type="submit"></textarea>
          <button type="submit">Add Notes</button>
        </form>
      </div>
      {arr.map((val, id) => {
        return (
          <div
            className="sticky-img"
            draggable="true"
            onDragEnd={dropThere}
            key={id}
            style={{
              transform: `rotate(${val.rotate}deg)`,
            }}
          >
            <div
              onClick={() =>
                dispatchNotes({ type: "DELETE_NOTE", payload: { id } })
              }
              className="close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <pre>{val.val}</pre>
          </div>
        );
      })}
    </div>
  );
}
