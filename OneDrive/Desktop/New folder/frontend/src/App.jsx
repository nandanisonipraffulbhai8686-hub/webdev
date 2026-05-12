import SkillList from "./SkillList";

function App() {
  const skills = [
    { name: "JS", level: 95 },
    { name: "React", level: 80 },
  ];

  return (
    <div>
      <h1>My Skills</h1>
      <SkillList skills={skills} />
    </div>
  );
}

export default App;