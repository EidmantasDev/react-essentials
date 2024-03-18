import CoreConcept from '../CoreConcept/CoreConcept';
import { CORE_CONCEPTS } from '../../data';
import './CoreConcepts.css';

export default function CoreConcepts() {
  return (
    <section id='core-concepts'>
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((concept, index) => (
          <CoreConcept key={index} {...concept} />
        ))}
      </ul>
    </section>
  );
}
