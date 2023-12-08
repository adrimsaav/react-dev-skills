import SkillListItem from "./SkillListItem";

export default function SkillList({ skillsData }) {
  return (
    <div>
        {skillsData.map((skill, index) => (
          <li key={index}>
            <SkillListItem item={skill} />
          </li>
        ))}
    </div>
  );
}