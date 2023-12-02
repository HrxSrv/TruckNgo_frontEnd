import React, { useState } from 'react';
import "./TruckLending.scss";
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function TruckLending() {
  const navigate = useNavigate()
  const [err,setErr] = useState("")
  const {currentUser} = useContext(AuthContext);
  const [image,setImage] = useState();
  const [formData, setFormData] = useState({
    phone: '',
    address: '',
    aadharId: '',
    licensePlate: '',
    ChasisNo: '',
    makeModel: '',
    ratePerKm: '',
    weightClass: '0',
    isOwner: 1,
    city:''
  });
  const userFormData = {
       phone:formData.phone,
       address:formData.address,
       isOwner:"1",
       aadhar:formData.aadharId,
       username:currentUser.username
  }
  const truckFormData = {
    LicensePlateNo: formData.licensePlate,
    ChasisNo:formData.ChasisNo,
    MakeModel: formData.makeModel,
    RatePerKm: formData.ratePerKm,
    WeightClass:formData.weightClass,
    OwnerId:currentUser.id,
    city:formData.city,
  }
  // console.log(truckFormData);
const handleSubmit = async (e) => {
      // e.preventDefault();

      try {
        const response = await axios.put('http://localhost:3400/api/user/updateUser', userFormData, {
          withCredentials: true,
        });
        console.log(response.data);
      } catch (error) {
        console.error('Error updating user profile:', error.response.data);
      }
      try {
        const response = await axios.post('http://localhost:3400/api/truck/addTruck', truckFormData, {
          withCredentials: true,
        });
        console.log(response.data);
      } catch (error) {
        console.error('Error adding your truck:', error.response.data);
      }
      handleSubmitPhoto(e);
      // navigate("/");
    };

  console.log(err);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleImage = (e) => {
    const selectedImage = e.target.files[0];

    if (selectedImage) {
      const reader = new FileReader();

      reader.onloadend = () => {
        // When the reading is done, update the state with the base64-encoded image
        setImage(reader.result);
      };

      // Start reading the selected image as a data URL
      reader.readAsDataURL(selectedImage);
    }
  };

  const handleSubmitPhoto = async (e) => {
    e.preventDefault();

    if (!image) {
      console.error('No image selected.');
      return;
    }

    const imgForm = {
      image: image,
      LicensePlateNo: truckFormData.LicensePlateNo,
    };

    try {
      const imgform = new FormData();
      imgform.append('image', imgForm.image);
      imgform.append('LicensePlateNo', imgForm.LicensePlateNo);
      console.log(imgform);
      const response = await axios.put('http://localhost:3400/api/truck/updateTruck', imgform, {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data);
    } catch (error) {
      console.error('Error updating user profile:', error.response.data);
    }
  };

  return (
    <div>
      <div className="Truck_lendingform-box2">
        <form onSubmit={handleSubmit} style={{ width: '70%' }}>
          <p style={{ color: 'gray', textAlign: 'left' }}>Register as owner</p>
          <div className="input-box">
            <input
              type="text"
              maxLength="10"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              // required
            />
            <label>Phone No.</label>
          </div>
          <div className="input-box">
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              // required
            />
            <label>Address</label>
          </div>
          <div className="input-box">
            <input
              type="text"
              name="aadharId"
              value={formData.aadharId}
              onChange={handleChange}
              // required
            />
            <label>Aadhar ID</label>
          </div>

          <p style={{ color: 'gray', textAlign: 'left' }}>Enter your Truck details</p>
          <div className="input-box">
            <input
              type="text"
              name="licensePlate"
              value={formData.licensePlate}
              onChange={handleChange}
              // required
            />
            <label>Licence Plate No.</label>
          </div>
          <div className="input-box">
            <input
              type="number"
              name="ChasisNo"
              value={formData.ChasisNo}
              onChange={handleChange}
              // required
            />
            <label>Chasis No.</label>
          </div>
          <div className="input-box">
            <input
              type="text"
              name="makeModel"
              value={formData.makeModel}
              onChange={handleChange}
              // required
            />
            <label>Make & Model</label>
          </div>
          <div className="input-box">
            <input
              type="number"
              name="ratePerKm"
              value={formData.ratePerKm}
              onChange={handleChange}
              // required
            />
            <label>Rate per KM</label>
          </div>
          <div className="input-box">
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
            <label>City Of Truck:</label>
          </div>
          <div className="input-box">
            <label htmlFor="weight">Weight Class</label>
            <br />
            <select
              name="weightClass"
              value={formData.weightClass}
              onChange={handleChange}
            >
              <option value="0" selected></option>
              <option value="8">8 ton</option>
              <option value="10">10 ton</option>
              <option value="12">12 ton</option>
            </select>
          </div>
          <br />
          <form className='photoForm' encType="multipart/form-data" onSubmit={handleSubmitPhoto} style={{ width: '100%' }}>
        <div className="input-image-box">
          <input accept="image/*" type='file' name='file' onChange={handleImage}/>
          </div>
          </form>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
       
      </div>
    </div>
  );
}

 export default TruckLending;

// import React, { useState } from "react";
// import "./TruckLending.scss";
// import { useContext } from "react";
// import { AuthContext } from "../../context/authContext";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// function TruckLending() {
//   const navigate = useNavigate();
//   const { currentUser } = useContext(AuthContext);
//   const [formData, setFormData] = useState({
//     phone: "",
//     address: "",
//     aadharId: "",
//     licensePlate: "",
//     ChasisNo: "",
//     makeModel: "",
//     ratePerKm: "",
//     weightClass: "0",
//     isOwner: 1,
//     city: "",
//   });
//   const [image, setImage] = useState(null);

//   const userFormData = {
//     phone: formData.phone,
//     address: formData.address,
//     isOwner: "1",
//     aadhar: formData.aadharId,
//     username: currentUser.username,
//   };
//   const truckFormData = new FormData();
//   truckFormData.append("LicensePlateNo", formData.licensePlate);
//   truckFormData.append("ChasisNo", formData.ChasisNo);
//   truckFormData.append("MakeModel", formData.makeModel);
//   truckFormData.append("RatePerKm", formData.ratePerKm);
//   truckFormData.append("WeightClass", formData.weightClass);
//   truckFormData.append("OwnerId", currentUser.id);
//   truckFormData.append("city", formData.city);
//   if (image) {
//     truckFormData.append("image", image);
//   }

//   const handleImage = (e) => {
//     const selectedImage = e.target.files[0];
//     setFormData({ ...formData, image: selectedImage });

//     if (selectedImage) {
//       setImage(selectedImage);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(userFormData);
//     // try {
//     //   const responseUser = await axios.put(
//     //     'http://localhost:3400/api/user/updateUser',
//     //     userFormData,
//     //     {
//     //       withCredentials: true,
//     //       // headers: {
//     //       //   'Content-Type': 'multipart/form-data',
//     //       // },
//     //     }
//     //   );

//     //   const responseTruck = await axios.post(
//     //     'http://localhost:3400/api/truck/addTruck',
//     //     truckFormData,
//     //     {
//     //       withCredentials: true,
//     //       headers: {
//     //         'Content-Type': 'multipart/form-data',
//     //       },
//     //     }
//     //   );

//     //   // Use the responses as needed
//     //   console.log(responseUser.data);
//     //   console.log(responseTruck.data);
//     // } catch (error) {
//     //   console.error('Error submitting the form:', error.response.data);
//     // }
//     try {
//       const response = await axios.put(
//         "http://localhost:3400/api/user/updateUser",
//         userFormData,
//         {
//           withCredentials: true,
//         }
//       );
//       console.log(response.data);
//     } catch (error) {
//       console.error("Error updating user profile:", error.response.data);
//     }
//     try {
//       const response = await axios.post(
//         "http://localhost:3400/api/truck/addTruck",
//         truckFormData,
//         {
//           withCredentials: true,
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       console.log(response.data);
//     } catch (error) {
//       console.error("Error adding your truck:", error.response.data);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <div>
//       <div className="Truck_lendingform-box2">
//         <form onSubmit={handleSubmit} style={{ width: "70%" }}>
//           <div className="input-box">
//             <input
//               type="text"
//               maxLength="10"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               // required
//             />
//             <label>Phone No.</label>
//           </div>
//           <div className="input-box">
//             <input
//               type="text"
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//               // required
//             />
//             <label>Address</label>
//           </div>
//           <div className="input-box">
//             <input
//               type="text"
//               name="aadharId"
//               value={formData.aadharId}
//               onChange={handleChange}
//               // required
//             />
//             <label>Aadhar ID</label>
//           </div>

//           <p style={{ color: "gray", textAlign: "left" }}>
//             Enter your Truck details
//           </p>
//           <div className="input-box">
//             <input
//               type="text"
//               name="licensePlate"
//               value={formData.licensePlate}
//               onChange={handleChange}
//               // required
//             />
//             <label>Licence Plate No.</label>
//           </div>
//           <div className="input-box">
//             <input
//               type="number"
//               name="ChasisNo"
//               value={formData.ChasisNo}
//               onChange={handleChange}
//               // required
//             />
//             <label>Chasis No.</label>
//           </div>
//           <div className="input-box">
//             <input
//               type="text"
//               name="makeModel"
//               value={formData.makeModel}
//               onChange={handleChange}
//               // required
//             />
//             <label>Make & Model</label>
//           </div>
//           <div className="input-box">
//             <input
//               type="number"
//               name="ratePerKm"
//               value={formData.ratePerKm}
//               onChange={handleChange}
//               // required
//             />
//             <label>Rate per KM</label>
//           </div>
//           <div className="input-box">
//             <input
//               type="text"
//               name="city"
//               value={formData.city}
//               onChange={handleChange}
//             />
//             <label>City Of Truck:</label>
//           </div>
//           <div className="input-box">
//             <label htmlFor="weight">Weight Class</label>
//             <br />
//             <select
//               name="weightClass"
//               value={formData.weightClass}
//               onChange={handleChange}
//             >
//               <option value="0" selected></option>
//               <option value="8">8 ton</option>
//               <option value="10">10 ton</option>
//               <option value="12">12 ton</option>
//             </select>
//           </div>
//           <div className="input-box">
//             <input
//               accept="image/*"
//               type="file"
//               name="file"
//               onChange={handleImage}
//             />
//           </div>

//           <button type="submit" className="btn">
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default TruckLending;
