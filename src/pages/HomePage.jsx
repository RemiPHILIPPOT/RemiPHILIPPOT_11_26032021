import React from "react";
import "../styles/homePage.scss";
import Card from "../components/Card";
import Banner from "../components/Banner";
import BannerImg from "../assets/banner_home.png";
import data from "../assets/data.json";

export default function HomePage() {
  return (
    <main>
      <Banner
        imgClass="bannerImg"
        imgSrc={BannerImg}
        imgAlt="bannière"
        imgContent="Chez vous, partout et ailleurs"
      />
      <section className="appartement">
        {data.map((apartment, index) => {
          return <Card apartment={apartment} index={index} key={index} />;
        })}
      </section>
    </main>
  );
}
