import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../assets/data.json";
import Carousel from "../components/Carousel";
import Host from "../components/Host";
import Tag from "../components/Tag";
import Dropdown from "../components/Dropdown";
import "../styles/apartmentPage.scss";
import Rating from "../components/Rating";
import { Redirect } from "react-router-dom";

export default function ApartmentPage(props) {
  const params = useParams();
  const [isValid, setIsValid] = useState(true);
  const [apartment, setApartment] = useState();
  useEffect(() => {
    if (params.id) {
      let tmp = data.find((data) => data.id === params.id);
      if (tmp) {
        setApartment(tmp);
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    }
  }, [params]);

  if (!isValid) return <Redirect to="/404" />;

  if (!apartment) return <div>Loading</div>;

  const {
    description,
    equipments,
    host,
    location,
    pictures,
    rating,
    tags,
    title,
  } = apartment;
  return (
    <main>
      <Carousel pictures={pictures} />
      <section className="apartment">
        <div className="apartmentInfo">
          <h2 className="apartmentInfoTitle">{title}</h2>
          <p className="apartmentInfoLocation">{location}</p>
          {tags.map((tag, index) => {
            return <Tag key={`${tag}${index}`} tag={tag} />;
          })}
        </div>
        <div className="apartmentName">
          <Host name={host.name} picture={host.picture} />
          <Rating rating={rating} />
        </div>
      </section>
      <section className="details">
        <Dropdown dropDownTitle="Description" dropDownContent={description} />
        <ul className="dropdown list">
          <Dropdown
            dropDownTitle="Équipements"
            dropDownContent={equipments.map((equipment, index) => {
              return <li key={`${equipment}${index}`}>{equipment}</li>;
            })}
          />
        </ul>
      </section>
    </main>
  );
}

