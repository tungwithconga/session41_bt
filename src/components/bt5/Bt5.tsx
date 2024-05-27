import React from 'react';

export default function Bt5() {
  return (
    <div className="w-[700px] h-[500px] bg-blue-200 flex justify-center items-center">
      <div className="w-[500px] h-[400px] bg-blue-400 relative">Relative Parent
        <button className="absolute left-0 bottom-0 bg-blue-700">
          Absolute Children
        </button>
      </div>
    </div>
  );
}
