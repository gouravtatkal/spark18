export default function items(state = [], action) {
  if (action.type === "ADD_ITEM") {
    return action.items;
  }
  return state;
}
