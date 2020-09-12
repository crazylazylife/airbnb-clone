import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";
function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
          title="Unique stays"
          description="Spaces that are more than just a place to sleep"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
          title="Online Experience"
          description="Unique activities we can do together, led bya world of hosts."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          title="Entire homes"
          description="Comfortable private places, with room for friends or family."
        />
      </div>
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/110228890/7977b9ac_original.jpg"
          title="SANTA MONICA CANYON CABIN"
          price="&#8377; 14,232/night"
          description="Escape to this warm hillside cabin up 75 steps from the street nestled in the Santa Monica Canyon blocks from Will Rogers beach & restaurants."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/859e6cbd-b74c-4e6b-8b86-6d6d66924708.jpg"
          title="Manhattan Lux Loft.Like.Love.Lots.Look !"
          price="&#8377; 16,170/night"
          description="Downtown, the best bit of Manhattan. One of, if not the, LARGEST space on Airbnb in NYC. "
        />
        <Card
          src="https://a0.muscache.com/im/pictures/6080d6b0-1cb6-4f44-9776-1892e99c9c81.jpg"
          title="Timeless Memories Cabin"
          price="&#8377; 11,155/night"
          description="If our Timeless Memories cabin is located in the beautiful Sherwood Forest Resort"
        />
      </div>
    </div>
  );
}

export default Home;
