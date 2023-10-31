import Image from "next/image";
import Link from "next/link";
// import { parseISO, format } from "date-fns";
import { MdNoPhotography } from "react-icons/md";
import Card from "@/components/utils/Card";
import CardImage from "./../../../utils/CardImage";
import CardContent from "./../../../utils/CardContent";

export default function Blog({ blog, aspect, preloadImage }) {
  const imageProps = blog?.mainImage ? blog.mainImage : null;
  const AuthorimageProps = blog?.author?.image ? blog.author.image : null;
  return (
    <Link href={`/blog/${blog.slug.current}`}>
      <Card className="cursor-pointer bg-white shadow-lg rounded-lg gap-1 w-[100%]">
        <CardImage className=" rounded-lg ">
          <Link href={`/blog/${blog.slug.current}`}>
            {imageProps ? (
              <Image
                src={imageProps}
                className="transition-all rounded-lg w-[100%]"
              />
            ) : (
              <span className="absolute w-16 h-16 text-gray-200 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <MdNoPhotography />
              </span>
            )}
          </Link>
        </CardImage>
        <CardContent className="gap-[0.5rem]">
          <div className="flex gap-3">
            {blog.categories?.length &&
              blog.categories.slice(0).map((category, index) => (
                <Link href={`blog/${blog.slug.current}`} key={index}>
                  <span
                    className={`inline-block mt-5 text-xs font-medium  uppercase py-1 px-2 text-gray-100 rounded-md bg-${
                      category.color ? `[${category.color}]` : "green-500"
                    } bg-green-500`}>
                    {category.title}
                  </span>
                </Link>
              ))}
          </div>
          <h2 className="text-[1rem]">
            <span className="text-gray-700 text-sm">{blog.title}</span>
          </h2>

          <div className="hidden">
            {blog.excerpt && (
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 line-clamp-3">
                <Link href={`/blog/${blog.slug.current}`}>{blog.excerpt}</Link>
              </p>
            )}
          </div>

          <div className="flex items-center justify-between items-centerspace-x-3 text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-3">
              <div className="relative flex-shrink-0 w-5 h-5">
                {blog.author.image && (
                  <Image
                    src={AuthorimageProps.src}
                    blurDataURL={AuthorimageProps.blurDataURL}
                    loader={AuthorimageProps.loader}
                    objectFit="cover"
                    layout="fill"
                    alt={blog?.author?.name}
                    placeholder="blur"
                    sizes="30px"
                    className="rounded-full"
                  />
                )}
              </div>
              <span className="text-xs">{blog.author.name}</span>
            </div>
            <span className="text-xs text-gray-300 dark:text-gray-600">
              &bull;
            </span>
            <time
              className="text-xs"
              dateTime={blog?.publishedAt || blog.createdAt}>
              {blog.publishedAt || blog.createdAt}
            </time>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
