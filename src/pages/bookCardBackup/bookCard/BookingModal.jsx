import React, { useState, useEffect } from "react";
import "./BookCard.scss";
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import axios from "axios";
export default
function BookingModal({ truck, onClose, onBookNow }) {
    const {currentUser} = useContext(AuthContext);
  const [kilometers, setKilometers] = useState('');
  const [bookUptoDate, setBookUptoDate] = useState('');
  const [cost,setCost] = useState('');
  useEffect(()=>{
    setCost(kilometers*truck.RatePerKm);
  },[kilometers]);
  const handleBookNowClick = async () => {
    // Perform any necessary validation before proceeding with booking
    if (!kilometers || isNaN(parseFloat(kilometers))) {
      alert('Please enter a valid number of kilometers.');
      return;
    }

    if (!bookUptoDate) {
      alert('Please select a booking date.');
      return;
    }

    // Call the onBookNow function passed as a prop
    onBookNow(truck, {
      kilometers: parseFloat(kilometers),
      bookUptoDate,
    });
    const bookForm = {
        BookedUpto:bookUptoDate,
        DistanceBooked:kilometers,
        BookedBy:currentUser.id,
        LicensePlateNo:truck.LicensePlateNo
    }
    console.log(bookForm);
    try {
        const response = await axios.put('http://localhost:3400/api/truck/bookTruck', bookForm, {
          withCredentials: true, 
        });
        console.log(response.data); 
      } catch (error) {
        console.error('Error Booking:', error.response.data);
      }
    onClose();
  };
  var words = truck.MakeModel.split(' ');
  return (
    <div className="booking-modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>{words[1]} - Booking Details</h2>
        <form>
          <div className="detailsBar">
          <div className="infoBar">
          <div className="line">
          <label>Make Model:</label>
          <input type="text" value={truck.MakeModel} disabled />
          <label>License Plate No:</label>
          <input type="text" value={truck.LicensePlateNo} disabled />
          </div>
          <div className="line">
          <label>Chasis No:</label>
          <input className="Chasis" type="text" value={truck.ChasisNo} disabled />
          <label className="weight">Weight Class:</label>
          <input className="weightText"  type="text" value={truck.WeightClass + ' Ton'} disabled />
          </div>
          <div className="line">
          <label>City:</label>
          <input type="text" value={truck.city} disabled />
          <label className="rate">Rate:</label>
          <input type="text" value={truck.RatePerKm + ' ₹'} disabled />
          </div>
          </div>
          <div className="formBar">
          <div className="line">
          <label>Kilometers:</label>
          <input
            type="number"
            value={kilometers}
            onChange={(e) => setKilometers(e.target.value)}
          />

          <label className="book">Book Upto Date:</label>
          <input
            type="date"
            value={bookUptoDate}
            onChange={(e) => setBookUptoDate(e.target.value)}
          />
          </div>
          <div className="line">
          <label className="cost">Total Cost:</label>
          <input type="text" value={'₹ '+cost} disabled />
          <button className="bookBtn" type="button" onClick={handleBookNowClick}>
            Book Now
          </button>
          </div>
          </div>
          </div>
        </form>
      </div>
    </div>
  );
}

// ... (rest of the code)
