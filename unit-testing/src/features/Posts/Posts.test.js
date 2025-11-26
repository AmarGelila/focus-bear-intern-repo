import postsReducer, { fetchPosts } from "./postsSlice";

describe("Post Slice Test", () => {
  test("Test fetchPosts Actions", () => {
    const initialState = {
      status: "idle",
      data: [],
      error: "",
    };
    const action = { type: fetchPosts.pending.type };
    expect(postsReducer(initialState, action).status).toBe("loading");
  });
});
