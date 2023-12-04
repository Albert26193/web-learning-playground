import * as React from 'react'

const initialFormData = {
  name: '',
  email: '',
  address: '',
  city: '',
  zipcode: ''
}

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = React.useState(1)
  const [formData, setFormData] = React.useState(initialFormData)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleNextStep = () => {
    setCurrentStep((previousStep) => previousStep + 1)
  }

  const handlePrevStep = () => {
    setCurrentStep((previousStep) => previousStep - 1)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your submission')
    setCurrentStep(1)
    setFormData(initialFormData)
  }

  if (currentStep === 1) {
    return (
      <form onSubmit={handleSubmit}>
        <h2>Personal Information</h2>
        <div>
          <label>Step {currentStep} of 3</label>
          <progress
            value={currentStep}
            max={3}
          />
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            required
            name="name"
            id="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            required
            name="email"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <button
          type="button"
          className="secondary"
          onClick={handleNextStep}
        >
          Next
        </button>
      </form>
    )
  } else if (currentStep === 2) {
    return (
      <form onSubmit={handleSubmit}>
        <h2>Address</h2>
        <div>
          <label>Step {currentStep} of 3</label>
          <progress
            value={currentStep}
            max={3}
          />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            required
            name="address"
            id="address"
            type="address"
            placeholder="What is your address?"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input
            required
            name="city"
            id="city"
            placeholder="What city do you live in?"
            value={formData.city}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="zipcode">Zipcode</label>
          <input
            required
            name="zipcode"
            id="zipcode"
            type="number"
            placeholder="What is your zipcode?"
            value={formData.zipcode}
            onChange={handleChange}
          />
        </div>
        <div>
          <button
            className="secondary"
            type="button"
            onClick={handleNextStep}
          >
            Next
          </button>
          <button
            type="button"
            className="link"
            onClick={handlePrevStep}
          >
            Previous
          </button>
        </div>
      </form>
    )
  } else if (currentStep === 3) {
    return (
      <form onSubmit={handleSubmit}>
        <h2>Confirm your information:</h2>
        <div>
          <label>Step {currentStep} of 3</label>
          <progress
            value={currentStep}
            max={3}
          />
        </div>
        <table>
          <tbody>
            {Object.keys(formData).map((key) => {
              return (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{formData[key]}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <div>
          <button
            className="primary"
            type="submit"
          >
            Submit
          </button>
          <button
            type="button"
            className="link"
            onClick={handlePrevStep}
          >
            Previous
          </button>
        </div>
      </form>
    )
  } else {
    return null
  }
}
