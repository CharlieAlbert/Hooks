// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

const Countdown = () => {
  const [countDown, setCountDown] = useState(10);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountDown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  useEffect(() => {
    if (countDown === 0) {
      setTimeout(() => {
        setCountDown(10);
        setMessage("Launching!!!");
      }, 1000);
    }
  }, [countDown]);
  return (
    <>
      <p>Countdown: {countDown}</p>
      <p>{message}</p>
    </>
  );
};

export default Countdown;
