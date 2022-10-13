import Head from "next/head";
import Avatar from "../components/Avatar";
import { MicrophoneIcon, Squares2X2Icon } from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Footer from "../components/Footer";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google</title>
        <meta name="description" content="Minimal Search Engine by James Epale " />
      </Head>

      {/* Header */}

      <header className=" flex w-full p-5 justify-between text-lg text-gray-700">
        {/* Left */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        {/* right */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          {/* Icon */}

          <Squares2X2Icon className="h-6 w-6 rounded-full hover:bg-gray-100 cursor-pointer" />

          <Avatar
            url={
              "https://images.pexels.com/photos/3182439/pexels-photo-3182439.jpeg?auto=compress&cs=tinysrgb&w=300"
            }
          />
        </div>
      </header>

      {/* Body */}

      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <Image
          className="cursor-pointer"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png"
          height={100}
          width={300}
          alt="Google Logo"
        />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <MagnifyingGlassIcon className="h-5 mr-3 text-gray-500" />
          <input
            ref={searchInputRef}
            type="class"
            className="flex-grow focus:outline-none"
          />

          <MicrophoneIcon className="h-5 w-5" />
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button onClick={search} className="button">
            Google Search
          </button>

          <button onClick={search} className="button">
            I&apos;m Feeling Lucky
          </button>
        </div>
      </form>

      {/* Footer */}

      <Footer />
    </div>
  );
}
