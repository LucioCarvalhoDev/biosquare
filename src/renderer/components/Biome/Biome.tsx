import { useState } from 'react';
import Sector from '../Sector/Sector';
import './Biome.css';

function Biome() {
  const [grid, setGrid] = useState(Array(32).fill(Array(128).fill(0)));

  return (
    <>
      <div className="biome">
        {grid.map((line, row) => {
          const buf = [];
          for (let col = 0; col < line.length; col++) {
            buf.push(
              <Sector key={row * 32 + col} x={col} y={row}>
                {line[row]}
              </Sector>
            );
          }
          return buf;
        })}
      </div>
    </>
  );
}

export default Biome;
