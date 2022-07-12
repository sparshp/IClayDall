import React from 'react';
import TelegramIcon from '@mui/icons-material/Telegram';

const MailSection = () => {
    return (
        <div className='bg-white my-8 grid grid-cols-1 md:grid-cols-2 place-items-center p-4 gap-2'> 
            <div className="grid grid-cols-8 place-items-center">
                <TelegramIcon sx={{width:"80px",height:"80px",color:"#131921"}}/>
                <div className="text-left px-4 col-span-6 md:col-span-5">
                    <p className="font-bold">Signup for Newsletter</p>
                    <p className="text-sm">We’ll never share your email address with a third-party.</p>
                </div>
            </div>
            <div className="w-full flex items-center justify-center bg-white rounded-full border px-1">
                <input type="email" placeholder="email..." className="form-control flex-1 py-2 mx-6 outline-none" />
                <div className="bg-[#131921] rounded-full py-1 px-8 text-white"><p>Subscribe</p></div>
            </div>
        </div>
    );
};

export default MailSection;
