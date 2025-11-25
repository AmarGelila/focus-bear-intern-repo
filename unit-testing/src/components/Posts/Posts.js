import useFetchData from "./useFetchData";
const api = "https://jsonplaceholder.typicode.com/posts";

function Posts() {
  const { data: posts, loading, error } = useFetchData(api);
  if (loading) return <h1>Loading ...</h1>;
  if (error) return <h1>{error}</h1>;

  if (posts)
    return (
      <main>
        {posts?.map((post) => (
          <Post data={post} key={post.id} />
        ))}
      </main>
    );
}

function Post({ data }) {
  return (
    <li>
      <h3>{data.title}</h3>
      <p>{data.body}</p>
    </li>
  );
}
export default Posts;

/*

0
: 
{userId: 1, id: 1, title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",…}
1
: 
{userId: 1, id: 2, title: "qui est esse",…}
2
: 
{userId: 1, id: 3, title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",…}
3
: 
{userId: 1, id: 4, title: "eum et est occaecati",…}
4
: 
{userId: 1, id: 5, title: "nesciunt quas odio",…}
5
: 
{userId: 1, id: 6, title: "dolorem eum magni eos aperiam quia",…}
6
: 
{userId: 1, id: 7, title: "magnam facilis autem",…}
7
: 
{userId: 1, id: 8, title: "dolorem dolore est ipsam",…}
8
: 
{userId: 1, id: 9, title: "nesciunt iure omnis dolorem tempora et accusantium",…}
9
: 
{userId: 1, id: 10, title: "optio molestias id quia eum",…}
10
: 
{userId: 2, id: 11, title: "et ea vero quia laudantium autem",…}
*/
