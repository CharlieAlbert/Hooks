// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

const Timeout = () => {
  const [message, setMessage] = useState("Hello World");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setMessage("Yow niaje buda!");
    }, 2000);

    // Clears the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, []); // empty array list to ensure useEffect runs only once

  return (
    <>
      <p>{message}</p>
    </>
  );
};

export default Timeout;
