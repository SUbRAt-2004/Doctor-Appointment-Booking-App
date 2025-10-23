import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'

const MyAppointments = () => {

    const { doctors } = useContext(AppContext)

    return (
        <div className="px-4 sm:px-8">
            <p className='pb-3 mt-12 text-lg font-medium text-gray-600 border-b'>My Appointments</p>
            <div className='mt-4'>
                {doctors.slice(0, 4).map((item, index) => (
                    <div key={index} className='grid grid-cols-1 sm:grid-cols-[1fr_2fr_1fr] gap-4 sm:gap-6 py-4 border-b items-center'>
                        
                        {/* Doctor Image */}
                        <div className='flex justify-center sm:justify-start'>
                            <img className='w-36 bg-[#EAEFFF] rounded-lg' src={item.image} alt={item.name} />
                        </div>

                        {/* Doctor Info */}
                        <div className='flex-1 text-sm text-[#5E5E5E]'>
                            <p className='text-[#262626] text-base font-semibold'>{item.name}</p>
                            <p>{item.speciality}</p>
                            <p className='text-[#464646] font-medium mt-1'>Address:</p>
                            <p>{item.address.line1}</p>
                            <p>{item.address.line2}</p>
                            <p className='mt-1'>
                                <span className='text-sm text-[#3C3C3C] font-medium'>Date & Time:</span> {item.date} | {item.time}
                            </p>
                        </div>

                        {/* Actions */}
                        <div className='flex flex-col gap-2 justify-end text-sm text-center'>
                             <button className='text-[#696969] sm:min-w-[180px] py-2 border rounded hover:bg-[#5f6FFF] hover:text-white transition-all duration-300'>Pay Online</button>
                             <button className='text-[#696969] sm:min-w-[180px] py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300'>Cancel Appointment</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyAppointments
