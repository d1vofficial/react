import React from "react";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: "College Performance Dashboard",
      src: "https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      demoLink: "https://college-performance-dashboard.netlify.app/",
      codeLink: "https://github.com/d1vofficial/college_performance_dashboard",
    },
    {
      id: 2,
      title: "Music Gallery",
      src: "https://images.pexels.com/photos/258805/pexels-photo-258805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      demoLink: "https://divyam-music-portfolio.netlify.app/",
      codeLink: "https://github.com/d1vofficial/music_gallery",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
          {portfolios.map(({ id, title, src, demoLink, codeLink }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg overflow-hidden"
            >
              {/* Project Title */}
              <h3 className="text-lg font-semibold text-center py-2 bg-gray-700 text-white">
                {title}
              </h3>
              {/* Image Container */}
              <div className="h-48 w-full">
                <img
                  src={src}
                  alt={`Preview of ${title}`}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Button Container */}
              <div className="flex items-center justify-center">
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2"
                >
                  <button className="w-full px-6 py-3 text-white bg-gray-700 hover:bg-gray-600 rounded-bl-lg duration-200">
                    Demo
                  </button>
                </a>

                <a
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2"
                >
                  <button className="w-full px-6 py-3 text-white bg-blue-700 hover:bg-blue-600 rounded-br-lg duration-200">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
