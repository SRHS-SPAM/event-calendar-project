"use client"

import { Input } from "@/components/ui/input"

import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"



export default function SignUp() {
    const [date, setDate] = React.useState<Date>()
    
    return(
        <div className="w-full h-full absolute z-10">
            <div className="w-[100vw] h-[100vh] absolute -z-10 ">
                <img src="/backimg.png" alt="back" className="w-[100%] h-[100%]"/>
            </div>
            
            <h1 className="h-40 w-full flex items-center justify-center text-6xl font-bold text-white">
                Event Calendar
            </h1>
            <div className="flex justify-center">
                <div className="w-[30vw] h-[60vh] border-2 border-black rounded-xl shadow-2xl ">
                    <div className="w-[29.9vw] h-[59.7vh] bg-white opacity-40 rounded-xl absolute -z-10"></div>
                    <h2 className="h-[20%] w-full  text-3xl font-bold flex items-center justify-center ">Sign Up</h2>
                    <Input placeholder="Phone number" className="w-[80%] h-[13%] ms-[10%] mt-[3%]" />
                    <Input placeholder="Name" className="w-[80%] h-[13%] ms-[10%] mt-[3%]" />
                    <div className="w-[80%] h-[13%] ms-[10%] mt-[3%]" >
                        <Popover>
                        <PopoverTrigger asChild>
                            <Button
                            variant={"outline"}
                            className={cn(
                                "w-[100%] h-[100%] justify-start text-left font-normal",
                                !date && "text-muted-foreground"
                            )}
                            >
                            <CalendarIcon />
                            {date ? format(date, "PPP") : <span>Pick a Birthday</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                            />
                        </PopoverContent>
                        </Popover>
                    </div>
                    <Button className="w-[80%] h-[13%] ms-[10%] mt-[7%] font-bold text-base bg-lime-900 hover:bg-lime-950">Sign up</Button>
                    
                </div>
            </div>  
        </div>
        
        
    )
}