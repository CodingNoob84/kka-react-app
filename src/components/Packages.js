import {React} from 'react'
import { useFormContext , Controller} from 'react-hook-form'

function Packages() {
  const { register, control, formState:{errors} } = useFormContext(); 
  return (
    <div className="max-w-full border border-red-500 p-5 m-5">
      <div className="font-semibold text-red-500 mb-2">Packages:</div>
    <table className="table-fixed w-full border border-red-300 divide-y divide-x">
  <thead>
    <tr>
      <th className="border border-red-300">Package</th>
      <th className="border border-red-300">Sponsorship</th>
      <th className="border border-red-300">Benefits</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border border-red-300">Kaveri Mitra</td>
      <td className="border border-red-300 text-center">$1,000</td>
      <td className="border border-red-300">Registration for 4</td>
    </tr>
    <tr>
      <td className="border border-red-300">Kaveri Bandhu</td>
      <td className="border border-red-300 text-center">$3,000</td>
      <td className="border border-red-300">Registration for 4, One-Room, Family-Advt.</td>
    </tr>
    <tr>
      <td className="border border-red-300">Kaveri Premi</td>
      <td className="border border-red-300 text-center">$5,000</td>
      <td className="border border-red-300">Registration for 6, Two-Rooms, Family-Advt. and Recognition</td>
    </tr>
    <tr>
      <td className="border border-red-300">Kaveri Kasturi</td>
      <td className="border border-red-300 text-center">$10,000</td>
      <td className="border border-red-300">Registration for 8, Three-Rooms, Family-Advt. and Recognition</td>
    </tr>
  </tbody>
</table>
<div className="m-4 flex justify-center flex-col md:flex-row">
  <label className="px-2">Donation Amount</label>
  <input type="text" className="md:w-[300px] h-[20px]" {...register("donationamount")}/>
</div>
    </div>
  )
}

export default Packages