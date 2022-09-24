import React from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Form, Button, Table } from "react-bootstrap";

function TestCaseForm() {
  return (
    <div>
      <Form>
        <Table>
          <tbody>
            <tr>
              <Form.Group>
                <td>
                  {" "}
                  <Form.Label>Test Case ID :</Form.Label>
                </td>
                <td>
                  <Form.Control type="text" placeholder="Test Case ID" />
                </td>
              </Form.Group>
            </tr>
            <tr>
              <Form.Group>
                <td>
                  {" "}
                  <Form.Label>Description : </Form.Label>
                </td>
                <td>
                  <FloatingLabel controlId="floatingTextarea2" label="TestCase Description">
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: "100px" }}
                    />
                  </FloatingLabel>
                </td>
              </Form.Group>
            </tr>{" "}
            <tr>
            <Form.Group>
                <td>
                  {" "}
                  <Form.Label>Summary : </Form.Label>
                </td>
                <td>
                  <FloatingLabel controlId="floatingTextarea2" label="TestCase Summary">
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: "100px" }}
                    />
                  </FloatingLabel>
                </td>
              </Form.Group>
            </tr>

            <tr>
              <Form.Group>
                <td>
                  {" "}
                  <Form.Label>App Version :</Form.Label>
                </td>
                <td>
                  <Form.Control type="text" placeholder="App Version" />
                </td>
              </Form.Group>
            </tr>

            <tr>
              <Form.Group>
                <td>
                  {" "}
                  <Form.Label>Priority :</Form.Label>
                </td>
                <td>
                  <Form.Select aria-label="Default select example" variant ="dark">
                    <option>Select Priority</option>
                    <option value="1">Low</option>
                    <option value="2">Medium</option>
                    <option value="3">High</option>
                  </Form.Select>
                </td>
              </Form.Group>
            </tr>

            <tr>
              <Form.Group>
                <td>
                  {" "}
                  <Form.Label>Ticket no :</Form.Label>
                </td>
                <td>
                  <Form.Control type="text" placeholder="Ticket no" />
                </td>
              </Form.Group>
            </tr>

          </tbody>
        </Table>
      </Form>
    </div>
  );
}

export default TestCaseForm;
