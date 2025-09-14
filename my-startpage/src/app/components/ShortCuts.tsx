import { shortcuts } from "./Comp";
import KeyBinds from "./KeyBinds";

function ShortCuts() {
	return (
		<>
			<div className="absolute left-4 bottom-4">
				<div className="overflow-hidden rounded-lg border border-gray-700">
					<table className="table-auto border-collapse text-cyan-700 text-sm">
						{/* <-- HEADER --> */}
						<thead>
							<tr className="bg-slate-900">
								<th className="px-4 py-2 border border-gray-700 rounded">Key</th>
								<th className="px-4 py-2 border border-gray-700 rounded">Action</th>
							</tr>
						</thead>
						<tbody>
							{shortcuts.map((bind, _) => (
								<KeyBinds keyName={bind.keyName} link={bind.link} key={_} />
							))}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
}

export default ShortCuts;
