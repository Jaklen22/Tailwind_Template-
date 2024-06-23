import HeroImg from "../../assets/hero.png";
import PrimaryButton from './../Shared/PrimaryButton';
import HeroBg from '../../assets/heroBg.png'
const BgStyle = {
backgroundImage : `url(${HeroBg})`,
backgroundRepeat : 'no-repeat',
backgroundPosition: 'center',
backgroundSize : 'cover',
width : '100%',
height :'100%' 
}
const Hero = () => {
  return (
    <>
      <div style={BgStyle} className="relative z-[-1]">
        <div className="container py-16 sm:py-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]">
            <div
            data-aos="fade-right"
             className="space-y-4 text-dark order-2 sm:order-1">
              <h1 className="text-5xl">Fresh & Healthy Meal Plan <span className="text-secondary font-cursive text-7xl"> Delivery</span> in Miami</h1>
              <p className="lg:pr-64">
                Delicious Meals Delivered to Your Door From $132.95 per week
              </p>
              <div>
              <PrimaryButton></PrimaryButton>

              </div>
            </div>
            <div   data-aos="fade-left"
            className="relative  z-30 order-1">
              <img src={HeroImg} alt="HeroImg"
              className="w-full sm:scale-125 sm:translate-y-16" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
