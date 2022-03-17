import React from 'react';
import {
    BrowserRouter, Route, Routes
} from "react-router-dom";

export default function Articles() {
  return (
    <>
     <div className="w-full h-20 bg-white rounded-md drop-shadow-lg">
        <div className='flex justify-evenly'>
        <BrowserRouter>
            <Routes>
                <Route path="" element={"sajjad"} />
                <Route path="" element={"bhuiyan"} />
            </Routes>
        </BrowserRouter>
        </div>
     </div>
    </>
  )
}
