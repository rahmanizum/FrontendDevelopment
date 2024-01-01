import React from 'react'
import Button from './Button'
const Form = () => {
    return (
        <div className="container mt-5">
          <form>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                placeholder="Enter your username"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="age" className="form-label">
                Age
              </label>
              <input
                type="number"
                className="form-control"
                id="age"
                name="age"
                placeholder="Enter your age"
              />
            </div>
            <Button> Add User </Button>
          </form>
        </div>
      )
}

export default Form
