export const getSingleErrorMessage = (errors) => {
  const messages = {};
  for (const key in errors) {
    messages[key] = [errors[key][0]];
  }
  return messages;
};
