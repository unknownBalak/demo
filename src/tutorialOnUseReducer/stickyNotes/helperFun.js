export const dropThereHelperFun = (event, formOffset) => {
  console.log(formOffset);
  let heightOfNotes = Math.ceil(formOffset.top + formOffset.height + 20);
  let widthOfNotes = Math.ceil(formOffset.left + formOffset.width + 20);
  let dropPos1 = event.pageX,
    dropPos2 = event.pageY;
  if (dropPos2 < heightOfNotes && dropPos1 < widthOfNotes) return;
  event.target.style.left = `${event.pageX - 50}px`;
  event.target.style.top = `${event.pageY - 50}px`;
};

export const addNoteFunction = (e) => {
  let textareVal = e.target[0].value;
  return {
    payload: {
      val: textareVal,
      date: new Date().toTimeString().slice(0, 8),
      rotate: Math.floor(Math.random() * 20),
    },
    type: "ADD_NOTES",
  };
};

export const addToLocalStorage = (arr1) => {
  if (arr1.length > 0) {
    localStorage.setItem("notes", JSON.stringify(arr1));
  }
};
