import "./phone.css"

const phones = ["iPhone", "Galaxy", "Redmi", "OnePlus"];

const PhoneComponent = () => {
  return <div>
    <h1 class="title">Telefonos:</h1>
    <ul>
      {phones.map((phones) => {
        return <li>{phones}</li>
      })}
    </ul>
  </div>
}

export default PhoneComponent;