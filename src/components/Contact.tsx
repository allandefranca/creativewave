import Image from "next/image";
import Link from "next/link";
import FormContact from "./FormContact";

export default function Contact() {
  return (
    <>
      <section id="contact" className="min-h-screen bg-[#898D55] flex items-center justify-center">
        <div className="flex flex-col items-center w-full" >
         <FormContact />
        </div>
      </section>
    </>
  );
}
