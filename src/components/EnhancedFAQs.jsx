import { useState } from "react";
import Accordion from "./accordion";
import { EMAIL_ADDRESS } from "../consts";

export default function EnhancedFAQs({
  generalFaqs = [],
  newStudentFaqs = [],
  currentStudentFaqs = [],
  careerTrackFaqs = [],
  recreationalPilotFaqs = [],
  type = "General",
}) {
  const [open, setOpen] = useState("");
  const [activeCategory, setActiveCategory] = useState("general");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = {
    general: { name: "General", faqs: generalFaqs },
    newStudent: { name: "New Students", faqs: newStudentFaqs },
    currentStudent: { name: "Current Students", faqs: currentStudentFaqs },
    careerTrack: { name: "Career Track", faqs: careerTrackFaqs },
    recreational: { name: "Recreational Pilots", faqs: recreationalPilotFaqs },
  };

  const handleClick = (e) => {
    if (open === e.target.id) {
      setOpen("");
    } else {
      setOpen(e.target.id);
    }
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setOpen("");
    setSearchTerm("");
  };

  const currentFaqs = categories[activeCategory]?.faqs || [];

  const filteredFaqs = searchTerm
    ? currentFaqs.filter(
        (faq) =>
          faq.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.content.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : currentFaqs;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-12 lg:pt-16 lg:pb-12">
        <div className="mx-auto max-w-4xl">
          <p className="mx-auto mt-12 uppercase text-lg lg:text-xl lg:max-w-3xl font-sans text-center font-bold tracking-tight text-primary-500">
            {type}
          </p>
          <h2 className="mx-auto mb-3 text-4xl lg:text-6xl lg:max-w-3xl font-title text-center font-bold tracking-tight text-primary-900">
            Frequently Asked Questions
          </h2>

          {/* Search Bar */}
          <div className="mt-8 mb-6">
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          {/* Category Filters */}
          {Object.keys(categories).some(
            (key) => categories[key].faqs.length > 0,
          ) && (
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {Object.entries(categories).map(
                ([key, category]) =>
                  category.faqs.length > 0 && (
                    <button
                      key={key}
                      onClick={() => handleCategoryChange(key)}
                      className={`px-4 py-2 rounded-full transition-all duration-300 ${
                        activeCategory === key
                          ? "bg-primary-600 text-white"
                          : "bg-gray-200 text-gray-700 hover:bg-primary-100"
                      }`}
                    >
                      {category.name}
                      <span className="ml-1 text-sm">
                        ({category.faqs.length})
                      </span>
                    </button>
                  ),
              )}
            </div>
          )}

          {/* Results Count */}
          {searchTerm && (
            <p className="text-center text-gray-600 mb-4">
              {filteredFaqs.length} result{filteredFaqs.length !== 1 ? "s" : ""}
              {searchTerm && ` for "${searchTerm}"`}
            </p>
          )}

          {/* FAQ List */}
          <dl className="flex flex-col gap-2 mt-6">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <Accordion
                  key={`${activeCategory}-${index}`}
                  index={index}
                  faq={faq}
                  toggled={faq.title === open}
                  onShow={handleClick}
                />
              ))
            ) : (
              <p className="text-center text-gray-500 py-8">
                {searchTerm
                  ? "No FAQs found matching your search."
                  : "No FAQs available for this category."}
              </p>
            )}
          </dl>
        </div>

        <p className="text-center mt-12 text-gray-600">
          If you have any additional questions please send us an email to{" "}
          <a href="/contact" className="text-primary-800 hover:underline">
            Contact Us
          </a>
        </p>
      </div>
    </div>
  );
}
