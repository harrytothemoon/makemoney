export const INIT_APP_STATE = {
  lastUpdateDate: undefined,
};

export default function appReducer(state = INIT_APP_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
