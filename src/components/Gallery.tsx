import Image from "next/image";
import Projects from "./Projects";

export default function Gallery() {

  return (
    <>
      <section id="gallery" className="min-h-screen bg-[#E5E5E5] flex items-center justify-center mb-10">
        <div className="flex flex-col items-center min-h-screen w-full" >
          <div className="flex mt-20 mb-10" >
            <div>
              <Image  
                src="/gallery/Hero_Pink.png" 
                alt="" 
                width={90}
                height={100}
              />
            </div>
            <div>
              <p className="text-4xl rotate-90 mt-5 ml-5 mr-20">
                Galle <br /> ry  *
              </p>
            </div>
            <div>
              <p className="text-xs font-thin mt-5 ml-20 mr-5">
                Here you can see a bit of my <br />
                craft, my passion, where I <br />
                invested a lot of my love to <br />
                help my client to find the <br />
                best solutions for their <br />
                brand. <br />
                All projects are important, so <br />
                I carefully curated what best  <br />
                represents me. <br />
              </p>
            </div>
          </div>
          <div className="mb-5">
            <a className="mr-5 font-thin" href="">Gallery</a>
            <a className="mr-5 font-thin" href="">Music Video</a>
            <a className="mr-5 font-thin" href="">Film</a>
            <a className="mr-5 font-thin" href="">Reel</a>
            <a className="mr-5 font-thin" href="">Explainer/Editorial</a>
            <a className="mr-5 font-thin" href="">Advertising</a>
          </div>
          <div>
            <Projects />
          </div>
        </div>
      </section>
    </>
  );
}
