import Image from "next/image";
import Link from "next/link";
// import { parseISO, format } from "date-fns";
import { MdNoPhotography } from "react-icons/md";
import Card from "./../../utils/Card";
import CardImage from "./../../utils/CardImage";
import CardContent from "./../../utils/CardContent";

export default function Blog({ blog, aspect, preloadImage }) {
  const imageProps = blog?.mainImage ? blog.mainImage : null;
  const AuthorimageProps = blog?.author?.image ? blog.author.image : null;
  return (
    <Card className="bg-white gap-0 w-[100%]">
      <CardImage className="w-[100%]">
        <Link href={`/blog/${blog?.slug?.current}`}>
          {imageProps ? (
            <Image src={imageProps} />
          ) : (
            <span className="absolute w-16 h-16 text-gray-200 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <MdNoPhotography />
            </span>
          )}
        </Link>
      </CardImage>
      <CardContent className="flex gap-0 flex-col items-start">
        <div>
          {blog.categories?.length &&
            blog.categories.slice(0).map((category, index) => (
              <Link href={`/blog/${blog?.slug?.current}`} key={index}>
                <span
                  className={`inline-block mt-5 text-xs font-medium tracking-wider uppercase py-1 px-2 text-gray-500 rounded-sm bg-${category.color ? `[${category.color}]` : "green-500"
                    } bg-green-300`}>
                  {category.title}
                </span>
              </Link>
            ))}
        </div>
        <h2 className="text-gray-600 text-sm text-start font-semibold tracking-normal text-brand-primary dark:">
          <Link href={`/blog/${blog.slug.current}`}>
            <span
              className=" text-gray-600 bg-gradient-to-r from-green-200 to-green-100 dark:from-purple-800 dark:to-purple-900
          bg-[length:0px_10px]
          bg-left-bottom
          bg-no-repeat
          transition-[background-size]
          duration-500
          hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
              {blog.title}
            </span>
          </Link>
        </h2>

        <div className="hidden">
          {blog.excerpt && (
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 line-clamp-3">
              <Link href={`/blog/${blog.slug.current}`}>{blog.excerpt}</Link>
            </p>
          )}
        </div>

        <div className="flex items-center mt-3 space-x-3 text-gray-500 dark:text-gray-400">
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
            <span className="text-sm">{blog.author.name}</span>
          </div>
          <span className="text-xs text-gray-300 dark:text-gray-600">
            &bull;
          </span>
          <time
            className="text-sm"
            dateTime={blog?.publishedAt || blog.createdAt}>
            {blog.publishedAt || blog.createdAt}
          </time>
        </div>
      </CardContent>
    </Card>
  );
}
