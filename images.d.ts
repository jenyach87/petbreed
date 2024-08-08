declare module "*.svg" {
	const content: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
	export default content;
}
declare module '*.svg?icon' {
  const component: React.FC<React.SVGProps<SVGSVGElement>>;
  export default component;
}