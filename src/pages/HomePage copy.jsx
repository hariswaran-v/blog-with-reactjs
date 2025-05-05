import blogData from "../components/data/blog.json";

const HomePage = () => {
  const blogPostsTemplate = blogData.map((post) => {
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
          <h4 className="font-semibold ">{post.title}</h4>
          <p className="text-gray-700">{post.desc}</p>
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
