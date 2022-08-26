import React from "react";

function Members() {
  return (
    <div className="max-w-full border border-red-500 p-5 m-5">
      <div className=" text-red-500 font-semibold mb-2">
        Members Registration:{" "}
      </div>
      {Array.from({ length: 2 }, (_, i) => i + 1).map((item, i) => (
        <div key={i} className="flex flex-col lg:flex-row gap-3 lg:justify-between lg:mb-2">
          <div className= {`flex flex-row ${item >1 ? '' : 'lg:flex-col-reverse' }`}>
            <div className={`${item >1 ? '' : 'lg:row-end-3' }`}>{item}.</div>
          </div>
          <div className="flex flex-row lg:flex-col">
            <div className={`w-1/2 ${item >1 ? 'lg:hidden' : '' }`}>Salution</div>
            <select defaultValue={"Mr"} className="w-[50px]">
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Miss">Miss</option>
            </select>
          </div>
          <div className="flex flex-row lg:flex-col">
          <div className={`w-1/2 ${item >1 ? 'lg:hidden' : '' }`}>First Name:</div>
            <input
              type="text"
              id="first_name"
              className=""
              placeholder="First Name"
            />
          </div>
          <div className="flex flex-row lg:flex-col">
          <div className={`w-1/2 ${item >1 ? 'lg:hidden' : '' }`}>Last Name:</div>
            <input
              type="text"
              id="last_name"
              className=""
              placeholder="Last Name"
            />
          </div>
          <div className="flex flex-row lg:flex-col">
          <div className={`w-1/2 ${item >1 ? 'lg:hidden' : '' }`}>Gender:</div>
            <select defaultValue={""} className="w-[50px]">
              <option value="">--</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="flex flex-row lg:flex-col">
          <div className={`w-1/2 ${item >1 ? 'lg:hidden' : '' }`}>Age:</div>
            <select defaultValue={""} className="w-[50px]">
              <option value="">--</option>
              <option value="AgeGrp1">AgeGrp1</option>
              <option value="AgeGrp2">AgeGrp2</option>
            </select>
          </div>
          <div className="flex flex-row lg:flex-col">
          <div className={`w-1/2 ${item >1 ? 'lg:hidden' : '' }`}>Food:</div>
            <select defaultValue={""} className="w-[50px]">
              <option value="">--</option>
              <option value="Veg">Veg</option>
              <option value="Non-Veg">Non-Veg</option>
            </select>
          </div>
          <div className="flex flex-row lg:flex-col">
          <div className={`w-1/2 ${item >1 ? 'lg:hidden' : '' }`}>Phone No:</div>
            <input
              type="text"
              id="first_name"
              className=""
              placeholder="Phone Number"
            />
          </div>
          <div className="flex flex-row lg:flex-col">
          <div className={`w-1/2 ${item >1 ? 'lg:hidden' : '' }`}>Email:</div>
            <input
              type="text"
              id="last_name"
              className=""
              placeholder="Email"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Members;
