import { styles, definition } from "@uesio/ui"

type ComponentDefinition = {
	color: string
}

const Component: definition.UC<ComponentDefinition> = (props) => {
	const { color = "black" } = props.definition
	const classes = styles.useStyleTokens(
		{
			root: [
				"m-auto",
				"aspect-square",
				"w-4",
				"rounded",
				"border-2",
				"border-white",
				"shadow-lg",
				`bg-[#${props.context.merge(color)}]`,
			],
		},
		props
	)
	return <div className={classes.root} />
}

export default Component
