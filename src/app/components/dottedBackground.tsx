import React, { ReactNode } from 'react';

interface DottedBackgroundProps {
  dotColor?: string;
  dotSize?: number;
  gridColumns?: number;
  gridGap?: number;
  opacity?: number;
  children?: ReactNode;
}

const DottedBackground: React.FC<DottedBackgroundProps> = ({
  dotColor = '#FAF9F6',
  dotSize = 10,
  gridColumns = 10,
  gridGap = 10,
  opacity = 0.2,
  children
}) => {
  const numberOfDots = gridColumns * 10; 
  
  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
      <div className="absolute top-60 right-0 w-[40%] h-[80%]">
        <div 
          className="grid h-full p-5"
          style={{
            gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
            gap: `${gridGap}px`
          }}
        >
          {[...Array(numberOfDots)].map((_, index) => (
            <div
              key={index}
              className="rounded-full"
              style={{
                width: `${dotSize}px`,
                height: `${dotSize}px`,
                backgroundColor: dotColor,
                opacity: opacity
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Content container */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default DottedBackground;
