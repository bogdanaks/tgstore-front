import { SkeletonButton } from "./button"
import { SkeletonImage } from "./image"
import { SkeletonInput } from "./input"
import { SkeletonParagraph } from "./paragraph"

const Skeleton = ({ children }: { children: JSX.Element | JSX.Element[] }) => (
  <div>{children}</div>
)

Skeleton.Image = SkeletonImage
Skeleton.Button = SkeletonButton
Skeleton.Paragraph = SkeletonParagraph
Skeleton.Input = SkeletonInput

export default Skeleton
