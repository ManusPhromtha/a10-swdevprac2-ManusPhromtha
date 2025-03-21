'use client'
import { Rating } from '@mui/material';
import InteractiveCard from './InteractiveCard';
import Image from 'next/image';
import React from 'react';

export default function Card({ venueName, imgSrc, onCompare} : {venueName:string,imgSrc:string, onCompare?:Function}) {
    const [value, setValue] = React.useState<number | null>(0);

    return (
        <InteractiveCard contentName={ venueName }>
            <div className='w-full h-[70%] relative rounded-t-lg rounded-lg'>
                <Image src={imgSrc}
                alt='Product picture'
                fill={true}
                className='object-cover rounded-t-lg'/>
            </div>
            <div className='w-full h-[15%] p-[10px]'>
                {venueName}
            </div>
            {
                onCompare?
                <Rating id={`${venueName} Rating`} name={`${venueName} Rating`} data-testid={`${venueName} Rating`} value={value} 
                    onClick={(e) => e.stopPropagation()}
                    onChange={(event, newValue) => {
                        if (newValue==null) newValue=0;
                        setValue(newValue);
                        onCompare(venueName, newValue);
                    }}
                /> : ''

            }
            
            
        </InteractiveCard>
    );
}