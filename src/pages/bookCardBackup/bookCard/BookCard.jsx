
import React, { useState, useEffect } from "react";
import "./BookCard.scss";
import IconButton from "@mui/material/IconButton";
import DirectionsIcon from "@mui/icons-material/Directions";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Avatar from "@mui/material/Avatar";
import Header from "../../components/LandingPage/Header";
import Spinner from "../../components/Spinner";
import axios from "axios";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import BookingModal from "./BookingModal";
const iconButtonStyle = {
  cursor: "pointer",
  color: "#fc0",
};

function DestinationBox({ truck, onBookNowClick }) {
  const handleBookNowClick = () => {
    onBookNowClick(truck);
  };
  return (
    <div className="box">
      <div className="content">
        <h3>
          <IconButton style={iconButtonStyle}>
            <DirectionsIcon />
          </IconButton>{" "}
          {truck.city || "No City"}
          <div className="rating">
            {truck.RatePerKm}/Km{" "}
            <IconButton style={iconButtonStyle}>
              <CurrencyRupeeIcon />
            </IconButton>
          </div>
        </h3>
        <p onClick={handleBookNowClick}>{truck.MakeModel}</p>
        <span >
          License Plate No: {truck.LicensePlateNo || "No License Plate"}
        </span>
        <br />
        <span>Weight Class: {truck.WeightClass || "No Weight Class"}</span>
        <br />
        <div className="bottmPlate">
          <span>Chasis No: {truck.ChasisNo || "No Chasis No"}</span>
          <button className="button-33" onClick={handleBookNowClick}>
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
function BookCard() {
  const [trucks, setTrucks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ city: "", weightClass: "" });
  const [selectedTruck, setSelectedTruck] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3400/api/truck/getAllTrucks"
        );
        setTrucks(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching trucks:", error.response.data);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleFilterChange = (filterName, value) => {
    setFilters({ ...filters, [filterName]: value });
  };

  const handleBookNow = (truck) => {
    setSelectedTruck(truck);
  };

  const handleBookNowConfirmation = (truck, kilometers, date) => {
    console.log("Truck:", truck);
    console.log("Kilometers:", kilometers);
    console.log("Date:", date);
    
  };
  const filteredTrucks = trucks.filter((truck) => {
    return (
      (!filters.city ||
        truck.city?.toLowerCase().includes(filters.city.toLowerCase())) &&
      (filters.weightClass === "" ||
        (truck.WeightClass !== null &&
          truck.WeightClass.toString() === filters.weightClass))
    );
  });

  return (
    <div>
      <section className="destination" id="destination">
        <div className="heading">
          <h1>Browse</h1>
        </div>
        <div>
          <label>
            City:
            <Select
              style={{ border: "1px solid black" }}
              value={filters.city}
              onChange={(e) => handleFilterChange("city", e.target.value)}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Varanasi">Varanasi</MenuItem>
              <MenuItem value="Goa">Goa</MenuItem>
              <MenuItem value="Mumbai">Mumbai</MenuItem>
              <MenuItem value="Delhi">Delhi</MenuItem>
              <MenuItem value="Kolkata">Kolkata</MenuItem>
            </Select>
          </label>
          <label>
            Weight Class:
            <Select
              style={{ border: "1px solid black" }}
              value={filters.weightClass}
              onChange={(e) => handleFilterChange("weightClass", e.target.value)}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="8">8 Ton</MenuItem>
              <MenuItem value="10">10 Ton</MenuItem>
              <MenuItem value="12">12 Ton</MenuItem>
            </Select>
          </label>
        </div>

        {loading ? (
          <Spinner />
        ) : (
          <div className="box-container" id="destination-container">
            {filteredTrucks.map((truck, index) => (
              <DestinationBox
                key={index}
                truck={truck}
                onBookNowClick={() => handleBookNow(truck)}
              />
            ))}
          </div>
        )}
      </section>

      {selectedTruck && (
        <BookingModal
          truck={selectedTruck}
          onClose={() => setSelectedTruck(null)}
          onBookNow={handleBookNowConfirmation}
        />
      )}
    </div>
  );
}

export default BookCard;
