
import "./mainpage.css";
import { Row, Container} from "react-bootstrap";
import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import TopPageForm from "../TopArea/TopPageForm";
import TestCaseDisplay from "../BottomArea/TestCaseDisplay";
import Header from "../Header/Header";


function MainPage() {
  return (
    <Container fluid>
      <Row>
        <Header />
        <TopPageForm />
        <hr />
        <TestCaseDisplay />
      </Row>
    </Container>
  );
}

export default MainPage;
