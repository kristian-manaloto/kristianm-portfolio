export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="text-center z-10 px-4">
        <h1
          className="
                    text-5xl md:text-7xl font-bold mb-6 
                    bg-gradient-to-r from-blue-600 to-violet-800 bg-clip-text  
                    text-transparent leading-right"
        >
          Hi, my name is Kristian
        </h1>

        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
          asdlasdsadjkfasdasd asdfkasdfajskdf{' '}
          <a href="asdfklasjkdfj">asdfsadf</a>
        </p>
        <div>
          <a
            href="#projects"
            className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition 
                            relative overflow-hidden hover:-transate-y-0.5 hover:shadow-[0_0_15px_rgb(50,130,246,0.4)"
          >
            View Projects
          </a>
        </div>
        <div>
          <a
            href="#contact"
            className="bg-blue-500/50 text-white py-3 px-6 rounded font-medium transition-all duration-200 
                        hover:-transate-y-0.5 hover:shadow-[0_0_15px_rgb(50,130,246,0.4)"
          >
            Contact Me
          </a>
        </div>
        <div>
          <a href="#cbout">About Me</a>
        </div>
      </div>
    </section>
  );
};
