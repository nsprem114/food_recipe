import img1 from "../assets/Images/img1.jpg";
import img2 from "../assets/Images/img2.jpg";
import img3 from "../assets/Images/img3.jpg";

const SliderComp = () => {
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
  ];
  return (
    <div className="container mb-5">
      <h1 className="text-center mb-3 mt-3">Tasty Food Recipes</h1>
      <div className="d-flex justify-content-center">
        <img src={img3} alt="" style={{ width: "75%" }} />
      </div>
      <p
        className="p-5 text-center bg-light"
        style={{ fontFamily: "Times New Roman" }}
      >
        Experience culinary delight with our scrumptious food recipes that cater
        to every taste bud. From savory starters to delectable desserts, our
        collection offers a diverse range of flavors, textures, and ingredients.
        Indulge in the richness of homemade dishes that blend traditional
        techniques with modern twists. Whether you are a seasoned chef or a
        kitchen novice, our easy-to-follow recipes ensure a delicious outcome
        every time. Discover the joy of cooking with fresh, wholesome
        ingredients and creative combinations that will elevate your meals.
        Savor each bite and bring a touch of gourmet to your home with our
        mouthwatering recipes.
      </p>
      <div className="row">
        {SliderData.map((data) => (
          <div key={data.id} className="col-md-4 d-flex justify-content-center">
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
    </div>
  );
};

export default SliderComp;
