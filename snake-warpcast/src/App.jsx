import React from 'react';
import GameBoard from './components/GameBoard';
import LoginWarpcast from './components/LoginWarpcast';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <LoginWarpcast />
      <h1 className="text-2xl font-bold mb-4">Snake Game</h1>
      <GameBoard />
    </div>
  );
}
