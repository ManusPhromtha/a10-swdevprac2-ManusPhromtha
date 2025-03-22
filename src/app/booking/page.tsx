"use client"
import DateReserve from "@/components/DateReserve";
import { AppDispatch } from "@/redux/store";
import { Select, MenuItem, TextField } from "@mui/material"
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { Provider, useDispatch } from "react-redux";
import { BookingItem } from "../../../interface";
import { addBooking } from "@/redux/features/bookSlice";

export default function Booking () {

    const dispatch = useDispatch<AppDispatch>()

    const makeBooking = () => {
        if(name && contact && selectedVanue && dateReserve) {
            const item:BookingItem = {
                nameLastname: name,
                tel: contact,
                venue: selectedVanue,
                bookDate: dayjs(dateReserve).format("YYYY/MM/DD"),
            }
            dispatch(addBooking(item))
        }
    }

    const [name, setName] = useState<string>()
    const [contact, setContact] = useState<string>()
    const [selectedVanue, setSelectedVanue] = useState<string>()
    const [dateReserve, setDateReserve] = useState<Dayjs | null>()

    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <div className="text-xl font-medium">Venue Booking</div>
            <div className="w-fix space-y-2">
                <div className="bg-slate-100 rounded-lg  space-y-8 w-fit px-10 py-5 flex flex-col content-center">
                    <TextField id='Name-Lastname' className="w-[200px] " name='Name-Lastname' label='Name-Lastname' variant="standard" value={name} onChange={(event)=>{setName(event.target.value)}}/>
                    <TextField id='Contact-Number' className="w-[200px]" name='Contact-Number' label='Contact-Number' variant="standard" value={contact} onChange={(event)=>{setContact(event.target.value)}}/>
        
                    <Select variant="standard" name="venue" id="venue" className="h-[2em] w-[200px]" value={selectedVanue} onChange={(event)=>{setSelectedVanue(event.target.value)}}>
                        <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
                        <MenuItem value="Spark">Spark Space</MenuItem>
                        <MenuItem value="GrandTable">The Grand Table</MenuItem>
                    </Select>
        
                    <DateReserve onDateChange={(value:Dayjs)=>{setDateReserve(value)}}/>
                </div>
            </div>
            <button name="Book Venue" className="Block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white showdow-sm" onClick={makeBooking}>
                Book Venue
            </button>
        </main>
    )
}