import './App.css';
import React, {useState} from 'react';

<head>
  <link rel="stylesheet" href="index.css"/>
</head>

function App() {
  const [index, setIndex] = useState(0);
  const [showNext, changeNext] = useState(false);
  const [showNotUnderstandButton, changeNotUnderstand] = useState(true);
  const [showWrong, changeWrong] = useState(false);
  const [showCorrect, changeCorrect] = useState(false);
  const [showUnderstandButton, changeUnderstand] = useState(true);
  const [showTest, changeTest] = useState(false);
  const [showDef, changeDef] = useState(false);
  const words = ["scoundrel", "obstinate"]
  const type = ["n.", "adj."]
  const defs = ["a dishonorable person", "stubborn, unyielding"  ]
  const syn = [ "cheat, creep, crook, reprobate","firm, stubborn, inflexible, bullheaded"  ]
  const examples = ["The scoundrel drifted from town to town to avoid getting caught.","The obstinate child would not share his toys."]
  const hints = [ "ant. -gentleman, citizen","ant. -flexible, docile, compliant"]
  function defineWord(){
    changeUnderstand(false);
    changeNotUnderstand(false);
    changeDef(true);
    changeTest(false);
    changeNext(true);

  }
  function test(){    
    changeTest(true);
  }
  function next(){
    setIndex(index+1);
  }

  function checkTest(ans){
    if(ans == "correct"){
      changeCorrect(true)
      changeNext(true);
    }
    else{
      changeWrong(true);
      defineWord();
    }
  }
  return (

    <div className="App">
      <header className="App-header">
        <div>
        <t>scoundrel</t><br/>
        <t>n.</t>
        </div>
      
        <div >
        <button onClick={test} id="understandBtn" style={{display: showUnderstandButton ? 'block' : 'none' }} >I understand</button>
        <button onClick={defineWord} id='notUnderstandBtn' style={{display:showNotUnderstandButton ? 'block' : 'none' }}>I do not understand</button>
        </div>
        <div id="wordDef" style={{display: showDef ? 'block' : 'none' }}>
          <t>
            <b><ul>Meaning: </ul></b>a dishonorable person
          </t>
          <t>
            <b><ul>Synomyms: </ul></b>cheat, creep, crook, reprobate
          </t>
        </div>
        <div id="test" style={{display: showTest ? 'block' : 'none' }}>
          <input type="radio" /><t>surprise, startle, amaze, astound</t><br/>
          <input type="radio"  /><t>bustle, hurry, rush, hurry, dart</t><br/>
          <input type="radio" /><t>cheat, creep, crook, reprobate</t><br/>
          <input type="radio"  /><t>alight, get off, get down, unseat, dislodge</t><br/>
        </div>
        <div style={{display: showCorrect ? 'block' : 'none' }} id="correctSelected">
          <t>That's correct!</t>
        </div>
        <div style={{display: showWrong ? 'block' : 'none' }} id="wrongSelected">
          <t>Sorry, that's not correct.</t>
          <button onClick={defineWord}>Review</button>
        </div>
        <div style={{display: showNext ? 'block' : 'none' }} id='nextBtn'>
          <button onClick={next}>Next</button>
        </div>
        
      </header>
    </div>
    
  );
}

export default App;
