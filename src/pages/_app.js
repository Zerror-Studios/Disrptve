import Layout from "@/components/Layout";
import LenisScroll from "@/components/LenisScroll";
import "@/styles/globals.css";
import "@/styles/Fonts.css";
import "aos/dist/aos.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Transition from "@/components/common/Transition";

gsap.registerPlugin(ScrollTrigger);

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
      if (window.lenis) window.lenis.resize();
    }, 500);
    return () => clearTimeout(timeout);
  }, [router.asPath]);

  return (
    <LenisScroll>
      <Transition routeKey={router.asPath}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Transition>
    </LenisScroll>
  );
}
