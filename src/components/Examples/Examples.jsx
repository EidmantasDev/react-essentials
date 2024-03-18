import { useState } from 'react';
import { EXAMPLES } from '../../data';
import TabButton from '../TabButton/TabButton';
import TabContent from '../TabContent/TabContent';
import Section from '../Section/Section';
import Tabs from '../Tabs/Tabs';
import './Examples.css';

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState('components');

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  const topics = ['components', 'jsx', 'props', 'state'];

  return (
    <Section title='Examples' id='examples'>
      <Tabs
        buttons={
          <>
            {topics.map((topic) => (
              <TabButton
                key={topic}
                isSelected={selectedTopic === topic}
                onClick={() => handleSelect(topic)}
              >
                {topic.charAt(0).toUpperCase() + topic.slice(1)}
              </TabButton>
            ))}
          </>
        }
      >
        {selectedTopic && <TabContent {...EXAMPLES[selectedTopic]} />}
      </Tabs>
    </Section>
  );
}
