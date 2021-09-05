import React from 'react'
function DisplayCard({item}) {
    return (
        <div className="displayCard">
             <div className="testmony-video">
             {/* <lite-youtube videoid="ogfYd705cRs" playlabel="Play: Keynote (Google I/O '18)"> */}
             {/* </lite-youtube> */}
             <lite-youtube videoid={item.testomonyvideo.src} style= {{backgroundImage: `url(${item.testomonyvideo.backGroundURL})`}}>
            <iframe width="500" height="300" src={item.testomonyvideo.src1} title= {item.testomonyvideo.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>             

             </lite-youtube>
             </div>
             <div className="discription">
                 <p>{item.description}</p>
                 <p > <img src= {item.img}  style={{height:"50px",borderRadius:"100%"}} alt="img" /></p>
                 <div className="companyImg-Pos">
                     <p> <img src= {item.companyImg} alt="CompanyImg"  style={{height:"40px"}}/></p>
                     <span> | </span>
                      <div>
                         <h3>{item.name}</h3>
                         <p>{item.position}</p>
                     </div>
                           
                 </div>
             </div>
        </div>
    )
}

export default DisplayCard
