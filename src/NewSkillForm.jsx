import { useState } from "react";
import "./NewSkillForm.css";

export default function NewSkillForm({ addSkill }) {
  const [skills, setSkills] = useState({
    name: "",
    level: 1
  });

  function handleChange(evt) {
    const newSkill = { ...skills, [evt.target.name]: evt.target.value };
    setSkills(newSkill);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    addSkill(skills);
    setSkills({
      name: "",
      level: 1
    });
  }

  return (
    <form className="NewSkillForm" onSubmit={handleSubmit}>
      <div className="skill-input">
        <label>Skill</label>
        <input value={skills.name} onChange={handleChange} name="name" />
        <label>Level</label>
      </div>
      <select name="level" onChange={handleChange} value={skills.level}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
      <button type="submit">ADD SKILL</button>
    </form>
  );
}
