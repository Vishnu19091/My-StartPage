export interface WAppLinksProp {
	href: string;
	svg: React.ReactNode;
}

function WAppLinks({ href, svg }: WAppLinksProp) {
	return (
		<a className="hover:scale-125 opacity-80 hover:opacity-100 transition-all md hydrated" href={href}>
			{svg}
		</a>
	);
}

export default WAppLinks;
