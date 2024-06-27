import { useEffect } from "react";
import React from "react";
import Header from "../Header";
import HeaderContainer from "../../../containers/HeaderContainer";

export default function Layout({ children }) {
  return (
    <>
      <div className="max-w-[1248px] pt-[70px] mt-10 base:pt-0 min-h-[calc(100vh-(96px+24px+128px))]  font-grotesk overflow-auto md:m-auto">
    
   <div className="mt-5 mr-40">
     <HeaderContainer />
   </div>
        {children}
      </div>
    </>
  );
}
