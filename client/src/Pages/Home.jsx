import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import ListingItem from "../Components/ListingItem";

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [newListings, setNewListings] = useState([]);
  const [oldListings, setOldListings] = useState([]);

  // console.log(offerListings);
  SwiperCore.use([Navigation]);
  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch("/api/listing/get?offer=true&limit=4");
        const data = await res.json();
        setOfferListings(data);
        fetchNewListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchNewListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=new&limit=4");
        const data = await res.json();
        setNewListings(data);
        fetchOldListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchOldListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=old&limit=4");
        const data = await res.json();
        setOldListings(data);
      } catch (error) {
        log(error);
      }
    };
    fetchOfferListings();
  }, []);
  return (
    <div>
      {/* top */}
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
        <h1 className="text-green-700 font-bold text-3xl lg:text-6xl">
          Uncover Your <span className="text-slate-500">Ideal </span>
          <br />
          Vehicle with Minimal Effort
        </h1>
        <div className="text-gray-400 text-xs sm:text-sm">
          Discover your perfect ride effortlessly with our intuitive car models
          website.
          <br />
          Effortlessly navigate through a wide selection of vehicles to find
          your ideal match with minimal hassle.
        </div>
        <Link
          to={"/search"}
          className="text-xs sm:text-sm text-blue-800 font-bold hover:underline"
        >
          Let's get started...
        </Link>
      </div>

      {/* swiper */}
      <Swiper navigation>
        {offerListings &&
          offerListings.length > 0 &&
          offerListings.map((listing) => (
            <SwiperSlide key={listing._id}>
              <div
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: "cover",
                }}
                className="h-[500px] "
                key={listing._id}
              ></div>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* listing results for offer, sale and rent */}

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
        {offerListings && offerListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent offers
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={"/search?offer=true"}
              >
                Show more offers
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {newListings && newListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent Updated New Cars
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={"/search?type=rent"}
              >
                Show more new cars
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {newListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {oldListings && oldListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent Updated Old Cars
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={"/search?type=sale"}
              >
                Show more old cars
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {oldListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
