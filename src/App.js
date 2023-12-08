import { useState } from "react";

import "./styles.css";

import NewSkillForm from "./NewSkillForm";
import SkillList from "./SkillList";

export default function App() {
  const [ skillsData, setSkills ] = useState([
      { name: "HTML", level: 5 },
      { name: "CSS", level: 3 },
      { name: "JavaScript", level: 4 },
      { name: "Python", level: 2 },
  ]);
  
  return (
    <div className="App">
      <h1>React Dev Skills</h1>
      <SkillList skillsData={skillsData} />
      <NewSkillForm />
    </div>
  );
}
