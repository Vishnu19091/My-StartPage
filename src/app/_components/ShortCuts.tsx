import { shortcuts } from "@/app/_data/Keys";
import KeyBinds from "./KeyBinds";
import "./styles.css";

function ShortCuts() {
  return (
    <div className="modal-overlay">
      <table className="table">
        {/* <-- HEADER --> */}
        <thead>
          <tr>
            <th className="px-4 py-2 border border-gray-700">Key</th>
            <th className="px-4 py-2 border border-gray-700">Action</th>
          </tr>
        </thead>
        <tbody>
          {shortcuts.map((bind, _) => (
            <KeyBinds keyName={bind.keyName} link={bind.link} key={_} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShortCuts;
