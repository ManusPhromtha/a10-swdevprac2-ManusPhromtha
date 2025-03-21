import VenueCatalog from "@/components/VenueCatalog"
import { LinearProgress } from "@mui/material"
import { Suspense } from "react"
import { VenueJson } from "../../../../interface"
import getVenues from "@/libs/getVenues"

export default async function Venue() {
    const venues:Promise<VenueJson> = getVenues()

    return (
        <main className="text-center p-5">
            <h1 className="text-xl font-medium">Select your venue</h1>
            <Suspense fallback={ <p>Loading ... <LinearProgress/></p>}>
                <VenueCatalog venuesJson={venues}/>
            </Suspense>
        </main>
    )
}