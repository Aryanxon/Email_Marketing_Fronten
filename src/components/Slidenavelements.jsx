import React from 'react'


function Slidenavelements({sliddisplay, text, icon}) {
  return (
    <div className="px-4 py-2 hover:border-l-2 border-green-600 flex items-center gap-2 text-md text-white hover:bg-slate-100/10">
        <div>{icon}</div>
        <div className={`${sliddisplay? "block": "hidden"}`}>{text}</div>
    </div>
  )
}

export default Slidenavelements
