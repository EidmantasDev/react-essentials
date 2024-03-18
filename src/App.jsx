import { useState } from 'react';
import { CORE_CONCEPTS, EXAMPLES } from './data';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept/CoreConcept';
import TabButton from './components/TabButton/TabButton';
import TabContent from './components/TabContent/TabContent';

function App() {
  const [selectedTopic, setSelectedTopic] = useState('components');

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept, index) => (
              <CoreConcept key={index} {...concept} />
            ))}
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {selectedTopic && <TabContent {...EXAMPLES[selectedTopic]} />}
        </section>
      </main>
    </div>
  );
}

export default App;
