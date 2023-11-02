import React from "react";

const App = () => {
  console.log("Env: ", import.meta.env.VITE_FETCH_TRENDING);
  return (
    <div>
      <h1 className=" text-center text-4xl font-bold mt-4">Movie Site</h1>
    </div>
  );
};

export default App;
