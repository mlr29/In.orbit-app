import * as ScrollAreaPrimitives from '@radix-ui/react-scroll-area'

export function ScrollAreaScrollbar(
  props: ScrollAreaPrimitives.ScrollAreaScrollbarProps
) {
  return (
    <ScrollAreaPrimitives.ScrollAreaScrollbar
      {...props}
      className="text-lg font-semibold"
    />
  )
}

export function ScrollAreaCornerProps(
  props: ScrollAreaPrimitives.ScrollAreaCornerProps
) {
  return (
    <ScrollAreaPrimitives.ScrollAreaCorner
      {...props}
      className="text-lg font-semibold"
    />
  )
}

export function ScrollArea(props: ScrollAreaPrimitives.ScrollAreaProps) {
  return (
    <ScrollAreaPrimitives.ScrollArea
      {...props}
      className="text-lg font-semibold"
    />
  )
}

export function ScrollAreaViewport(
  props: ScrollAreaPrimitives.ScrollAreaViewportProps
) {
  return (
    <ScrollAreaPrimitives.ScrollAreaViewport
      {...props}
      className="text-lg font-semibold"
    />
  )
}

export function ScrollAreaThumb(
  props: ScrollAreaPrimitives.ScrollAreaThumbProps
) {
  return (
    <ScrollAreaPrimitives.ScrollAreaThumb
      {...props}
      className="text-lg font-semibold"
    />
  )
}
// const ScrollAreaDemo = () => (
// 	<ScrollArea.Root className="ScrollAreaRoot">
// 		<ScrollArea.Viewport className="ScrollAreaViewport">
// 			<div style={{ padding: "15px 20px" }}>
// 				<div className="Text">Tags</div>
// 				{TAGS.map((tag) => (
// 					<div className="Tag" key={tag}>
// 						{tag}
// 					</div>
// 				))}
// 			</div>
// 		</ScrollArea.Viewport>
// 		<ScrollArea.Scrollbar
// 			className="ScrollAreaScrollbar"
// 			orientation="vertical"
// 		>
// 			<ScrollArea.Thumb className="ScrollAreaThumb" />
// 		</ScrollArea.Scrollbar>
// 		<ScrollArea.Scrollbar
// 			className="ScrollAreaScrollbar"
// 			orientation="horizontal"
// 		>
// 			<ScrollArea.Thumb className="ScrollAreaThumb" />
// 		</ScrollArea.Scrollbar>
// 		<ScrollArea.Corner className="ScrollAreaCorner" />
// 	</ScrollArea.Root>
// );

// export default ScrollAreaDemo;
