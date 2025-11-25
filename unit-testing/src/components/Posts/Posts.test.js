/* eslint-disable no-unused-vars */
import Posts from "./Posts";
import useFetchData from "./useFetchData";
import { render, screen, waitFor } from "@testing-library/react";
jest.mock("./useFetchData");

test("Should Display Correct Data", async () => {
  const expectedValues = {
    data: [
      {
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        id: 1,
        title:
          "amar sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        userId: 1,
      },

      {
        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
        id: 2,
        title: "qui est esse",
        userId: 1,
      },
      {
        body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
        id: 3,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        userId: 1,
      },
      {
        body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
        id: 4,
        title: "eum et est occaecati",
        userId: 1,
      },
      {
        body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
        id: 5,
        title: "nesciunt quas odio",
        userId: 1,
      },
      {
        body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
        id: 6,
        title: "dolorem eum magni eos aperiam quia",
        userId: 1,
      },
    ],
    loading: false,
    error: null,
  };
  useFetchData.mockReturnValue(expectedValues);

  render(<Posts />);
  await waitFor(() => {
    const title = screen.queryByText(
      "amar sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
    );
    expect(title).toBeInTheDocument();
  });
});
