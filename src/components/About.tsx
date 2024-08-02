import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <>
      <section id="about" className="bg-[#898D55] flex items-center justify-center">
        <div className="flex flex-col items-center w-full mb-10">
          <div className="flex flex-row mt-36">
            <div>
              <div className="ml-10">
                <p className="text-3xl font-mono">
                  GET IN <br />
                  TOUCH
                </p>
              </div>
              <div className="mt-10">
                <p className="font-thin text-white">
                  Curious about CBD? <br />
                  Need to get in touch with us? <br />
                  Or you just want to make a new friend? <br />
                  Shoot us a msg. <br /><br />
                  Email: <span className="text-black">CreativeWave@gmail.com</span><br />
                  Contact Us: <span className="text-black">(123) 456-7890</span> <br /><br />
                </p>
              </div>
            </div>
            <div className="flex items-end ml-10 mr-5">
              <Image
                src="/contact/Tv.webp"
                alt=""
                width={250}
                height={250}
              />
            </div>
            <div>
              <Image
                src="/contact/KaitOnPhone.webp"
                alt=""
                width={250}
                height={250}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
