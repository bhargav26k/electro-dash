import React from "react";

const ComingSoon = () => {
  const pageStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "80vh",
    backgroundColor: "#f3f4f6",
    fontFamily: "'Arial', sans-serif",
    textAlign: "center",
  };

  const headingStyles = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#2c3e50",
  };

  const subHeadingStyles = {
    fontSize: "1.2rem",
    color: "#7f8c8d",
    marginBottom: "20px",
  };

  const progressBarContainerStyles = {
    width: "80%",
    maxWidth: "600px",
    height: "10px",
    backgroundColor: "#ddd",
    borderRadius: "5px",
    overflow: "hidden",
    margin: "20px 0",
  };

  const progressBarStyles = {
    width: "50%", // Adjust width to simulate progress
    height: "100%",
    backgroundColor: "#224466",
    animation: "loading 2s infinite alternate",
  };

  const buttonStyles = {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "1rem",
    backgroundColor: "#336699",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <div style={pageStyles}>
    <img alt="Animated"
    style={{height:"250px"}}
     src="https://i.pinimg.com/originals/27/bb/9f/27bb9f7f73c36c6a6f568df80fb7e78d.gif" />
      <h1 style={headingStyles}>Coming Soon</h1>
      <p style={subHeadingStyles}>
        We're working hard to bring you something amazing. Stay tuned!
      </p>
      <div style={progressBarContainerStyles}>
        <div style={progressBarStyles}></div>
      </div>
      <button
        style={buttonStyles}
        onClick={() => alert("Thank you for your patience!")}
      >
        Notify Me
      </button>
    </div>
  );
};

export default ComingSoon;
