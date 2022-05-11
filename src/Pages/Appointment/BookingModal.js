import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, date,setTreatment }) => {
  const {_id, name, slots } = treatment;
  const handleSubmit=event=>{
    event.preventDefault()
    const slot=event.target.slot.value;
    const names=event.target.name.value;
    const email=event.target.email.value;
    const phone=event.target.phone.value;
    console.log(_id,name,slot,names,email,phone);
    setTreatment(null);
  }
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            for="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary">Booking For :{name}</h3>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 justify-items-center mt-3">
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              className="input input-bordered w-full max-w-xs"
            />
            <select name="slot" className="select select-bordered w-full max-w-xs">
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="number"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="Submit"
              value="Submit"
              className="btn btn-secondary w-full max-w-xs "
              readOnly
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;