import React from "react";
import Header from "./common/Header";
import Footer from "./common/Footer";
import LaserFlow from "./ui/LaserFlow";
import LiquidEther from "./ui/LiquidEther";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Header />
      </header>

      <div className="fixed z-[-1] top-0 left-0  w-full h-screen center ">
        <LiquidEther
          colors={['#FB0401', '#FB0401', '#FB0401']}
          mouseForce={10}
          cursorSize={20}
          isViscous={false}
          viscous={30}
          iterationsViscous={8}
          iterationsPoisson={8}
          resolution={0.1}
          isBounce={false}
          autoDemo={false}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={1000}
          autoRampDuration={0.6}
        />
      </div>

      <main>{children}</main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
