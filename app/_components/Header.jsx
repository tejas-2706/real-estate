'use client'
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
function Header(){
  const path = usePathname();
  useEffect(() => {
    console.log(path);
  }, [])
  
  return (
    <div className="p-2 px-10 flex justify-between shadow-sm bg-fixed top-0 w-full z-10 bg-white">
      <div className="flex gap-10 items-center">
        <Image src={"/logo.svg"} width={80} height={80} alt="logo"></Image>
        <ul className="hidden md:flex gap-10">
          <Link href={'/'}><li className={`'hover:bg-slate-100 px-4 p-2 cursor-pointer rounded-lg' ${path=='/' && 'bg-slate-200 rounded-lg'}`}>Sale</li></Link>
          <Link href={'/'}><li className="hover:bg-slate-100 px-4 p-2 cursor-pointer rounded-lg">Rent</li></Link>
          <Link href={'/'}><li className="hover:bg-slate-100 px-4 p-2 cursor-pointer rounded-lg">Agent finder</li></Link>
          
        </ul>
      </div>
      <div className="flex gap-2 ">
        <Button className='flex gap-2'>Post<Plus className="h-5 w-5"/></Button>
        <Link href={'/login'}><Button className='bg-white border text-black hover:bg-slate-200' variant="outline">Login</Button></Link>
      </div>
    </div>
  );
};

export default Header;
