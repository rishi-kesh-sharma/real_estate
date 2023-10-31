import { useRouter } from "next/router";
import Blog from "./Blog";
import { blogs } from "@/data/Data";
import CardContainer from "@/components/utils/CardContainer";
import Container from "@/components/utils/Container";

export default function blog(props) {
  return (
    <div className="pt-[2rem] bg-gray-100  text-center text-green-700 text-[2.5rem] pb-10">
      <h1>Our Blogs</h1>
      {blogs && (
        <Container className="mt-5 grid xs:grid-cols-1 sm:grid-cols-2   gap-5  lg:grid-cols-3 xl:grid-cols-4">
          {blogs.map((blog) => (
            <Blog key={blog._id} blog={blog} aspect="square" />
          ))}
        </Container>
      )}
    </div>
  );
}
