import { children, type ParentComponent } from "solid-js";

const Root: ParentComponent = (props) => {
	const safeChildren = children(() => props.children);

	return <ol class="space-y-4">{safeChildren()}</ol>;
};

const Item: ParentComponent<{ datetime: string; title: string; subtitle: string }> = (props) => {
	const safeChildren = children(() => props.children);

	return (
		<li class="flex flex-col md:flex-row-reverse flex-wrap">
			<div class="flex-none">{props.datetime}</div>
			<div class="flex-auto">
				<h3>{props.title}</h3>
				<div>{props.subtitle}</div>
			</div>
			<p class="basis-full">{safeChildren()}</p>
		</li>
	);
};

/**
 * @description A component for displaying chronological events.
 * @example
 * <Timeline.Root>
 *  <Timeline.Item datetime="" title="" subtitle="">
 *   ... content ...
 *  </Timeline.Item>
 *  ... more items ...
 * </Timeline.Root>
 */
export const Timeline = {
	Root,
	Item,
};
