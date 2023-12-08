import "./NewSkillForm.css";

export default function NewSkillForm() {
  return (
    <form className="NewSkillForm">
      <label>Skill</label>
      <input type="text" name="skill" />
      <label>Level</label>
      <select name="level">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
      <button type="submit">ADD SKILL</button>
    </form>
  );
}
