import FooterComp from "./FooterComp";
import NavbarComp from "./NavbarComp";

const ContactComp = () => {
  return (
    <div>
      <NavbarComp />
      <h1 className="text-center bg-primary p-3 text-white">CONTACT US</h1>
      <div className="p-3 container w-75 ">
        <h3>CONTACT US</h3>
        <p className="shadow-none p-3 bg-light rounded">
          Welcome to Bite Size Dishes, your ultimate destination for discovering
          delicious and innovative recipes that bring joy to your kitchen. We
          are passionate about food and believe that cooking should be a
          delightful and rewarding experience for everyone, whether you are a
          seasoned chef or a home cook.
        </p>
        <hr />
        <p className="shadow-none p-3 bg-light rounded">
          we have love to hear from you! Whether you have questions, feedback,
          or suggestions, feel free to reach out to us. Your input helps us make
          Tast Feast better every day.
        </p>
        <hr />
        <p className="shadow-none p-3 bg-light rounded">
          Join our vibrant community of food lovers and embark on a culinary
          journey like no other. Share your own creations, connect with fellow
          cooking enthusiasts, and discover new flavors and techniques that will
          elevate your cooking skills. At Bite Size Dishes, we’re more than just
          a recipe website – we’re a family that celebrates the art of cooking
          together.
        </p>
        <hr />
        <h4>Get in Touch</h4>
        <p className="shadow-none bg-light rounded">
          Email: CONTACT@BITESIZEDISHES.SITE
        </p>
      </div>
      <FooterComp />
    </div>
  );
};

export default ContactComp;
