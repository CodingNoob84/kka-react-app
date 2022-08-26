import React from 'react'
import { useFormContext , Controller} from 'react-hook-form'

function Submit() {
    const { register, handleSubmit, formState: { errors } } = useFormContext();
  return (
    <div className="max-w-full border border-red-500 p-5 m-5">
            <div className="flex flex-row" id="tc">
            <input type="checkbox" className="mr-2"/>
            <b className="text-sm">I agree to accept TNC's Terms and Conditions </b>
            </div>
            <div className="flex flex-row mt-2" id="tc_btn">
            <button type="submit" className="border bg-yellow-400 p-2 mr-2 text-sm">Continue</button>
            <div className="text-sm text-center p-2">Review details and Submit in next page</div>
            </div>
            
        </div>
  )
}

export default Submit