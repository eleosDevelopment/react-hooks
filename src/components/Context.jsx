import { useContext } from "react";
import { TreesContext } from "..";

export function CourseContext() {
  const { trees } = useContext(TreesContext);
  return (
    <div>
      <h1>Trees i've Heard Of</h1>
      <ul>
        {trees.map((tree) => (
          <li key={tree.id}>{tree.type} - {tree.location}</li>
        ))}
      </ul>
    </div>
  );
}
