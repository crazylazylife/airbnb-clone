import React from "react";
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";
function SeacrhPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62days | 26th august to 30th august | 2 guests</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img="https://a0.muscache.com/im/pictures/ba6f242d-a96f-442b-9649-020386bab7fb.jpg"
        location="Entire apartment in Shimla"
        title="Magical Victorian Home Eloped by the Valley Shimla"
        description="10 guests · 3 bedrooms · 3 beds · 3 bathrooms"
        star={5}
        price="&#8377; 6000 / night"
        total="&#8377; 12000 / night"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/2dcd338b-38cc-4015-a198-bd492a61a4b3.jpg"
        location="Entire apartment in Shimla"
        title="Misty attic Mashobra 3BHK-Entire Appartment shimla"
        description="8 guests · 3 bedrooms · 3 beds · 3 bathrooms"
        star={4.58}
        price="&#8377; 4000 / night"
        total="&#8377; 8000 / night"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/d34cc8e7-fd84-4ce8-82bf-c2c1bcbe0b38.jpg"
        location="Private room in farm stay in Paro"
        title="Namgay's Homestay"
        description="9 guests · 3 bedrooms · 6 beds · 2 bathrooms"
        star={4.64}
        price="&#8377; 2130 / night"
        total="&#8377; 4260 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/8abbaebc-b2a0-4a8c-9414-8a85b31bd1ec.jpg"
        location="Room in hostel in Dalhousie"
        title="A Bed in 8 Bed Mixed Dorm in Dalhousie"
        description="1 guest · 1 bedroom · 2 beds · 1 bathroom"
        star={4.5}
        price="&#8377; 824 / night"
        total="&#8377; 1648 / night"
      />

      <SearchResult
        img="https://a0.muscache.com/im/pictures/5cd56d47-f0d4-42c1-b172-c85935ddf8c3.jpg"
        location="Private room in Bhuvaneshwar"
        title="Luxury Cabana@ Birdsong home"
        description="2 guests · 1 bedroom · 1 bed · 1 private bathroom"
        star={4.87}
        price="&#8377; 1440 / night"
        total="&#8377; 2880 / night"
      />

      <SearchResult
        img="https://a0.muscache.com/im/pictures/64775391-56ed-4d33-bb63-a08d719dbd62.jpg"
        location="Private room in farm stay in Sikkim"
        title="Rustic farm cottage with waterfall & mountain view"
        description="2 guests · 1 bedroom · 1 bed · 1 private bathroom"
        star={4.97}
        price="&#8377; 4200 / night"
        total="&#8377; 8400 / night"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/b587d314-19df-4c66-88d4-4a716e020170.jpg"
        location="Entire Villa in ooty"
        title="Moidoo’s Maison"
        description="5 guests · 2 bedrooms · 2 beds · 2.5 bathrooms"
        star={4.73}
        price="&#8377; 6399 / night"
        total="&#8377; 12798 / night"
      />
    </div>
  );
}

export default SeacrhPage;
