import React from 'react';
import { rightContentData } from './rightContentData';

const RightContent: React.FC = () => {
  return (
     <div className="flex flex-col gap-8 border-l border-[#D7B47A] pl-8">
      {rightContentData.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.id}
            className="flex items-start gap-5"
          >
            <div
              className={`flex h-16 w-16 items-center justify-center rounded-full ${item.bgColor}`}
            >
              <Icon
                size={32}
                className="text-white"
                strokeWidth={1.8}
              />
            </div>

            <div>
              <h3 className="font-serif text-[30px] text-[#0B2A4A]">
                {item.title}
              </h3>

              <p className="mt-1 max-w-[220px] text-base leading-7 text-[#555]">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RightContent;