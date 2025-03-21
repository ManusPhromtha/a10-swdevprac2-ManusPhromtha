import DateReserve from "@/components/DateReserve";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import getUserProfile from "@/libs/getUserProfile";

export default async function Booking () {
    
    const session = await getServerSession(authOptions)

    if(!session || !session.user.token) return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <div className="text-xl font-medium">Venue Booking</div>
            <div className="w-fix space-y-2"><DateReserve/></div>
            <button name="Book Venue" className="Block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white showdow-sm">
                Book Venue
            </button>
        </main>
    )

    const profile = await getUserProfile(session.user.token)
    var createdAt = new Date(profile.data.createdAt)

    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <div className="text-xl font-medium">Venue Booking</div>
            {
                profile?
                    <div className="bg-gray-100">
                        <div className='text-l text-center'>User Profile</div>
                        <table className='table-auto border-separate border-spacing-2'>
                            <tbody>
                                <tr><td>Name</td><td>{profile.data.name}</td></tr>
                                <tr><td>Email</td><td>{profile.data.email}</td></tr>
                                <tr><td>Tel.</td><td>{profile.data.tel}</td></tr>
                                <tr><td>Member Since</td><td>{createdAt.toString()}</td></tr>
                            </tbody>
                        </table>
                    </div>
                : null
            }
            <div className="w-fix space-y-2">
                <DateReserve/>
            </div>
            <button name="Book Venue" className="Block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white showdow-sm">
                Book Venue
            </button>
        </main>
    );
}