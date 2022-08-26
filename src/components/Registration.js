import  { React, useState} from 'react'

function Registration() {
    const[general, setGeneral] = useState(0);
    const[kids,setKids]= useState(0);
    const[babies, setBabies]= useState(0);
    
    

  return (
    <div className="max-w-full border border-red-500 p-5 m-5">
      <div className="font-semibold text-red-500 mb-2">Registration:</div>
      


      <table className="table-fixed w-full border border-red-300 divide-y divide-x">
  <thead>
    <tr>
      <th className="hidden md:table-cell border border-red-300">Registration Type</th>
      <th className="hidden md:table-cell border border-red-300">Registration Amount</th>
      <th className="border border-red-300">Required No</th>
      <th className="border border-red-300">Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="hidden md:table-cell border border-red-300 pl-2">General Registration</td>
      <td className="hidden md:table-cell border border-red-300 text-center">$250</td>
      <td className="border border-red-300 text-center py-2">
      <div className="md:hidden">General Registration -$250</div>
        <select defaultValue={"0"} className='w-[100px] md:col-span-1 border border-gray-500 text-black' onChange={(e)=>setGeneral(e.target.value)}>
            <option value="0">--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select></td>
      <td className="border border-red-300 text-center"> 
      <div className="text-center">{general*250}</div>
      </td>
    </tr>
    <tr>
      <td className="hidden md:table-cell border border-red-300 pl-2">Kids Registration ( Age 6 to 12) </td>
      <td className="hidden md:table-cell border border-red-300 text-center">$150</td>
      <td className="border border-red-300 text-center py-2">
      <div className="md:hidden">Kids Registration (Age 6 to 12) -$150</div>
        <select defaultValue={'0'} className='w-[100px] md:col-span-1 border border-gray-500 text-black' onChange={(e)=>setKids(e.target.value)}>
            <option value="0">--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select></td>
      <td className="border border-red-300 text-center">
      <div className="text-center">{kids*150}</div>
      </td>
    </tr>
    <tr>
      <td className="hidden md:table-cell border border-red-300 pl-2">Kids Registration (Age 0 to 5)</td>
      <td className="hidden md:table-cell border border-red-300 text-center">$0</td>
      <td className="border border-red-300 text-center py-2">
      <div className="md:hidden">Kids Registration (Age 0 to 5) -$0</div>
        <select defaultValue={"0"} className=' w-[100px] mx-2 md:col-span-1 border border-gray-500 text-black' onChange={(e)=>setBabies(e.target.value)}>
        <option value="0">--</option>
        <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select></td>
      <td className="border border-red-300 text-center"> 
      <div className="text-center">{babies*0}</div>
      </td>
    </tr>
    
  </tbody>
</table>
      
      </div>
  )
}

export default Registration