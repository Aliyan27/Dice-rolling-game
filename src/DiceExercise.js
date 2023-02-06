import React, { useState } from "react";

const DICE_THROW = 5;

export default function App() {
  const [num, setNum] = useState(5);

  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const handleClick = () => {
    setNum(randomNumberInRange(1, 5));
  };
  console.log(num);

  return (
    <div className="container mx-auto m-8 flex">
      <div>
        <Dice num={num} />
      </div>
      <div className="ml-4">
        <div>
          <button className="text-center w-32 border" onClick={handleClick}>
            Throw dice
          </button>
        </div>
        <div>
          <p className="mt-2 text-center">Last throw: {num}</p>
        </div>
      </div>
    </div>
  );
}

const Dice = ({ num }) => (
  <table className="border border-black rounded-md p-48">
    <tbody>
      {num === 1 ? (
        <tr>
          <tr>
            <Nothing />
            <Nothing />
            <Nothing />
          </tr>
          <tr>
            <Nothing />
            <Eye />
            <Nothing />
          </tr>
          <tr>
            <Nothing />
            <Nothing />
            <Nothing />
          </tr>
        </tr>
      ) : (
        <tr></tr>
      )}
      {num === 2 ? (
        <tr>
          <tr>
            <Eye />
            <Nothing />
            <Nothing />
          </tr>
          <tr>
            <Nothing />
            <Nothing />
            <Nothing />
          </tr>
          <tr>
            <Nothing />
            <Nothing />
            <Eye />
          </tr>
        </tr>
      ) : (
        <tr></tr>
      )}
      {num === 3 ? (
        <tr>
          <tr>
            <Eye />
            <Nothing />
            <Nothing />
          </tr>
          <tr>
            <Nothing />
            <Eye />
            <Nothing />
          </tr>
          <tr>
            <Nothing />
            <Nothing />
            <Eye />
          </tr>
        </tr>
      ) : (
        <tr></tr>
      )}
      {num === 4 ? (
        <tr>
          <tr>
            <Eye />
            <Nothing />
            <Eye />
          </tr>
          <tr>
            <Nothing />
            <Nothing />
            <Nothing />
          </tr>
          <tr>
            <Eye />
            <Nothing />
            <Eye />
          </tr>
        </tr>
      ) : (
        <tr></tr>
      )}
      {num === 5 ? (
        <tr>
          <tr>
            <Eye />
            <Nothing />
            <Eye />
          </tr>
          <tr>
            <Nothing />
            <Eye />
            <Nothing />
          </tr>
          <tr>
            <Eye />
            <Nothing />
            <Eye />
          </tr>
        </tr>
      ) : (
        <tr></tr>
      )}
    </tbody>
  </table>
);

const Eye = () => (
  <td className="w-12 h-12 p-2">
    <div className="bg-black w-12 h-12 rounded-full">&nbsp;</div>
  </td>
);
const Nothing = () => (
  <td className="w-12 h-12 p-2">
    <div className="bg-white w-12 h-12 rounded-full">&nbsp;</div>
  </td>
);
