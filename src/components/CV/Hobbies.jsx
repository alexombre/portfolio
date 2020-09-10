import React from 'react';
import { Descriptions, Tag, Divider } from 'antd';
import moment from 'moment';
import { CheckOutlined } from '@ant-design/icons';

const Hobbies = () => {
  
  
  return (
    <div className="card shadow">
      <div className="card-header bg-primary text-center">
        <h4 className="text-light">Centre d'intéret</h4>
      </div>
      <div className="card-body">
      <Descriptions layout="vertical">
        <Descriptions.Item label="Sport">
            <div className="d-flex flex-wrap">
            <Tag className="m-1" color="green">Football</Tag>
            <Tag className="m-1"color="red">Boxe</Tag>
            <Tag className="m-1"color="blue">Tennis de table</Tag>
            </div>
          </Descriptions.Item>
        <Descriptions.Item label="Sujet">
            <div className="d-flex flex-wrap">
            <Tag className="m-1" color="volcano">astrophysique</Tag>
            <Tag className="m-1"color="geekblue">intelligence artificielle</Tag>
            <Tag className="m-1"color="purple">Physique quantique</Tag>
            <Tag className="m-1"color="geekblue">développement web </Tag>
            <Tag className="m-1"color="green">Gaming</Tag>
            </div>
          </Descriptions.Item>
          <Descriptions.Item label="Support">
            <div className="d-flex flex-wrap">
            <Tag className="m-1" color="red">TEDx</Tag>
            <Tag className="m-1"color="pink">Meetup</Tag>
            <Tag className="m-1"color="purple">Openclassrooms</Tag>
            <Tag className="m-1"color="red">Youtube</Tag>
            <Tag className="m-1"color="blue">Codecademy</Tag>
            <Tag className="m-1"color="pink">Udemy</Tag>
            <Tag className="m-1"color="black">THE_HACKING_PROJECT</Tag>
            </div>
          </Descriptions.Item>
      </Descriptions>

        
      </div>
    </div>
  )
}

export default Hobbies