import Link from 'next/link';
import React from 'react';
type BrandButtonType = {
  buttonPosition: string;
  button: string;
  naviagateTo?: string;
  backgroundColor: string;
  menuOpen?:boolean
};
const BrandButton = ({
  buttonPosition,
  button,
  naviagateTo,
  backgroundColor,
  menuOpen
}: BrandButtonType) => {
  return (
    <div className={`flex justify-${buttonPosition}`}>
      <div
        className={` ${menuOpen ? 'hidden' : ''} whitespace-nowrap border-5 rounded-full border-r border-t border-black bg-${backgroundColor} px-5 lg:px-10 py-2 lg:py-3 hover:bg-brandPurple hover:text-white transition-all duration-400 ease-in-out`}
      >
        <Link href={`/${naviagateTo}`} className="text-lg lg:text-xl font-bold">
          {button}
        </Link>
      </div>
    </div>
  );
};

export default BrandButton;
