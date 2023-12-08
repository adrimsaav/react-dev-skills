import "./SkillListItem.css";

export default function SkillListItem({ item }) {
  return (
    <li className="SkillListItem">
      {item.name}
      <span className="level">Level {`${item.level}`}</span>
    </li>
  );
}