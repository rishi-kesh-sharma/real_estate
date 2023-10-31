import tw from "tailwind-styled-components";

const Card = tw.div`
 px-[0.4rem]
 py-[0.4rem]
 rounded-md
 flex
 flex-col
 justify-center
 items-center
 gap-[1rem]
 shadow-md
 transition-all
 
 ${({ className }) => className}
`;
export default Card;
