import React, { useEffect, useState } from 'react';
import {BsSearch, BsYoutube} from 'react-icons/bs';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function SearchHeader(){
    const {keyword} = useParams();
    const navigate = useNavigate();
    const [text,setText] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();
        navigate(`/videos/${text}`);
    }

    useEffect(()=>{setText(keyword || '')},[keyword])
    return(
        <header className='w-full flex p-4 text-2xl mb-4 px-4'>
            <Link to='/' className='flex items-center '>
               <BsYoutube className='text-4xl text-brand'/>
               <h1 className='font-bold m1-2 text-2xl'>Youtube</h1>
            </Link>
            <form className='w-full flex justify-center' onSubmit={handleSubmit}>
             <input
             id='input'
             className='w-5/12 h-10 p-5 border border-search 
             rounded-l-full bg-white shadow-search text-base'
             type="text" 
             placeholder='검색' 
             value={text} 
             onChange={e => setText(e.target.value)}/>

             <button id='searchicon' className='border-y border-r border-search
             bg-searchicon px-6 rounded-r-full'><BsSearch className='w-4'/></button>
            </form>
        </header>
    );

}