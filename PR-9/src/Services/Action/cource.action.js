export const addCourse = (course) => {
  return {
    type: "ADD_COURSE",
    payload: course,
  };
};

export const updateCourse = (course) => {
  return {
    type: "UPDATE_COURSE",
    payload: course,
  };
};
