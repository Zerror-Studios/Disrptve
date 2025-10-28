import { RiArrowRightUpLine, RiCloseLine } from '@remixicon/react';
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const services = [
  "Creative & Production",
  "Brand Identity & Packaging",
  "Political & National Strategy",
  "AI-Led Design & Photoshoots",
  "Brand Strategy & Go-to-Market",
  "Social Media & Performance Marketing",
  "Business Decks, Brochures & Collateral"
];

const Form = ({ openForm, setOpenForm }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    heardAboutUs: "",
    services: [],
  });

  const [loading, setLoading] = useState(false);

  // Handle input field changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Toggle service selection
  const toggleService = (service) => {
    setFormData((prev) => {
      const alreadySelected = prev.services.includes(service);
      return {
        ...prev,
        services: alreadySelected
          ? prev.services.filter((s) => s !== service)
          : [...prev.services, service],
      };
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    let { fullName, email, phone, message, company, heardAboutUs, services } = formData;

    // Validation for required fields
    if (!fullName || !email || !message || !company) {
      toast.error("Please fill all required fields.");
      setLoading(false);
      return;
    }

    if (services.length === 0) {
      toast.error("Please select at least one service.");
      setLoading(false);
      return;
    }

    // Default values for optional fields
    if (!phone.trim()) phone = "-";
    if (!heardAboutUs.trim()) heardAboutUs = "-";

    const payload = {
      fullName,
      email,
      phone,
      company,
      message,
      heardAboutUs,
      services,
    };

    try {
      const res = await fetch("/api/submitEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success("Form Submitted Successfully", { position: "top-center" });
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          company: "",
          message: "",
          heardAboutUs: "",
          services: [],
        });
        setOpenForm(false);
      } else {
        toast.error(data.error || "Submission failed");
      }
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  // ✅ Lenis scroll control
  useEffect(() => {
    if (typeof window !== "undefined" && window.lenis) {
      if (openForm) {
        window.lenis.stop();
      } else {
        window.lenis.start();
      }
    }
  }, [openForm]);

  return (
    <>
      <ToastContainer />
      <div className="w-full">
        <p className="text-base lg:text-xl leading-none">
          Tell us a bit about your project; what you're building, what your goals are, and your timeline. We'll get back to you to set up a conversation.
        </p>

        <div className="w-full mt-10">
          <form onSubmit={handleSubmit} method="POST" className="space-y-4">
            {/* Full Name */}
            <div className="w-full relative">
              <h3 className="text-sm font-medium lg:text-base uppercase mb-6">
                Name <sup className="text-[#FB0401] text-sm">*</sup>
              </h3>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                autoComplete='off'
                onChange={handleChange}
                className="border-b border-white/30 w-full text-lg outline-none bg-transparent"
              />
            </div>

            {/* Email */}
            <div className="relative w-full">
              <h3 className="text-sm font-medium lg:text-base uppercase mb-6">
                Email <sup className="text-[#FB0401] text-sm">*</sup>
              </h3>
              <input
                type="email"
                name="email"
                value={formData.email}
                autoComplete='off'
                onChange={handleChange}
                className="border-b border-white/30 w-full text-lg outline-none bg-transparent"
              />
            </div>

            {/* Contact (optional) */}
            <div className="w-full relative">
              <h3 className="text-sm font-medium lg:text-base uppercase mb-6">
                Contact
              </h3>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                autoComplete='off'
                onChange={handleChange}
                className="border-b border-white/30 w-full text-lg outline-none bg-transparent"
              />
            </div>

            {/* Company */}
            <div className="w-full relative">
              <h3 className="text-sm font-medium lg:text-base uppercase mb-6">
                Company <sup className="text-[#FB0401] text-sm">*</sup>
              </h3>
              <input
                type="text"
                name="company"
                value={formData.company}
                autoComplete='off'
                onChange={handleChange}
                className="border-b border-white/30 w-full text-lg outline-none bg-transparent"
              />
            </div>

            {/* Services Selection */}
            <div>
              <h3 className="text-sm font-medium lg:text-base uppercase">
                Select services <sup className="text-[#FB0401] text-sm">*</sup>
              </h3>
              <div className="w-full my-8 flex flex-wrap gap-3">
                {services.map((item, i) => {
                  const selected = formData.services.includes(item);
                  return (
                    <div
                      key={i}
                      onClick={() => toggleService(item)}
                      className={`cursor-pointer transition-all duration-300 border rounded-full px-3 py-1.5 text-sm md:text-base 
                        ${
                          selected
                            ? "bg-[#FB0401] text-white border-[#FB0401]"
                            : "border-white text-white hover:bg-white/10"
                        }`}
                    >
                      {item}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Message */}
            <div className="w-full relative">
              <h3 className="text-sm font-medium lg:text-base uppercase mb-6">
                Tell us a bit about your project <sup className="text-[#FB0401] text-sm">*</sup>
              </h3>
              <textarea
                name="message"
                value={formData.message}
                autoComplete='off'
                onChange={handleChange}
                className="border-b border-white/30 w-full h-[5vw] resize-none break-words text-lg outline-none bg-transparent"
              />
            </div>

            {/* How did you hear about us (optional) */}
            <div className="w-full relative">
              <h3 className="text-sm font-medium lg:text-base uppercase mb-6">
                How did you hear about us?
              </h3>
              <input
                type="text"
                name="heardAboutUs"
                value={formData.heardAboutUs}
                autoComplete='off'
                onChange={handleChange}
                className="border-b border-white/30 w-full text-lg outline-none bg-transparent"
              />
            </div>

            {/* Submit Button */}
            <div className="w-full mt-12">
              <button
                type="submit"
                disabled={loading}
                className={`group relative red flex items-center gap-1 uppercase transition-all duration-300 
                  ${loading ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"}`}
              >
                <div className="w-full origin-right group-hover:w-0 transition-all duration-300 h-[1px] bgred absolute bottom-0 right-0"></div>
                <h2 className="text-sm lg:text-xl group-hover:italic uppercase">
                  {loading ? "Submitting ..." : "Start the Conversation"}
                </h2>
                <RiArrowRightUpLine size={20} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
