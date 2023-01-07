import './App.css';
import './index.css';
import React, {Component} from 'react';

<head>
  <link rel="stylesheet" href="index.css"/>
</head>
const words = ["video",
"contact",
"just",
"list",
"previous",
"forum",
"technology",
"available",
"source",
"project",
"image",
"content",
"title",
"table",
"low",
"complete",
"request",
"browse",
"reduce",
"log",
"become",
"create",
"effective",
"release",
"material",
"spring",
"weather",
"mode",
"recent",
"submit",
"manual",
"function",
"string",
"foreign",
"tour",
"annual",
"active",
"practice",
"increase",
"discount",
"master",
"entry",
"capital",
"volume",
"republic",
"entire",
"virtual",
"frank",
"approach",
"impact",
"develop",
"consider",
"ensure",
"host",
"ability",
"contract",
"define",
"visual",
"initial",
"couple",
"domestic",
"resolution",
"traditional",
"surface",
"complex",
"benefit",
"economy",
"progress",
"revision",
"optional",
"random",
"forget",
"separate",
"recommend",
"capacity",
"vista",
"phase",
"opera",
"delete",
"essential",
"valid",
"legislation",
"virus",
"reliable",
"consistent",
"conflict",
"mature",
"lack",
"obtain",
"satellite",
"symbol",
"universal",
"ford",
"institution",
"perform",
"instant",
"rent",
"arise",
"column",
"municipal",
"psychology",
"depth",
"reserve",
"exception",
"interior",
"attempt",
"achieve",
"conduct",
"concern",
"finish"]
const type = ["n.",
"n.",
"adj.",
"n.",
"adj.",
"n.",
"n.",
"adj.",
"n.",
"n.",
"n.",
"n.",
"n.",
"v.",
"n.",
"adj.",
"v.",
"v.",
"v.",
"n.",
"v.",
"v.",
"adj.",
"v.",
"n.",
"ir.v.",
"n.",
"n.",
"adj.",
"v.",
"adj.",
"n.",
"n.",
"adj.",
"n.",
"adj.",
"adj.",
"v.",
"v.",
"v.",
"n.",
"n.",
"n.",
"n.",
"adj.",
"adj.",
"adj.",
"adj.",
"v.",
"n.",
"v.",
"v.",
"v.",
"n.",
"n.",
"n.",
"v.",
"adj.",
"adj.",
"v.",
"adj.",
"n.",
"adj.",
"n.",
"adj.",
"v.",
"n.",
"n.",
"n.",
"adj.",
"adj.",
"ir.v.",
"v.",
"v.",
"n.",
"n.",
"n.",
"n.",
"v.",
"adj.",
"adj.",
"n.",
"n.",
"adj.",
"adj.",
"n.",
"adj.",
"n.",
"v.",
"n.",
"n.",
"adj.",
"n.",
"n.",
"v.",
"n.",
"v.",
"ir.v.",
"n.",
"adj.",
"n.",
"n.",
"n.",
"n.",
"adj.",
"v.",
"v.",
"v.",
"v.",
"v."]
const defs = ["television or movie related images",
"coming together or touching; also v.",
"based on right and truth, rightful, lawful",
"1. a series of names, words, or other items written or printed one after the other;  also v.  2. to write",
"existing before something else",
"place of assembly to discuss public concerns",
"knowledge about scientific or industrial methods or the use of these methods",
"present and ready for use",
"point of origin or birthplace",
"planned work that is intended to build or produce something new",
"1. picture; 2. idea in the mind; 3. public opinion",
"1. something contained; also adj. 2. pleased",
"1. right or claim to possession; 2. mark of rank",
"1. to delay, put off; also n., 2. a chart or catalog",
"1. a cow's 'moo'ing sound; 2. adj. base, poor",
"having all necessary parts, entire; to finish (v.)",
"to ask for, appeal",
"to inspect something leisurely and casually",
"to decrease, or to make something smaller or less in size, amount, or price",
"record of a voyage or flight, a journal kept to record various events",
"to begin to be something, to materialize",
"to make, produce or bring about",
"1. having an expected effect;  2.  useful and operative",
"to dismiss or discharge",
"substance,  matter; also adj.  tangible",
"to jump, move suddenly and  quickly; n. the ability to return to its normal position",
"1. the state of atmosphere such as wind velocity, temperature, moisture, etc. ; 2. also v. - to endure",
"prevailing style, manner",
"occurring at a time just before the present",
"to yield or surrender, to turn in",
"operated or done by hand; n. document or instruction",
"assigned duty or activity; also v.",
"a strong thread used for fastening things or in musical instruments",
"involving or dealing with other countries, not native",
"trip with visits to various places",
"yearly, anniversary",
"marked by energetic activity, lively",
"to do repeatedly in order to polish a skill",
"to cause to become greater or larger",
"to deduct or subtract",
"one that has control over another",
"the act of entering, or the point at which one enters into",
"1. city where state or nation's government is located; 2. money, assets; 3. a capital letter",
"1. the amount of space occupied;  2. a collection of  printed sheets bound together",
"a country governed by elected representatives and led by a president",
"having no part left out, whole",
"1. being not in fact, but in essence; 2. for practical purposes",
"direct and unreserved in speech",
"to come near or close",
"a collision, crash",
"to grow, improve, establish",
"to think carefully about",
"to make certain",
"1. great number;  2. one who receives or entertains guests",
"a natural or acquired skill",
"1. a formal written agreement between two or more people; also v. 2.  to reduce",
"to describe something correctly and thoroughly",
"relating to the sense of sight",
"of or coming at the beginning",
"to join, to pair",
"of or relating to a family or a country's internal affairs",
"determination, declaration",
"related to the following of customs or beliefs",
"outer or topmost boundary of an object",
"having two or more interrelated parts, complicated",
"to be helpful or useful to; also n.",
"efficiency or conciseness in using something, also money-related",
"movement, as towards a goal; also v.",
"the process of changing or revising something",
"not obligatory, left to one's choice",
"1. unplanned or unorganized; 2. lacking order",
"to fail to remember",
"to set or keep apart",
"to endorse, praise to another as worthy",
"mental or physical ability; ability to hold",
"a far view of beautiful scenery, the possibility of new experiences",
"a distinct stage of development",
"a dramatic play in which most or all of the words are sung",
"to eliminate, omit",
"basic, necessary",
"1. effective;  2. legal, lawful, authorized",
"the act of making laws",
"a microscopic parasite of animals and plants",
"be able to trust or depend on",
"always having the same beliefs, behavior, or principles",
"a state of disagreement or collision between people or countries",
"characteristic of full development",
"an absence; also v.",
"to get or acquire something",
"small object revolving around a larger one",
"something that represents something else, a sign",
"1. including or involving all;  2. existing or operating everywhere",
"place where a river can be crossed on foot",
"an organization or society that has a particular kind of work or purpose",
"to begin and carry through to the end",
"moment; also adj. immediate",
"to pay for the use of something on a daily, weekly or monthly basis",
"to get up, to awaken, or to result",
"supporting pillar or cylinder; a vertical section in a text or table",
"belonging to or concerned with the government of a town or city",
"the study of the mind and how it works",
"the condition of being deep",
"something kept or saved for future use",
"something or someone that is not included in a rule",
"relating to the inside",
"to try to perform or achieve",
"to perform or carry out with success",
"to manage or control",
"to have to do with or relate to"]
const syn = [ "television images, record, movie",
"meet, touch, union, connect",
"rightful, lawful; fair, exact, correct",
"index, series, catalog; write, register",
"prior, earlier, before, former",
"convention, conference, meeting, colloquium",
"information, science, means",
"attainable, obtainable, reachable",
"origin, beginning, root, cause",
"plan, assignment, work, undertaking",
"picture, idea, perception",
"filling, load; happy, satisfied",
"ownership, deed; heading, name",
"postpone, put off; catalog; shelve",
"'moo' sound; base, short, poor",
"entire, whole, thorough; finish",
"beg, inquire, appeal, ask for",
"go over, flip through, scan",
"decrease, cut, shorten, lower",
"record, account, journal, album",
"turn out, get to be, reach, come to",
"develop, make, form, produce",
"productive, efficient, useful",
"let go, free, discharge, dismiss",
"substance, matter, goods; bodily",
"jump, bounce, n. -elasticity",
"climate; withstand, overcome",
"manner, trend, method, style",
"current, up-to-date, fresh",
"agree,  turn in, present, abide, yield",
"adj. by hand; n. handbook",
"job, duty, use; operate",
"cord, rope, thread, tie",
"alien, external, outside",
"journey, travel, itinerary, voyage",
"yearly, each year",
"lively, animated, animated, working",
"train, rehearse, drill, exercise",
"grow, add, enlarge, raise",
"deduct, subtract, lower, remove",
"boss, head, controller, commander",
"entrance, opening, doorway",
"official city; money, stock",
"capacity, amount, mass, extent",
"democracy, commonwealth",
"whole, complete, full",
"essential, basic, actual, real",
"straightforward, direct, open",
"advance, draw near, catch up",
"clash, hit, crash, bump, shock",
"grow, flourish, foster, thrive",
"think about, contemplate, reflect",
"guarantee, make certain, confirm",
"crowd, group, flock; receptionist",
"skill, talent, power, capacity",
"agreement, deal; shrink, reduce",
"describe, outline, explain",
"related to sight, observable",
"beginning, first, earliest, primary",
"join, connect, pair, team",
"home, household, internal, native, tame",
"determination, steadfastness, answer",
"conventional, prevailing, usual, old",
"exterior, cover, edge",
"complicated, convoluted, confusing",
"advantage, favor, aid, asset",
"frugality, saving, efficiency",
"advancement, development",
"change, modification, alteration",
"elective, voluntary, free choice",
"haphazard, chance, irregular, odd",
"not remember, ignore, fail",
"isolate, split up, break, dissect",
"suggest, praise, advise",
"volume, proportions, role, ability",
"scenery, outlook, view",
"period, stage, step, time",
"performance, play, concert",
"eliminate, erase, omit, rub out",
"basic, fundamental, necessary, vital",
"effective, convincing, true, lawful",
"lawmaking, decree, enactment",
"microorganism, germ, disease",
"trustworthy, dependable, loyal",
"constant, steady, uniform",
"collision, clash, battle",
"adult, full-grown, ripe, ready",
"scarcity, shortage, deficit, dearth",
"get, acquire, achieve, gain",
"revolving object around a bigger one",
"sign, representation, illustration",
"worldwide, global, general",
"bridge, cross, overpass",
"organization, society, system",
"carry out, complete, accomplish, do",
"moment, second, immediate",
"lease, hire, borrow, let",
"get up, stand, ascend, awaken",
"pillar, cylinder, section",
"city-wide, urban, metropolitan",
"mind study, psych, mentality",
"lowness, deepness, extent",
"save, hold, keep, store, retain",
"exclusion, irregularity, special case",
"inside, within, inland, inner, core",
"try, strive, venture, endeavor",
"perform, reach, fulfill, realize",
"carry on, undertake, direct, guide",
"involve, deal with, pertain" ]
const examples = ["We bought a video camera last week.",
"The ant made contact with the food.",
"The just man listened to all of our stories before making a decision.",
"Make a list of all the things you have to do.",
"The previous owners of the house had painted it hot pink.",
"Many diplomats attended the worldwide forum.",
"They are using new technology to produce medicine.",
"The shoes with the color he wanted was not available.",
"The source of wealth for this country is their diamond industry.",
"His project was approved by the committee.",
"She drew an image of her dog to stick onto her refrigerator.",
"The content of the box is unknown.",
"Oliver holds title to his family estate.",
"We tabled the issue for future consideration, and turned our attention to something new.",
"The cows on the hill started lowing.",
"The complete puzzle will show a picture of a peaceful lake.",
"His request for money was not granted.",
"I was browsing through a magazine when I spotted your name.",
"We were all hoping that they would reduce the rent at least a little.",
"The airline log confirmed her alibi.",
"The weather became warmer in March.",
"She created a painting for her art class.",
"The method was simple, but remarkably effective.",
"The hostages were released after the ransom was paid.",
"This material is too slippery to step on.",
"A spring has the ability to spring out once it is released.",
"He weathered the changes in his personal life without telling anyone.",
"New modes in pop culture happened throughout the century.",
"The recent arrival of our grandparents has caused our mother to pay less attention to us.",
"He submitted his rough draft to his editor",
"She manually fixed her garage door.",
"This object has no practical function and is purely for decoration.",
"Can you find me some string to tie up this package?",
"He can speak several foreign languages.",
"The tour of Europe took us through many countries.",
"He complained that his annual salary was lower than his friend's.",
"He is very active in the club because he is its president.",
"She practices the piano daily to improve her skill.",
"Her store profits increased after she began advertising on TV.",
"She discounted all the money she had spent to see how much she had left.",
"The boy's master ordered him to collect firewood.",
"The burglar gained entry into the house through the patio doors.",
"The capital of Arizona is Phoenix.",
"We could not fit the dresser into the house because of its volume.",
"United States is a republic country.",
"I read the entire book in one day.",
"She is a virtual professional tennis player.",
"He was completely frank with her about what happened.",
"She approached the strange-looking object cautiously.",
"The violent impact of the car crash injured both drivers.",
"She developed a love for mystery novels as she grew older.",
"He considered his job options carefully.",
"We only wanted to ensure that our money would be safe.",
"The host of ants crawled all over the spilled food.",
"Her natural musical ability helped her become a famous pianist.",
"His contract of employment specifies that he must receive at least one month's training.",
"They disagreed on how to define 'dangerous'.",
"The visual elements of the play are very important.",
"My initial job was in the lush rainforests of Central Africa.",
"We coupled with another group to travel in the region together.",
"People are more concerned about the domestic issue such as tax cut than foreign affairs.",
"The model's New Year's resolution was to exercise more.",
"Their traditional costumes were absolutely stunning.",
"On the surface, he appeared calm and ready.",
"The starfish has several complex bodily systems to help it survive.",
"They benefited from regular music lessons.",
"The economy of her words makes her a good speaker.",
"They made good progress as they crossed the prairie.",
"They have to make many revisions of the novel before printing it.",
"It is optional to wear formal clothing to the party.",
"Daniel's notes were filled with random doodles.",
"I'm sorry, I've forgotten your name.",
"He separated the clothes into light and dark piles.",
"Ian recommended a great restaurant to us when we were in town.",
"Mike had the capacity to handle several jobs at once.",
"The balcony provided a vista of the harbor.",
"He ended the childhood phase of his life at age 13.",
"He had never been to the opera until last night.",
"The playwright decided to delete the last scene because it contained nothing new.",
"It is essential that we all finish our homework.",
"He made a valid point which we had to consider.",
"The State has legislation governing minimum wage rates.",
"Doctors believe she has a rare form of the deadly virus in her body.",
"He provides some reliable information.",
"He is one of the most consistent players on the tennis team.",
"She had often come into conflict with her sister.",
"She is very mature for her age and handled the situation well.",
"A lack of proper vitamins and minerals can lead to serious health problems.",
"She obtained the gold medal through long, hard work.",
"The country launched its first satellite into space.",
"The lion is a symbol of bravery.",
"There is a universal need for food, water and shelter.",
"We crossed the river at its ford.",
"This college is the best institution of its kind.",
"The surgeon successfully performed the operation.",
"In an instant, he jumped up and grabbed the ball.",
"The owner was quite angry with her, since she was 4 months behind on her rent.",
"Problems may arise if the two men cannot speak the same language.",
"The columns held up nothing, as they were added only for visual effect.",
"There will be a municipal election next month.",
"She studied psychology to learn more about human behavior.",
"The depth at which the fish live in makes it hard to study them.",
"You should reserve some dry vegetable for winter season.",
"The law applies to all European countries; Britain is no exception.",
"The interior of this house is very lovely.",
"I attempted to finish the novel in one afternoon.",
"He wants to achieve success by becoming president of his club.",
"The company conducted a survey among its employees.",
"This problem concerns you and your parents.",
"She finished all her chores before going out to play."]
const hints = [ "audio (sound only)",
"ant. -depart, leave",
"also adv. - exactly , only",
"'enlist' = recruit, enroll",
"ant. -following, after",
"n.pl. -either 'forums' or 'fora'",
"-' logy' = 'science, theory, or study'",
"ant. -unavailable, out of reach",
"ant. -terminus, end, finale",
"also v.",
"related to 'imaginary' (not real)",
"ant. -unhappy, displeased",
"v. -entitle",
"also n. -a furniture with a flat top and vertical legs",
"also v.",
"ant. -incomplete, imperfect, lacking",
"ant. -demand; insist, command, also n.",
"ant. -study, stare",
"ant. -enlarge, amplify, extend",
"also v. -to record; to cut trees",
"pt.- became, pp.- become",
"ant. -destroy, demolish, ruin",
"ant. -ineffective, useless",
"ant. -hold, condemn, convict,  charge",
"ant. -spiritual, mental",
"pt.-sprang, pp.-sprung",
"ant. -collapse, decline",
"ant. -custom, tradition",
"ant. -distant (as in 'the distant past'), ancient",
"ant. -resist, withhold, avoid, disapprove",
"ant. Automatic",
"ant. -cease, halt, stop",
"also ir.v. pt.-strung; pp.-strung",
"ant. -domestic, internal, home",
"ant. -remain, stay",
"daily--weekly--monthly--annually",
"ant. -inactive, dormant, sluggish, stiff",
"ant. -cease, forbear, halt, refrain",
"ant. -decrease, shrinkage, diminish",
"ant. -add, raise",
"ant. -slave, pupil, servant",
"ant. -exit, egress, way out",
"also adj. - 'major, important'",
"Dimension -  length, area and volume",
"ant. -monarchy, autocracy",
"ant. -partial, halfway, limited",
"ant. -unreal, negative",
"ant. -deceitful, dishonest, lying",
"ant. -back-off, withdraw, depart",
"also v.",
"ant. -decline, shrink, decay",
"ant. -discard, dismiss, ignore",
"related to 'sure'",
"ant. -divergence, split; guest",
"ant. -incapability, inability",
"ant. -disagreement; expansion",
"ant. -confuse, distort",
"ant. -audio",
"ant. -final, end",
"ant. -separate, detach, disconnect",
"ant. -foreign, wild, alien, public",
"related -resolute, resolve",
"n. -tradition",
"ant. -interior, submerge",
"ant. -simple, apparent, obvious",
"ant. -disadvantage, harm, loss",
"ant. -inefficient, luxury",
"ant. -regress, refrain, abstain",
"v. - revise",
"ant. -mandatory, compulsory",
"ant. -regular, ordered, planned",
"pt.-forgot; pp.-forgotten",
"ant. -combine, unite, compound",
"ant. -reject, vituperate, berate, boo",
"ant. -incapability, incompetence",
"",
"ant. -whole, entirety",
"n. pl. of opus",
"ant. -include, add, insert",
"ant. -nonessential, subordinate",
"ant. -invalid, false, incorrect",
"v. -legislate",
"Note: computer can also get virus",
"ant. -unreliable, doubtable",
"ant. -inconsistent, changing",
"ant. peace, agreement",
"ant. -immature",
"ant. -plenty of, abundance",
"ant. -decline, deny, refuse, discard",
"ant. -main, prime, principal",
"adj. -symbolic",
"ant. -local, limited, individual",
"Ford motor company: -car manufacturer",
"adj. -institutional",
"ant. -abandon, blow, give up",
"ant. -past, antique, bygone",
"ant. -purchase, buy",
"pt.-arose, pp.-arisen, Ant. -cease, fade",
"in contrast to 'row'",
"ant. -rural, suburban",
"psycho ('mind') - logy",
"ant. -height, shallowness",
"also v. -to put aside",
"ant. -inclusion",
"ant. -exterior, border, periphery",
"ant. -accomplish, fulfill",
"ant. -fail, abandon, give up",
"ant. -give up, neglect",
"ant. -unconcern,  be irrelevant",
"ant. -begin, start, initiate"]
let randNums = ["a","a","a","a"] 
let usedNums = [];
let firstHalf,secondHalf,insertIndex, additionalTxt; 
let indexPlusExtra = 0;
const charArray = [" ", ";", ".", ",", ":"]

class App extends Component {
   handleOptionChange = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
    if(Number(changeEvent.target.value) === Number(this.state.index) || Number(changeEvent.target.className) === Number(this.state.index)){
      this.setState({showCorrect: true});
      this.setState({showNext: true});
      this.setState({showDef: false});
      this.setState({showWrong: false})
      this.setState({showNotUnderstandButton: false});
      this.setState({showTest: false}); 
      this.setState({showNotUnderstandButton2: false});
    }
    else{
      this.setState({showWrong: true});
      this.setState({showNext: true});
      this.setState({showDef: true});
      this.findExample()
      this.findAdditionaltxt();
      this.setState({showNotUnderstandButton: false});
      this.setState({showTest: false}); 
      this.setState({showNotUnderstandButton2: false});

    }
  };
  constructor(props) {
    super(props);
    this.state = {
      index: Math.floor(Math.random()*(words.length-1)),
      showWords: true,
      showNext: false,
      showCorrect: false,
      showDef:false,
      showNotUnderstandButton: true,
      showUnderstandButton: true,
      showTest: false,
      showWrong: false,
      showComplete: false,
      selectedOption: -1,
      showNotUnderstandButton2: false,
      whiteTxt: ""
    };
  }

  findAdditionaltxt =()=>{
    if(hints[this.state.index] === ""){
      additionalTxt = "N/A"
    }
    else{
      additionalTxt = hints[this.state.index];
    }
  }
  findExample =() =>{
    insertIndex = examples[this.state.index].search(words[this.state.index]) //Find word in sentence
    indexPlusExtra = insertIndex;
    if(insertIndex < examples[this.state.index].length-1){
      while(!charArray.includes(examples[this.state.index][indexPlusExtra+words[this.state.index].length])){   //Get complete word before next space if not at end of sentence
        indexPlusExtra++;
      }
    }

    switch(words[this.state.index]){  //Exceptions for irregular verbs
      case "become":
        insertIndex = examples[this.state.index].indexOf("became")
        break;
      case "browse":
        insertIndex = examples[this.state.index].indexOf("browsing")
        break;
      default:
        break;
    }
    firstHalf= examples[this.state.index].substring(0,insertIndex) //Sentence before word
    secondHalf = examples[this.state.index].substring(indexPlusExtra+words[this.state.index].length,examples[this.state.index].length) //Sentence after word

  }
  //Function to select random definitions for the quiz
  createNums = () =>{
    randNums = ["a","a","a","a"] //Reset randNums
    for(let i = 0; i < randNums.length; i++){  //Loops for all of randNums
      let newNum = Math.floor(Math.random()*words.length);  //Selects a random number
      while(typeof(randNums[i]) !=='number' || examples[randNums[i]].length < 2){  //Reassign if new elem is not a number
        while((newNum === this.state.index || randNums.some(num => num === newNum) || newNum > words.length-1)){ //Change newNum until it is no longer the same as the index or is in randNums already
          newNum = Math.floor(Math.random()*(words.length));
        }
        randNums[i] = newNum;
        }
      }
      randNums[Math.floor(Math.random()*4)] = this.state.index; //Assign index to random element in randNums
}
   defineWord= () => {
    this.findExample()
    this.findAdditionaltxt();
    this.setState({showUnderstandButton: false});
    this.setState({showNotUnderstandButton: false});
    this.setState({showDef: true});
    this.setState({showTest: false});
    this.setState({showNext: true});
    this.setState({showNotUnderstandButton2: false});

  }
  test= () => {    
    this.createNums(); //Randomize randNums again
    this.setState({showTest: true});
    this.setState({showNotUnderstandButton: false});
    this.setState({showUnderstandButton: false});
    this.setState({showNotUnderstandButton2: true});
    //words[this.state.index] = randNums[0] + " " + randNums[1] + " "+ randNums[2] + " "+ randNums[3] + " ";
    
  }
   next= () => {
      let randomIndex = Math.floor(Math.random()*(words.length-1));  //Pick a random index
      while(usedNums.some(num => num === randomIndex) && usedNums.length !== words.length && !usedNums.includes(randomIndex)){   //If it was already used and not all the words were used yet, reselect
        randomIndex = Math.floor(Math.random()*(words.length-1));
      }
      
      this.setState({showWrong: false});
      this.setState({showCorrect: false});
      this.setState({showNext: false});
      this.setState({showNotUnderstandButton: true});
      this.setState({showUnderstandButton: true});
      this.setState({showDef: false});
      this.setState({selectedOption:-1});
      this.setState({index:randomIndex});
      usedNums.append(...this.state.index);
    if(usedNums.length === words.length){
      this.setState({showComplete: true});
      this.setState({showWrong: false});
      this.setState({showCorrect: false});
      this.setState({showNext: false});
      this.setState({showNotUnderstandButton: false});
      this.setState({showUnderstandButton: false});
      this.setState({showDef: false});
      this.setState({showWords: false});
      this.setState({selectedOption:0});
    }
  }
  render() {
  return (
    
    <div className="App">
      <header className="App-header">
        <div style={{display: this.state.showComplete ? 'block': 'none' }}>
          <div>You completed the program!</div>
          <br/>
          <div><b> Congratulations! </b></div>
        </div>
      <div style={{display: this.state.showCorrect ? 'block': 'none' }} id="correctSelected" class="correctAns">
          <t>That's correct!</t>
        </div>
        <div style={{display: this.state.showWrong ? 'block': 'none' }} id="wrongSelected" class="wrongAns">
          <t>Sorry, that's not correct.</t>
        </div>
          <div style={{display: this.state.showWords ? 'block': 'none' }}>
            <br/><t class="word" style={{fontSize:"30pt"}}>{words[this.state.index]}</t><br/>
            <t class="type">{type[this.state.index]}</t>
          </div>
          <br/>
          <div class='btnContainer'>
            <button class="btn" onClick={this.test} id="understandBtn" style={{display: this.state.showUnderstandButton ? 'block': 'none' }} >Known</button>
            <button class="btn" onClick={this.defineWord} id='notUnderstandBtn' style={{display: this.state.showNotUnderstandButton ? 'block': 'none'}}>Unknown</button>
          </div>
        <div id="wordDef" class="wordDef" style={{display: this.state.showDef ? 'block': 'none'}}>
          <t style={{color:'yellow'}}>
            <b><u>MEANING:</u></b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<t class="defInfo">{defs[this.state.index]}</t>
          </t>
          <t style={{color:'magenta'}}><br/><br/>
            <b><u>SYNONYMS:</u></b>&nbsp;&nbsp;&nbsp;&nbsp;<t class="defInfo">{syn[this.state.index]}</t>
          </t>
          <t style={{color:'cyan'}}><br/><br/>
            <b><u>EXAMPLE:</u></b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{firstHalf}<t class="defInfo" style={{color:"white"}}>{examples[this.state.index].substring(insertIndex,indexPlusExtra+words[this.state.index].length)}</t>{secondHalf}
          </t>
          <t style={{color:'greenyellow'}}><br/><br/>
            <b><u>Additional:</u></b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<t class="defInfo">{additionalTxt}</t>
          </t><br/><br/>
        </div>
        <div style={{display: this.state.showTest ? 'block': 'none', textAlign:'left' }}>
          <t style={{color:"blanchedalmond"}}><b>Synonym:</b></t><br/><br/>
          <label class="radio" className={randNums[0]} onClick={this.handleOptionChange} ><input class="radio" name="radio" type="radio" value ={randNums[0]} checked={this.state.selectedOption === randNums[0]} onChange={this.handleOptionChange} /><span>&nbsp;&nbsp;&nbsp;&nbsp;{syn[randNums[0]]}</span></label><br/>
          <label className={randNums[1]} onClick={this.handleOptionChange} ><input class="radio" name="radio" type="radio"  value ={randNums[1]} checked={this.state.selectedOption === randNums[1]}   onChange={this.handleOptionChange}/><span>&nbsp;&nbsp;&nbsp;&nbsp;{syn[randNums[1]]}</span></label><br/>
          <input class="radio"  type="radio" value = {randNums[2]} checked={this.state.selectedOption === randNums[2]}  onChange={this.handleOptionChange}/><label className={randNums[2]} onClick={this.handleOptionChange} >&nbsp;&nbsp;&nbsp;&nbsp;{syn[randNums[2]]}</label><br/>
          <label className={randNums[3]} onClick={this.handleOptionChange} ><input class="test" type="radio"  value ={randNums[3]} checked={this.state.selectedOption === randNums[3]}  onChange={this.handleOptionChange}/><span>&nbsp;&nbsp;&nbsp;&nbsp;{syn[randNums[3]]}</span></label><br/>
          <br/>
        </div>
        <div class='btnContainer' id='notUnderstandBtn2'>
          
            <button class="btn" onClick={this.defineWord}  style={{display: this.state.showNotUnderstandButton2 ? 'block': 'none'}}>Unknown</button>
          </div>
        <div style={{display: this.state.showNext ? 'block': 'none' }} id='nextBtn'>
          <button style={{width:"250px"}} onClick={this.next}>Next</button>
        </div>
        
      </header>
    </div>
    
  );
}
}

export default App;