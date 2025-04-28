"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import logo from "@/public/img/logo.png";
import iconHamburger from "@/public/img/iconHamburger.svg";
import iconClose from "@/public/img/iconClose.svg";
import Link from "next/link";
import hero from "@/public/img/hero.jpg";
import boostrap from "@/public/img/bootstrap.png";
import dribble from "@/public/img/dribbble.png";
import envato from "@/public/img/envato.png";
import instagram from "@/public/img/instagram.png";
import jquery from "@/public/img/jquery.png";
import stat from "@/public/img/stat.jpg";
import person1 from "@/public/img/person1.jpg";
import person2 from "@/public/img/person2.jpg";
import person3 from "@/public/img/person3.jpg";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (menuRef.current) {
      if (isOpen) {
        menuRef.current.classList.add("hidden");
        menuRef.current.classList.remove("flex");
      } else {
        menuRef.current.classList.remove("hidden");
        menuRef.current.classList.add("flex");
      }
    }
  };

  return (
    <>
      {/* // navigasi */}
      <nav>
        <div className="px-6 max-w-5xl mx-auto flex items-center justify-between py-5">
          <Link href="" className="w-32">
            <Image src={logo} alt="" />
          </Link>
          <div className="hidden md:inline space-x-6 font-semibold">
            <Link href="" className="hover:text-red-500">
              Pricing
            </Link>
            <Link href="" className="hover:text-red-500">
              Product
            </Link>
            <Link href="" className="hover:text-red-500">
              About
            </Link>
            <Link href="" className="hover:text-red-500">
              Career
            </Link>
            <Link href="" className="hover:text-red-500">
              Community
            </Link>
          </div>
          <button className="hidden md:inline bg-red-500 text-white px-4 py-2 rounded-3xl">
            {" "}
            Create Account
          </button>
          <Image
            src={isOpen ? iconClose : iconHamburger}
            alt="Menu"
            className="  md:hidden"
            onClick={toggleMenu}
          />
        </div>
        {/* mobile menu */}
        <div className="md:hidden">
          <div
            ref={menuRef}
            className="absolute top-16 max-w-5xl hidden flex-col bg-white shadow-md inset-x-0 mx-auto px-6 py-5"
          >
            <Link href="" className="hover:text-red-500">
              Pricing
            </Link>
            <Link href="" className="hover:text-red-500">
              Product
            </Link>
            <Link href="" className="hover:text-red-500">
              About
            </Link>
            <Link href="" className="hover:text-red-500">
              Career
            </Link>
            <Link href="" className="hover:text-red-500">
              Community
            </Link>
            <Link href="" className="hover:text-red-500">
              Create Account
            </Link>
          </div>
        </div>
      </nav>

      {/* hero section */}
      <section className=" px-6 max-w-5xl mx-auto md:flex md:justify-between items-center my-6 space-x-6">
        <div className="md:w-3/6 text-center md:text-left ">
          <h4 className="text-xl font-bold"> New Feature</h4>
          <h3 className="text-5xl font-bold mb-5">
            {" "}
            Coming Up With Fresh Ideas
          </h3>
          <p className="text-gray-500 mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            tempore voluptas at. Ipsa quos architecto dolorum, minima in
            necessitatibus, temporibus ipsum commodi aliquid ea pariatur
            laudantium sunt, nihil aut atque.
          </p>
          <button className="bg-red-500 text-white px-4 py-2 rounded-3xl">
            Create Account
          </button>
        </div>
        <Image src={hero} alt="" className="md:w-3/6" />
      </section>

      {/* partner  */}
      <section className="bg-gray-100 p-10 my-5">
        <div className="max-w-5xl mx-auto grid grid-cols-2 gap-5 justify-items-center md:flex md:justify-around items-center ">
          <Image src={boostrap} alt="" className="w-32" />
          <Image src={dribble} alt="" className="w-32" />
          <Image src={envato} alt="" className="w-32" />
          <Image src={instagram} alt="" className="w-32" />
          <Image src={jquery} alt="" className="w-32" />
        </div>
      </section>

      {/* statistic */}
      <section className="max-w-5xl mx-auto space-x-6 md:flex md:justify-between items-center">
        <Image src={stat} alt="" className="w-3/4 md:w-3/6 mx-auto" />
        <div className="md:w-3/6 text-center md:text-left">
          <h4 className="text-xl font-bold">Statistic</h4>
          <h3 className="text-3xl font-bold mb-5">What We Can Do For You</h3>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            velit debitis nobis veritatis rerum inventore ullam eos tempora
            culpa alias obcaecati, quisquam odio itaque libero officiis nihil
            voluptas mollitia ipsum.
          </p>
          <div className="flex justify-between py-6 max-w-80 mx-auto">
            {/* portfolio */}
            <div className="text-center text-gray-500">
              <h4 className="text-2xl font-bold text-gray-900">20+</h4>
              <p>Portfolio</p>
            </div>
            {/* client */}
            <div className="text-center text-gray-500">
              <h4 className="text-2xl font-bold text-gray-900">100+</h4>
              <p>Clients</p>
            </div>
            {/* portfolio  */}
            <div className="text-center text-gray-500">
              <h4 className="text-2xl font-bold text-gray-900">4.8</h4>
              <p>Rating</p>
            </div>
          </div>
          <p className="text-gray-500 mb-4">
            <span className="font-bold">info</span> Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quo fugiat soluta quidem culpa. Ut ab
            nobis non fuga quo? Dolore in culpa est delectus tenetur enim
            eveniet ipsam dolor dolorum?
          </p>
          <button className="bg-red-500 text-white px-4 py-2 rounded-3xl">
            Detail
          </button>
        </div>
      </section>
      {/* testimonies */}
      <section className="max-w-5xl mx-auto my-5 p-10 text-center">
        <h4 className="text-xl font-bold">Testimonies</h4>
        <h3 className="text-3xl font-bold mb-5">What They Say About Us</h3>
        <div className="md:flex md:justify-between mt-16 space-x-8">
          {/* person1  */}
          <div className="bg-gray-100 md:w-1/3 rounded-md border border-gray-200">
            <Image
              src={person1}
              className="w-16 rounded-full mx-auto -mt-8"
              alt=""
            />
            <h5 className="font-bold pt-5">John Saleh</h5>
            <p className="p-5 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa et
              non ab, dolorum magni dolore nesciunt accusamus quae autem tenetur
              enim ipsam temporibus, fugiat officia ratione vitae dolorem
              laudantium similique?
            </p>
          </div>
          {/* person2  */}
          <div className="bg-gray-100 md:w-1/3 rounded-md border border-gray-200">
            <Image
              src={person2}
              className="w-16 rounded-full mx-auto -mt-8"
              alt=""
            />
            <h5 className="font-bold pt-5">Bob Smith</h5>
            <p className="p-5 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa et
              non ab, dolorum magni dolore nesciunt accusamus quae autem tenetur
              enim ipsam temporibus, fugiat officia ratione vitae dolorem
              laudantium similique?
            </p>
          </div>
          {/* person3  */}
          <div className="bg-gray-100 md:w-1/3 rounded-md border border-gray-200">
            <Image
              src={person3}
              className="w-16 rounded-full mx-auto -mt-8"
              alt=""
            />
            <h5 className="font-bold pt-5">Alex White</h5>
            <p className="p-5 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa et
              non ab, dolorum magni dolore nesciunt accusamus quae autem tenetur
              enim ipsam temporibus, fugiat officia ratione vitae dolorem
              laudantium similique?
            </p>
          </div>
        </div>
        <button className="bg-red-500 text-white px-4 py-2 rounded-3xl mt-6">
          See All Testimonies
        </button>
      </section>
    </>
  );
}
