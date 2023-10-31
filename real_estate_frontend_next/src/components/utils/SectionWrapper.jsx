import tw from "tailwind-styled-components";

const SectionWrapper = tw.section`
h-auto
w-[100vw]
${({ className }) => className}
`;

export default SectionWrapper;
