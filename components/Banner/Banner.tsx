import BannerMenu from "./BannerMenu";
import BannerSlider from "./BannerSlider";

const Banner = () => {
  return (
    <section
      role="banner"
      className="container mb-7 mt-3 grid grid-cols-1 gap-5 lg:grid-cols-4 xl:gap-8"
    >
      <div className="hidden lg:col-span-1 lg:block">
        <BannerMenu />
      </div>
      <div className="col-span-1 h-[200px] sm:h-[300px] lg:col-span-3 lg:h-[400px] xl:h-full">
        <BannerSlider />
      </div>
    </section>
  );
};

export default Banner;
