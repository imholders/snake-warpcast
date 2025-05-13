import React, { useEffect, useState } from 'react';

export default function GameBoard() {
  const [snake, setSnake] = useState([[5, 5]]);
  const [food, setFood] = useState([10, 10]);
  const [direction, setDirection] = useState([0, 1]);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowUp': setDirection([-1, 0]); break;
        case 'ArrowDown': setDirection([1, 0]); break;
        case 'ArrowLeft': setDirection([0, -1]); break;
        case 'ArrowRight': setDirection([0, 1]); break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const move = () => {
      setSnake(prev => {
        const newHead = [prev[0][0] + direction[0], prev[0][1] + direction[1]];
        const newSnake = [newHead, ...prev.slice(0, -1)];
        if (
          newHead[0] < 0 || newHead[0] >= 20 ||
          newHead[1] < 0 || newHead[1] >= 20 ||
          newSnake.slice(1).some(seg => seg[0] === newHead[0] && seg[1] === newHead[1])
        ) {
          setGameOver(true);
          return prev;
        }
        return newSnake;
      });
    };
    if (!gameOver) {
      const interval = setInterval(move, 200);
      return () => clearInterval(interval);
    }
  }, [direction, gameOver]);

  return (
    <div className="grid grid-cols-20 gap-0.5 w-max mx-auto">
      {Array.from({ length: 20 * 20 }).map((_, i) => {
        const x = Math.floor(i / 20);
        const y = i % 20;
        const isSnake = snake.some(seg => seg[0] === x && seg[1] === y);
        const isFood = food[0] === x && food[1] === y;
        return <div key={i} className={`w-4 h-4 ${isSnake ? 'bg-green-500' : isFood ? 'bg-red-500' : 'bg-gray-800'}`}></div>;
      })}
    </div>
  );
}
