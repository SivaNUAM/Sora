import { Mail, Phone, Award, MapPin } from "lucide-react";
import { team } from "../data/team";
import Sticky from "../pages/Sticky"; // Adjust the import path as necessary
const Team = () => {
  return (
    <div>
      {/* Hero Section */}
      <Sticky />
      <section id="why-choose-section"  className="bg-gradient-to-br from-primary-50 to-white section-padding">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Meet Our Expert Team
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              Our experienced dental professionals are dedicated to providing
              you with the highest quality care in a comfortable and welcoming
              environment. Each member of our team brings unique expertise and a
              commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-neutral-100"
              >
                {/* Profile Image Placeholder */}
                <div className="w-32 h-32 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl font-bold text-primary-800">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>

                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary-800 font-medium mb-2">
                    {member.position}
                  </p>
                  <p className="text-sm text-neutral-600 mb-4">
                    {member.education}
                  </p>
                  <p className="text-sm text-neutral-600">
                    {member.experience} Experience
                  </p>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">
                      Specialties
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary-100 text-primary-800 text-xs rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">
                      Certifications
                    </h4>
                    <div className="space-y-1">
                      {member.certifications.map((cert, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2"
                        >
                          <Award className="w-4 h-4 text-primary-800" />
                          <span className="text-sm text-neutral-600">
                            {cert}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">
                      Languages
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.languages.map((language, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-neutral-100 text-neutral-700 text-xs rounded-full"
                        >
                          {language}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="text-sm text-neutral-600 leading-relaxed mb-6">
                  {member.bio}
                </div>

                <div className="flex justify-center space-x-4">
                  <a
                    href={`mailto:${member.name
                      .toLowerCase()
                      .replace(" ", ".")}@soradental.com`}
                    className="flex items-center space-x-2 text-primary-800 hover:text-primary-900 text-sm"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Email</span>
                  </a>
                  <a
                    href="tel:(555) 123-4567"
                    className="flex items-center space-x-2 text-primary-800 hover:text-primary-900 text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              Our Team Values
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              These principles guide our team in providing exceptional dental
              care to every patient.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto">
                <span className="text-2xl">💝</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900">
                Compassion
              </h3>
              <p className="text-neutral-600">
                We treat every patient with kindness, understanding, and
                respect.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900">
                Excellence
              </h3>
              <p className="text-neutral-600">
                We maintain the highest standards in dental care and patient
                service.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto">
                <span className="text-2xl">🔬</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900">
                Innovation
              </h3>
              <p className="text-neutral-600">
                We embrace new technologies and techniques to improve patient
                outcomes.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900">
                Collaboration
              </h3>
              <p className="text-neutral-600">
                We work together as a team to provide comprehensive, coordinated
                care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-800">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Meet Our Team?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Schedule an appointment and experience the SORA difference with our
            expert dental team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/appointments"
              className="bg-white text-primary-800 hover:bg-neutral-100 font-medium py-3 px-8 rounded-xl transition-colors duration-200"
            >
              Book Appointment
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-800 font-medium py-3 px-8 rounded-xl transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
