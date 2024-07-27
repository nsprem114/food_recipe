import FooterComp from "./FooterComp";
import NavbarComp from "./NavbarComp";

const AboutComp = () => {
  return (
    <div>
      <NavbarComp />
      <div className="container p-3">
        <h1 className="container text-center">ABOUT US</h1>
        <hr />
        <h3>About Food Recipe</h3>
        <div className="container p-1">
          <p>
            Welcome to Bite Size Dishes, your ultimate destination for
            discovering delicious and innovative recipes that bring joy to your
            kitchen. We are passionate about food and believe that cooking
            should be a delightful and rewarding experience for everyone,
            whether you are a seasoned chef or a home cook.
          </p>
          <hr />
          <h3>Our Mission</h3>
          <p>
            At Bite Size Dishes, our mission is to inspire culinary creativity
            by sharing a wide variety of recipes that are easy to follow, use
            fresh ingredients, and cater to diverse tastes and dietary
            preferences. We aim to make cooking enjoyable and accessible,
            providing you with the tips and techniques you need to create
            mouthwatering dishes.
          </p>
          <hr />
          <h3>What We Offer</h3>
          <ul>
            <li>
              Diverse Recipes: From quick weeknight dinners to gourmet meals,
              our extensive collection covers a wide range of cuisines and
              dietary needs.
            </li>
            <li>
              Expert Tips: Learn the secrets of the trade with our expert
              cooking tips and techniques that help you elevate your culinary
              skills.
            </li>
            <li>
              Healthy Choices: Discover nutritious and wholesome recipes that
              are as good for your body as they are for your taste buds.
            </li>
            <li>
              Seasonal Inspirations: Stay in tune with the seasons with our
              fresh, seasonal recipe ideas that make the most of what is
              available at the market.
            </li>
            <li>
              Community Connection: Join our vibrant community of food lovers,
              share your own creations, and get inspired by others.
            </li>
          </ul>
          <hr />
          <h3>Our Story</h3>
          <p>
            Bite Size Dishes was born out of a love for cooking and a desire to
            make good food accessible to all. We believe that anyone can cook
            delicious meals with the right guidance and a dash of inspiration.
            Our team of culinary enthusiasts works tirelessly to test and
            perfect each recipe, ensuring that you have a fantastic cooking
            experience every time.
          </p>
          <hr />
          <h3>Join Us on Our Culinary Journey</h3>
          <p>
            We invite you to explore our website, try out our recipes, and share
            your experiences with us. Whether you are looking for a new family
            favorite or an impressive dish for a special occasion, Fresh Recipe
            Tips is here to guide you every step of the way. Let us cook up
            something amazing together!
          </p>
        </div>
      </div>
      <FooterComp />
    </div>
  );
};

export default AboutComp;
