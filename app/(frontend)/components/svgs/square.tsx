import classNames from "classnames";

interface SquareProps {
    width?: number;
    height?: number;
    className?: string;
    color?: string;
}

const Square = ({ width = 9, height = 9, className, color = "transparent" }: SquareProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={classNames("transition-transform duration-600 ease-out origin-left", className)}>
            <rect width={width} height={height} fill={color}/>
            <rect x="0.5" y="0.5" width="11" height="11" stroke="#5D5D5D" strokeWidth="0.5"/>
        </svg>
    );
};

export default Square;