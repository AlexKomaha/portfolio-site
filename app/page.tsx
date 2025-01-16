import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center h-screen relative bg-cover bg-[url('/assets/bg-explosion.png')]">
      <div className="absolute right-10 md:right-40 bottom-0 z-[10]/">
        <Image
          src='/assets/MoustacheMan.png'
          alt="MoustacheMan"
          width={560}
          height={560}
          className="w-[300px] h-[300px] z-[1] md:w-[560px]/="
        />
      </div>
        <Image
          src='/assets/top-left-img.png'
          alt="paint"
          width={230}
          height={230}
          className="absolute left-0 top-0"
        />
    </main>
  );
}
