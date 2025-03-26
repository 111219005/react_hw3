// import {useState} from "react";
import {Link} from "react-router";

function Header({title, slogan}){
    return (
        <header className="mt-2 text-center flex flex-col items-center header">
            <Link to="/" className="relative text-center flex flex-xol items-center header">
                <h2 className="text-[#EBE1D2] pt-5 pb-2 text-3xl font-bold">    
                    {title}
                </h2>
            </Link>

            <p className="text-[#EBE1D280] text-opacity-80 text-base leading-relaxed xl:w-1/2 lg:w-3/4 mx-auto">
                {slogan}
            </p>

            <div className="flex mt-3 justify-center">
                <hr className="my-[25px] mx-auto w-[200px] border-0 border-t-[10px] border-[#777c76] opacity-100 rounded" />
            </div>
        </header>
    );
}

export default Header;