import Link from 'next/link';
import React from 'react';
type BrandButtonType = {
  buttonPosition: string;
  button: string;
  naviagateTo?: string;
  backgroundColor: string;
};
const BrandButton = ({
  buttonPosition,
  button,
  naviagateTo,
  backgroundColor,
}: BrandButtonType) => {
  return (
    <div className={`flex w-full justify-${buttonPosition}`}>
      <div
        className={`whitespace-nowrap border-5 rounded-full border-r border-t border-black bg-${backgroundColor} px-5 lg:px-10 py-2 lg:py-3 hover:bg-brandPurple hover:text-white transition-all duration-50 ease-in-out`}
      >
        <Link href={`/${naviagateTo}`} className="text-lg lg:text-xl font-bold">
          {button}
        </Link>
      </div>
    </div>
  );
};

export default BrandButton;
