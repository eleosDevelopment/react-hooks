import { UseStateStars } from "../components/UseStateStars.jsx";
import { UseEffect } from "../components/UseEffect.jsx";
import { CourseContext } from "../components/Context.jsx";
import { FetchComp } from "../components/FetchComp.jsx";

export function Home() {
  return (
    <div>
      <h1>React Hooks</h1>
      <div>
        <h4>Use State Hook</h4>
        <UseStateStars />
      </div>
      <div>
        <h4>Use Effect Hook</h4>
        <UseEffect />
      </div>
      <div>
        <h4>Context</h4>
        <CourseContext />
      </div>
      <div>
        <h4>Fetch Data</h4>
        <FetchComp login="eleosDevelopment" />
      </div>
    </div>
  );
}
