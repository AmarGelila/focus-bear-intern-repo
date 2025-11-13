import { useEffect, useState } from "react";

function UseEffectTask() {
  const [posts, setPosts] = useState([]);
  const [fetchDataEnabled, setFetchDataEnabled] = useState(false);

  useEffect(() => {
    let ignore = false;
    async function fetchData() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) throw Error("An Error Occured while Getting Data");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    }

    if (!ignore) {
      console.log("UseEffectTask Component Mounted");
      if (fetchDataEnabled) fetchData();
    }

    return () => {
      console.log("UseEffectTask Component UnMounted");
      ignore = true;
    };
  }, [fetchDataEnabled]);

  return (
    <main className="p-5">
      <div>
        <h1>useEffect Task Issue #24</h1>
        <button
          onClick={() => setFetchDataEnabled(true)}
          className="px-3 py-1 border-2 disabled:opacity-30 border-blue-500 mt-5 text-1xl active:text-blue-300 transition-colors font-black rounded-2xl text-blue-500 enabled:hover:bg-blue-500 enabled:hover:text-white bg-white enabled:hover:cursor-pointer"
          disabled={fetchDataEnabled}
        >
          Fetch Data
        </button>
      </div>
      <div>
        {posts.map((post) => (
          <li key={post.id}>
            <h5> {post.title}</h5>
          </li>
        ))}
      </div>
    </main>
  );
}

export default UseEffectTask;
