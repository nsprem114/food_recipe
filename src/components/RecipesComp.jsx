import NavbarComp from "./NavbarComp";
import img1 from "../assets/Images/img1.jpg";
import img2 from "../assets/Images/img2.jpg";
import img3 from "../assets/Images/img3.jpg";
import FooterComp from "./FooterComp";

const RecipesComp = () => {
  const SliderData = [
    {
      id: 1,
      name: "Veg Burger Recipe",
      image: img1,
      desc: "A vibrant blend of fresh fruits, this mixed fruit salad is refreshing, nutritious, and perfect for any time of the day.",
    },
    {
      id: 2,
      name: "Morning Breakfast Recipe",
      image: img2,
      desc: "A wholesome morning meal with toasted bread, sliced banana, and a cup of freshly brewed coffee for a nutritious start.",
    },
    {
      id: 3,
      name: "Lunch Cooking Recipe",
      image: img3,
      desc: "A delightful vegetarian lunch: stir-fried vegetables, fragrant basmati rice, spiced lentils, and fresh cucumber salad.",
    },
    {
      id: 1,
      name: "Veg Burger Recipe",
      image: img1,
      desc: "A vibrant blend of fresh fruits, this mixed fruit salad is refreshing, nutritious, and perfect for any time of the day.",
    },
    {
      id: 2,
      name: "Morning Breakfast Recipe",
      image: img2,
      desc: "A wholesome morning meal with toasted bread, sliced banana, and a cup of freshly brewed coffee for a nutritious start.",
    },
    {
      id: 3,
      name: "Lunch Cooking Recipe",
      image: img3,
      desc: "A delightful vegetarian lunch: stir-fried vegetables, fragrant basmati rice, spiced lentils, and fresh cucumber salad.",
    },
  ];
  return (
    <div>
      <NavbarComp />
      <div className="container">
        <h1 className="bg-danger p-3 text-white">Tasty Food Recipe</h1>
      </div>
      <div className="row">
        {SliderData.map((data) => (
          <div
            key={data.id}
            className="col-md-4 d-flex justify-content-center p-2"
          >
            <div className="card" style={{ width: "18rem" }}>
              <img src={data.image} alt="" />
              <div className="card-body">
                <h5 className="card-title text-center">{data.name}</h5>
                <hr />
                <p className="card-text p-1 text-center">{data.desc}</p>
                <button
                  href="#"
                  className="btn btn-primary d-flex justify-content-center m-auto"
                >
                  Continue Reading
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <FooterComp />
    </div>
  );
};

export default RecipesComp;
