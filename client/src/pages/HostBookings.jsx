import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HostBookings = () => {
  const hostId = useSelector((state) => state.user?._id);
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/hosts/${hostId}/bookings`
      );
      const data = await response.json();
      setBookings(data);
    } catch (error) {
      console.log("Failed to fetch host bookings", error.message);
    }
  };

  useEffect(() => {
    fetchBookings();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />
      <div className="host-bookings">
        <h1>Your Property Bookings</h1>
        {bookings.length === 0 ? (
          <p>No one has booked your listings yet.</p>
        ) : (
          bookings.map((booking) => (
            <div key={booking._id} className="booking-card">
              <h3>{booking.listingId.title}</h3>
              <p>
                Booked by: {booking.customerId.firstName}{" "}
                {booking.customerId.lastName}
              </p>
              <p>From: {booking.startDate}</p>
              <p>To: {booking.endDate}</p>
              <p>Total Paid: ${booking.totalPrice}</p>
            </div>
          ))
        )}
      </div>
      <Footer />
    </>
  );
};

export default HostBookings;
