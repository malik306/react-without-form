//Reducers
export function ChangeNumber(state = 0, action) {
  switch (action.type) {
    case "Inc":
      return state + 1;
    case "Dec":
      return state - 1;
    default:
      return state;
  }
}
export function HandleForm(state = {}, action) {
  let data;
  switch (action.type) {
    case "Finish":
      data = onFinish(action.data);
      return { ...state, data };
    case "Fail":
      data = onFinishFailed(action.data);
      return { ...state, data };
    default:
      return state;
  }
}
const onFinish = (fieldsValue) => {
  return {
    ...fieldsValue,
    startDate: fieldsValue["startDate"].format("DD-MM-YYYY"),
    endDate: fieldsValue["endDate"].format("DD-MM-YYYY"),
  };
};

const onFinishFailed = (errorInfo) => errorInfo;
