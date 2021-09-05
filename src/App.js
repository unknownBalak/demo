import React from "react";
// import Example2 from "./tutorialOnUseReducer/Example2";
// import UseReducerExample from "./tutorialOnUseReducer/UseReducerExample";
// import WeeklyWave from "./weeklyWave/WeeklyWave";
// import Main from "./LiftingUpState/Main.jsx";
// import TempConverter from "./TempCoverter.jsx"
// import TempParent from "./LiftingUpState2/TempParent.jsx"
// import AbsenteesGraph from "./graph/AbsenteesGraph"
// import QuestionAndAnswer from "./QuestionAndAnswerProject/QuestionAndAnswer";
// import Form from "./form/Form";
  // import AlumniTalk from "./aulmniTalk/AlumniTalk";
  // import UseRefExample from "./tutorialOnUseRef/UseRefExample";
 import Main from "./tutorialOnUseReducer/stickyNotes/Main"
  // import Main from './stickyNotes/Main';
  class App extends React.Component {
  render() {
   
  //  let data1= [65, 59, 80, 81, 56, 55];
  //  let  data2=[45, 59, 50, 79, 46, 55];
    return (
      <div>
         {/* <AbsenteesGraph  data1={data1} data2={data2} /> */}
          {/* <QuestionAndAnswer /> */}
        {/* <Form /> */}
        {/* <AlumniTalk /> */}
        {/* <UseRefExample /> */}
        {/* <UseReducerExample /> */}
          <Main />
          
      </div>
        
    );
  }
}

export default App;
