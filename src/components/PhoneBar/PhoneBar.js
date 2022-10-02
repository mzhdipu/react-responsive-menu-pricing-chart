import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const PhoneBar = () => {
    const [phones, setPhones] = useState([]);
    useEffect(()=>{
        // fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`)
        //     .then(res => res.json())
        //     .then(data => console.log(data))

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phonesLoaded = data.data.data;
            const phoneData = phonesLoaded.map(phone => {
                const phoneSlug = phone.slug.split("-");
                const phonePrice = parseInt(phoneSlug[1])
                const singlePhoneData = {
                    name : phone.phone_name,
                    price : phonePrice
                }        
               return singlePhoneData 
            })
            setPhones(phoneData) 
        })
    },[])

    return (
        <BarChart width={500} height={400} data={phones}>
            <Bar dataKey="price" fill="#8884d8" />
            <Tooltip></Tooltip>
        </BarChart>
    );
};

export default PhoneBar;