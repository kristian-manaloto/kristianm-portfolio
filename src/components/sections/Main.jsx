import { RevealOnScroll } from '../RevealOnScroll';

export const Main = () => {
  return (
    <section
      id="main"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1
            className="
                    text-2xl md:text-5xl font-bold mb-6 
                    bg-gradient-to-r from-blue-600 to-violet-800 bg-clip-text  
                    text-transparent leading-right"
          >
            Hi, my name is Kristian
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            Computer Science B.S from USask
          </p>
          <div className="flex justify-center space-x-4"></div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
