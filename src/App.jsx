// import React from "react"
import info from './info'

function App() {

  return (
    <div className="flex h-screen justify-around mt-8">
      {
        info.map(createCard)
      }
    </div>
  )
}

export default App

const NetflixSeries = (props) => {
  return (
    <div className="max-w-[250px] bg-[#f0f0f0] h-fit transition-all hover:scale-110 cursor-pointer">
      <div className="bg-white w-[100%] flex justify-center"><img src={props.Src} alt="Error" /></div>
      <h2>{props.Name}</h2>
      <h3>Rating: {props.Rating}</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ratione pariatur nobis, blanditiis est exercitationem?</p>
    </div>
  )
}

function createCard(info){
  return <NetflixSeries key={info.id} Name={info.Name} Src={info.Src} Rating={info.Rating}/>
}
