import React, { useState } from 'react';

const App = () => {
  return (
    <main>
      <form className="form">
        <label htmlFor="username" className="label">
          Username
        </label>
        <input
          className="input"
          type="text"
          name="username"
          autoComplete="off"
        />

        <label htmlFor="Password" className="label">
          Password
        </label>
        <input className="input" type="password" name="password" />

        <button className="btn" type="submit">
          Log In
        </button>
      </form>
    </main>
  );
};

export default App;
