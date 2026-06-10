import SkillBadge from "./SkillBadge";

function SkillList({ skills }) {
  return (
    <div>
      {skills.map((skill, index) => (
        <SkillBadge
          key={index}
          name={skill.name}
          level={skill.level}
        />
      ))}
    </div>
  );
}

export default SkillList;