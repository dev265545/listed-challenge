import { FaClock } from 'react-icons/fa';

const Schedule = () => {
  const events = [
    {
      title: "Meeting with Suppliers from Kuta Bali",
      starttime: "14:00 PM",
      endtime: "15:00 PM",
      location: "at Sunset Road, Kuta, Bali, Indonesia",
      line: " bg-green-500 h-[66px] w-1  ",
    },
    {
      title: "Check operation at Giga Factory 1",
      starttime: "18:00 PM",
      endtime: "20:00 PM",
      location: "at Central Jakarta, Indonesia",
      line: " bg-blue-500 h-[66px] w-1  ",
    },
  ];

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="flex items-center gap-4 mb-4 px-6">
        <span className="font-bold flex-1 text-black font-montserrat">
          Today's Schedule
        </span>
        <div className=" text-[#858585] text-sm flex flex-row font-lato font-normal gap-3 ">
          <div>See All</div>
          <div className="pt-1">
            <svg
              width="5"
              height="8"
              viewBox="0 0 5 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.255719 7.7814C-0.0722496 7.4807 -0.097987 7.06206 0.255719 6.69446L3.0111 3.99918L0.255719 1.3039C-0.0979873 0.936305 -0.0722499 0.516977 0.255719 0.218345C0.582952 -0.0823565 1.13594 -0.0630456 1.44332 0.218345C1.7507 0.498356 4.75389 3.4564 4.75389 3.4564C4.83173 3.52684 4.89364 3.61127 4.93592 3.70464C4.97821 3.79802 5 3.89843 5 3.99987C5 4.10132 4.97821 4.20173 4.93592 4.2951C4.89364 4.38848 4.83173 4.4729 4.75389 4.54334C4.75389 4.54334 1.7507 7.50001 1.44332 7.7814C1.13594 8.06348 0.582952 8.0821 0.255719 7.7814Z"
                fill="#858585"
              />
            </svg>
          </div>
        </div>
      </div>
      {events.map((event, index) => (
        <div key={index} className="flex flex-row items-center p-3 gap-4">
          <div className={event?.line}></div>
          <div>
            <div className="text-[#666666] font-bold font-lato  ">
              {event.title}
            </div>
            <div className="text-sm text-[#999999] font-lato font-normal ">
              {event.starttime}- {event?.endtime}
            </div>
            <div className="text-sm text-[#999999] font-lato font-normal ">
              {event?.location}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Schedule;