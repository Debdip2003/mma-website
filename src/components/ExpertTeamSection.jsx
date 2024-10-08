import React from 'react';
import contactInfo from '../data/contactInfo';

const ExpertTeamSection = () => {
  
    return (
        <div className='h-screen w-full bg-gradient-to-b from-gray-800 via-black to-black'>
            <div className='text-center pt-10'>
                <p className='text-7xl font-semibold text-white'>Our Expert Team</p>
            </div>
            <div className='md:w-full md:h-2/3 mt-20 px-10 flex items-center justify-evenly gap-10'>
                {contactInfo.map((member, index) => (
                    <div key={index} className='bg-gray-800 w-1/3 h-full rounded-2xl p-6 hover:scale-105 duration-200 hover:cursor-pointer'>
                        <img src={member.img} alt='expertTeam' className='rounded-2xl h-3/4 w-full mb-6 object-cover'/>
                        <div className='flex flex-col items-center text-white'>
                            <p className='text-2xl font-semibold'>{member.name}</p>
                            <p>{member.phone}</p>
                            <p>{member.email}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ExpertTeamSection;
