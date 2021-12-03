import './App.css';

function App() {

  const name = "Hrishikesh";

  var a = 2;
  var b = 6;

  var arr = [1, 2, 3, 4, 5];

  var sum = 0;
  arr.forEach(num => {
    sum += num;
  });

  const example = (
    <>
      <div className="example">
        <h1>Hello, World!</h1>
        <h2>This is my First React App</h2>
        <p>Hey, this is {name} welcoming you to this app!</p>
      </div>
      <div>
        <p>value of 2 into 3 is {2 * 3}</p>
        <p>{a > b ? a : b} is a Greater number</p>
        <p>{arr.toString()}</p>
        <p>{sum}</p>
      </div>
    </>
  );

  return (
    example
  );
}

export default App;
