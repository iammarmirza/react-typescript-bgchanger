import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [color, setColor] = useState('bg-blue-400');

  function changeBg(newColorClass: string) {
    setColor(newColorClass);
  }

  return (
    <div className={`h-screen w-screen ${color}`}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap gap-3 justify-center bg-white shadow-lg px-3 py-2 rounded-3xl'>
          <Button color='Red' onClick={changeBg} />
        </div>
      </div>
    </div>
  );
}

export default App;
