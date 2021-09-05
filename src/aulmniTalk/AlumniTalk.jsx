import React, {useState} from 'react'
import DisplayCard from './DisplayCard'
import "./styles.css"
function AlumniTalk() {
     const [counter, setCounter] = useState(0);
     let alumniDescription= [
           {
              img: "https://d27028dliefpk3.cloudfront.net/assets/meet-alumni/lalitha-masaischool.png",
              companyImg: "https://d27028dliefpk3.cloudfront.net/assets/partners/ajio.png",
              name : "Lalitha Perumalla",
              position: "Software Developer",
              description:"I left a job from Infosys to learn coding. Masai helped me get 3X salary in a product-based company.",
              testomonyvideo : {
                                src : "gvu891ubYWE",
                               src1:"https://www.youtube.com/embed/gvu891ubYWE",
                               title:"YouTube video player",
                               backGroundURL :"https://i.ytimg.com/vi/BuTXSgsw5Os/hqdefault.jpg",
              }
          },
           {
              img: "https://d27028dliefpk3.cloudfront.net/assets/meet-alumni/akhila.png",
              companyImg: "https://d27028dliefpk3.cloudfront.net/assets/partners/stackbox.png",
              name : "Akhila Gajulapalli",
              position: "Associate developer",
              description:"9-9-6 is a way of life, a disciple, that has helped me get ready for real world job. Now I have no fear learning new things",
              testomonyvideo : {
                                src: "xJ7X4PACxZU",
                               src1:"https://www.youtube.com/embed/xJ7X4PACxZU",
                               title:"YouTube video player",
                               backGroundURL: "https://i.ytimg.com/vi/xJ7X4PACxZU/hqdefault.jpg",
              }
          },
           {
              img: "https://d27028dliefpk3.cloudfront.net/assets/meet-alumni/nikhil-masaischool.png",
              companyImg: "https://d27028dliefpk3.cloudfront.net/assets/partners/smallcase@3x.png",
              name : "Nikhil Gudur",
              position: "Full Stack Engineer",
              description:"Coding through some online course. But I realised this wasnt enough. Masai helped me become skilled and now I work as a front end developer.",
              testomonyvideo : {
                               src1:"https://www.youtube.com/embed/jJPMnTXl63E",
                               src : "jJPMnTXl63E",
                               title:"YouTube video player",
                               backGroundURL: "https://i.ytimg.com/vi/J3xHwEOKnYk/hqdefault.jpg",
              } 
          },
     ]

     const increaseCounter = () => setCounter(prev => prev +=1)
    const decreaseCounter = () => setCounter(prev =>{
        prev -=1;
    return prev > 0 ? prev  : 0;
          
    } )
            return (
        <div className="alumniTalk">
            <h2>Hear from our Alumni</h2>
            {/* For each person there is 4 thing is associated
                   1) His/Her picture 
                   2) Where does he work and on what postion
                   3) A description that what triggered him to join masai
                   4) A testomonial video of him/her
                   5) Left click and right click to move next. 
            */}
            {/* <div className="alumniCard"> */}
  
            <div className="body">
            
              <span className="left-arr" >
              <svg viewBox="0 0 20 20" onClick={increaseCounter}  fill="currentColor" class="chevron-left w-6 h-6 text-white">
                <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>      
                  </span>
              <DisplayCard  item={alumniDescription[counter%alumniDescription.length]}/>
           <span className="right-arr">
              <svg viewBox="0 0 20 20"  onClick={decreaseCounter} fill="currentColor" class="chevron-right w-6 h-6 text-white">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
              </svg>
        </span>
            </div>
            {/* </div> */}

        </div>
    )
}

export default AlumniTalk
