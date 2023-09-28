import { useState } from 'react';
import { Link } from 'react-router-dom';
import useFetchRestaurants from '../utils/useFetchRestaurants';
import RestaurantCard, { promotedRestaurant } from './RestaurantCard';
import Shimmer from './Shimmer';

const Home = () => {
  const [displayedRestaurants, setDisplayedRestaurants] = useState(null);
  const restaurants = useFetchRestaurants();

  if (restaurants.length === 0) {
    return <Shimmer />;
  }

  if (displayedRestaurants === null) {
    setDisplayedRestaurants(restaurants);
  }

  const PromotedRestaurantCard = promotedRestaurant(RestaurantCard);

  // const searchRestaurants = () => {
  //   const searchString = search.trim().toLowerCase();

  //   let searchResults = restaurants.filter(restaurant => {
  //     const { name, cuisines } = restaurant?.info;

  //     return (
  //       name.toLowerCase().includes(searchString) ||
  //       cuisines.map(cuisine => cuisine.toLowerCase()).includes(searchString)
  //     );
  //   });

  //   setDisplayedRestaurants(searchResults);
  // };

  // const filterTopRatedRestuarants = () =>
  //   setDisplayedRestaurants(
  //     restaurants
  //       .filter(restaurant => restaurant?.info?.avgRating > 4.0)
  //       .sort((res1, res2) => res2.info.avgRating - res1.info.avgRating)
  //   );

  return (
    <div className='px-24 py-12'>
      {/* <div className='search-container'>
        <input
          className='search-input'
          type='search'
          name='query'
          placeholder='Search for food and restaurants'
          value={search}
          onChange={event => setSearch(event.target.value)}
        />
        <button className='search-btn' onClick={searchRestaurants} disabled={search.trim() === ''}>
          Search
        </button>
      </div> */}

      {/* <div className='filters'>
        <button className='top-rated' onClick={filterTopRatedRestuarants}>
          Top rated
        </button>
      </div> */}

      <div className='grid grid-cols-4 gap-10 justify-items-center'>
        {displayedRestaurants?.map(restaurant => (
          <Link to={`restaurants/${restaurant?.info?.id}`} key={restaurant?.info?.id}>
            {restaurant?.info?.promoted ? (
              <PromotedRestaurantCard restaurantData={restaurant} />
            ) : (
              <RestaurantCard restaurantData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
