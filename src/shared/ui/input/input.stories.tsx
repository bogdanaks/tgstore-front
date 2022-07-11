import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Input } from "./index"

const ButtonStory = {
  title: "Shared/Input",
  component: Input,
  argTypes: {
    label: {
      type: "string",
    },
    fixLabel: {
      type: "boolean",
    },
  },
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const InputDefault = Template.bind({})
InputDefault.args = {}

export const WithLabel = Template.bind({})
WithLabel.args = {
  label: "Название",
}

export default ButtonStory
