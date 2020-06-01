export function like(index: number) {
  return { type: 'ADD_LIKE', index }
}

export function dislike(index: number) {
  return { type: 'REMOVE_LIKE', index }
}

export function comment(index: number) {
  return { type: 'ADD_COMMENT', index }
}