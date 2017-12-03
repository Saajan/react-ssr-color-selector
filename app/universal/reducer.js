import * as actionTypes from "./actionTypes";
import reduce from './reduce'

const initialState = {
  r: 222,
  g: 111,
  b: 333
};

function updateColor(state, action) {
  return { ...state, [action.color]: action.value };
}


export default reduce(initialState,{
  [actionTypes.SLIDE]: updateColor
})