export interface KeyBindsProps {
  keyName: string;
  link: string;
}

function KeyBinds({ keyName, link }: KeyBindsProps) {
  return (
    <>
      <tr className="hover:bg-slate-800">
        <td className="px-4 py-2 border text-white text-center border-gray-700">
          {keyName}
        </td>
        <td className="px-4 py-2 border border-gray-700">{link}</td>
      </tr>
    </>
  );
}

export default KeyBinds;
