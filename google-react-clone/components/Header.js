import { MicrophoneIcon, XMarkIcon, } from "@heroicons/react/24/solid";
import Avatar from "../components/Avatar";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import HeaderOptions from "./HeaderOptions";

function Header() {
  const router = useRouter();

  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex p-6 w-full items-center">
        <Image
          className="cursor-pointer"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png"
          height={40}
          width={120}
          onClick={() => router.push("/")}
        />
        <form className="flex flex-grow border border-gray-200 hover:shadow-lg shadow-lg max-w-2xl rounded-full px-6 py-3 ml-10 mr-5 ">
          <input
            ref={searchInputRef}
            type="class"
            className="flex-grow w-full focus:outline-none"
          />
          <XMarkIcon
            className="h-7 sm:mr-3 cursor-pointer transition duration-100 transform hover:scale-125"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex border-l-2 pl-3 border-gray-300  text-blue-500" />
          <MagnifyingGlassIcon
            className="mr-3 h-6 hidden sm:inline-flex  text-blue-500 "
            onClick={search}
          />
          <button hidden type="submit" onClick={search}></button>
        </form>
        <Avatar
          className="ml-auto"
          url={
            "https://images.pexels.com/photos/3182439/pexels-photo-3182439.jpeg?auto=compress&cs=tinysrgb&w=300"
          }
        />
      </div>

      {/* Header Options  */}
      <HeaderOptions />
    </header>
  );
}

export default Header;
