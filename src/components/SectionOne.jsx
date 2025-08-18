import One from '../assets/rafi-one.jpg'
 

function SectionOne() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10 bg-white pt-[150px]">
      {/* Left Image Section */}
      <div className="w-full md:w-1/2 animate-fadeIn">
        <img
          src={One}
          alt="India in One Book – Through My Eyes"
          className="rounded-lg shadow-lg w-full lg:h-[400px] h-[300px] object-cover"
        />
      </div>

      {/* Right Text Section */}
      <div className="w-full mt-8 md:w-1/2 md:mt-0 md:ml-10 animate-slideIn">
        <p className="mb-2 text-sm text-gray-600">India, Through An Indian’s Eyes</p>
        <h1 className="mb-6 text-3xl font-bold leading-tight text-gray-800 md:text-5xl">
          The Complete Arabic Guidebook <span className="text-gray-500">to India’s Heart & Heritage</span>
        </h1>
        <p className="mb-6 text-gray-600">
          Discover <strong>“India in One Book – Through My Eyes”</strong>: the only digital guidebook to unlock India’s history, culture, food, wellness, travel secrets, and more — all explained in Arabic, by an Indian who knows what you need to know.<br /><br />
          Whether you’re planning a family adventure, seeking medical care, searching for halal dining, or dreaming of Kerala’s beauty, this book answers your real questions with practical tips, personal stories, and exclusive maps and checklists.<br /><br />
          Start your Indian journey with confidence, clarity, and insider access—crafted for Arab travelers, by Muhammed Rafih.
        </p>
        {/* 
        <button className="px-6 py-3 text-white transition duration-300 bg-green-500 rounded-lg shadow hover:bg-green-600">
          Download the Book
        </button> 
        */}
      </div>
    </div>
  );
}

export default SectionOne;
