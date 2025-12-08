interface FolderTipProps {
    color?: string;
    width?: number;
    height?: number;
    className?: string;
    dataIndex?: number;
}

const FolderTip = ({ color = "#272727", width = 123, height = 36, className, dataIndex }: FolderTipProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 123 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}  style={{ transform: `translateY(-100%) translateX(calc(${dataIndex || 0} * 100%))` }}>
        <path d="M0 0H97L123 36H0V0Z" fill={color}/>
    </svg>

  );
};

export default FolderTip;