import { useRouter } from "next/router";
import Blog from "./Blog";
import { blogs } from "@/data/Data";
import Heading from "@/components/utils/Heading";
import CardContainer from "@/components/utils/CardContainer";
import Section from "@/components/utils/Section";
import Container from "@/components/utils/Container";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBlog } from "@/store/features/blogSlice";

export default function Blogs() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlog({ populate: "author" }));
  }, [dispatch]);


  return (
    <Section className="  my-[2rem] py-[2rem] bg-gray-200">
      <Container>
        <Heading
          title="Our Blogs"
          subtitle="read our blogs"
          className={"text-[4rem]"}
        />
        {blogs && (
          <div className="mt-5 grid xs:grid-cols-2  gap-5  lg:grid-cols-3 xl:grid-cols-4">
            {blogs.map((blog) => (
              <Blog
                key={blog._id}
                blog={blog}
                aspect="landscape"
                preloadImage={true}
              />
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
}
