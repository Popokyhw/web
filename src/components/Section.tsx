import React from 'react';
import { ChevronDown } from 'lucide-react';

interface SectionProps {
  title: string;
  description: string;
  backgroundImg: string;
  leftBtn?: string;
  rightBtn?: string;
  showDownArrow?: boolean;
}

const Section: React.FC<SectionProps> = ({
  title,
  description,
  backgroundImg,
  leftBtn,
  rightBtn,
  showDownArrow,
}) => {
  return (
    <div
      className="relative h-screen w-full snap-start snap-always bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${backgroundImg}')` }}
    >
      <div className="absolute inset-x-0 top-[15%] text-center">
        <h1 className="text-4xl font-medium text-gray-900">{title}</h1>
        <p className="pt-2 text-gray-900">{description}</p>
      </div>

      <div className="absolute inset-x-0 bottom-[10%] flex flex-col items-center">
        <div className="flex flex-col gap-4 md:flex-row md:gap-6">
          {leftBtn && (
            <button className="rounded bg-gray-900/80 px-12 py-2 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-gray-900">
              {leftBtn}
            </button>
          )}
          {rightBtn && (
            <button className="rounded bg-white/70 px-12 py-2 text-sm font-medium text-gray-900 backdrop-blur-sm transition hover:bg-white">
              {rightBtn}
            </button>
          )}
        </div>
        {showDownArrow && (
          <div className="animate-bounce pt-8">
            <ChevronDown className="h-6 w-6" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Section;