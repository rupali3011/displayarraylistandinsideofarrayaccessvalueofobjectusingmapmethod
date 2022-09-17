import "./styles.css";

export default function App() {
  const arr1 = [1, 2, 3, 4];
  const arrs = [
    { name: "rupali", no: 2340, address: "sangli" },
    { name: "ruturaj", no: 3070, address: "satara" },
    { name: "amit", no: 2080, address: "kolhapur" }
  ];
  return (
    <div className="App">
      <div>
        <h3>map method for array inside of object access value</h3>
        {arrs.map((item) => (
          <p>
            {item.name},{item.no},{item.address}
          </p>
        ))}
        <h3>show the arraylist using map method</h3>
        {arr1.map((no) => (
          <p>{no}</p>
        ))}
      </div>
    </div>
  );
}
