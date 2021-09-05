import React from 'react'
import FAQ from './FAQ'
import './style.css';
function QuestionAndAnswer() {
  
    let faQArrays = [
        {
          question: "Tell me about yourself?",
          answer : "ipsam ipsum animi rerum quisquam expedita consectetur pariatur asperiores quasi! Soluta, ex eligendi. Reprehenderit id deserunt in accusantium cum vero tenetur laudantium animi dolorem ad quis possimus quo odio laborum consequatur rem eius, eaque fugiat est, eligendi iste dicta et? Repellat dolorem perferendis facilis, ab dolores quo ut distinctio."            
        },
        {
            question: "Tell me about yourself?",
            answer : "ipsam ipsum animi rerum quisquam expedita consectetur pariatur asperiores quasi! Soluta, ex eligendi. Reprehenderit id deserunt in accusantium cum vero tenetur laudantium animi dolorem ad quis possimus quo odio laborum consequatur rem eius, eaque fugiat est, eligendi iste dicta et? Repellat dolorem perferendis facilis, ab dolores quo ut distinctio."            
          },
        {
            question: "Tell me about yourself?",
            answer : "ipsam ipsum animi rerum quisquam expedita consectetur pariatur asperiores quasi! Soluta, ex eligendi. Reprehenderit id deserunt in accusantium cum vero tenetur laudantium animi dolorem ad quis possimus quo odio laborum consequatur rem eius, eaque fugiat est, eligendi iste dicta et? Repellat dolorem perferendis facilis, ab dolores quo ut distinctio."            
          },
    ]

    return (
        <section className="faq-body">
             <h2 className="faq-heading">Frequently Asked Question</h2>
             {faQArrays.map((question,i)=> <FAQ question={question} key={i}/>)}
        </section>
    )
}

export default QuestionAndAnswer
