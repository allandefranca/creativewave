import Image from "next/image";
import Link from "next/link";

export default function DigitalArt() {
  return (
    <>
      <section id="digitalArt" className="min-h-screen bg-[#E5E5E5] flex items-center justify-center">
        <div className="flex flex-col items-center min-h-screen w-full">
          <div className="mt-20 mb-10">
            <p className="text-center text-2xl font-bold">
            THE PASSION IS TO CREATE IN OUR <br />
            INDIVIDUAL STYLE DIGITAL ART INCLUDING <br />
            PHOTO EDITING, COLLAGES, ILLUSTRATIONS, <br />
            TEXTILE AND PATTERN DESIGN. <br />
            </p>
          </div>
          <div className="flex">
            <div className="flex flex-col justify-center">
              <p className="text-right text-2xl font-bold mb-5">
                DIGITAL <br />
                  ART & <br />
                 VISUAL <br />
                 DESIGN <br />
              </p>
              <p className="text-right font-thin"> 
                "DESIGN IS EVERYWHERE. <br />
                EVERYTHING FROM A <br />
                FLOWER TO A MANHOLE <br />
                MAY SERVE AS AN INSPIRATION. IN MY <br />
                WORK I ALLOW EVERY <br />
                TINY DETAIL OF MY <br />
                SURROUNDINGS TO BE A <br />
                VALUABLE ASPECT, WHICH <br />
                MAY THEN BECOME AN <br />
                ENHANCED IMAGE, AN <br />
                ESSENTIAL PART OF MY <br />
                ART."  <br /> <br />
        
                DIGITAL VISUALIZING IS A <br />
                COMBINATION OF <br />
                PLAYFUL USE OF COLORS <br />
                AND INDIVIDUAL SHAPES <br />
                WHICH IN THE END ARE <br />
                BEING REASSEMBLED. <br />
              </p>
            </div>
            <div className="ml-10 mr-10">
              <img  className="drop-shadow-md" src="/woman.webp" alt="" />
            </div>
            <div className="flex items-center">
              <p className="text-5xl">
              IF YOU ARE <br />
              INTERESTED <br />
              TO BUY ONE <br />
              OF THIS <br />
              ART, <br />
              PLEASE BE <br />
              WELCOME <br />
              TO SEND ME <br />
              AN EMAIL. <br />
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
