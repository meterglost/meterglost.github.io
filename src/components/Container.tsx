import type { ParentComponent } from "solid-js";

export const Container: ParentComponent = (props) => {
	return <div class="container mx-auto px-4">{props.children}</div>;
};
