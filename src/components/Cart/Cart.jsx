import "./Cart.scss";
import { BsCartX } from "react-icons/bs";
import CartItem from "./CartItem/CartItem";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from '../../context/authContext';
import axios from "axios";

const Cart = ({ setCartslide }) => {
  const [ownedTruck, setOwnedTruck] = useState([]);
  const [rentTruck, setRentTruck] = useState([]); // Updated state for rented trucks
  const [loading, setLoading] = useState(true);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchOwnedTrucks = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3400/api/truck/getOwnedTruck",
          {
            params: {
              OwnerId: currentUser.id
            }
          }
        );
        setOwnedTruck(response.data);
      } catch (error) {
        console.error("Error fetching owned trucks:", error.response.data);
      }
    };

    const fetchRentTrucks = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3400/api/truck/getRentTruck",
          {
            params: {
              RenterId: currentUser.id
            }
          }
        );
        setRentTruck(response.data);
      } catch (error) {
        console.error("Error fetching rented trucks:", error.response.data);
      }
    };

    Promise.all([fetchOwnedTrucks(), fetchRentTrucks()])
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, [currentUser.id]);

  if (!loading) {
    console.log(ownedTruck);
    console.log("hi");
    console.log(rentTruck); // Log rented trucks
  }

  return (
    <div className="cart-layout">
      <div className="opaque-layer"></div>
      <div className="cart-layer">
        <div className="header">
          <span>Your Trucks</span>
          <div
            className="close-button"
            onClick={() => setCartslide((x) => !x)}
          ></div>
        </div>
        {/* <div className="empty-cart">
          <BsCartX />
          <p>Nothing in here !</p>
          <span>Return To Shopping</span>
        </div> */}
        <>
          <div className="headText1">Trucks You Own</div>
          <div className="cart-items">
          {ownedTruck.map((truck) => (
              <CartItem key={truck.id} truck={truck} />
            ))}
          </div>
          <div className="headText2">Trucks You Rent</div>
          <div className="cart-items">
          {rentTruck.map((truck) => (
              <CartItem key={truck.id} truck={truck} />
            ))}
          </div>
          {/* <div className="cart-footer">
            <div className="subtotal">
              <span className="text">Subtotal:</span>
              <span className="text total">&#8377;12234</span>
            </div>
            <div className="button">
              <button className="checkout-cta">Checkout</button>
            </div>
          </div> */}
        </>
      </div>
    </div>
  );
};

export default Cart;


// Cart.js

// import React, { useContext, useEffect, useState } from 'react';
// import { AuthContext } from '../../context/authContext';
// import axios from 'axios';
// import CartItem from './CartItem/CartItem';

// const Cart = ({ setCartslide }) => {
//   const [ownedTruck, setOwnedTruck] = useState([]);
//   const [rentTruck, setRentTruck] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const { currentUser } = useContext(AuthContext);

//   useEffect(() => {
//     const fetchOwnedTrucks = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:3400/api/truck/getOwnedTruck",
//           {
//             params: {
//               OwnerId: currentUser.id
//             }
//           }
//         );
//         setOwnedTruck(response.data);
//       } catch (error) {
//         console.error("Error fetching owned trucks:", error.response.data);
//       }
//     };

//     const fetchRentTrucks = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:3400/api/truck/getRentTruck",
//           {
//             params: {
//               RenterId: currentUser.id
//             }
//           }
//         );
//         setRentTruck(response.data);
//       } catch (error) {
//         console.error("Error fetching rented trucks:", error.response.data);
//       }
//     };

//     Promise.all([fetchOwnedTrucks(), fetchRentTrucks()])
//       .then(() => setLoading(false))
//       .catch(() => setLoading(false));
//   }, [currentUser.id]);

//   if (!loading) {
//     console.log(ownedTruck);
//     console.log(rentTruck);
//   }

//   return (
//     <div className="cart-layout">
//       <div className="opaque-layer"></div>
//       <div className="cart-layer">
//         <div className="header">
//           <span>Your Trucks</span>
//           <div
//             className="close-button"
//             onClick={() => setCartslide((x) => !x)}
//           ></div>
//         </div>
//         <>
//           <div className="headText1">Trucks You Own</div>
//           <div className="cart-items">
//             {ownedTruck.map((truck) => (
//               <CartItem key={truck.id} truck={truck} />
//             ))}
//           </div>
//           <div className="headText2">Trucks You Rent</div>
//           <div className="cart-items">
//             {rentTruck.map((truck) => (
//               <CartItem key={truck.id} truck={truck} />
//             ))}
//           </div>
//         </>
//       </div>
//     </div>
//   );
// };

// export default Cart;
