import reactImg from '../assets/react-core-concepts.png';

const generateRandomInt = (max) => Math.floor(Math.random() * max);

const generateDesctiption = () => {
  const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
  const { length } = reactDescriptions;
  const randomIndex = generateRandomInt(length);
  return reactDescriptions[randomIndex];
};

export default function Header() {
  return (
    <header>
      <img src={reactImg} alt='Stylized atom' />
      <h1>React Essentials</h1>
      <p>
        {generateDesctiption()} React concepts you will need for almost any app
        you are going to build!
      </p>
    </header>
  );
}
