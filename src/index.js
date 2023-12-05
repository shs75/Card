import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="images (2).jpg" alt="shaghayegh" />;
}
function Intro() {
  return (
    <div>
      <h1>Shaghayegh sl</h1>
      <p>
        front-end developer that I started React library with Meisam Mohammadi
        at Tahlil dade educational institutions, I want to continue
        professionally and I hope I succeed .
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💪" color="#1234" />
      <Skill skill="JavaScript" emoji="👍" color="orange" />
      <Skill skill="HTML + CSS" emoji="👍" color="lightBlue" />
      <Skill skill="Angular" emoji="👍" color="green" />
      <Skill skill="TypeScript" emoji="👍" color="yellow" />
      <Skill />
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
