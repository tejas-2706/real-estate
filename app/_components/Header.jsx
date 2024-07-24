import React from 'react'
import Image from 'next/image'
const Header = () => {
  return (
    <div>
      <Image src={'/logo.svg'} width={120} height={120} alt='logo'></Image>
    </div>
  )
}

export default Header

