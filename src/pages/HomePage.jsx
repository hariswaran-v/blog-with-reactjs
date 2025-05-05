const HomePage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "AI and the Future of Software Development",
      desc: "Explore how artificial intelligence is revolutionizing the software development process and what it means for developers.",
      image:
        "https://i.pinimg.com/736x/2b/ee/11/2bee11a830bacc5ae9006df56b20c33a.jpg",
    },
    {
      id: 2,
      title: "Top 10 Tools Every Full Stack Developer Should Know",
      desc: "A curated list of essential tools and platforms for becoming a productive full stack developer.",
      image:
        "https://i.pinimg.com/736x/2b/ee/11/2bee11a830bacc5ae9006df56b20c33a.jpg",
    },
    {
      id: 3,
      title: "The Rise of Web3: Decentralized Internet Explained",
      desc: "A beginner-friendly breakdown of what Web3 is, how it works, and why it matters in the tech world.",
      image:
        "https://i.pinimg.com/736x/2b/ee/11/2bee11a830bacc5ae9006df56b20c33a.jpg",
    },
    {
      id: 4,
      title: "Mastering React: Best Practices in 2025",
      desc: "Learn the latest React.js best practices, patterns, and performance tips every developer should follow.",
      image:
        "https://i.pinimg.com/736x/2b/ee/11/2bee11a830bacc5ae9006df56b20c33a.jpg",
    },
    {
      id: 5,
      title: "Why Cybersecurity Is Everyone's Responsibility",
      desc: "Understand the importance of cybersecurity and how every team member plays a role in protecting digital assets.",
      image:
        "https://i.pinimg.com/736x/2b/ee/11/2bee11a830bacc5ae9006df56b20c33a.jpg",
    },
  ];
  const blogPostsTemplate = blogPosts.map((post) => {
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
      <h1 className="font-bold text-2xl mb-2">Recent Blogs</h1>
      {blogPostsTemplate}
    </div>
  );
};

export default HomePage;
