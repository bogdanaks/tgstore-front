import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Button } from "./index"

const ButtonStory = {
  title: "Shared/Button",
  component: Button,
  argTypes: {
    type: {
      defaultValue: "primary",
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
)

export const Primary = Template.bind({})
Primary.args = {
  type: "primary",
}

export const TypeDefault = Template.bind({})
TypeDefault.args = {
  type: "default",
}

export default ButtonStory
