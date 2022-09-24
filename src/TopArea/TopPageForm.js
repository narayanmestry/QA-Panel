import React from "react";
import "./toppage.css";
import { Form } from "react-bootstrap";

import "react-datepicker/dist/react-datepicker.css";

function TopPageForm() {
  return (
    <div className="toppage-container">
      <Form>
        <div className="top-form">
          <div className="appname boxTop">
            <label htmlFor="">App Name</label>
            <select name="" id="">
              <option value="">Select Project</option>
              <option value="">FM</option>
              <option value="">FX</option>
              <option value="">Retail</option>
            </select>
          </div>

          <div className="tester-name boxTop">
            <label>Tester Name :</label>
            <input type="text" placeholder="Tester Name" />
          </div>

          <div className="app-version boxTop">
            <label>App Version : </label>
            <input type="text" placeholder="App Version" />
          </div>
          <div className="date boxTop">
            <label>Date :</label>
            <input type="date" placeholder="App Version" />
          </div>
          <div className="envoirnment boxTop">
            <label>Envoirnment : </label>
            <select>
              <option>Select Envoirnment</option>
              <option value="1">QA</option>
              <option value="2">Prod</option>
              <option value="3">Stage</option>
              <option value="3">Dev</option>
            </select>
          </div>

          <div className="test-version boxTop">
            <label>Test Version </label>
            <input type="text" placeholder="Test Version" />
          </div>
        </div>































        {/* <table>
        <tbody>
          <tr>
              <td>
                {" "}
                <label>App Name :</label>
              </td>
              <td>
               <select name="" id="">
               <option value="">Select Project</option>
               <option value="">FM</option>
               <option value="">FX</option>
               <option value="">Retail</option>
               </select>
              </td>
              <td className="emailAddress">
                {" "}
                <label>Tester Name :</label>
              </td>
              <td>
                <input type="text" placeholder="Tester Name" />
              </td>
          </tr>
          <tr>
              <td>
                {" "}
                <label>App Version : </label>
              </td>
              <td>
                <input type="text" placeholder="App Version" />
              </td>
              <td>
                {" "}
                <label>Date :</label>
              </td>
              <td>
                <input type="date" placeholder="App Version" />
              </td>
          </tr>{" "}
          <tr>
              <td>
                {" "}
                <label>Envoirnment : </label>
              </td>
              <td>
                <select>
                  <option>Select Envoirnment</option>
                  <option value="1">QA</option>
                  <option value="2">Prod</option>
                  <option value="3">Stage</option>
                  <option value="3">Dev</option>
                </select>
              </td>
              <td>
                {" "}
                <label>Test Version </label>
              </td>
              <td>
                <input type="text" placeholder="Test Version" />
              </td>
          </tr>
        </tbody>
      </table> */}

        {/*       
      <Table>
      
        
        <tbody>
          <tr>
            <Form.Group>
              <td>
                {" "}
                <Form.Label>App Name :</Form.Label>
              </td>
              <td>
                <Form.Select aria-label="Default select example" variant ="dark">
                  <option>Select App Name</option>
                  <option value="1">FX</option>
                  <option value="2">FM</option>
                  <option value="3">Retail</option>
                </Form.Select>
              </td>
              <td className="emailAddress">
                {" "}
                <Form.Label>Tester Name :</Form.Label>
              </td>
              <td>
                <Form.Control type="text" placeholder="Tester Name" />
              </td>
            </Form.Group>
          </tr>
          <tr>
            <Form.Group>
              <td>
                {" "}
                <Form.Label>App Version : </Form.Label>
              </td>
              <td>
                <Form.Control type="text" placeholder="App Version" />
              </td>
              <td>
                {" "}
                <Form.Label>Date :</Form.Label>
              </td>
              <td>
                <Form.Control type="date" placeholder="App Version" />
              
              </td>
            </Form.Group>
          </tr>{" "}
          <tr>
            <Form.Group>
              <td>
                {" "}
                <Form.Label>Envoirnment : </Form.Label>
              </td>
              <td>
                <Form.Select aria-label="Default select example">
                  <option>Select Envoirnment</option>
                  <option value="1">QA</option>
                  <option value="2">Prod</option>
                  <option value="3">Stage</option>
                  <option value="3">Dev</option>
                </Form.Select>
              </td>
              <td>
                {" "}
                <Form.Label>Test Version </Form.Label>
              </td>
              <td>
                <Form.Control type="text" placeholder="Test Version" />
              </td>
            </Form.Group>
          </tr>
        </tbody>
      </Table> */}
      </Form>
    </div>
  );
}

export default TopPageForm;
