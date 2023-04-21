import React from "react";
import Carousel from "../components/Carousel";
import Countdown from "../components/Countdown";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Itinerary from "../components/Itinerary";
import RSVP from "../components/RSVP";
import { useSearchParams } from "react-router-dom";
import { getFirestore } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { useEffect } from 'react'
import {app} from '../components/firbase'
import { useState } from "react";

function Page1() {
  const queryParameters = new URLSearchParams(window.location.search)
  const email = queryParameters.get("email")
   console.log(email)
   const db = getFirestore(app);

    const [rsvp,setrsvp] =useState(true)
    const [groom,setGroom]=useState('Caleb')
    const [bride,setBride]=useState('Amaya')
    const [date,setDate]=useState(null)
    const [addres,setAdress]=useState('This Address, Street 71,Amsterdam')
    const [topgallery,setTopgalley]=useState([])
    const [itinerary,setIntinerary]=useState([])
   useEffect(()=>{
    
      const retrivedata=async()=>{
        const docRef = doc(db, "Users", email);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          setrsvp(docSnap.data().rsvp)
          setGroom(docSnap.data().groom)
          setBride(docSnap.data().bride)
          setDate(docSnap.data().date)
          setAdress(docSnap.data().address)
          let data=[]
          data.push(docSnap.data().pics[0])
          data.push(docSnap.data().pics[1])
          data.push(docSnap.data().pics[2])
          setTopgalley(data)
          setIntinerary(docSnap.data()?.itineraryfields)
        } else {
          // docSnap.data() will be undefined in this case
          console.log("No such document!");
        }
      }
      retrivedata()

   },[])
    return (
      <>
      <Header/>
      <HeroSection groom={groom} bride={bride} />
      <Carousel Gallery={topgallery}/>
      <Countdown date={date} address={addres} />
      <Itinerary date={date} itinerary={itinerary} />
      {
        
        <Gallery/>
      }
      {
        rsvp?
        <RSVP/>:null
      }
      </>
    );
  }
  
  export default Page1;