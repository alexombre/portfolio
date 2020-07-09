import React from 'react';
import { Row, Col, Divider, Progress } from 'antd';
import StackCard from '../components/Home/StackCard'
import webDev from '../assets/webdev.png';
import react from '../assets/react.png';
import rails from '../assets/ror.png';
import bootstrap from '../assets/bootstrap.png';
import reactNative from '../assets/react-native-2.png';
import progressiveApp from '../assets/progressive_app.png';

const Home = () => {
  
  return (
    <>
      
        <div class="container">
          <Row>
            <Col span={12}>
            
              <h1>Developpeur <strong className="text-primary">react</strong>if pour vous mettre sur de bons <strong className="text-danger">rails</strong> !</h1>
              <br/>
              <p>Je m'appelle Alexandre MOUTAPAM, j'ai 22 ans et je suis developpeur web & mobile Fullstack</p>   
              <button className="btn btn-outline-primary">En savoir plus</button>
            </Col>
            <Col span={12}> 
              <img
                  src={webDev}
                  alt="web developper"
                  className="img-fluid"
                />
            </Col>
          </Row>
        </div>
      
      <div className="jumbottron jumbottron-fluid bg-primary shadow">
        <div className="container">
          <Divider><h3  className="text-white">Stack Technique</h3> </Divider>
          <div className="card-columns">
            <StackCard name="React.JS" src={react} color="#00d8ff" percent="75" rotate="true" />
            <StackCard name="Rails" src={rails} color="#cc0000" percent="80" />
            <StackCard name="Bootstrap" src={bootstrap} color="#8b56d9" percent="80" />
          </div>
        </div>
      </div>
      
    <div className="jumbottron jumbottron-fluid bg-transparent">
        <div className="container mt-5">
          <ul class="list-unstyled">
            <li class="media row">
              <img class="mr-3 col-xl-3" src={progressiveApp} alt="Progressive app image"/>
              <div class="media-body">
                <h5 class="mt-0 mb-1">Site Web et application mobile</h5>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </div>
            </li>
         
          </ul>
        </div>
      </div>
      
      
    </>
  )
  
}



export default Home;