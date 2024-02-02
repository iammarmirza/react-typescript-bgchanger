import { useState } from "react";
import Buttons from "./components/Buttons";
import { AllowedColorClass } from "./components/Buttons";

function App() {
  const [color, setColor] = useState('bg-blue-400');

  function changeBg(newColorClass: AllowedColorClass) {
    setColor(newColorClass);
  }

  return (
    <div className={`h-screen w-screen ${color}`}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap gap-3 justify-center bg-white shadow-lg px-3 py-2 rounded-3xl'>
          <Buttons onClick={changeBg} />
        </div>
      </div>
    </div>
  );
}

export default App;
