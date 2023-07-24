import React from "react";

const Catg = () => {
  const data = [
    {
      cateImg:
        "https://cdn.iconscout.com/icon/free/png-64/apple-316-226435.png",
      cateName: "Apple",
    },
    {
      cateImg: "https://cdn.iconscout.com/icon/free/png-64/samsung-226432.png",
      cateName: "Samasung",
    },
    {
      cateImg: "https://cdn.iconscout.com/icon/free/png-64/bbm-1-226433.png",
      cateName: "Blackberry",
    },
    {
      cateImg: "https://cdn.iconscout.com/icon/free/png-64/motorola-226419.png",
      cateName: "Motorolla",
    },
    {
      cateImg: "https://cdn.iconscout.com/icon/free/png-64/sony-1-226424.png",
      cateName: "Sony",
    },
    {
      cateImg: "https://cdn.iconscout.com/icon/free/png-64/htc-226427.png",
      cateName: "htc",
    },
  ];
  return (
    <>
      <div className="category">
        <div className="chead d_flex">
          <h1>Our Brands</h1>
        </div>
        <marquee direction="up" className="home_brands_marq">
          {data.map((value, index) => {
            return (
              <div className="box f_flex mb2" key={index}>
                <img src={value.cateImg} alt="" />
                <span>{value.cateName}</span>
              </div>
            );
          })}
        </marquee>
        {/* <div className="box box2">
          <button>View All Brands</button>
        </div> */}
      </div>
    </>
  );
};

export default Catg;
