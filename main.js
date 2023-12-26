const root = ReactDOM.createRoot(document.getElementById("root"));

function Counter() {
  const buttonStyle = {
    padding: "14px",
    fontSize: "16px",
    cursor: "pointer",
    width: "500px",
  };
  const buttonStylele = {
    padding: "14px",
    fontSize: "16px",
    cursor: "pointer",
    width: "500px",
    backgroundColor: "transparent",
    border: "none",
  };
  const buttonStylee = {};

  const counterStyle = {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    width: "400px",
    height: "50px",
    display: "flex",
    textAlign: "center",
    alignItems: "baseline",
    background: "skyblue",
  };

  return (
    <div>
      <div style={counterStyle} className="counter">
        <button style={buttonStyle} onClick={() => console.log("Increment")}>
          +
        </button>
        <button style={buttonStylele} onClick={() => console.log("Decrement")}>
          0
        </button>
        <button style={buttonStyle} onClick={() => console.log("Decrement")}>
          -
        </button>
        <button style={buttonStyle} onClick={() => console.log("Clear")}>
          C
        </button>
        <button style={buttonStyle} onClick={() => console.log("Clear")}>
          X
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="main">
      <h1 className="title">Today : {new Date().toDateString()}</h1>
      <br />
      <h1 className="Sum">Sum = 0</h1>
      <br />
      <button>Add Couter</button>
      <Counter />
    </div>
  );
}

root.render(<App />);
