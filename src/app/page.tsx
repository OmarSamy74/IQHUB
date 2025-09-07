// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import VideoIntro from "./video-intro";
import Feature from "./feature";
import Courses from "./courses";
import ExpertExperience from "./expert-experience";
import Testimonials from "./testimonials";
import Faqs from "./faqs";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <VideoIntro />
      <Feature />
      <Courses />
      <ExpertExperience />
      <Testimonials />
      <Faqs />
      <Footer />
    </>
  );
}
