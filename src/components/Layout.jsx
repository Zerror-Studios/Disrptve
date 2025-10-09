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

      <div className="fixed top-0 left-0  w-full h-screen center ">
        <LiquidEther
          colors={['#ff0000', '#ff0000', '#ff0000']}
          mouseForce={10}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>


      <div className="fixed top-0 left-0  w-full h-screen center pointer-events-none">
        <LaserFlow horizontalBeamOffset={0.0}
          verticalBeamOffset={-0.5} />
      </div>


      <main>{children}</main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
