import { Children } from "react";
import { Fragment } from "react";
import Container from "./Container";
import Section from "./Section";

const Breadcrumb = ({ children }) => {
  const childrenArray = Children.toArray(children);

  const childrenWtihSeperator = childrenArray.map((child, index) => {
    if (index !== childrenArray.length - 1) {
      return (
        <Fragment key={index}>
          {child}
          <span>/</span>
        </Fragment>
      );
    }
    return child;
  });

  return (
    <Section className="py-[1rem] my-[1rem] bg-gray-100 sm:py-[2rem] md:mb-[2rem] md:text-lg">
      <Container className="mx-auto  flex items-center" aria-label="breadcrumb">
        <ol className="flex justify-start items-start space-x-4 flex-wrap">
          {childrenWtihSeperator}
        </ol>
      </Container>
    </Section>
  );
};

export default Breadcrumb;
