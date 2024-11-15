import React from "react";
import { Box, Modal, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ModalComponent = ({ details, open, handleClose }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70%", // Reduced width for compactness
    maxWidth: 350, // Maximum width for smaller modal
    height: "auto", // Auto-adjusting height
    maxHeight: "400px", // Limit height to ensure it's small
    bgcolor: "background.paper",
    borderRadius: "8px",
    boxShadow: 24,
    p: 2, // Reduced padding for compact layout
    outline: "none",
    overflowY: "auto", // Allow vertical scrolling if content exceeds height
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {/* Close Button */}
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
          }}
          aria-label="Close modal"
        >
          <CloseIcon />
        </IconButton>

        {/* Movie Details */}
        <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mb: 1 }}>
          {details?.Title || "Movie Details"}
        </Typography>

        <img
          src={details?.Poster && details.Poster !== "N/A" ? details.Poster : "https://via.placeholder.com/150"}
          alt={details?.Title || "Poster"}
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "100px", // Smaller image height
            objectFit: "contain",
            marginBottom: "10px",
          }}
        />
        <Typography id="modal-modal-description" sx={{ mt: 1 }}>
          <strong>Year:</strong> {details?.Year || "N/A"}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 1 }}>
          <strong>Description:</strong> {details?.Plot || "N/A"}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 1 }}>
          <strong>Rating:</strong> {details?.imdbRating || "N/A"}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 1 }}>
          <strong>Genre:</strong> {details?.Genre || "N/A"}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 1 }}>
          <strong>Director:</strong> {details?.Director || "N/A"}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 1 }}>
          <strong>Cast:</strong> {details?.Actors || "N/A"}
        </Typography>
      </Box>
    </Modal>
  );
};

export default ModalComponent;