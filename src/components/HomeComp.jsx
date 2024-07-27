import FooterComp from "./FooterComp";
import NavbarComp from "./NavbarComp";
import SliderComp from "./SliderComp";

const HomeComp = () => {
  return (
    <div className="container-fluid">
      <NavbarComp />
      {}
      <SliderComp />
      <FooterComp />
    </div>
  );
};

export default HomeComp;
