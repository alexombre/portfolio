import React from 'react';
import { Row, Col, Divider, Progress } from 'antd';
import { FormattedMessage } from 'react-intl';
import StackCard from 'components/Home/StackCard';
import SkillsList from 'components/Home/SkillsList';
import webDev from 'assets/webdev.png';
import react from 'assets/react.png';
import rails from 'assets/ror.png';
import bootstrap from 'assets/bootstrap.png';
import reactNative from 'assets/react-native-2.png';


const Home = () => {
  
  return (
    <>
      
        <div class="container">
          <Row>
            <Col span={12}>
            
              <h1>Developpeur <strong className="text-primary">react</strong>if pour vous mettre sur de bons <strong className="text-danger">rails</strong> !</h1>
              <br/>
              <p><FormattedMessage id="home.intro" /></p>   
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
          <h3  className="text-center text-dark"><FormattedMessage id="home.skills.title" /></h3>
          <div class="dropdown-divider"></div>
          <SkillsList />
        </div>
      </div>
      
      
    </>
  )
  
}



export default Home;