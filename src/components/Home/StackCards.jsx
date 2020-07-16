import React, { useState, useEffect } from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import StackCard from 'components/Home/StackCard';
import { antd, aws, bash,c ,cplus,docker,github,heroku,html,js,postgresql,python,redis, redux, seo, sql, stripe, react, ror, bootstrap, css, ruby } from 'assets'

const StackCards = ({ intl }) => {
    
    const [src, setSrc] = useState({});
    const [stack, setStack]= useState(intl.formatMessage({ id: "home.stack" }));
    const [tags, setTags]= useState(intl.formatMessage({ id: "home.tags" }));
    const [tagsCheck, setTagsCheck] = useState(["langage"])
    const [research, setResearch] = useState()
    
    useEffect(() => {
        setSrc({ "antd":antd,
        "ruby": ruby,
        "aws":aws,
        "bash":bash,
        "c":c ,
        "cplus":cplus,
        "docker":docker,
        "github":github,
        "heroku":heroku,
        "html":html,
        "js":js,
        "postgresql":postgresql,
        "python":python,
        "redis":redis,
        "redux":redux,
        "seo":seo,
        "sql":sql,
        "stripe":stripe,
        "react":react,
        "ror":ror,
        "bootstrap":bootstrap,
        "css":css })
        document.querySelectorAll(".form-check-input").forEach( 
          (currentValue) => { 
            tagsCheck.includes(currentValue.value) ? currentValue.checked = true : currentValue.checked = false; 
          }
        );
        
    },[])
      
    useEffect(() => {
        console.log(tagsCheck)
    },[tagsCheck])
    
    const handleCheckboxChange = () => {
        let tmp = [];
        document.querySelectorAll(".form-check-input").forEach( 
          (currentValue) => { 
            if (currentValue.checked) { tmp.push(currentValue.value) }
          }
        );
        setTagsCheck(tmp);
    }
    
    const stackFilter = (stack) => (
        (research &&
        stack['name'].toLowerCase().includes(research) ) ||
        stack['tags'].some((tag) => (tagsCheck.includes(tag) ))
        
    )
      
    
    return (
        <>  
            <div className="container mb-3 card shadow">
                <div class="form-group">
                    <label for="search">Rechercher</label>
                    <input type="text" class="form-control" id="search" placeholder={research || "rechercher des technologies (ex: JavaScript, Ruby, etc...)"} value={research} onChange={(e) => setResearch(e.target.value.toLowerCase())} />
                </div>
                <div class="d-flex flex-wrap" onChange={handleCheckboxChange}>
                {tags.map((tag) => ( 
                    <div class="form-check form-check-inline mb-2 mx-auto">
                      <input class="form-check-input" type="checkbox" id={tag} value={tag} />
                      <label class="form-check-label" for={tag}><span className={'badge badge-'+tag}>{tag}</span></label>
                    </div>
                    ))}
                </div>
                
            </div>
            
            <div className="card-columns">
                {stack.filter(stackFilter).map((stack, index) => (
                
                    <StackCard name={stack['name']} src={src[stack['src']]} color={stack['color']} percent={stack['percent']} tags={stack['tags']} />
                    ))
                }
             </div>
         </>
        )
        
}

export default injectIntl(StackCards)