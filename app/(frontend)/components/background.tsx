const GRID_SIZE = 3;

const Background = () => {
  return (
    <div className="fixed inset-0 z-[-1] bg-light-gray grid-layout w-full h-full">
      {Array.from({ length: GRID_SIZE * GRID_SIZE }, (_, i) => (
        <div key={i} className="col-span-1 bg-background min-h-full" />
      ))}
    </div>
  );
};

export default Background;