import React from 'react'

const MagicButton = (
  {
    title, icon, position, handleClick, otherClasses
  }:{
    title: string;
    icon : React.ReactNode;
    position: string;
    handleClick? : () => void;
    otherClasses?: string;

  }
) => {
  return (
     <button className="relative inline-flex h-14 overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-56 w-[150px] mt-10" onClick={handleClick}>
    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
    <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 md:px-5 px-4 md:text-sm text-xs font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}>
      {position === 'left' && icon}
      {title}
      {position === 'right' && icon}
    </span>
  </button>
  )
}

export default MagicButton