import NightModeActionTypes from './night-mode.types';

const INITIAL_STATE = {
  isNightMode: false,
};

const nightModeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NightModeActionTypes.TOGGLE_NIGHT_MODE:
      return { ...state, isNightMode: !state.isNightMode };

    default:
      return state;
  }
};

export default nightModeReducer;
