import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"

import { AppImage } from "./index"

const AppImageStory = {
  title: "Shared/AppImage",
  component: AppImage,
  argTypes: {
    imageUrl: {
      type: "string",
    },
    width: {
      type: "number",
    },
    height: {
      type: "number",
    },
    alt: {
      type: "string",
    },
    noImageTitle: {
      type: "string",
    },
  },
  args: {
    imageUrl: "/images/noimage.webp",
    width: 50,
    height: 50,
    alt: "No image",
    noImageTitle: "TA",
  },
} as ComponentMeta<typeof AppImage>

const Template: ComponentStory<typeof AppImage> = (args) => (
  <AppImage {...args} />
)

export const Default = Template.bind({})
Default.args = {}

export const Big = Template.bind({})
Big.args = {
  width: 80,
  height: 80,
}

export const WithoutImage = Template.bind({})
WithoutImage.args = {
  imageUrl: "",
  noImageTitle: "TA",
  width: 50,
  height: 50,
}

export default AppImageStory
