"use client"

import { Input } from "@/components/ui/input"

import * as React from "react"
 
import { Button } from "@/components/ui/button"
import { Playwrite_AU_NSW } from 'next/font/google'

const playwrite_us_modern = Playwrite_AU_NSW({ weight: ['400'],}) 

export default function SignUp() {
    const [date, setDate] = React.useState<Date>()
    
    return(
        <div className="w-full h-full absolute z-10">
            <div className="w-[100vw] h-[100vh] absolute -z-10 ">
                <img src="/backimg.png" alt="back" className="w-[100%] h-[100%]"/>
            </div>

            <h1 className="h-40 w-full flex items-center justify-center text-6xl font-bold text-white font-['Playwrite US Modern']">
                <p className={playwrite_us_modern.className}>Event Calendar</p>
            </h1>
            <div className="flex justify-center">
                <div className="w-[30vw] h-[54vh] rounded-xl shadow-2xl ">
                    <div className="w-[29.9vw] h-[53.7vh] bg-white opacity-40 rounded-xl absolute -z-10 shadow-2xl"></div>
                    <h2 className="h-[23%] w-full  text-3xl font-bold flex items-center justify-center ">Sign In</h2>
                    <Input placeholder="Email" className="w-[80%] h-[14%] ms-[10%] mt-[3%]" />
                    <Input placeholder="Passworld" className="w-[80%] h-[14%] ms-[10%] mt-[3%]" />

                    <Button className="w-[80%] h-[14%] ms-[10%] mt-[15%] font-bold text-base bg-red-500 hover:bg-red-600">Sign up</Button>
                    
                </div>
            </div>  
        </div>
        
        
    )
}