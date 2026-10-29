
import Category from "./components/category";
import Collection from "./components/collection";
import Hero from "./components/hero";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Category />
      <Collection />
      <WhyChooseUs />
    </div>
  );
}
