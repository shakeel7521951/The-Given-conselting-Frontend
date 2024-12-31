import React from "react";
import Director from "../assets/About/Director.jpg";
import adnan from "../assets/About/adnan.jpg";
import Director2 from "../assets/About/Director2.jpg";
import aboutBanner from "../assets/About/aboutBanner.jpg";

const AboutUs = () => {
  const Team = [
    {
      id: 3,
      name: "Azam Khan",
      country: "(Pakistan)",
      role: "Director",
      image: Director2,
      description:
        "Azam Khan brings a wealth of experience in project management and leadership, driving operational excellence across the company.",
    },
    {
      id: 2,
      name: "Adnan ul Haque",
      country: "(Pakistan)",
      role: "Director",
      image: adnan,
      description:
        "Adnan ul Haque is a strategic thinker with expertise in global market operations and business development.",
    },

    {
      id: 1,
      name: "Muhammad Asif Khaliq ",
      country: "(South Africa)",
      role: "Director",
      image: Director,
      description:
        "Muhammad Asif Khaliq is a visionary leader with extensive experience in business and strategic management, driving growth globally.",
    },
  ];

  return (
    <>
    <section>
      <img src={aboutBanner} alt="About Banner" className="w-full rounded"/>
    </section>
      <section className="py-16 bg-white rounded">
        <div className="container mx-auto px-4">
          {/* Company Overview */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              The Givers (Pvt) LTD
            </h2>
            <p className="text-lg text-gray-600">
              A versatile and forward-thinking company offering a comprehensive
              suite of services aimed at empowering businesses and individuals
              across the globe. With a strong focus on consultancy, overseas
              employment, general order supplies, IT-enabled services,
              import/export, and mining and mineral resources, we provide
              innovative solutions that meet the evolving needs of our clients.
            </p>
          </div>

          {/* Vision Statement */}
          <div className="mb-12 text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Vision Statement
            </h3>
            <p className="text-lg text-gray-600">
              To become a global leader in business solutions, workforce
              development, resource management, and IT services by fostering
              innovation and creating opportunities that empower communities and
              businesses.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="mb-12 text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Mission Statement
            </h3>
            <p className="text-lg text-gray-600">
              Our mission is to deliver efficient, customized, and sustainable
              solutions across diverse industries, ensuring client satisfaction
              and long-term success.
            </p>
          </div>

          {/* Core Values */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Core Values
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  Integrity
                </h4>
                <p className="text-gray-600">
                  We maintain the highest standards of professionalism and
                  ethics.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  Innovation
                </h4>
                <p className="text-gray-600">
                  Leveraging technology and creative thinking for transformative
                  results.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  Customer Focus
                </h4>
                <p className="text-gray-600">
                  Tailoring our services to meet unique client needs.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  Global Reach
                </h4>
                <p className="text-gray-600">
                  Bridging gaps between businesses, talent, and markets
                  worldwide.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  Sustainability
                </h4>
                <p className="text-gray-600">
                  Promoting responsible and environmentally friendly practices
                  in all ventures.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  Excellence
                </h4>
                <p className="text-gray-600">
                  Striving for superior quality in everything we do.
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <section className="bg-white py-16">
            <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
              Meet the Team
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {Team.map((member) => (
                <div
                  key={member.id}
                  className="bg-[#EAE1D1] p-6 rounded-xl shadow-lg flex flex-col items-center text-center"
                >
                  <div className="w-36 h-36 rounded-full overflow-hidden mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    {member.name}
                  </h4>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    {member.country}
                  </h4>
                  <p className="text-lg font-normal text-gray-600 mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-700 text-lg text-center leading-relaxed">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
