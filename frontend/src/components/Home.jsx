import React from "react";
import { Link } from "react-router-dom";
import { BookIcon, PlusIcon, SearchIcon, ShuffleIcon } from "lucide-react";
import Header from "./Header";

function Home() {
  return (
    <>
      <div className="flex flex-col min-h-[100dvh]">
        {/* <header className="text-primary-foreground px-4 lg:px-6 h-16 flex items-center justify-between">
          <Link href="#" className="flex items-center gap-2 font-bold">
            <BookIcon className="h-6 w-6" />
            Book Exchange
          </Link>
          <nav className="flex items-center gap-4 sm:gap-6">
            <Link
              to="/register"
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary-foreground px-4 py-2 text-sm font-medium text-primary shadow transition-colors hover:bg-orange-700 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Register
            </Link>
            <Link
              to="/login"
              className="inline-flex h-9 items-center justify-center rounded-md border border-primary-foreground bg-orange-700 px-4 py-2 text-sm text-white font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Log in
            </Link>
          </nav>
        </header> */}
        <Header />
        <main className="flex flex-col justify-center items-center">
          {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-hero-image bg-fixed bg-cover bg-bottom">
            <div className="container px-4 md:px-6 text-center text-primary-foreground">
              <h1 className="text-orange-500 text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Discover and Exchange Books
              </h1>
              <p className="text-white max-w-[700px] mx-auto text-lg md:text-xl mt-4">
                Join our community of book lovers and exchange your favorite
                reads with others.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <Link
                  to="/login"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-orange-400 hover:bg-orange-500 px-8 text-sm text-white font-medium text-primary shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </section> */}
          <section
            className="w-full py-12 md:py-24 lg:py-32 bg-cover bg-center bg-fixed relative"
            style={{
              backgroundImage: "url('/hero-section.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-blue-950 opacity-80 clip-path-polygon"></div>
            <div className="container px-4 md:px-6 text-center text-primary-foreground relative z-10">
              <h1 className="text-orange-500 text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Discover and Exchange Books
              </h1>
              <p className="text-white max-w-[700px] mx-auto text-lg md:text-xl mt-4">
                Join our community of book lovers and exchange your favorite
                reads with others.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <Link
                  to="/login"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-orange-400 hover:bg-orange-500 px-8 text-sm text-white font-medium text-primary shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </section>
          <section className="bg-white py-16 w-[1200px]">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap items-center">
                <div
                  className="w-full lg:w-1/2 mb-12 lg:mb-0 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="flex flex-wrap">
                    <div className="w-1/2 p-2">
                      <div className="relative">
                        <img
                          className="mb-6 rounded-lg"
                          src="images/about/about1.jpg"
                          alt="About 1"
                        />
                      </div>
                    </div>
                    <div className="w-1/2 p-2">
                      <div className="relative mb-4">
                        <img
                          className="mb-4 rounded-lg"
                          src="images/about/about2.jpg"
                          alt="About 2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="w-full lg:w-1/2 mb-12 lg:mb-0 wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div className="px-4 lg:px-8">
                    <div className="mb-8">
                      <h2 className="text-5xl font-semibold mb-4 text-blue-950">
                        Discover and Exchange Books
                      </h2>
                      <p className="text-gray-600">
                        Join our community of book lovers and exchange your
                        favorite reads with others.
                      </p>
                    </div>
                    <a
                      href="/discover"
                      className="bg-orange-400 text-white py-2 px-4 rounded-lg shadow hover:bg-orange-500"
                    >
                      Discover Books
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container px-4 md:px-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-3xl font-bold tracking-tighter">
                    Discover New Books
                  </h2>
                  <p className="mt-4 text-muted-foreground">
                    Browse our collection of books across various genres and
                    find your next read.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 mt-6"
                  >
                    Explore Books
                  </Link>
                </div>
                <div>
                  <h2 className="text-3xl font-bold tracking-tighter">
                    List Your Books
                  </h2>
                  <p className="mt-4 text-muted-foreground">
                    Share your books with the community and find new homes for
                    them.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 mt-6"
                  >
                    List a Book
                  </Link>
                </div>
              </div>
            </div>
          </section> */}
          {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container px-4 md:px-6">
              <div className="grid md:grid-cols-2 gap-8">
                
                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 flex flex-col items-center">
                  <h2 className="text-3xl font-bold tracking-tighter text-center mb-4">
                    Discover New Books
                  </h2>
                  <p className="mt-4 text-muted-foreground text-center mb-6">
                    Browse our collection of books across various genres and
                    find your next read.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Explore Books
                  </Link>
                </div>

                
                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 flex flex-col items-center">
                  <h2 className="text-3xl font-bold tracking-tighter text-center mb-4">
                    List Your Books
                  </h2>
                  <p className="mt-4 text-muted-foreground text-center mb-6">
                    Share your books with the community and find new homes for
                    them.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    List a Book
                  </Link>
                </div>
              </div>
            </div>
          </section> */}
          <section className="bg-gray-100 py-16 w-[1200px]">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-5xl font-semibold mb-4 text-blue-950">
                  Our Mission
                </h2>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris
                </p>
              </div>
              <div className="flex flex-wrap -mx-4">
                <div
                  className="w-full lg:w-1/3 md:w-1/2 px-4 mb-8 wow fadeInUp border-2 border-transparent hover:border-orange-400 rounded-lg transition duration-300 ease-in-out"
                  data-wow-delay="0.2s"
                >
                  <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                    <div className="text-4xl mb-4">
                      {/* <i className="flaticon-open-book-1"></i> */}
                      <SearchIcon className="h-12 w-12 mx-auto text-blue-950 hover:text-orange-400" />
                    </div>
                    <div className="icon-content">
                      <h4 className="text-xl font-semibold mb-2 text-blue-950">
                        Discover Books
                      </h4>
                      <p className="text-gray-600 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                      {/* <a
                        href="about-us.html"
                        className="text-blue-500 hover:underline flex items-center justify-center"
                      >
                        Learn More <FaAngleRight className="ml-2" />
                      </a> */}
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/3 md:w-1/2 px-4 mb-8 wow fadeInUp border-2 border-transparent hover:border-orange-400 rounded-lg transition duration-300 ease-in-out">
                  <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                    <div className="text-4xl mb-4">
                      <PlusIcon className="h-12 w-12 mx-auto text-blue-950 hover:text-orange-400" />
                      {/* <i className="flaticon-exclusive"></i> */}
                    </div>
                    <div className="icon-content">
                      <h4 className="text-xl font-semibold mb-2 text-blue-950">
                        List Your Books
                      </h4>
                      <p className="text-gray-600 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                      {/* <a
                        href="about-us.html"
                        className="text-blue-500 hover:underline flex items-center justify-center"
                      >
                        Learn More <FaAngleRight className="ml-2" />
                      </a> */}
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/3 md:w-1/2 px-4 mb-8 wow fadeInUp border-2 border-transparent hover:border-orange-400 rounded-lg transition duration-300 ease-in-out">
                  <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                    <div className="text-4xl mb-4">
                      <ShuffleIcon className="h-12 w-12 mx-auto text-blue-950 hover:text-orange-400" />
                      {/* <i className="flaticon-store"></i> */}
                    </div>
                    <div className="icon-content">
                      <h4 className="text-xl font-semibold mb-2 text-blue-950">
                        Exchange Books
                      </h4>
                      <p className="text-gray-600 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                      {/* <a
                        href="about-us.html"
                        className="text-blue-500 hover:underline flex items-center justify-center"
                      >
                        Learn More <FaAngleRight className="ml-2" />
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <div className="bg-blue-950 text-white py-6">
          <div className="container mx-auto px-4 w-[1080px]">
            <div className="flex flex-wrap items-center justify-between">
              <div className="w-full lg:w-1/2 text-left mb-4 lg:mb-0">
                <p className="text-sm">
                  Book Exchange Platform - © 2024 All Rights Reserved
                </p>
              </div>
              <div className="w-full lg:w-1/2 text-right">
                <p className="text-sm">
                  Made with <span className="text-red-500">♥</span> by Sakhi
                  Rotliwala
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-6">
          Welcome to Book Exchange Platform
        </h1>
        <div>
          <Link
            to="/register"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg mr-4"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="px-4 py-2 bg-green-500 text-white rounded-lg"
          >
            Sign In
          </Link>
        </div>
      </div> */}
    </>
  );
}

export default Home;
