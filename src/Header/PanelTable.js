import React,{useState} from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";

function PanelTable() {

    const [appName , setAppName] = useState({});


  return (
    <div>
      <Table>
        <thead></thead>
        <tbody>
          <tr>
            <td>App Name</td>
            <td>
              <select className="left-select" name="" id="">
                <option value="">Select App</option>
                <option value="">GLUV Native</option>
                <option value="">FX Native</option>
                <option value="">FM Native</option>
                <option value="">Retail</option>
                <option value="">Headless</option>
              </select>
            </td>
            <td>
              <input type="text" placeholder="" />
            </td>
            <td>
              <Button variant="success" size="sm">
                Add
              </Button>
              <Button variant="danger" size="sm">
                Delete
              </Button>
            </td>
          </tr>
          <tr>
            <td>App Environment</td>
            <td>
              <select className="left-select" name="" id="">
                <option value="">Select Environment</option>
                <option value="">Dev</option>
                <option value="">QA</option>
                <option value="">Stage</option>
                <option value="">Production</option>
                <option value="">Demo</option>
              </select>
            </td>
            <td>
              <input type="text" placeholder="" />
            </td>
            <td>
              <Button variant="success" size="sm">
                Add
              </Button>
              <Button variant="danger" size="sm">
                Delete
              </Button>
            </td>
          </tr>
          <tr>
            <td>Priority</td>
            <td>
              <select className="left-select" name="" id="">
                <option value="">Select Priority</option>
                <option value="">Low</option>
                <option value="">Medium</option>
                <option value="">High</option>
                <option value="">Urgent</option>
              </select>
            </td>
            <td>
              <input type="text" placeholder="" />
            </td>
            <td>
              <Button variant="success" size="sm">
                Add
              </Button>
              <Button variant="danger" size="sm">
                Delete
              </Button>
            </td>
          </tr>
          <tr>
            <td>Status</td>
            <td>
              <select className="left-select" name="" id="">
                <option value="">Select Status</option>
                <option value="">To-do</option>
                <option value="">In-Progress</option>
                <option value="">Pass</option>
                <option value="">Failed</option>
              </select>
            </td>
            <td>
              <input type="text" placeholder="" />
            </td>
            <td>
              <Button variant="success" size="sm">
                Add
              </Button>
              <Button variant="danger" size="sm">
                Delete
              </Button>
            </td>
          </tr>
          <tr>
            <td>Tester Name</td>
            <td>
              <select className="left-select" name="" id="">
                <option value="">Select Tester Name</option>
                <option value="">Amit k</option>
                <option value="">Sidhdhant P</option>
                <option value="">Vinod B</option>
                <option value="">Pooja H</option>
              </select>
            </td>
            <td>
              <input type="text" placeholder="" />
            </td>
            <td>
              <Button variant="success" size="sm">
                Add
              </Button>
              <Button variant="danger" size="sm">
                Delete
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default PanelTable;
