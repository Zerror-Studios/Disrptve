import { RiArrowRightUpLine, RiCloseLine } from '@remixicon/react'
import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';

const Form = ({ openForm, setOpenForm }) => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const { fullName, email, phone, message } = formData;
        if (!fullName || !email || !phone || !message) {
            toast.error("Please fill all required fields.");
            setLoading(false);
            return;
        }

        try {
            const res = await fetch("/api/submitEmail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            if (res.ok) {
                toast.success("Form Submitted Successfully", { position: "top-center" });
                setFormData({ fullName: "", email: "", phone: "", message: "" });
                setOpenForm(false);
            } else {
                toast.error(data.error || "Submission failed");
            }
        } catch (err) {
            toast.error("Error submitting form.");
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
            <div
                className={`fixed h-screen w-full z-[99] center backdrop-blur-sm bg-black/10 
                transition-opacity duration-300 ease-in-out
                ${openForm ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
            >
                <div
                    className={`w-[95%] md:w-[50%] relative p-5 md:p-10 bg-black 
                    transition-all duration-300 ease-in-out 
                    ${openForm ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                >
                    <h3 className='text-xl lg:text-3xl leading-none w-[80%]'>
                        Our team will contact you as soon as possible.
                    </h3>
                    <div
                        onClick={() => setOpenForm(false)}
                        className="absolute cursor-pointer top-5 right-5"
                    >
                        <RiCloseLine size={32} />
                    </div>

                    <div className="w-full">
                        <form onSubmit={handleSubmit} method="POST" className="mt-12 space-y-10">
                            {/* Full Name */}
                            <div className="w-full relative">
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="Full Name"
                                    className="border-b w-full text-lg outline-none"
                                />
                                <h2 className="absolute right-0 top-1/2 -translate-y-1/2 text-[#FB0401] text-2xl">*</h2>
                            </div>

                            {/* Email + Phone */}
                            <div className="flex gap-6">
                                <div className="relative w-1/2">
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Email"
                                        className="border-b w-full text-lg outline-none"
                                    />
                                    <h2 className="absolute right-0 top-1/2 -translate-y-1/2 text-[#FB0401] text-2xl">*</h2>
                                </div>
                                <div className="w-1/2 relative">
                                    <input
                                        type="text"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Phone"
                                        className="border-b w-full text-lg outline-none"
                                    />
                                    <h2 className="absolute right-0 top-1/2 -translate-y-1/2 text-[#FB0401] text-2xl">*</h2>
                                </div>
                            </div>

                            {/* Message */}
                            <div className="w-full relative">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Enter your message"
                                    className="border-b w-full h-[12vw] resize-none break-words text-lg outline-none"
                                />
                                <h2 className="absolute right-0 top-0 text-[#FB0401] text-2xl">*</h2>
                            </div>

                            {/* Submit Button */}
                            <div className="w-full center">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className={`bgred group px-6 py-2 uppercase ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                                >
                                    <div className="relative flex items-center gap-1">
                                        <div className="w-0 group-hover:w-[97%] transition-all duration-300 h-[1px] bg-white absolute bottom-0 left-0"></div>
                                        <h3 className="group-hover:italic uppercase">{loading ? "Submitting..." : "Submit"}</h3>
                                        <RiArrowRightUpLine size={20} />
                                    </div>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Form;
