export const categoriesReducer = (state = initialState.categories, action) => {
    switch (action.type) {
      case UPDATE_CATEGORIES:
        return [...action.categories];
      case UPDATE_CURRENT_CATEGORY:
        return { ...state, currentCategory: action.currentCategory };
      default:
        return state;
    }
  };