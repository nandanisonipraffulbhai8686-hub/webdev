function SkillBadge({ name, level }) {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
        width: "200px",
      }}
    >
      <h3>
        {name} {level >= 90 && "⭐"}
      </h3>

      <p>Level: {level}</p>
    </div>
  );
}

export default SkillBadge;
