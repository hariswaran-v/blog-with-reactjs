import { useEffect, useState } from "react";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await fetch("https://dummyjson.com/posts");
      const postJson = await fetchedPosts.json();

      setPosts(postJson.posts);
      console.log(postJson);
    };
    fetchPosts();
  }, []);

  const blogPostsTemplate = posts.map((post) => {
    return (
      <div
        className="bg-white flex items-center space-x-5 p-5 rounded shadow mb-4"
        key={post.id}
      >
        <img
          src={post.image}
          alt="React logo"
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h4 className="font-semibold mb-4">{post.title}</h4>
          <p className="text-gray-700">{post.body}</p>
          <div className="flex items-center gap-x-2 mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 21H3a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h4l4-9a3 3 0 0 1 3 3v4h6a2 2.3 0 0 1 2 3l-2 8a3 3 0 0 1-3 2h-6zV11"
              ></path>
            </svg>
            {post.reactions.likes}
            {post.tags.map((tag, index) => (
              <div
                key={`tags-${tag}-${index}`}
                className="px-2 bg-blue-500 text-white rounded"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="max-w-6xl mx-auto p-10">
      <h1 className="font-semibold text-2xl mb-2">Recent Blogs</h1>
      {blogPostsTemplate}
    </div>
  );
};

export default HomePage;
