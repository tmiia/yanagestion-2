'use client';
import classNames from "classnames";
import { useEffect, useState } from "react";

interface DateComponentProps {
  className?: string;
}

const TIMEZONE = "America/Martinique";

const DateComponent = ({ className = "" }: DateComponentProps) => {
  const [date, setDate] = useState<Date | null>(null);

  useEffect(() => {
    setDate(new Date());
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const day = date?.toLocaleDateString("fr-FR", {
    weekday: "long",
    timeZone: TIMEZONE,
  });

  const time = date?.toLocaleTimeString("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: TIMEZONE,
  });

  return (
    <div className={classNames("flex items-center justify-between", className)}>
      <p className="capitalize hidden md:inline">{day ?? "\u00A0"}</p>
      <p>[{time ?? "--:--:--"}]</p>
    </div>
  );
};

export default DateComponent;