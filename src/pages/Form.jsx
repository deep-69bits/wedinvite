import { app } from '../components/firbase'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Checkbox from "react-custom-checkbox";
import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { useState } from 'react';
const Form = () => {
     const [selectedImages,setSelectedImages]=useState([])
    const onDrop = useCallback(acceptedFiles => {
       setSelectedImages(acceptedFiles)
       console.log(acceptedFiles)
       console.log("hello   ")
     }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <div>
            <Header />

            <h1 className='text-md font-semibold my-10 text-center'>Personal Information</h1>
            <div className='lg:w-2/4 w-full my-10 m-auto lg:flex  block justify-between '>

                <div >
                    <label htmlFor="groom">Groom Name</label>
                    <input className='border-[1px] my-1 border-pink-500 focus:outline-none focus:border-pink-700  block rounded-2xl px-3 py-2' type="text" name='groom' />
                </div>

                <div >
                    <label htmlFor="bride">Bride Name</label>
                    <input className='border-[1px] my-1 border-pink-500 focus:outline-none focus:border-pink-700  block rounded-2xl px-3 py-2' type="text" name='bride' />
                </div>

                <div>
                    <label htmlFor="date">Event Date</label>
                    <input type="date" name="date" className='border-[1px] w-[200px] my-1 border-pink-500 focus:outline-none focus:border-pink-700  block rounded-2xl px-3 py-2' />
                </div>

            </div>

            <div className='lg:w-2/4 w-full bg my-10 m-auto lg:flex block  justify-between '>
                <div className='w-full'>
                    <label htmlFor="date">Event Adress</label>
                    <input type="text" name="address" className='border-[1px] h-20 w-full my-1 border-pink-500 focus:outline-none focus:border-pink-700  block rounded-2xl px-3 py-2' />
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
            <div className='m-auto w-full lg:w-1/2 border-[1px] border-pink-500 py-10 px-10' {...getRootProps()}>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                        <p>Drop the files here ...</p> :
                        <p className='text-center'>Drag 'n' drop some files here, or click to select files</p>
                }
            </div>

            <div className='bg-pink-500 mt-10' >
                <Footer />
            </div>
        </div>
    )
}

export default Form