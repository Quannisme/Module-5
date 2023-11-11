import { useState } from "react"

export default function CarSelection() {
    const [carList, setCarList] = useState([
        "Toyota Camry",
        "Honda Civic",
        "Ford Mustang",
        "Chevrolet Silverado",
        "BMW X5",
        "Audi A4",
        "Mercedes-Benz C-Class"
      ])
      const [colorList, setColorList] = useState([
        "Red",
        "Blue",
        "Green",
        "Yellow",
        "Orange",
        "Purple",
        "Black"
      ])
      const [selectedCar, setSelectedCar] = useState({
        car: '',
        color: ''
      })
      const handleChange = (key,value) =>{
        setSelectedCar((prev) =>{
            return{
                ...prev,
                [key]:value
            }
        })
      }
    
      return (
        <>
          <h1>Select your car</h1>
          <div className="mb-3 row">
            <label class="col-sm-2 col-form-label">Select a car</label>
            <div className="col-sm-10">
              <select value={selectedCar.car} className="form-select" onChange={(evt) => handleChange('car', evt.target.value)}>
                <option selected>Car...</option>
                {
                  carList.map((car) => {
                    return (
                      <option value={car}>{car}</option>
                    )
                  })
                }
              </select>
            </div>
          </div>
          <div className="mb-3 row">
            <label class="col-sm-2 col-form-label">Select a color</label>
            <div className="col-sm-10">
          <select value={selectedCar.color} className="form-select" onChange={(evt) => handleChange('color', evt.target.value)}>
            <option selected>Color...</option>
            {
              colorList.map((color, index) => {
                return (
                  <option key={'color-' + index} value={color}>{color}</option>
                )
              })
            }
          </select>
        </div>
      </div>
      <h3>You select a {selectedCar.color.toUpperCase()} - {selectedCar.car.toUpperCase()}</h3>
    </>
  )
}