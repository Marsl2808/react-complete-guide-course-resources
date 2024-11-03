// hooks
import { useState, React } from "react";
// import React from "react";

// named-exports need to be imported with curly braces
import { CORE_CONCEPTS, EXAMPLES } from "./data.js";
// with default export, names can be changed in import statement
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/Coreconcept.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  return (
    <div>
      <Header />
      <main>
        {/* components, jsx, props */}
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map(conceptItem => <CoreConcept key={conceptItem.title} {...conceptItem} />)}
            {/* <CoreConcept
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
            /> */}
          </ul>
        </section>

        {/* ...(core-concepts) + state */}
        <section id="examples">
          <h2>Examples</h2>
          {/* menu -> create list of buttons */}
          <menu>
            <TabButton
              click={() => handleClick("components")}
              isSelected={selectedTopic === "components"}
            >
              {CORE_CONCEPTS[0].title}
            </TabButton>
            <TabButton
              click={() => handleClick("jsx")}
              isSelected={selectedTopic === "jsx"}
            >
              {CORE_CONCEPTS[1].title}
            </TabButton>
            <TabButton
              click={() => handleClick("props")}
              isSelected={selectedTopic === "props"}
            >
              {CORE_CONCEPTS[2].title}
            </TabButton>
            <TabButton
              click={() => handleClick("state")}
              isSelected={selectedTopic === "state"}
            >
              {CORE_CONCEPTS[3].title}
            </TabButton>
          </menu>

          {/* conditional output */}
          {/* !selectedTopic same as: selectedTopic === undefined*/}
          {!selectedTopic ? <p>Please select a topic.</p> : null}
          {/* selectedTopic same as: selectedTopic !== undefined*/}
          {/* alternative: second condition here can also be the default (null) case of the first*/}
          {/* alternative: &&-operator => will output 2. statement if first is true */}
          {/* alternative: set variable to <p>-statement & overwrite var in if statement, then simply output var here: {var} */}
          {selectedTopic &&
            <div id="tab-content">
              <h3>
                {EXAMPLES[selectedTopic].title}
              </h3>
              <p>
                {EXAMPLES[selectedTopic].description}
              </p>
              <pre>
                <code>
                  {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
            </div>}
        </section>
      </main>
    </div>
  );
}

export default App;
