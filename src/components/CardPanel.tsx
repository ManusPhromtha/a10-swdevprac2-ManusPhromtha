'use client'
import { useReducer } from "react";
import Card from './Card'
import Link from "next/link";

export default function CardPanel() {
    const compareReducer = ( compareList:Map<string,number>, action:{type:string, venueName:string, score:number})=>{
        switch(action.type) {
            case 'add': {
                compareList.delete(action.venueName)
                return new Map( compareList.set(action.venueName, action.score) )
            }
            case'remove': {
                compareList.delete(action.venueName)
                return new Map(compareList)
            }
            default: return compareList
        }
    }

    const [ compareList, dispatchCompare ] = useReducer( compareReducer, new Map<string,number>())

    /**
     * Mock Data for Demontration Only
     */
    const mockVenueRepo = [
        {vid: "001", name: "The Bloom Pavilion", image: "/img/bloom.jpg"},
        {vid: "002", name: "Spark Space", image: "/img/sparkspace.jpg"},
        {vid: "003", name: "The Grand Table", image: "/img/grandtable.jpg"}
    ]

    return(
        <div>
            <div style={{margin:"20px", display:"flex", justifyContent:"space-around", flexWrap:"wrap", padding:"10px"}}>
                {
                    mockVenueRepo.map((venueItem)=> (
                        <Link href={`/venue/${venueItem.vid}` } className="w-1/5">
                            <Card venueName={venueItem.name} imgSrc={venueItem.image} onCompare={(card:string, value:number)=>dispatchCompare({type:'add', venueName:card, score:value})}/>
                        </Link>
                    ))
                }
                
            </div>

            <div>Compare List: {compareList.size}</div>

            {Array.from(compareList).map( (data)=><div key={ data[0] } data-testid={data[0]} onClick={()=>{ dispatchCompare({type:'remove', venueName:data[0], score:5})}}>{data[0] + " Rating:" + data[1]}</div>)}
        </div>
    );
}