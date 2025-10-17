import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center md:items-start md:justify-between px-4 py-12 bg-gray-50">
      <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-4xl font-bold mb-4">Muhammad Junaid</h1>
        <p className="text-lg text-gray-700">Welcome to my portfolio website!</p>
      </div>
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <Image
          src="/profile.jpg"   // ✅ Use just the path, no import
          alt="Profile Picture"
          width={200}
          height={200}
          className="rounded-full border-4 border-gray-300"
        />
      </div>
    </section>
  );
}
