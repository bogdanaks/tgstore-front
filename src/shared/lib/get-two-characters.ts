export const getTwoCharacter = (title: string): string => {
  const splitTitle = title.split(" ")

  if (splitTitle.length === 1) {
    return splitTitle[0].toUpperCase()
  }
  
  let characters = ""
  for (let i = 0; i < 2; i++) {
    characters += splitTitle[i][0].toUpperCase()
  }
  return characters
}
