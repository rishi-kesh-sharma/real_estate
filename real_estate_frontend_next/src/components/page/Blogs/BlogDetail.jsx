import { baseUrl, staticUrl } from "@/apiCalls/constants";
import moment from "moment";
import Link from "next/link";
import React from "react";
import { blogs } from "@/data/Data";
import Image from "next/image";
import Container from "@/components/utils/Container";

const Blog = ({
  blog: {
    meta_tag,
    tags,
    author,
    mainImage,
    keywords,
    categories,
    _id,
    description,
    added_by,
    short_description,
    slug_url,
    title,
    published_on,
    added_at,
  },
}) => {
  //   const { data, loading, errors } = useFetch(
  //     `/blog/blogbycat/${category[0].slug_url}`
  //   );
  const relatedBlogs = blogs;
  return (
    <div>
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white w-[97%] mx-auto">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue">
            <header className="mb-4 lg:mb-6 not-format">
              <address className="flex items-center mb-6 not-italic">
                <div className="inline-flex items-center mr-3 text-sm text-gray-900">
                  {/* <img
                    className="mr-4 w-16 h-16 rounded-full"
                    src={`${staticUrl}/${author[0]?.image?.path}`}
                    alt={author[0]?.name}
                  /> */}
                  <Image
                    src={author?.image}
                    className="mr-4 w-16 h-16 rounded-full"
                  />
                  <div>
                    <a
                      href="#"
                      rel="author[0]"
                      className="text-xl font-bold text-gray-900">
                      {author[0]?.name}
                    </a>
                    <p className="text-base font-light text-gray-500 ">
                      Graphic Designer, educator & CEO
                    </p>
                    <p className="text-base font-light text-gray-500 ">
                      <time
                        pubdate
                        datetime="2022-02-08"
                        title="February 8th, 2022">
                        {moment(published_on).fromNow()}
                      </time>
                    </p>
                  </div>
                </div>
              </address>
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl">
                {title}
              </h1>
            </header>

            <figure>
              {/* <img
                src={`${staticUrl}/${image?.path}`}
                alt=""
                className="rounded-lg my-[2rem]"
              /> */}
              <Image src={mainImage} className="rounded-lg my-[2rem]" />
            </figure>

            <section className="text-gray-500 text-sm my-6">
              <p>{short_description}</p>
              <p>{description}</p>
            </section>

            <section className="flex flex-col gap-3">
              <div className="flex ">
                {categories.map((item, index) => {
                  return (
                    <p
                      key={item?.title}
                      className="p-2 bg-green-100 rounded-sm text-gray-600">
                      {item.title}
                    </p>
                  );
                })}
              </div>
              <div className="flex gap-3 ">
                {tags.map((item) => {
                  return (
                    <p
                      key={item?.title}
                      className="p-2 bg-yellow-200 rounded-sm text-gray-600">
                      {item.title}
                    </p>
                  );
                })}
              </div>
              <div className="flex gap-3 ">
                {keywords.map((item) => {
                  return (
                    <p
                      key={item?.title}
                      className="p-2 bg-red-200 rounded-sm text-gray-600">
                      {item.title}
                    </p>
                  );
                })}
              </div>
              <div className="flex  gap-3">
                {meta_tag.map((item) => {
                  return (
                    <p
                      key={item?.title}
                      className="p-2 bg-blue-200 rounded-sm text-gray-600">
                      {item.title}
                    </p>
                  );
                })}
              </div>
            </section>

            <section className="not-format mt-5">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg lg:text-2xl font-bold text-gray-900">
                  Discussion (20)
                </h2>
              </div>
              <form className="mb-6">
                <div className="py-2 px-4  bg-white rounded-lg rounded-t-lg border border-gray-200 ">
                  <label for="comment" className="sr-only">
                    Your comment
                  </label>
                  <textarea
                    id="comment"
                    rows="6"
                    className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0  "
                    placeholder="Write a comment..."
                    required></textarea>
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-primary-800">
                  Post comment
                </button>
              </form>
              <article className="p-2 mb-6 text-base bg-white rounded-lg">
                <footer className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <p className="inline-flex items-center mr-3 text-sm text-gray-900">
                      <img
                        className="mr-2 w-6 h-6 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                        alt="Michael Gough"
                      />{" "}
                      Michael
                    </p>
                    <p className="text-sm text-gray-600 ">
                      <time
                        pubdate
                        datetime="2022-02-08"
                        title="February 8th, 2022">
                        Feb. 8, 2022
                      </time>
                    </p>
                  </div>
                  <button
                    id="dropdownComment1Button"
                    data-dropdown-toggle="dropdownComment1"
                    className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 "
                    type="button">
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
                    </svg>
                    <span className="sr-only">Comment settings</span>
                  </button>
                  <div
                    id="dropdownComment1"
                    className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow">
                    <ul
                      className="py-1 text-sm text-gray-700"
                      aria-labelledby="dropdownMenuIconHorizontalButton">
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-10">
                          Edit
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-10">
                          Remove
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-10">
                          Report
                        </a>
                      </li>
                    </ul>
                  </div>
                </footer>
                <p>
                  Very straight-to-point article. Really worth time reading.
                  Thank you! But tools are just the instruments for the UX
                  designers. The knowledge of the design tools are as important
                  as the creation of the design strategy.
                </p>
                <div className="flex items-center mt-4 space-x-4">
                  <button
                    type="button"
                    className="flex items-center text-sm text-gray-500 hover:underline ">
                    <svg
                      aria-hidden="true"
                      className="mr-1 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        strokeWidth="2"
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                    </svg>
                    Reply
                  </button>
                </div>
              </article>
              <article className="p-6 mb-6 ml-6 lg:ml-12 text-base bg-white rounded-lg">
                <footer className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <p className="inline-flex items-center mr-3 text-sm text-gray-900">
                      <img
                        className="mr-2 w-6 h-6 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                        alt="Jese Leos"
                      />
                      Jese Leos
                    </p>
                    <p className="text-sm text-gray-600 ">
                      <time
                        pubdate
                        datetime="2022-02-12"
                        title="February 12th, 2022">
                        Feb. 12, 2022
                      </time>
                    </p>
                  </div>
                  <button
                    id="dropdownComment2Button"
                    data-dropdown-toggle="dropdownComment2"
                    className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 "
                    type="button">
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
                    </svg>
                    <span className="sr-only">Comment settings</span>
                  </button>
                  <div
                    id="dropdownComment2"
                    className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow">
                    <ul
                      className="py-1 text-sm text-gray-700"
                      aria-labelledby="dropdownMenuIconHorizontalButton">
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-10">
                          Edit
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-10">
                          Remove
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-10">
                          Report
                        </a>
                      </li>
                    </ul>
                  </div>
                </footer>
                <p>Much appreciated! Glad you liked it ☺️</p>
                <div className="flex items-center mt-4 space-x-4">
                  <button
                    type="button"
                    className="flex items-center text-sm text-gray-500 hover:underline ">
                    <svg
                      aria-hidden="true"
                      className="mr-1 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        // strokeWidth="round"
                        strokeWidth="2"
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                    </svg>
                    Reply
                  </button>
                </div>
              </article>
              <article className="p-6 mb-6 text-base bg-white border-t border-gray-200">
                <footer className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <p className="inline-flex items-center mr-3 text-sm text-gray-900">
                      <img
                        className="mr-2 w-6 h-6 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                        alt="Bonnie Green"
                      />
                      Bonnie Green
                    </p>
                    <p className="text-sm text-gray-600 ">
                      <time
                        pubdate
                        datetime="2022-03-12"
                        title="March 12th, 2022">
                        Mar. 12, 2022
                      </time>
                    </p>
                  </div>
                  <button
                    id="dropdownComment3Button"
                    data-dropdown-toggle="dropdownComment3"
                    className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 "
                    type="button">
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
                    </svg>
                    <span className="sr-only">Comment settings</span>
                  </button>
                  <div
                    id="dropdownComment3"
                    className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow">
                    <ul
                      className="py-1 text-sm text-gray-700"
                      aria-labelledby="dropdownMenuIconHorizontalButton">
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-10">
                          Edit
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-10">
                          Remove
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-10">
                          Report
                        </a>
                      </li>
                    </ul>
                  </div>
                </footer>
                <p>
                  The article covers the essentials, challenges, myths and
                  stages the UX designer should consider while creating the
                  design strategy.
                </p>
                <div className="flex items-center mt-4 space-x-4">
                  <button
                    type="button"
                    className="flex items-center text-sm text-gray-500 hover:underline ">
                    <svg
                      aria-hidden="true"
                      className="mr-1 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        strokeWidth="round"
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                    </svg>
                    Reply
                  </button>
                </div>
              </article>
              <article className="p-6 text-base bg-white border-t border-gray-200">
                <footer className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <p className="inline-flex items-center mr-3 text-sm text-gray-900">
                      <img
                        className="mr-2 w-6 h-6 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                        alt="Helene Engels"
                      />
                      Helene Engels
                    </p>
                    <p className="text-sm text-gray-600 ">
                      <time
                        pubdate
                        datetime="2022-06-23"
                        title="June 23rd, 2022">
                        Jun. 23, 2022
                      </time>
                    </p>
                  </div>
                  <button
                    id="dropdownComment4Button"
                    data-dropdown-toggle="dropdownComment4"
                    className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 "
                    type="button">
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
                    </svg>
                  </button>
                  <div
                    id="dropdownComment4"
                    className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow">
                    <ul
                      className="py-1 text-sm text-gray-700"
                      aria-labelledby="dropdownMenuIconHorizontalButton">
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-10">
                          Edit
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-10">
                          Remove
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-10">
                          Report
                        </a>
                      </li>
                    </ul>
                  </div>
                </footer>
                <p>
                  Thanks for sharing this. I do came from the Backend
                  development and explored some of the tools to design my Side
                  Projects.
                </p>
                <div className="flex items-center mt-4 space-x-4">
                  <button
                    type="button"
                    className="flex items-center text-sm text-gray-500 hover:underline ">
                    <svg
                      aria-hidden="true"
                      className="mr-1 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        strokeWidth="2"
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                    </svg>
                    Reply
                  </button>
                </div>
              </article>
            </section>
          </article>
        </div>
      </main>

      <Container className="">
        <aside
          aria-label="Related articles"
          className="py-8 lg:py-24 bg-gray-50 ">
          <div className="px-4 mx-auto">
            <h2 className="mb-8 text-2xl font-bold text-gray-900">
              Related articles
            </h2>
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
              {relatedBlogs?.map((item) => {
                return (
                  <article key={item?._id} className="max-w-xs">
                    <a href="#">
                      <Image
                        src={item.mainImage}
                        className="mb-5 rounded-lg max-h-[150px]"
                      />
                    </a>
                    <h2 className="mb-2 text-md font-semibold leading-tight text-gray-900">
                      <Link href={`/blog/${item?.slug_url || item?._id}`}>
                        {item?.title}
                      </Link>
                    </h2>
                    <p className="mb-4 font-light text-gray-500  text-xs">
                      {item?.short_description || item?.description}
                    </p>
                    <Link
                      className="text-sm"
                      href={`/blog/${item?.slug?.current || item?._id}`}>
                      Read in 2 minutes
                    </Link>
                    <div className="flex items-center justify-between space-x-3 space-y-3 text-gray-500  mt-3">
                      <div className="flex items-center gap-5">
                        <div className="relative flex-shrink-0 w">
                          {author?.image && (
                            // <img
                            //   src={`${staticUrl}/${author[0]?.image?.path}`}
                            //   alt={item?.author[0]?.name}
                            //   className="rounded-full h-[40px] w-[40px] object-cover "
                            // />
                            <Image
                              src={item.author.image}
                              className="rounded-full h-[40px] w-[40px] object-cover "
                            />
                          )}
                        </div>
                        <span className="text-xs">{author[0]?.name}</span>
                      </div>
                      <span className="text-xs text-gray-300">&bull;</span>
                      <time
                        className="text-xs"
                        dateTime={item?.published_on || item.added_at}>
                        {moment(item.published_on).fromNow()}
                      </time>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </aside>
      </Container>

      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md sm:text-center">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Sign up for our newsletter
            </h2>
            <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl ">
              Stay up to date with the roadmap progress, announcements and
              exclusive discounts feel free to sign up with your email.
            </p>
            <form action="#">
              <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                <div className="relative w-full">
                  <label
                    for="email"
                    className="hidden mb-2 text-sm font-medium text-gray-900">
                    Email address
                  </label>
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <input
                    className="block p-3 pl-10 w-full text-sm text-gray-900 focus:ring bg-white rounded-lg  border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 border border-1 ring"
                    placeholder="Enter your email"
                    type="email"
                    id="email"
                    required=""
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="py-3 px-5 w-full text-sm font-medium text-center text-black rounded-lg  cursor-pointer bg-primary-700  sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 ring">
                    Subscribe
                  </button>
                </div>
              </div>
              <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer">
                We care about the protection of your data.{" "}
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline">
                  Read our Privacy Policy
                </a>
                .
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
