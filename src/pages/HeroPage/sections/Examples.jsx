import { useState } from 'react';
import '../../../GLobal.css';
import { Btn_Examples } from '../../../components/ui/Buttons';

function Examples() {
  const items = [
    { id: 1, color: '#e6d4c6' },
    { id: 2, color: '#e6d4c6' },
    { id: 3, color: '#e6d4c6' },
    { id: 4, color: '#e6d4c6' },
    { id: 5, color: '#e6d4c6' },
  ];

  const totalItems = items.length;
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  return (
    <div className='w-full flex justify-center items-center relative mb-[5rem]'>
      <div className='w-full flex justify-center items-center relative gap-[1rem]'>
        <Btn_Examples content='<' onClick={prev} />

        <div className='bg-red-200 rounded-[1rem] overflow-hidden flex flex-col w-[70%] lg:w-[50%] aspect-9/14 lg:aspect-14/9 shadow-95-a-002
        '>
          <div className='w-full h-[10%] bg-[#e9e8e8]'></div>
          <div className='w-full h-[80%] Arcadia_background relative'>
            {items.map((item, index) => {
              let offset = index - currentIndex;

              if (offset > totalItems / 2) offset -= totalItems;
              if (offset < -totalItems / 2) offset += totalItems;

              const scale = offset === 0 ? 1 : 0.8 - Math.abs(offset) * 0.1;
              const opacity = offset === 0 ? 1 : 0.4 - Math.abs(offset) * 0.1;
              const translateX = offset * 100;

              return (
                <div
                  key={index}
                  className="absolute top-1/2 left-1/2 h-[80%] w-[80%] rounded-xl transition-all duration-500 ease-out"
                  style={{
                    transform: `translate(-50%, -50%) translateX(${translateX}px) scale(${scale})`,
                    opacity: Math.max(opacity, 0.2),
                    zIndex: offset === 0 ? 10 : 10 - Math.abs(offset),
                  }}
                >
                  <div
                    className="w-full h-full rounded-xl"
                    style={{ backgroundColor: item.color }}
                  ></div>
                </div>
              );
            })}
          </div>
          <div className='w-full h-[10%] bg-blue-100'></div>
        </div>

        <Btn_Examples content='>' onClick={next} />
      </div>
      <div className='w-[50%] min-h-[8rem] bg-[#161717] absolute right-0 z-[-1]'></div>
    </div>
  );
}

export default Examples;