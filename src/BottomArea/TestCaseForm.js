import React from "react";
// import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Form, Button } from "react-bootstrap";
import "./testcaseform.css";

function TestCaseForm() {
  return (
    <div className="modal-testcaseform-container">
      <Form>
        <div className="modal-upperform">
          <div className="test-case-id form-box">
            <label className="left-label" htmlFor="">
              Test Case ID :
            </label>
            <input type="text" placeholder="Test Case ID" />
          </div>

          <div className="test-case form-box">
            <label className="left-label" htmlFor="">
              Test Case:
            </label>
            <input type="text" placeholder="Test Case" />
          </div>

          <div className="description form-box">
            <label className="left-label" htmlFor="">
              Description :
            </label>
            <textarea name="" id="" cols="96" rows="2"></textarea>
          </div>
        </div>
        <div className="modal-bottomform">
          <div className="app-name form-box">
            <label className="left-label1" htmlFor="">
              Associate App
            </label>
            <select className="left-select" name="" id="">
              <option value="">Select App</option>
              <option value="">GLUV Native</option>
              <option value="">FX Native</option>
              <option value="">FM Native</option>
              <option value="">Retail</option>
              <option value="">Headless</option>
            </select>
          </div>

          <div className="parent form-box">
            <label htmlFor="">Parent</label>
            <div className="text-checkbox">
              <input type="text" placeholder="1001"></input>
              <input type="checkbox" id="" name="" value=""></input>
            </div>
          </div>

          <div className="priority form-box">
            <label className="left-label1" htmlFor="">
              Priority
            </label>
            <select className="left-select" name="" id="">
              <option value="">Select Priority</option>
              <option value="">Low</option>
              <option value="">Medium</option>
              <option value="">High</option>
              <option value="">Urgent</option>
            </select>
          </div>

          <div className="status form-box">
            <label htmlFor="">Status</label>
            <select className="right-select" name="" id="">
              <option value="">Select Status</option>
              <option value="">To-do</option>
              <option value="">In-Progress</option>
              <option value="">Pass</option>
              <option value="">Failed</option>
            </select>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default TestCaseForm;
