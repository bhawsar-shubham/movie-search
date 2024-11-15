import axios from "axios";
import React, { useEffect, useState } from "react";
import ModalComponent from "../ModalComponent";

const DetailMovies = ({ selectedMovies, closeDetails, }) => {
  const [details, setDetails] = useState(null);
  const APIKey = "4c63b047";

  useEffect(() => {
    const fetchDetails = async () => {
      const url = `https://www.omdbapi.com/?i=${selectedMovies.imdbID}&apikey=${APIKey}`;
      try {
        const res = await axios.get(url);
        if(res.data){
            setDetails(res?.data);
        }
        else{
            alert("data is null")
        }
        console.log("Particular movie data", details);
      } catch (err) {
        console.log(err);
      }
    };
    fetchDetails();
  }, [selectedMovies]);

  return (
    details && (
      <ModalComponent details={details} open={true} handleClose={closeDetails} />
    )
  );
};

export default DetailMovies;
