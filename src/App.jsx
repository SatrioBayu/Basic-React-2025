import { useState } from "react";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import "./App.css";

function App() {
  const [topic, setTopic] = useState("");

  const handleSelect = (selectedButton) => {
    setTopic(selectedButton);
  };

  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((data) => (
              <CoreConcept key={data.title} {...data} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={topic === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={topic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={topic === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={topic === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
          </menu>
          {topic ? (
            <div id="tab-content">
              <h3>{EXAMPLES[topic].title}</h3>
              <p>{EXAMPLES[topic].description}</p>
              <pre>
                <code>{EXAMPLES[topic].code}</code>
              </pre>
            </div>
          ) : (
            <p>Please select a topic!</p>
          )}
        </section>
      </main>
    </>
  );
}

export default App;
