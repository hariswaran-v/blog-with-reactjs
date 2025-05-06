import { useEffect, useState } from "react";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await fetch("https://dummyjson.com/posts");
      const postJson = await fetchedPosts.json();

      setPosts(postJson.posts);
    };
    fetchPosts();
  }, []);

  const blogPostsTemplate = posts.map((post) => {
    return (
      <div
        className="bg-white  items-center max-w-xl mx-auto p-5 rounded shadow mb-4"
        key={post.id}
      >
        <img
          src="https://i.pinimg.com/736x/57/46/8d/57468d8387042651790a73ade6a0d224.jpg"
          alt="React logo"
          className="rounded"
        />
        <div>
          <h4 className="font-semibold mt-3 mb-4">{post.title}</h4>
          <p className="text-gray-700">{post.body}</p>
          <div className="flex  items-center gap-x-2 mt-2">
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
    <div className="py-10">
      <div className="p-10 mt-10">
        <img
          src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Welcome banner"
          className="w-full h-96 object-cover rounded"
        />
        <h1 className="font-semibold text-2xl mt-7">Recent Blogs</h1>
      </div>

      {/* Main content area: cards left, info right */}
      <div className="px-6 flex gap-6">
        {/* Blog cards left */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPostsTemplate}
        </div>

        {/* Info right */}
        <div className="w-full max-w-sm sticky top-32 self-start bg-white p-5 rounded shadow h-fit">
          <h4 className="text-xl font-semibold mb-4">Right Side Info Panel</h4>
          <p className="text-gray-600">
            You can place recent updates, popular posts, or author details here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
