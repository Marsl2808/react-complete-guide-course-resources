import myImg from "../../assets/react-core-concepts.png";
import './Header.css';

// set dynamic descriptions
const descriptions = ["Core", "Basic", "Fundamental"];
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  return (
    <header>
      <img src={myImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {descriptions[genRandomInt(2)]} React concepts you will need for almost
        any app you are going to build!
      </p>
    </header>
  );
}
