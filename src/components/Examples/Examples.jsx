import { useState } from 'react';
import { EXAMPLES } from '../../data';
import TabButton from '../TabButton/TabButton';
import TabContent from '../TabContent/TabContent';
import './Examples.css';

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState('components');

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  const topics = ['components', 'jsx', 'props', 'state'];

  return (
    <section id='examples'>
      <h2>Examples</h2>
      <menu>
        {topics.map((topic) => (
          <TabButton
            key={topic}
            isSelected={selectedTopic === topic}
            onSelect={() => handleSelect(topic)}
          >
            {topic.charAt(0).toUpperCase() + topic.slice(1)}
          </TabButton>
        ))}
      </menu>
      {selectedTopic && <TabContent {...EXAMPLES[selectedTopic]} />}
    </section>
  );
}
