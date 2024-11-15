import React, { useState } from "react";
import DetailMovies from "../DetailMovies";
import { Box, Grid, Typography } from "@mui/material";

const ListMovies = ({ movies }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      <Box sx={{ padding: 2 }}>
        <Grid container spacing={2} justifyContent="center">
          {movies.map((movie) => (
            <Grid item xs={12} sm={6} md={4} key={movie.imdbID}>
              <Box
                sx={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  textAlign: "center",
                  cursor: "pointer",
                  borderRadius: "8px",
                  "&:hover": {
                    boxShadow: 3,
                  },
                }}
                onClick={() => handleMovieClick(movie)}
              >
                <img
                  src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
                  alt={movie.Title}
                  style={{
                    width: "100%",
                    height: "auto",
                    maxHeight: "200px",
                    objectFit: "contain",
                  }}
                />
                <Typography variant="h6" sx={{ marginTop: 1 }}>
                  {movie.Title}
                </Typography>
                <Typography variant="body2" sx={{ color: "gray" }}>
                  {movie.Year}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {isModalOpen && selectedMovie && (
        <DetailMovies
          selectedMovies={selectedMovie}
          closeDetails={handleCloseModal}
        />
      )}
    </div>
  );
};

export default ListMovies;
