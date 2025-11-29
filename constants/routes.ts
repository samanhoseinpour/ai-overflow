const ROUTES = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  QUESTIONS: (id: number) => `/ask-questions/${id}`,
  TAGS: (id: number) => `tags/${id}`,
};

export default ROUTES;
