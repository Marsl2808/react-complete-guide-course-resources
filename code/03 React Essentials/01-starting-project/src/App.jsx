// named-exports need to be imported with curly braces
import { CORE_CONCEPTS } from "./data.js";
// with default export, names can be changed in import statement
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/Coreconcept.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              img={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              img={CORE_CONCEPTS[2].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              img={CORE_CONCEPTS[3].image}
            />
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
           {/* menu -> create list of buttons */}
          <menu>
          <TabButton>{CORE_CONCEPTS[0].title}</TabButton>
          <TabButton>{CORE_CONCEPTS[1].title}</TabButton>
          <TabButton>{CORE_CONCEPTS[2].title}</TabButton>
          <TabButton>{CORE_CONCEPTS[3].title}</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
