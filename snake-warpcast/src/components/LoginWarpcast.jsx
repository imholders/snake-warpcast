import React, { useState } from 'react';

export default function LoginWarpcast() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Simulate Warpcast login
    alert('Warpcast login simulated!');
    setLoggedIn(true);
  };

  return (
    <div className="mb-4">
      {loggedIn ? (
        <p className="text-green-400">Logged in via Warpcast</p>
      ) : (
        <button onClick={handleLogin} className="bg-blue-500 px-4 py-2 rounded">
          Login with Warpcast
        </button>
      )}
    </div>
  );
}
