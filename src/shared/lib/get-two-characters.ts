export const getTwoCharacter = (title: string): string => {
  const splitTitle = title.split(" ")
  let characters = ""
  for (let i = 0; i < 2; i++) {
    characters += splitTitle[i][0].toUpperCase()
  }
  return characters
}
