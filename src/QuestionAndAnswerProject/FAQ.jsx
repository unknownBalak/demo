import React ,{useState} from 'react'
import './style.css';
import rightIcon from "./right-arrow.png"
function FAQ({question}) {
    const [state, setstate] = useState(true)

    function changeView() {
         console.log("change view function have been clicked");
         setstate(prev=> prev= !prev);
    }

    return (
        <div className="faq-question">
               <div className="question-body">
                 <h3>{question.question}</h3>
                 <img src={rightIcon} alt="icon" onClick={changeView} className={state ? "transformIcon" : ""} />
               </div>
                <p className={state ? "hidePtag" : "showPtag"}>{question.answer}</p>
        </div>
    )
}

export default FAQ
