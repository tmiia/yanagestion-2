interface CheckProps {
    width?: number;
    height?: number;
    className?: string;
}

const Check = ({ width = 9, height = 9, className }: CheckProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M1.79086 2.36789C1.79579 2.36789 1.80072 2.36789 2.40122 2.50019C3.00172 2.63249 4.19765 2.8971 5.1629 3.16757C6.84576 3.63912 7.65318 4.0467 7.84396 4.16488C7.98884 4.25463 8.10062 4.39648 8.19974 4.56568C8.24459 4.64227 8.26402 4.70842 8.23891 4.83933C8.21379 4.97025 8.13987 5.16607 6.44925 6.15577C5.43156 6.75153 4.38003 7.25636 3.35421 7.60777C0.0701731 8.73279 -0.43311 8.31635 1.02548 6.85204C2.48408 5.38773 3.54303 5.14345 5.43156 3.23498C7.32009 1.32652 7.7197 0.796293 8.13141 0.25" stroke="black" strokeWidth="0.5"/>
        </svg>

    );
};

export default Check;