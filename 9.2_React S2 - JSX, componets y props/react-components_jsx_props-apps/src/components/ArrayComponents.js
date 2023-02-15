const motorcycles = ["Honda", "Yamaha", "BMW", "Ducati"];

const SampleComponent = () => {
    return  <ul>
    {motorcycles.map((motorcycle) => {
    return <li>{motorcycle}</li>
    })}
  </ul>
  }
  
  export default SampleComponent;