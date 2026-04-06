'use client';
import { useState, useEffect } from 'react';

export default function RealTimeDate() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000); 

    return () => clearInterval(timer); 
  }, []);

  const formatTime = (date) => {
    const options = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    };
    return date.toLocaleDateString('vi-VN', options);
  };

  return (
    <p className="text-slate-700 mt-1 font-medium italic">
      Hôm nay là {formatTime(time)}
    </p>
  );
}