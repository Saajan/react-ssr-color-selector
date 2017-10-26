const initialState = {
  r: 222,
  g: 111,
  b: 333
};

function updateColor(state, action) {
  return { ...state, [action.color]: action.value };
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "SLIDE":
      return updateColor(state, action);
      break;
    default:
      return state;
  }
}
