import React from 'react';
import backgroundImage from '../../assets/bg.png';
import DualCalendar from './ft_calendar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
    return (
        <div className="bg-cover bg-center h-screen" style={{backgroundImage: `url(${backgroundImage})`}}>
            <div > 
            <div className="mt-20px grid grid-rows-[25%_75%] mx-20 rounded-md">
            
            <div className="grid grid-cols-6 items-center justify-center text-center
            border border-gray-300 py-2 px-2 rounded h-[55px] bg-white mt-5">
                <div>ที่พักทั้งหมด</div>
                <div>ที่พักส่วนตัว</div>
                <div>เครื่องบิน+ที่พัก</div>
                <div>ตั๋วเครื่องบิน</div>
                <div>กิจกรรม</div>
                <div>บริการรับส่งสนามบิน</div>
            </div>
            <div>
                <form className="grid grid-cols-[4%_96%] items-center h-[55px] mt-5">
                <FontAwesomeIcon icon={faMagnifyingGlass} className=''/>
                    <input type="text" placeholder="ใส่จุดหมายปลายทางหรือที่พัก" className="border 
                    border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500 w-full" />
                </form>

                <div>
                    <DualCalendar/>
                </div>
                <div className='bg-white'>จำนวนผู้เข้าพัก</div>
            </div>

        </div>
        </div>
        
        </div>
    );
}

export default Search;
