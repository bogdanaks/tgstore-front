import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"

import { TextArea } from "./index"

const TextAreaStory = {
  title: "Shared/TextArea",
  component: TextArea,
  argTypes: {
    label: {
      type: "string",
    },
    fixLabel: {
      type: "boolean",
    },
  },
} as ComponentMeta<typeof TextArea>

const Template: ComponentStory<typeof TextArea> = (args) => (
  <TextArea {...args} />
)

export const Base = Template.bind({})
Base.args = {
  label: "Hello",
}

export const FixLabel = Template.bind({})
FixLabel.args = {
  label: "Hello",
  fixLabel: true,
}

export default TextAreaStory
