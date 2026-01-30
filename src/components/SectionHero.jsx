import {VscSparkleFilled} from "react-icons/vsc";

export default function HeroSection() {
  return (
    <div className="relative isolate min-h-screen dark-background">
      {/* Background Image */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: 'url("/images/herobg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Hero Content */}
      <div className="relative px-6 pt-8 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-40">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative flex rounded-full px-3 py-1 text-sm/6 text-white bg-white/10 ring-1 ring-white/10 hover:ring-white/20">
              <VscSparkleFilled className={"my-auto"}/>&nbsp; Get-into-tech: Summer Camp 2026 {' | '} Coming Soon
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
              Empowering <span className="highlight">Young Tech</span> <br/>
              <span className="highlight">Builders</span> to Build the Future
            </h1>
            <p className="mt-8 font-medium text-pretty sm:text-xl/8">
              WithinTech Rwanda is a leading EdTech organization that equips students with hands-on skills in coding, robotics, and AI through mentorship, camps, and competitions.
            </p>
          </div>
        </div>

        {/* Three Image Cards */}
        <div className="mx-auto max-w-7xl pb-16 sm:pb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
            {/* Left Card */}
            <div className="w-full">
              <div className="rounded-2xl border-[10px] border-white/50 overflow-hidden shadow-xl h-80">
                <img 
                  src="/images/hero-card-1.png"
                  alt="Coding Workshop"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Center Card (positioned lower) */}
            <div className="w-full md:mt-12">
              <div className="rounded-2xl border-[10px] border-white/50 overflow-hidden shadow-xl h-80">
                <img 
                  src="/images/hero-card-2.png"
                  alt="Robotics Learning"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Card */}
            <div className="w-full">
              <div className="rounded-2xl border-[10px] border-white/50 overflow-hidden shadow-xl h-80">
                <img 
                  src="/images/hero-card-3.png"
                  alt="AI Learning"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}