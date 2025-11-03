import { AL } from "./Comp";
import WAppLinks from "./WAppLinks";

function Links() {
	return (
		<div className="text-center w-auto">
			<div className="flex flex-row gap-4 justify-center justify-self-center items-center self-center">
				{AL.map((link, _) => (
					<WAppLinks href={link.href} svg={link.svg} key={_} />
				))}
			</div>
		</div>
	);
}

export default Links;
