import React, { useState } from "react";
import { Stepper, StepLabel, Step } from "@material-ui/core";
import './StepForm.css'
import logo from '../images/awl_logo.png'


export default function StepForm() {
  const [currentStep, setStep] = useState(1);
  const [input, setInput] = useState(false)

  const checkboxinput =(e)=>{
    e.preventDefault();
   setInput(!input)
  }
  const Step1 = () => {
    return (
      <>
        <div className="container">
            <header className="card-header" >
              <h4>Set up your organiztaion profile</h4>
            </header>
            <article className="card-body">
              <form>
                <div class="row mt-2">
                  <div class="form-group">
                    <label>Organiztaion Name</label>
                    <input type="text" class="form-control" />
                  </div>
                </div>

                <div class="row mt-3">
                  <div class="form-group col">
                    <label>Location</label>
                    <input type="text" class="form-control" />
                  </div>
                </div>

                <div class="row mt-3">
                  <div class="form-group col">
                    <label for="inputState">Currency</label>
                    <select id="inputState" class="form-control">
                      <option selected>Choose...</option>
                      <option>...</option>
                    </select>
                  </div>
                </div>

                <div class="row mt-3">
                  <div class="form-group col">
                    <label for="inputState">Language</label>
                    <select id="inputState" class="form-control">
                      <option selected>Choose...</option>
                      <option>...</option>
                    </select>
                  </div>
                </div>

                <div className="row mt-3">
                  <p className="col-md-11">Is this Business registered for GST</p>
                  <input style={{ width: "14px" }} className="col-md-1" type="checkbox" onChange={checkboxinput}></input>
                  {input && (<input type="text" style={{ width: "97%" }} class="form-control mx-2"/>)}
                </div>

                <button type="submit" onClick={() => setStep(2)} class="btn btn-primary mt-4">Next</button>
              </form>
            </article>

        </div>
      </>
    )
  }
  const Step2 = () => {
    return (
      <>
        <div className="container">

            <header className="card-header" >
              <h4>Set up your personal profile</h4>
            </header>
            <article className="card-body">
              <form>
                <div class="row">
                  <div class="form-group">
                    <label>Person Name</label>
                    <input type="text" class="form-control" />
                  </div>
                </div>

                <div class="row mt-1">
                  <div class="form-group col-md-6">
                    <label>Mobile</label>
                    <input type="text" class="form-control" />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputState">Email</label>
                    <input type="email" class="form-control" />
                  </div>
                </div>

                <div class="row mt-1">
                  <div class="form-group col">
                    <label for="inputState">Address</label>
                    <input type="text" class="form-control" />
                  </div>
                </div>

                <div class="row mt-1">
                  <div class="form-group col">
                    <label for="inputState">User Id</label>
                    <input type="text" class="form-control" />
                  </div>
                </div>

                <div class="row mt-1">
                  <div class="form-group col-md-6">
                    <label for="inputState">Password</label>
                    <input type="password" class="form-control" />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputState">Confirm Password</label>
                    <input type="password" class="form-control" />
                  </div>
                </div>

                <button type="submit" onClick={() => setStep(1)} class="btn btn-secondary my-3">Back</button>
                <button type="submit" class="btn btn-primary mx-2">Submit</button>
              </form>
            </article>
          </div>
      </>
    )
  }

  const showStep = (step) => {
    switch (step) {
      case 1:
        return <Step1 />
      case 2:
        return <Step2 />
    }
  }
  return (
    <div >
      <div style={{ display: "flex" }}>
        <div className="brand">
          <img src={logo}/>
        </div>
        <div className="brand2">
          <h4>Register your Account</h4>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div className="imgdiv">
          <img src="https://images.unsplash.com/photo-1609921141835-710b7fa6e438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
        </div>
        <div className="container">
          <Stepper style={{ width: "50%", marginLeft: "auto", marginRight: "auto" }} activeStep={currentStep - 1} orientation="horizontal">
            <Step >
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
          </Stepper>
          <div>
            {showStep(currentStep)}
          </div>
        </div>

      </div>
    </div>
  );
}