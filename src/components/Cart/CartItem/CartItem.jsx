import React, { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/truck1.jpg";
import axios from "axios";
import "./CartItem.scss";
import { useContext } from "react";
import { AuthContext } from "../../../context/authContext";

const CartItem = ({ truck }) => {
  const [dbDate, setDbDate] = useState(truck.BookedUpto);
  const [isDateValid, setIsDateValid] = useState(false);

  useEffect(() => {
    const currentDate = new Date(); // Get the current date
    const databaseDate = new Date(dbDate); // Parse the date from the database

    // Compare the two dates
    const isAfterCurrentDate = databaseDate > currentDate;

    setIsDateValid(isAfterCurrentDate);
  }, [dbDate]);
  const { currentUser } = useContext(AuthContext);
  const [ownerData, setOwnerData] = useState(null);
  const [renterData, setRenterData] = useState(null);
  console.log(truck.BookedBy);
  useEffect(() => {
    const fetchUserData = async (userId, setData) => {
      try {
        const response = await axios.get(
          "http://localhost:3400/api/user/getUserById",
          {
            params: {
              userId: userId,
            },
          }
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error.response.data);
      }
    };

    // Fetch owner data
    if (truck.OwnerId) {
      fetchUserData(truck.OwnerId, setOwnerData);
    }
    // Fetch renter data
    if (truck.BookedBy) {
      fetchUserData(truck.BookedBy, setRenterData);
    }
  }, [truck.OwnerId, truck.BookedBy]);
const dateObject = new Date(truck.BookedUpto);

// Extracting the date in the format YYYY-MM-DD
const formattedDate = dateObject.toISOString().split('T')[0];

  return (
    <div className="cart-products">
      <div className="cart-product">
        <div className="image-container">
          <img src={prod} alt="Product" />
          {/* <i className="fa-solid fa-truck-fast" style={{color:"#fc0", height:"24px", width:"24px"}}></i> */}
        </div>
        <div className="prod-details">
          <span className="name">{truck.MakeModel}</span>
          {/* <div className="close-btn">
            <MdClose />
          </div> */}
          
          {ownerData && ownerData.id && ownerData.id !== currentUser.id && (
  <div>Owner: {ownerData.name}</div>
)}
{renterData && ownerData && ownerData.id === currentUser.id && (
  <div>Renter: {renterData.name}</div>
)}
{ownerData && ownerData.id === currentUser.id && (
  isDateValid ? (
    <div>Booked Upto: {formattedDate}</div>
  ) : (
    <div>Ready To lease</div>
  )
)}
{renterData && ownerData && ownerData.id !== currentUser.id && (
  <div>Phone: {renterData['phoneNo.']}</div>
)}

        </div>
      </div>
    </div>
  );
};

export default CartItem;
