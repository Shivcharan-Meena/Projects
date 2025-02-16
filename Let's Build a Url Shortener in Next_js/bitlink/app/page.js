import localFont from "next/font/local"
import Image from "next/image";
import Link from "next/link";

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className=" flex flex-col gap-4 items-center justify-center">
          <p className={`text-2xl font-bold ${poppins.variable}`}>

            The best url shorterner in the Market
          </p>
          <p className="px-52 text-center"> We are the most straightfoward URL Shortener in the world. Most of the url shorteners will track you or ask you to give your details for login. We understand your needs and hence we have created this URL shortener  </p>
          <div className='flex gap-3 justify-start text-white'>
            <Link href="/shorten">  <button className='bg-purple-500 shadow-lg rounded-lg  p-3 py-1'>Try Now</button></Link>
            <Link href="/github">   <button className='bg-purple-500 shadow-lg rounded-lg p-3 py-1 '>GitHub</button></Link>
          </div>
        </div>

        <div className=" flex justify-start relative">
          <Image src={"/vector.jpg"} fill={true} alt="hero" className="mix-blend-darken" />
        </div>
      </section>
    </main>
  );
}
