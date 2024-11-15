import React, { useState } from "react";
import { TextField, Button, Checkbox, FormControlLabel, Grid, Typography } from "@mui/material";
import axios from "axios";

const Search = ({ setMovies }) => {
  const [query, setQuery] = useState("");
  const [exactSearch, setExactSearch] = useState(false);

  const APIKey = "4c63b047";

  const handleSearch = async () => {
    const url = exactSearch
      ? `https://www.omdbapi.com/?t=${query}&apikey=${APIKey}`
      : `https://www.omdbapi.com/?s=${query}&apikey=${APIKey}`;
    try {
      const res = await axios.get(url);
      if (res.data) {
        setMovies(exactSearch ? [res.data] : res.data.Search || []);
      } else {
        alert("No data found. Try another search.");
      }
    } catch (err) {
      console.error("Error fetching movies:", err);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <Grid container spacing={2} alignItems="center" justifyContent="center" style={{ padding: "20px" }}>
      {/* Title */}
      <Grid item xs={12}>
        <Typography variant="h4" align="center" gutterBottom>
          Movie Search
        </Typography>
      </Grid>

      {/* Search Input */}
      <Grid item xs={12} sm={8} md={6}>
        <TextField
          fullWidth
          label="Search Movies"
          variant="outlined"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Type movie name"
        />
      </Grid>

      {/* Search Button */}
      <Grid item xs={12} sm={4} md={2}>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleSearch}
          disabled={!query.trim()} // Disable if input is empty
        >
          Search
        </Button>
      </Grid>

      {/* Exact Search Checkbox */}
      <Grid item xs={12} sm={12} md={6}>
        <FormControlLabel
          control={
            <Checkbox
              checked={exactSearch}
              onChange={() => setExactSearch(!exactSearch)}
              color="primary"
            />
          }
          label="Exact Search"
        />
      </Grid>
    </Grid>
  );
};

export default Search;
