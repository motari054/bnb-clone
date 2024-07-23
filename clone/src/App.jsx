import { Card } from "./components/Card";
import { Hero } from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Ap(){
  return(
    <>
    <Navbar/>
    {/* <Hero/> */}
    <Card
      img='katie-zaferes.png'
      ratings='5.0'
      reviewCount={6}
      location= 'USA'
      title='Life Lessons With Katie Zaferes'
      price={136}
      />
    </>
  )
}