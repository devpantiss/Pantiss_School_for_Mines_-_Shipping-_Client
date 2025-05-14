import React from 'react';

const NewsLetterPlusHowCards: React.FC = () => {
    return (
        <div className="combined-container bg-black text-center py-10">
            {/* Section 1: Learn how we work */}
            {/* <div className="work-section mb-10">
                <h2 className="text-2xl font-semibold text-gray-50">
                    Learn how <span className="text-purple-500">we work</span>
                </h2>
                <div className="cards-container flex justify-center gap-6 mt-6">
                    {[
                        { title: 'For Businesses', img: '/path/to/image1.jpg' },
                        { title: 'For Nano-contractors', img: '/path/to/image2.jpg' },
                        { title: 'For Skilled Workers', img: '/path/to/image3.jpg' },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="card bg-cover bg-center relative h-40 w-64 rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:scale-105"
                            style={{ backgroundImage: `url(${item.img})` }}
                        >
                            <div className="overlay bg-white bg-opacity-50 h-full w-full flex items-center justify-center transition duration-300 hover:bg-opacity-75">
                                <p className="text-white text-lg font-medium transition duration-300 hover:text-xl">
                                    {item.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}

            {/* Section 2: Mailing list subscription */}
            <div className="mailing-list-section">
                <h3 className="text-xl font-medium text-gray-200 mb-4">
                    Join our mailing list for the latest insights into the world of work.
                </h3>
                <div className="input-container flex justify-center items-center gap-2">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="px-4 py-2 w-80 rounded-l-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <button className="px-6 py-2 bg-purple-700 text-white font-semibold rounded-r-full hover:bg-purple-800 transition">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewsLetterPlusHowCards;