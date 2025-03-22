"use client"
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { Dayjs } from "dayjs"
import { useState } from "react"



export default function DateReserve({onDateChange}:{onDateChange:Function}) {
    const [dateReserve, setDateReserve] = useState<Dayjs | null>()

    return (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-white"
                value={dateReserve} 
                onChange={(value)=>{setDateReserve(value); onDateChange(value)}}/>   
            </LocalizationProvider>
    )
}
