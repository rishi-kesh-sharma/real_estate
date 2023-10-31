import Footer from "../partials/Footer";
import Header from "../partials/header";

export default function NormalLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
