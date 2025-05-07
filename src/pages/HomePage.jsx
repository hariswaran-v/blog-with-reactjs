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
        className="bg-white  items-center max-w-xl mx-auto p-3 rounded shadow mb-4"
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
      <div className="p-10 mt-6">
        <img
          src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Welcome banner"
          className="w-full h-96 object-cover rounded"
        />
        <h1 className="font-semibold text-2xl mt-5">Recent Blogs</h1>
      </div>

      {/* Main content area: cards left, info right */}
      <div className="px-10 flex gap-6">
        {/* Blog cards left */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPostsTemplate}
        </div>

        {/* Info right */}
        <div className="flex flex-col justify-center items-center w-full max-w-sm sticky self-start bg-white p-5 rounded shadow h-fit ">
          <div className=" space-y-3">
            <img
              src="https://github.com/hariswaran-v.png"
              alt="Hariswaran"
              className="w-[300px] h-[300px] rounded-full "
            />
            <h4 className="text-xl font-semibold text-center">
              Hariswaran Venkatesh
            </h4>
            <p className="text-center ">MERN Stack Developer</p>
            <h4 className="font-semibold border-b-4 border-slate-800 pb-2 ">
              ABOUT ME
            </h4>
            <p className="text-justify">
              I'm Hariswaran, a passionate MERN stack developer with a strong
              focus on building responsive, clean, and user-friendly full-stack
              web applications. I specialize in developing modern frontends with
              React.js and scalable backends using Node.js, Express.js, and
              MongoDB. I'm always eager to learn new technologies and solve
              real-world problems through code.
            </p>
            <h4 className="font-semibold border-b-4 border-slate-800 pb-2 ">
              CONTACT ME
            </h4>
            {/* Social icons div */}
            <div className="px-4  flex items-center  space-x-12 rounded">
              {/* linkedin */}
              <a href="https://www.linkedin.com/feed/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 24 24"
                  className="cursor-pointer hover:text-blue-600 transition duration-300 hover:scale-110 "
                >
                  <path
                    fill="currentColor"
                    d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                  ></path>
                </svg>
              </a>
              {/* Github */}
              <a href="https://github.com/hariswaran-v">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 24 24"
                  className="hover:text-orange-500 transition duration-300 hover:scale-110"
                >
                  <path
                    fill="currentColor"
                    d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                  ></path>
                </svg>
              </a>
              {/* Facebook */}
              <a href="https://www.facebook.com/profile.php?id=100008652420742">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 24 24"
                  className="hover:text-blue-500 transition duration-300 hover:scale-110"
                >
                  <path
                    fill="currentColor"
                    d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                  ></path>
                </svg>
              </a>

              {/* Instagram */}
              <a href="https://www.instagram.com/hariswaran.venkatesh/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 512 512"
                  className="hover:text-pink-500 transition duration-300 hover:scale-110"
                >
                  <path
                    fill="currentColor"
                    d="M349.33 69.33a93.62 93.62 0 0 1 93.34 93.34v186.66a93.62 93.62 0 0 1-93.34 93.34H162.67a93.62 93.62 0 0 1-93.34-93.34V162.67a93.62 93.62 0 0 1 93.34-93.34zm0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M377.33 162.67a28 28 0 1 1 28-28a27.94 27.94 0 0 1-28 28M256 181.33A74.67 74.67 0 1 1 181.33 256A74.75 74.75 0 0 1 256 181.33m0-37.33a112 112 0 1 0 112 112a112 112 0 0 0-112-112"
                  ></path>
                </svg>
              </a>

              {/* Email */}
              <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 24 24"
                  className=""
                >
                  <path
                    fill="currentColor"
                    d="M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h9.947q-.043.25-.053.49q-.009.24.014.51H4.308L12 11l3.573-2.333q.177.171.359.332t.382.297L12 12.116L4 6.885v10.5q0 .269.173.442t.443.173h14.769q.269 0 .442-.173t.173-.443V10.15q.287-.067.527-.158q.24-.09.473-.223v7.616q0 .69-.462 1.152T19.385 19zM4 6v12zm15 2.27q-1.038 0-1.77-.731t-.73-1.77T17.23 4T19 3.27t1.77.73t.73 1.77t-.73 1.769t-1.77.73"
                  ></path>
                </svg>
              </a>
            </div>
            {/* Skills */}
            <h4 className="font-semibold border-b-4 border-slate-800 pb-2 ">
              SKILLS
            </h4>
            <ul className="flex flex-wrap gap-2 justify-evenly list-none font-semibold">
              <li className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-gray-500"></span>
                <span className="badge bg-primary">HTML</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-gray-500"></span>
                <span className="badge bg-secondary">CSS</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-gray-500"></span>
                <span className="badge bg-success">JavaScript</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-gray-500"></span>
                <span className="badge bg-danger">React.js</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-gray-500"></span>
                <span className="badge bg-warning text-dark">Node.js</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-gray-500"></span>
                <span className="badge bg-info text-dark">MongoDB</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-gray-500"></span>
                <span className="badge bg-dark">Express.js</span>
              </li>
            </ul>
            <h4 className="font-semibold border-b-4 border-slate-800 pb-2 ">
              LANGUAGE
            </h4>
            <ul className="flex flex-wrap gap-2 justify-evenly list-none font-semibold">
              <li className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-gray-500"></span>
                <span className="badge bg-primary">Tamil</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-gray-500"></span>
                <span className="badge bg-secondary">English</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-gray-500"></span>
                <span className="badge bg-success">Telugu</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
