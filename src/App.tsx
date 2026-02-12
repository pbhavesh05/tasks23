import React from "react";
import "./App.css";
import { Button, Container, Row, Col } from "react-bootstrap";

function App() { 
    return ( 
        <div className = "App"> 


            <header className = "App-Header">
                <h1>UD CISC275 - This is Header, My name is Bhavesh</h1>
            </header> 
            <img src ="https://upload.wikimedia.org/wikipedia/commons/9/94/LeBron_James_%2815823062226%29.jpg" 
            alt = "Lebron James in Cleveland"/> 
            
            Ordered List: 
            <ol> 
                <li>Green</li>
                <li>Blue</li>
                <li>Red</li>
            </ol>
            
            <Button onClick={ () => { console.log("Hello World!") } }>Log Hello World!</Button>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "100px",
                                height: "100px",
                                backgroundColor: "red"
                            }}
                        />
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "100px",
                                height: "100px",
                                backgroundColor: "red"
                            }}
                        />
                    </Col>
                </Row>
            </Container>
              
        </div>

    )
}
export default App