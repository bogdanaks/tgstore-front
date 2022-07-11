import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Loader } from "./index"

const LoaderStory = {
  title: "Shared/Loader",
  component: Loader,
  argTypes: {},
} as ComponentMeta<typeof Loader>

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />

export const Base = Template.bind({})
Base.args = {}

export default LoaderStory
