import React from 'react';
import AgodaLogo from "../assets/Agoda.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <div className="grid grid-cols-8 justify-center text-center mt-3">
            <img src={AgodaLogo} alt="Agoda Logo" className="logo" style={{ width: '80px', height: 'auto' }}/>
            <div className="text-sm hover:text-blue-600">ตั๋วเครื่องบิน + ที่พัก</div>
            <div className="hover:text-blue-600">ที่พัก</div>
            <div className="text-pink-500 text-sm border border-pink-400 bg-gray-100 hover:bg-pink-400 hover:text-white font-bold py-1 px-1 rounded">ลงประกาศที่พัก</div>
            <div>Logo Thailand</div>
            <div className="text-blue-300 hover:bg-blue-300 hover:text-white hover:rounded">เข้าสู่ระบบ</div>
            <div className="text-blue-300 text-sm border border-blue-300 bg-gray-100 hover:bg-blue-300 hover:text-white font-bold py-1 px-1 rounded">สร้างบัญชี</div>
            <div className="ml-2">
                <FontAwesomeIcon icon={faCartShopping} />
            </div>
        </div>
    );
};

export default Navbar;
