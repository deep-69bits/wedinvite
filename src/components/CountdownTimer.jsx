import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ deadline }) => {
  const [remainingTime, setRemainingTime] = useState(getRemainingTime(deadline));

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(getRemainingTime(deadline));
    }, 1000);
    return () => clearInterval(interval);
  }, [deadline]);

  const days = Math.floor(remainingTime / (24 * 60 * 60 * 1000));
  const hours = Math.floor((remainingTime / (60 * 60 * 1000)) % 24);
  const minutes = Math.floor((remainingTime / (60 * 1000)) % 60);
  const seconds = Math.floor((remainingTime / 1000) % 60);

  return (
    <div className="bg-[#e76da6] md:px-10 lg:px-20 py-10">
  <div className="flex justify-center md:gap-8 gap-2 text-white md:bg-[#e76da6] md:p-8 md:rounded-xl">
    <div className="bg-[#fc749f] md:p-5 p-2 md:rounded-full rounded-xl md:w-40 md:h-40 flex justify-center items-center flex-col mx-3 border-white md:border-8 border-4">
      <div className="md:text-4xl font-bold">{days}</div>
      <div className="md:text-2xl">Days</div>
    </div>
    <div className="bg-[#fc749f] md:p-5 p-4 md:rounded-full rounded-xl md:w-40 md:h-40 flex justify-center items-center flex-col mx-3 border-white md:border-8 border-4">
      <div className="md:text-4xl font-bold">{hours}</div>
      <div className="md:text-2xl">Hrs</div>
    </div>
    <div className="bg-[#fc749f] md:p-5 p-4 md:rounded-full rounded-xl md:w-40 md:h-40 flex justify-center items-center flex-col mx-3 border-white md:border-8 border-4">
      <div className="md:text-4xl font-bold">{minutes}</div>
      <div className="md:text-2xl">Mins</div>
    </div>
    <div className="bg-[#fc749f] md:p-5 p-4 md:rounded-full rounded-xl md:w-40 md:h-40 flex justify-center items-center flex-col mx-3 border-white md:border-8 border-4">
      <div className="md:text-4xl font-bold">{seconds}</div>
      <div className="md:text-2xl">Secs</div>
    </div>
  </div>
</div>
  );
};

const getRemainingTime = (deadline) => {
  const now = new Date().getTime();
  const remainingTime = deadline - now;
  return remainingTime < 0 ? 0 : remainingTime;
};

export default CountdownTimer;
