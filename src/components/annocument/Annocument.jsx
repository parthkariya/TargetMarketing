import React from "react";

const Annocument = () => {
  const mystyle = {
    width: "30%",
    height: "340px",
  };
  const mystyle1 = {
    width: "68%",
    height: "340px",
  };
  return (
    <>
      <section className="annocument background">
        <div className="container d_flex anc_sec">
          <div className="img anc_img" style={mystyle1}>
            <img
              src="https://t3.ftcdn.net/jpg/04/97/70/84/360_F_497708493_TLEED7QaPojytKEiRLCpjhpnkuFerRay.jpg"
              width="100%"
              height="100%"
            />
          </div>
          <div className="img anc_img" style={mystyle}>
            <img
              src="https://img.freepik.com/free-vector/special-offer-origami-style-banner_23-2148397283.jpg?w=2000"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Annocument;
