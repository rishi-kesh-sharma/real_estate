import tw from "tailwind-styled-components";

const Container = tw.div`
h-auto
w-[90%]
mx-auto
xl:w-[75%]
${({ className }) => className}
`;

export default Container;
