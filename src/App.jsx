const generateDesctiption = () => {
  const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
  const reactDescriptionsSize = reactDescriptions.length;
  const generateRandomInt = (max) => Math.floor(Math.random() * max);
  return reactDescriptions[generateRandomInt(reactDescriptionsSize)];
};

function Header() {
  return (
    <header>
      <img src='src/assets/react-core-concepts.png' alt='Stylized atom' />
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
