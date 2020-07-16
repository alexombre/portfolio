import React, { useState, useEffect } from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import {progressiveApp, progressTracking, devProductivity, peerProgramming} from 'assets';



const SkillsList = ({ intl }) => {
  
  const [src, setSrc] = useState({});
  const [skills, setSkills]= useState(intl.formatMessage({ id: "home.skills" }));
  
  useEffect(() => {
    setSrc({
      "progressiveApp": progressiveApp,
      "progressTracking": progressTracking,
      "devProductivity": devProductivity,
      "peerProgramming": peerProgramming
    })
    
    
  },[])
  

  return (
    <ul class="list-unstyled">
    {skills.map((skill, index) => (
            
            index%2 == 0 ? 
            
                <li class="media row">
                  <img class="mr-3 col-xl-5" src={src[skill["src"]]} alt="Progressive app image"/>
                  <div class="align-self-center media-body">
                    <h5 class="mt-0 mb-1">{skill["title"]}</h5>
                    {skill["content"]}
                  </div>
                </li>
                :
                <li class="media row">
                  <div class="align-self-center media-body d-none d-lg-block">
                    <h5 class="mt-0 mb-1">{skill["title"]}</h5>
                    {skill["content"]}
                  </div>
                  <img class="mr-3 col-xl-5" src={src[skill["src"]]} alt="Progressive app image"/>
                  <div class="align-self-center media-body d-block d-lg-none">
                    <h5 class="mt-0 mb-1">{skill["title"]}</h5>
                    {skill["content"]}
                  </div>
                </li>
            ))
        
        
        
    }
        
    </ul>
  )
}

export default injectIntl(SkillsList)