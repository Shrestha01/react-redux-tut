function Child(props) {
  let val = "Adarsha";
  return (
    <div>
      <h1>User </h1>
      <button onClick={() => props.name(val)}>click me</button>
    </div>
  );
}

export default Child;
