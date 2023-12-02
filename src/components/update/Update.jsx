import { useState } from "react";
import { makeRequest } from "../../axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const Update = ({ setOpenUpdate, user }) => {
  const [texts, setTexts] = useState({
    Phone: user.Phone,
    address: user.address,
    aadharId: user.aadharId,
  });

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (user) => {
      return makeRequest.put(`/users/${user.id}`, {
        Phone: user.Phone,
    address: user.address,
    aadhar: user.aadharId,
      });
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["user"]);
      },
    }
  );

  const handleChange = (e) => {
    setTexts((prev) => ({ ...prev, [e.target.aadhar]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    mutation.mutate({ ...texts, id: user.id });
    
    setOpenUpdate(false);
  };

  return (
    <div className="update">
      <div className="wrapper">
        <h1>Update Your Profile</h1>
        <form>
          <label>Phone</label>
          <input
            type="text"
            value={texts.Phone}
            aadhar="Phone"
            onChange={handleChange}
          />
          <label>aadhar</label>
          <input
            type="text"
            value={texts.aadhar}
            aadhar="aadhar"
            onChange={handleChange}
          />
          <button onClick={handleClick}>Update</button>
        </form>
        <button className="close" onClick={() => setOpenUpdate(false)}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Update;
