import React from 'react';
import { Progress } from 'antd';


const StackCard = ({name, src, color, percent, rotate = "false"}) => {
  
  const gradient = {
            from: '#108ee9',
            to: color,
          }
  return (
    <div class="card">
      <div class="card-header bg-transparent">
        <h1 className="h4 text-center">{name}</h1>
      </div>
      <div class="card-body">
        <img
          src={src}
          alt="web developper"
          className={rotate == "true" ? "img-fluid rotate" : "img-fluid"}
        />
        <Progress strokeColor={gradient} percent={percent} status="active" />
      </div>
     </div>
  )
}

export default StackCard