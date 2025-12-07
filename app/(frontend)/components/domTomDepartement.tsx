'use client';
import { useEffect, useState } from "react";

interface DomTomDepartementProps {
  className?: string;
}

const DomTomDepartement = ({ className = "" }: DomTomDepartementProps) => {
  const [domDepart, setdomDepart] = useState(1);
  const departValue = [1, 2, 3];

  const updateDomDepart = () => {
    setdomDepart(departValue[Math.floor(Math.random() * departValue.length)]);
  };

  useEffect(() => {
    const timer = setInterval(updateDomDepart, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`grid-layout ${className}`}>
      <small className="font-light text-xs col-start-1 text-end p-2.5">97</small>
      <em className="font-light text-xs col-start-3 p-2.5">({domDepart})</em>
    </div>
  );
};

export default DomTomDepartement;
