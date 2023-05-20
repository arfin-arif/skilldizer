import React from 'react'
import Links from "./Links";
import Image from "next/image";
import image from '../../../public/assets/download.jpg'

const ProfileCard = () => {
  return (
    <div>      
        <div class="w-full max-w-sm bg-white">
            
            <div class="flex flex-col items-center pb-10">
                <Image 
                class="w-24 h-24 mb-3 rounded-full shadow-lg" 
                src={image} 
                alt="Bonnie image"
                />
                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
            </div>
            
        </div>
    </div>
  )
}

export default ProfileCard