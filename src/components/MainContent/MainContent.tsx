import React from 'react';
import LeftContent from './LeftContent/LeftContent';
import MiddleConent from './MiddleContent/MiddleContent';
import RightContent from './RightContent/RightContent';

const MainContent: React.FC = () => {
  return (
    <div className="w-full bg-[#FFFDF8]">
      <div className="mx-auto grid max-w-8xl grid-cols-1 gap-10 px-6 py-16 lg:grid-cols-[1.05fr_1.25fr_0.9fr] lg:items-center">
        {/* Left Column */}
        <LeftContent/>
        {/* Middle Column */}
        <MiddleConent/>
        {/* Right Column */}
        <RightContent/>
      </div>
    </div>
  );
};

export default MainContent;