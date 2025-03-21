"use client"
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { Select, MenuItem, TextField } from "@mui/material"


export default function DateReserve() {
    return (
        <div className="bg-slate-100 rounded-lg  space-y-8 w-fit px-10 py-5 flex flex-col content-center">
            <TextField id='Name-Lastname' className="w-[200px] " name='Name-Lastname' label='Name-Lastname' variant="standard" />
            <TextField id='Contact-Number' className="w-[200px]" name='Contact-Number' label='Contact-Number' variant="standard"/>

            <Select variant="standard" name="venue" id="venue" className="h-[2em] w-[200px]">
                <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
                <MenuItem value="Spark">Spark Space</MenuItem>
                <MenuItem value="GrandTable">The Grand Table</MenuItem>
            </Select>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-white"/>   
            </LocalizationProvider>
        </div>
    )
}
