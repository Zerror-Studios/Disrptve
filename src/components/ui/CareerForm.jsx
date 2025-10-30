import React, { useState } from "react";
import { RiArrowRightUpLine } from "@remixicon/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CareerForm = ({ job }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    portfolio: "",
    message: "",
    resume: null,
  });

  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false); // ✅ controls success card visibility
  const [fadeOutForm, setFadeOutForm] = useState(false); // ✅ for smooth transition

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const validTypes = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!validTypes.includes(file.type)) {
      toast.error("Only PDF or DOCX files are allowed.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      toast.error("File size must be less than 5MB.");
      return;
    }

    setFormData({ ...formData, resume: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { fullName, email, phone, portfolio, message, resume } = formData;

    if (!fullName || !email || !phone || !portfolio || !resume) {
      toast.error("Please fill all required fields and upload your resume.");
      setLoading(false);
      return;
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("fullName", fullName);
      formDataToSend.append("email", email);
      formDataToSend.append("phone", phone);
      formDataToSend.append("portfolio", portfolio);
      formDataToSend.append("message", message || "-");
      formDataToSend.append("resume", resume);

      const res = await fetch("/api/submitCareerForm", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Application submitted successfully!");

        // Smoothly hide the form and show success card
        setFadeOutForm(true);
        setTimeout(() => {
          setShowSuccess(true);
        }, 500); // match CSS transition duration

        setFormData({
          fullName: "",
          email: "",
          phone: "",
          portfolio: "",
          message: "",
          resume: null,
        });
        document.getElementById("resume").value = "";
      } else {
        toast.error(data.error || "Submission failed. Try again.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />

      {/* ✅ Success Card (initially hidden, fades in after success) */}
      <div
        className={`success_crd fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500 ${
          showSuccess ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="w-[30vw] relative aspect-[4/3] border space-y-8 border-white/20 center flex-col text-center bg-[#0E0E0E] rounded-lg">
          <p
            className="absolute top-5 right-5 cursor-pointer text-xl"
            onClick={() => setShowSuccess(false)} // hide success card
          >
            ✕
          </p>
          <h2 className="red uppercase text-5xl">Success</h2>
          <p className="text-base lg:text-xl w-[90%]">
            We've got it. We'll review your application and be in touch if it's a fit.
          </p>
        </div>
      </div>

      {/* ✅ Form (fades out on submit) */}
      <div
        className={`frm_parent w-full mb-14 lg:mb-32 transition-opacity duration-500 ${
          fadeOutForm ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="w-full lg:flex justify-center mb-12">
          <h3 className="text-xl lg:text-3xl uppercase">
            Apply for {job?.title || "the position"}
          </h3>
        </div>

        <p className="text-base lg:text-xl leading-none">
          We’re always looking for creative talent obsessed with culture and design.
          Apply below and show us what makes you stand out.
        </p>

        <div className="w-full mt-10">
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
            encType="multipart/form-data"
          >
            {/* Full Name */}
            <div>
              <h3 className="text-sm font-medium lg:text-base uppercase mb-4">
                Full Name <sup className="text-[#FB0401] text-sm">*</sup>
              </h3>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                autoComplete="off"
                className="border-b border-white/30 w-full text-lg outline-none bg-transparent"
              />
            </div>

            {/* Email */}
            <div>
              <h3 className="text-sm font-medium lg:text-base uppercase mb-4">
                Email <sup className="text-[#FB0401] text-sm">*</sup>
              </h3>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="off"
                className="border-b border-white/30 w-full text-lg outline-none bg-transparent"
              />
            </div>

            {/* Phone */}
            <div>
              <h3 className="text-sm font-medium lg:text-base uppercase mb-4">
                Phone <sup className="text-[#FB0401] text-sm">*</sup>
              </h3>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^\d*$/.test(value)) handleChange(e);
                }}
                autoComplete="off"
                className="border-b border-white/30 w-full text-lg outline-none bg-transparent"
              />
            </div>

            {/* Portfolio */}
            <div>
              <h3 className="text-sm font-medium lg:text-base uppercase mb-4">
                Link to Portfolio / Website{" "}
                <sup className="text-[#FB0401] text-sm">*</sup>
              </h3>
              <input
                type="url"
                name="portfolio"
                value={formData.portfolio}
                onChange={handleChange}
                autoComplete="off"
                className="border-b border-white/30 w-full text-lg outline-none bg-transparent"
              />
            </div>

            {/* Optional Message */}
            <div>
              <h3 className="text-sm font-medium lg:text-base uppercase mb-4">
                Tell us why you're a fit (Optional)
              </h3>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="border-b border-white/30 w-full h-[6vw] resize-none text-lg outline-none bg-transparent"
              />
            </div>

            {/* Resume Upload */}
            <div>
              <h3 className="text-sm font-medium lg:text-base uppercase mb-4">
                Upload Resume / CV <sup className="text-[#FB0401] text-sm">*</sup>
              </h3>

              <div className="relative inline-block">
                <input
                  type="file"
                  id="resume"
                  accept=".pdf,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                />

                {!formData.resume ? (
                  <label
                    htmlFor="resume"
                    className="cursor-pointer border border-white rounded-full px-3 py-1.5 text-sm md:text-base text-white hover:bg-[#FB0401] hover:border-[#FB0401] transition-all duration-300 inline-flex items-center justify-center"
                  >
                    Select File
                  </label>
                ) : (
                  <div className="flex items-center gap-2 border border-white rounded-full px-3 py-1.5 text-sm md:text-base text-white transition-all duration-300">
                    <p className="truncate max-w-[180px]">{formData.resume.name}</p>
                    <button
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, resume: null }))}
                      className="ml-1 text-white hover:text-[#FB0401] transition-colors duration-300"
                    >
                      ✕
                    </button>
                  </div>
                )}
              </div>

              <p className="text-xs mt-2 opacity-70">PDF or DOCX only. Max 5MB.</p>
            </div>

            {/* Submit */}
            <div className="w-full mt-12">
              <button
                type="submit"
                disabled={loading}
                className={`bgred group px-6 py-2 uppercase transition-all duration-300 ${
                  loading ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"
                }`}
              >
                <div className="relative flex items-center gap-1">
                  <div className="w-0 group-hover:w-[97%] transition-all duration-300 h-[1px] bg-white absolute bottom-0 left-0"></div>
                  <h2 className="text-sm md:text-base group-hover:italic uppercase">
                    {loading ? "Submitting..." : "Submit Application"}
                  </h2>
                  <RiArrowRightUpLine size={20} />
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CareerForm;
