"use client"
import { removeBooking } from "@/redux/features/bookSlice"
import { useAppSelector, AppDispatch } from "@/redux/store"
import { useDispatch, UseDispatch } from "react-redux"

export default function BookingList() {

    const bookItems = useAppSelector( (state)=> state.bookSlice.bookItems)
    const dispatch = useDispatch<AppDispatch>()

    return (
        <>
        {
            bookItems.length==0? <div className="text-center text-xl">No Venue Booking</div> :
            bookItems.map((bookingItem)=>(
                <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2" key={bookingItem.venue + bookingItem.bookDate}>
                    <div className="text-xl">Name-Lastname: {bookingItem.nameLastname}</div>
                    <div className="text-sm">Contact-Number: {bookingItem.tel}</div>
                    <div className="text-sm">Venue: {bookingItem.venue}</div>
                    <div className="text-md">Book Date: {bookingItem.bookDate}</div>
                    <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white showdow-sm" onClick={()=>dispatch(removeBooking(bookingItem))}>
                        Remove from Cart
                    </button>
                </div>
            ))
        }
        </>
    )
}