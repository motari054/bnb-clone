import { Card } from "./components/Card";
import { Hero } from "./components/Hero";
import Navbar from "./components/Navbar";
import data from './data'

console.log(data)

const cardData = data
export default function App(){
  return(
    <>
    <Navbar/>
    <Hero/>
    <section className="cards--list">
      {cardData.map((data)=>{
        return <Card key={data.id} data={data}/>
      })}
    </section>
    </>
  )
}