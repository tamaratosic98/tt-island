import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";

import Alert from "../components/Alert.jsx";
import Dog from "../components/Dog.jsx";
import Loader from "../components/Loader.jsx";
import { useAlert } from "../hooks/useAlert.js";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("0|sitting_0");
  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleFocus = () => {
    setCurrentAnimation("0|shake_0");
  };

  const handleBlur = () => {
    setCurrentAnimation("0|rollover_0");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);

      await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          to_name: "Tamara",
          to_email: "tosict98@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );
    } catch (err) {
      console.error(err);
      showAlert({ text: "Something went wrong. Please try again later." });
    } finally {
      setIsLoading(false);
      formRef.current.reset();
      setForm({ name: "", email: "", message: "" });

      if (!alert.show) {
        showAlert({ text: "Message sent successfully", type: "success" });
      }

      setTimeout(() => {
        hideAlert();
        setCurrentAnimation("0|sitting_0");
      }, [3000]);
    }
  };

  const adjustDogForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.04, 0.04, 0.04];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [0.03, 0.03, 0.03];
      screenPosition = [0.5, -1.7, 0];
    }

    return [screenScale, screenPosition];
  };

  const [dogScale, dogPosition] = adjustDogForScreenSize();

  return (
    <section className="max-container flex lg:flex-row flex-col lg:h-screen">
      {alert.show && <Alert {...alert} />}
      <div className="flex-1 min-w-[50%]">
        <h1 className="head-text">Get in touch</h1>
        <form
          className="w-full flex flex-col gap-7 mt-14 bg-transparent"
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder="Jane Doe"
            />
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder="example@domain.com"
            />
          </label>
          <label className="text-black-500 font-semibold">
            Your Message
            <textarea
              name="message"
              rows={4}
              className="textarea"
              placeholder="Type your message here..."
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
            />
          </label>

          <button
            className="btn"
            type="submit"
            onFocus={handleFocus}
            onBlur={handleFocus}
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      <div className="w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}>
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Dog
              position={dogPosition}
              rotation={[0, -0.5, 0]}
              scale={dogScale}
              currentAnimation={currentAnimation}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
