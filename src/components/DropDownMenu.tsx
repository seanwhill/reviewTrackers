import React, { useEffect, useState } from 'react'

type Props = {
  edit: () => void
  delete: () => void
}

export default function DropDownMenu(props: Props) {
  const [displayDropDown, setDisplayDropDown] = useState<boolean>(false)

  return (
    <div onClick={() => setDisplayDropDown(true)} >
      <div>
        <button type="button" className="" id="menu-button" aria-expanded="true" aria-haspopup="true" onBlur={() => setDisplayDropDown(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="blue" strokeWidth="2">
            <path strokeLinecap='round' strokeLinejoin='round' d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
          </svg>
        </button>
      </div>
      {displayDropDown &&
        <div className="origin-top-right absolute right-0 mt-2 w-15 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" >
          <div className="py-1" role="none" tabIndex={0}>
            <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-0" onMouseDown={props.edit}  >Edit</a>
            <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-0" onMouseDown={props.delete} >Delete</a>
          </div>
        </div>
      }
    </div>
  )
}