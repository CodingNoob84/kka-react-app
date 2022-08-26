import React from 'react'
import {useFormContext} from "react-hook-form";

function GrandTotal() {
    const { getValues} = useFormContext(); 
    let grandtotal=getValues("donationamount");
    console.log(grandtotal)
  return (
    <div className="max-w-full border border-red-500 p-5 m-5">
    <div className=' text-center sm:grid sm:grid-flow-col sm:grid-cols-4 font-bold text-red-900 text-2xl md:text-3xl'>
    <label className="col-end-4">GrandTotal :</label> 
    <div className="col-end-5"> ${grandtotal}</div>
        </div>
        </div>
  )
}

export default GrandTotal