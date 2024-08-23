import React from "react";
import { Link } from "react-router-dom";
import { BookIcon, PlusIcon, SearchIcon, ShuffleIcon } from "lucide-react";

function Home() {
  return (
    <>
      <div className="flex flex-col min-h-[100dvh]">
        <header className="text-primary-foreground px-4 lg:px-6 h-16 flex items-center justify-between">
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
        </header>
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 bg-hero-image bg-fixed bg-cover bg-bottom">
            <div className="container px-4 md:px-6 text-center text-primary-foreground">
              <h1 className="text-orange-700 text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Discover and Exchange Books
              </h1>
              <p className="text-white max-w-[700px] mx-auto text-lg md:text-xl mt-4">
                Join our community of book lovers and exchange your favorite
                reads with others.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <Link
                  to="/login"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-orange-700 px-8 text-sm text-white font-medium text-primary shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Get Started
                </Link>
                <Link
                  to="/login"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-400 bg-primary px-8 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-orange-700 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  List a Book
                </Link>
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
          <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container px-4 md:px-6">
              <div className="grid md:grid-cols-2 gap-8">
                {/* <!-- Card 1 --> */}
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

                {/* <!-- Card 2 --> */}
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
          </section>

          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tighter">
                  How it Works
                </h2>
                <p className="max-w-[700px] mx-auto mt-4 text-muted-foreground">
                  Our simple and intuitive process makes it easy to discover,
                  list, and exchange books with other members.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8 mt-8">
                <div className="text-center">
                  <SearchIcon className="h-12 w-12 mx-auto text-primary" />
                  <h3 className="text-xl font-bold mt-4">Discover Books</h3>
                  <p className="mt-2 text-muted-foreground">
                    Browse our extensive collection of books and find your next
                    great read.
                  </p>
                </div>
                <div className="text-center">
                  <PlusIcon className="h-12 w-12 mx-auto text-primary" />
                  <h3 className="text-xl font-bold mt-4">List Your Books</h3>
                  <p className="mt-2 text-muted-foreground">
                    Share your books with the community and find new homes for
                    them.
                  </p>
                </div>
                <div className="text-center">
                  <ShuffleIcon className="h-12 w-12 mx-auto text-primary" />
                  <h3 className="text-xl font-bold mt-4">Exchange Books</h3>
                  <p className="mt-2 text-muted-foreground">
                    Connect with other book lovers and exchange your favorite
                    reads.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="bg-muted text-muted-foreground px-4 md:px-6 py-6">
          <div className="container flex items-center justify-between">
            <p className="text-sm">
              &copy; 2024 Book Exchange. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-sm hover:underline">
                About
              </Link>
              <Link href="#" className="text-sm hover:underline">
                Contact
              </Link>
            </div>
          </div>
        </footer>
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
