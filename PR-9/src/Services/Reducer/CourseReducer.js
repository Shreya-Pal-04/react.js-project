const initialState = {
  courses: [],
  course: null,
};

const CourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_COURSE":
      return {
        ...state,
        courses: [...state.courses, action.payload],
      };

    case "UPDATE_COURSE":
      let updatedData = JSON.parse(localStorage.getItem("Courses")) || [];

      updatedData = updatedData.map((course) => {
        if (course.id == action.payload.id) {
          return action.payload;
        } else {
          return course;
        }
      });

      localStorage.setItem("Courses", JSON.stringify(updatedData));

      return {
        ...state,
        courses: updatedData,
      };

    default:
      return state;
  }
};

export default CourseReducer;
