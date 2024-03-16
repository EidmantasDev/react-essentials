import reactImg from './assets/react-core-concepts.png';

const generateRandomInt = (max) => Math.floor(Math.random() * max);

const generateDesctiption = () => {
  const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
  const { length } = reactDescriptions;
  const randomIndex = generateRandomInt(length);
  return reactDescriptions[randomIndex];
};

function Header() {
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

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
