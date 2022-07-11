import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"

import Modal from "./index"

const ModalStory = {
  title: "Shared/Modal",
  component: Modal,
  argTypes: {
    hide: {
      type: "function",
    },
    isShowing: {
      type: "boolean",
    },
    title: {
      type: "string",
    },
  },
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => (
  <Modal {...args}>{args.children}</Modal>
)

export const Base = Template.bind({})
Base.args = {
  isShowing: true,
  hide: () => console.log("hello"),
  children: <h2 style={{ color: "white" }}>Hello</h2>,
}

export const WithTitle = Template.bind({})
WithTitle.args = {
  isShowing: true,
  hide: () => console.log("hello"),
  children: <h2 style={{ color: "white" }}>Hello</h2>,
  title: "Confirmation",
}

export default ModalStory
