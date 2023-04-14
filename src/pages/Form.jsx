import { app } from '../components/firbase'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Checkbox from "react-custom-checkbox";
import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from "react-router-dom";
import { useEffect } from 'react';
import {
    getDownloadURL,
    getStorage,
    ref as storageRef,
    uploadBytesResumable,
} from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
 
const Form = () => {

    const [grom, setGroom] = useState('')
    const [bride, setbride] = useState('')
    const [eventdate, setEventDate] = useState('')
    const [eventadress, SetEventAdress] = useState('')
    const [needpics, setNeedPics] = useState(true)
    const [rsvp, setRsvp] = useState(true);
    const [gallery, setGalelry] = useState([])
    const [email, setEmail] = useState('')
    const history = useHistory()
    const [selectedImages, setSelectedImages] = useState([])
    const [itinerary,setItinerary]=useState(true)
    const onDrop = useCallback(acceptedFiles => {
        setSelectedImages(acceptedFiles)
        console.log(acceptedFiles)
        console.log("hello ")
    }, [])
    const auth = getAuth(app);
    const db = getFirestore(app);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setEmail(user.email)
            }
            else {
                history.push('/login')
            }
        });
    })
    const setdate = (e) => {
        setEventDate(e.target.value)
        console.log(eventdate)
    }
    const [load,setLoaad]=useState(false)
    const storage = getStorage(app);
    
    const [formfields,setFromfields]=useState([
        {time:'',title:'',description:''},
    ])
    
    const handleFormchange=(event,index)=>{
        console.log(index)
        console.log(event.target.name)
        let data=[...formfields]
        data[index][event.target.name]=event.target.value
        setFromfields(data)
    }
    
    const addfields =()=>{
        let object={
            time:'',title:'',description:''
        }
        setFromfields([...formfields,object])
        setLoaad(load)
    }
    
    const removefield=(index)=>{
        let data=[...formfields]
        data.splice(index,1)
        setFromfields(data)
    }
    const submitdata = () => {
        if(needpics){
              console.log("hello")

              selectedImages.map((item, index) => {
                  if (item) {
                const fileRef = storageRef(storage, `/files/${email + item.name + Math.random() * 10000}`);
                const uploadTask = uploadBytesResumable(fileRef, item);
                uploadTask.on(
                    "state_changed",
                    (snapshot) => {
                        const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        console.log("Upload is " + progress + "% done");
                        switch (snapshot.state) {
                            case "paused":
                                console.log("Upload is paused");
                                break;
                                case "running":
                                    console.log("Upload is running");
                                break;
                            }
                        },
                        (error) => { },
                        async () => {
                            await getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                                let data=gallery
                                data.push(url)
                                setGalelry(data);
                                if(index+1===selectedImages.length){
                                    setLoaad(true)
                            }
                        });
                    }
                    );
                }})
                const func=async()=>{
                    const docref= await setDoc(doc(db, "Users", email), {
                        groom: grom,
                        bride: bride,
                        date: eventdate,
                        gallery: needpics,
                        rsvp:rsvp,
                        address:eventadress,
                        pics: gallery,
                        itinerary: itinerary,
                        itineraryfields: formfields
                    });
                    console.log(docref)
                }
                if(load){
                    console.log("fuck")
                    func()
                    setLoaad(false)
                    history.push(`/invite?email=${email}`)
                }
            }
            else{
                const func=async()=>{
                    const docref= await setDoc(doc(db, "Users", email), {
                        groom: grom,
                        bride: bride,
                        date: eventdate,
                        gallery: needpics,
                        rsvp:rsvp,
                        
                    });
                    console.log(docref)
                }
                
                    console.log("fuck")
                    func()
                    setLoaad(false)
                    history.push(`/invite?email=${email}`)
                
            }

    }

    return (
        <div>
            <Header />

            <h1 className='text-md font-semibold my-10 text-center'>Personal Information</h1>
            <div className='lg:w-2/4 w-full my-10 m-auto lg:flex  block justify-between '>

                <div >
                    <label htmlFor="groom">Groom Name</label>
                    <input onChange={(e) => { setGroom(e.target.value) }} className='border-[1px] my-1 border-pink-500 focus:outline-none focus:border-pink-700  block rounded-2xl px-3 py-2' type="text" name='groom' />
                </div>

                <div >
                    <label htmlFor="bride">Bride Name</label>
                    <input onChange={(e) => { setbride(e.target.value) }} className='border-[1px] my-1 border-pink-500 focus:outline-none focus:border-pink-700  block rounded-2xl px-3 py-2' type="text" name='bride' />
                </div>

                <div>
                    <label htmlFor="date">Event Date</label>
                    <input type="date" onChange={setdate} name="date" className='border-[1px] w-[200px] my-1 border-pink-500 focus:outline-none focus:border-pink-700  block rounded-2xl px-3 py-2' />
                </div>

            </div>

            <div className='lg:w-2/4 w-full bg my-10 m-auto lg:flex block  justify-between '>
                <div className='w-full'>
                    <label htmlFor="date">Event Adress</label>
                    <input onChange={(e) => { SetEventAdress(e.target.value) }} type="text" name="address" className='border-[1px] h-20 w-full my-1 border-pink-500 focus:outline-none focus:border-pink-700  block rounded-2xl px-3 py-2' />
                </div>

            </div>

            <div className='lg:w-2/4 w-full bg my-10 m-auto lg:flex block  justify-between '>
                <label htmlFor="events">Add Pictures</label>
                <Checkbox
                    name="my-input"
                    checked={true}
                    onChange={(value, event) => {
                        let p = {
                            isTrue: value,
                        };
                        setNeedPics(!needpics)
                        console.log(event);
                    }}
                    borderColor="pink"
                    style={{ cursor: "pointer" }}
                    borderRadius={10}
                    className="text-pink-500"
                    labelStyle={{ marginLeft: 5, userSelect: "none" }}
                    label="Post some picture for Gallery..."
                />
            </div>
            {
                needpics ?
                    <div className='m-auto w-full lg:w-1/2 border-[1px] border-pink-500 py-10 px-10' {...getRootProps()}>
                        <input {...getInputProps()} />
                        {
                            isDragActive ?
                                <p>Drop the files here ...</p> :
                                <p className='text-center'>Drag 'n' drop some files here, or click to select files</p>
                        }
                    </div> :
                    null
            }
            <div className='lg:w-2/4 w-full bg my-10 m-auto lg:flex block  justify-between '>
                <label htmlFor="events">Itinerary</label>
                <Checkbox
                    name="my-input"
                    checked={true}
                    onChange={(value, event) => {
                        let p = {
                            isTrue: value,
                        };
                        setItinerary(!itinerary)
                        console.log(event);
                    }}
                    borderColor="pink"
                    style={{ cursor: "pointer" }}
                    borderRadius={10}
                    className="text-pink-500"
                    labelStyle={{ marginLeft: 5, userSelect: "none" }}
                    label=""
                />
            </div>

             {
                itinerary?
                <div className='lg:w-2/4 w-full bg my-10 m-auto '>
                 {
                    formfields.map((item,index)=>{
                        return(
                            <div key={index} className="my-8" >
                             <div className=' flex justify-between'>
                             <input type="text" placeholder='time'
                             name='time'
                             onChange={event=>handleFormchange(event,index)}
                             value={item.time}
                             className='w-full mr-3 border-[1px] my-1 border-pink-500 focus:outline-none focus:border-pink-700  block rounded-2xl px-3 py-2'
                             />
                             
                             <input type="text" placeholder='title'
                             name='title'
                             onChange={event=>handleFormchange(event,index)}
                             value={item.title}
                             className='border-[1px] w-full my-1 border-pink-500 focus:outline-none focus:border-pink-700  block rounded-2xl px-3 py-2'
                             />
                             
                             
                             </div>
                             <input type="text" placeholder='description'
                             name='description'
                             onChange={event=>handleFormchange(event,index)}
                             value={item.description}
                             className='border-[1px] w-full h-28 my-1 border-pink-500 focus:outline-none focus:border-pink-700  block rounded-2xl px-3 py-2'
                             />
                             <button className=" inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs  uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600  focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700  bg-pink-500 font-bold text-white mx-auto " onClick={()=>{removefield(index)}}>remove</button>
                            </div>
                        );
                    })
                 }
                </div>
                :
                <div></div>

            }
            {
                itinerary?
                <div  className='flex items-center'>
                 <button className='w-1/2 mx-auto border-[1px] border-pink-500 text-center py-2' onClick={addfields}>Add more</button>
                </div>
                :<div></div>
            }


            <div className='lg:w-2/4 w-full bg my-10 m-auto lg:flex block  justify-between '>
                <label htmlFor="events">RSVP</label>
                <Checkbox
                    name="my-input"
                    checked={true}
                    onChange={(value, event) => {
                        let p = {
                            isTrue: value,
                        };
                        setRsvp(!rsvp)
                        console.log(event);
                    }}
                    borderColor="pink"
                    style={{ cursor: "pointer" }}
                    borderRadius={10}
                    className="text-pink-500"
                    labelStyle={{ marginLeft: 5, userSelect: "none" }}
                    label=""
                />
            </div>
            <div className='flex items-center text-center  '>
                <button onClick={submitdata} className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs  uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600  focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700  bg-pink-500 font-bold text-white mx-auto ">Submit</button>
            </div>

            <div className='bg-pink-500 mt-10' >
                <Footer />
            </div>
        </div>
    )
}

export default Form