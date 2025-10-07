export const NavBar = () => {
    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg" >
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="font-mono text-xl font-bold text-white">
                        kristian<span className="text-blue-500">.manaloto</span>
                    </a>

                    
                    <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden">
                        &#9776;
                    </div>
                </div>
            </div>
        </nav>
    )
}