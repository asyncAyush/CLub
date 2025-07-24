import { MapPin, Users, Clock, Star, Music } from 'lucide-react';

const ExploreClub = () => {

  return (
    <div className='min-h-screen w-full bg-gray-800'>
      <div className='bock w-[23-vw] rounded overflow-hidden' ></div>
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-15 ">

        <div className="text-center mb-20">
          <h1 className="text-6xl font-bold text-white mb-5">Explore Clubs</h1>
          <p className="text-2xl text-gray-400">Discover the perfect venue for your night out</p>
        </div>
        <div className="flex flex-wrap justify-center gap-10 px-6 py-10">
          {/* Card 1 */}
          <div className="w-full flex flex-col gap-5  md:w-[500px] bg-[#141f2b] rounded-xl overflow-hidden shadow-lg">
            {/* Image */}
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReV2b_zR8_Y-65XXt3d4Yp5RUb2zopj07XZA&s" alt="MOBE" className="w-full h-[200px] object-cover" />
            <div className="p-4  text-white">
              <h2 className="text-lg font-bold">MOBE</h2>
              <p className=" mt-4 text-sm">📍 Chandigarh Elante Mall</p>
              <p className=" mt-4 text-xs text-gray-400">Vibrant nightlife, DJs, and clubs</p>
              <p className="mt-6 text-sm">👥 1200 cap · 🕗 8PM - 2AM</p>
              <div className="mt-6 flex gap-4 text-xs">
                <span className="bg-purple-600 px-2 py-1 rounded-full">Dubstep</span>
                <span className="bg-purple-600 px-2 py-1 rounded-full">Bass</span>
              </div>
              <button className="mt-4 w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white py-2 rounded-md">
                Book Now
              </button>
            </div>
          </div>

          {/* 2nd card  */}

          <div className="w-full flex flex-col gap-5  md:w-[500px] bg-[#141f2b] rounded-xl overflow-hidden shadow-lg">
            {/* Image */}
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0gVl3tyCtHUR3y59meRGpj5Ur4zEDnUTh5g&s" alt="MOBE" className="w-full h-[200px] object-cover" />
            <div className="p-4  text-white">
              <h2 className="text-lg font-bold">PLAYBOY</h2>
              <p className=" mt-4 text-sm">📍 Chandigarh Emporium Mall</p>
              <p className=" mt-4 text-xs text-gray-400">Best Place for Partygoers The Playboy Club, Chandigarh exudes an amazing vibe</p>
              <p className="mt-6 text-sm">👥 1200 cap · 🕗 8PM - 3AM</p>
              <div className="mt-6 flex gap-4 text-xs">
                <span className="bg-purple-600 px-2 py-1 rounded-full">Dubstep</span>
                <span className="bg-purple-600 px-2 py-1 rounded-full">Bass</span>
              </div>
              <button className="mt-4 w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white py-2 rounded-md">
                Book Now
              </button>
            </div>
          </div>

          {/* 3nd card  */}

          <div className="w-full flex flex-col gap-5  md:w-[500px] bg-[#141f2b] rounded-xl overflow-hidden shadow-lg">
            {/* Image */}
            <img src="https://content.jdmagicbox.com/comp/chandigarh/w9/0172px172.x172.220729135802.u7w9/catalogue/-ek7fm7qtu5.jpg" alt="MOBE" className="w-full h-[200px] object-cover" />
            <div className="p-4  text-white">
              <h2 className="text-lg font-bold">KALA GHODA</h2>
              <p className=" mt-4 text-sm">📍 Chandigarh Sec 26</p>
              <p className=" mt-4 text-xs text-gray-400"> nightlife and dining experiences Vibrant nightlife, DJs, and clubs</p>
              <p className="mt-6 text-sm">👥 1200 cap · 🕗 8PM - 3AM</p>
              <div className="mt-6 flex gap-4 text-xs">
                <span className="bg-purple-600 px-2 py-1 rounded-full">Dubstep</span>
                <span className="bg-purple-600 px-2 py-1 rounded-full">Bass</span>
              </div>
              <button className="mt-4 w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white py-2 rounded-md">
                Book Now
              </button>
            </div>
          </div>

          {/* 4nd card  */}
          <div className="w-full flex flex-col gap-5  md:w-[500px] bg-[#141f2b] rounded-xl overflow-hidden shadow-lg">
            {/* Image */}
            <img src="https://b.zmtcdn.com/data/pictures/3/18658523/f89ec98a00e553abd01865cbb8b37ca8.jpg" alt="MOBE" className="w-full h-[200px] object-cover" />
            <div className="p-4  text-white">
              <h2 className="text-lg font-bold">PIPE & BARREL</h2>
              <p className=" mt-4 text-sm">📍 Chandigarh Sec 9</p>
              <p className=" mt-4 text-xs text-gray-400">Vibrant nightlife, DJs, and clubs , Live band</p>
              <p className="mt-6 text-sm">👥 1000 cap · 🕗 8PM - 3AM</p>
              <div className="mt-6 flex gap-4 text-xs">
                <span className="bg-purple-600 px-2 py-1 rounded-full">Dubstep</span>
                <span className="bg-purple-600 px-2 py-1 rounded-full">Bass</span>
              </div>
              <button className="mt-4 w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white py-2 rounded-md">
                Book Now
              </button>
            </div>
          </div>

          {/* 5nd card  */}
          <div className="w-full flex flex-col gap-5  md:w-[500px] bg-[#141f2b] rounded-xl overflow-hidden shadow-lg">
            {/* Image */}
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXNgx7npBpTZh3cPZ65Hi7FrEzlkOuH0JzUA&s" alt="MOBE" className="w-full h-[200px] object-cover" />
            <div className="p-4  text-white">
              <h2 className="text-lg font-bold">BARRIO</h2>
              <p className=" mt-4 text-sm">📍 Chandigarh Sec 26</p>
              <p className=" mt-4 text-xs text-gray-400">Vibrant nightlife, DJs, and clubs</p>
              <p className="mt-6 text-sm">👥 1200 cap · 🕗 8PM - 2AM</p>
              <div className="mt-6 flex gap-4 text-xs">
                <span className="bg-purple-600 px-2 py-1 rounded-full">Dubstep</span>
                <span className="bg-purple-600 px-2 py-1 rounded-full">Bass</span>
              </div>
              <button className="mt-4 w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white py-2 rounded-md">
                Book Now
              </button>
            </div>
          </div>

          {/* 6nd card  */}
          <div className="w-full flex flex-col gap-5  md:w-[500px] bg-[#141f2b] rounded-xl overflow-hidden shadow-lg">
            {/* Image */}
            <img src="https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/7/23/7a840498-6c9d-4cfa-af8b-67fe073144d9_20240723T133039182.jpg" alt="MOBE" className="w-full h-[200px] object-cover" />
            <div className="p-4  text-white">
              <h2 className="text-lg font-bold">DEOORA</h2>
              <p className=" mt-4 text-sm">📍 Chandigarh Sec 26</p>
              <p className=" mt-4 text-xs text-gray-400">Vibrant nightlife, DJs, and clubs Crazy night party</p>
              <p className="mt-6 text-sm">👥 1200 cap · 🕗 8PM - 2AM</p>
              <div className="mt-6 flex gap-4 text-xs">
                <span className="bg-purple-600 px-2 py-1 rounded-full">Dubstep</span>
                <span className="bg-purple-600 px-2 py-1 rounded-full">Bass</span>
              </div>
              <button className="mt-4 w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white py-2 rounded-md">
                Book Now
              </button>
            </div>
          </div>

          {/* 7nd card  */}
          <div className="w-full flex flex-col gap-5  md:w-[500px] bg-[#141f2b] rounded-xl overflow-hidden shadow-lg">
            {/* Image */}
            <img src="https://lh3.googleusercontent.com/p/AF1QipMPK3nMCUP3v7-Ua3qA3OCNR7C7c2AuBBIwKu2i=s1360-w1360-h1020-rw" alt="MOBE" className="w-full h-[200px] object-cover" />
            <div className="p-4  text-white">
              <h2 className="text-lg font-bold">JANNAAT</h2>
              <p className=" mt-4 text-sm">📍 Chandigarh Sec-7</p>
              <p className=" mt-4 text-xs text-gray-400">Vibrant nightlife, DJs, and clubs Belly Dance </p>
              <p className="mt-6 text-sm">👥 1200 cap · 🕗 8PM - 2AM</p>
              <div className="mt-6 flex gap-4 text-xs">
                <span className="bg-purple-600 px-2 py-1 rounded-full">Dubstep</span>
                <span className="bg-purple-600 px-2 py-1 rounded-full">Bass</span>
              </div>
              <button className="mt-4 w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white py-2 rounded-md">
                Book Now
              </button>
            </div>
          </div>

          {/* 8nd card  */}
          <div className="w-full flex flex-col gap-5  md:w-[500px] bg-[#141f2b] rounded-xl overflow-hidden shadow-lg">
            {/* Image */}
            <img src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4no0YlcV4bLlDfLxoXkGP5M1Q5JCAab-jR4XSlKhVidWueNXnSzv_X74LrceTNfd1mMEQRmVw880whouhBKhZuz_ITIRiqa0UJrpM8BYE8cBRKqjALpQz5fgvC3ekNuhLhi1U6Q=s1360-w1360-h1020-rw" alt="MOBE" className="w-full h-[200px] object-cover" />
            <div className="p-4  text-white">
              <h2 className="text-lg font-bold">26 BOULEVARD</h2>
              <p className=" mt-4 text-sm">📍 Chandigarh Sec 26</p>
              <p className=" mt-4 text-xs text-gray-400">Vibrant nightlife, DJs, and clubs</p>
              <p className="mt-6 text-sm">👥 1200 cap · 🕗 8PM - 2AM</p>
              <div className="mt-6 flex gap-4 text-xs">
                <span className="bg-purple-600 px-2 py-1 rounded-full">Dubstep</span>
                <span className="bg-purple-600 px-2 py-1 rounded-full">Bass</span>
              </div>
              <button className="mt-4 w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white py-2 rounded-md">
                Book Now
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>



  )
}

export default ExploreClub