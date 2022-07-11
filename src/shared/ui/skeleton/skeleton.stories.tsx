import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"

import Skeleton from "./index"

const SkeletonStory = {
  title: "Shared/Skeleton",
  component: Skeleton,
  argTypes: {},
} as ComponentMeta<typeof Skeleton>

const Template: ComponentStory<typeof Skeleton> = (args) => (
  <Skeleton {...args}>{args.children}</Skeleton>
)

export const SkeletonImage = Template.bind({})
SkeletonImage.args = {
  children: <Skeleton.Image width={50} height={50} />,
}

export const SkeletonButton = Template.bind({})
SkeletonButton.args = {
  children: <Skeleton.Button />,
}

export const SkeletonParagraph = Template.bind({})
SkeletonParagraph.args = {
  children: <Skeleton.Paragraph />,
}

export const SkeletonInput = Template.bind({})
SkeletonInput.args = {
  children: <Skeleton.Input />,
}

export const SkeletonAppList = Template.bind({})
SkeletonAppList.args = {
  children: <Skeleton.AppList />,
}

export default SkeletonStory
