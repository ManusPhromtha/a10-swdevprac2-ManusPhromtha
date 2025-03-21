import Link from "next/link"
import Card from "./Card"
import { VenueItem, VenueJson } from "../../interface"

export default async function VenueCatalog({venuesJson}: {venuesJson:Promise<VenueJson>}) {
    const venueJsonResult = await venuesJson || { count: 0, data: [] };


    return (
        <>
            Explore {venueJsonResult.count} fabulous venues in our venue catalog
            <div style={{margin:"20px", display:"flex", flexDirection:"row", alignContent:"space-around", justifyContent:"space-around", flexWrap:"wrap", padding:"10px"}}>
                {
                    venueJsonResult.data.map((venueItem:VenueItem)=>(
                        <Link key={venueItem.id} href={`/venue/${venueItem.id}`} className="w-[100%] sm:w-[30%] lg:w-[25%] p-2 sm:p-4 md:p-4 lg:p-8">
                            <Card venueName={venueItem.name} imgSrc={venueItem.picture}/>
                        </Link>
                    ))
                }
            </div>
        </>
    )
}