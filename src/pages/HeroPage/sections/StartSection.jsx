import '../../../GLobal.css';
import '../../../Text.css';

import { Ar_Logo_INVT } from '../../../assets/images/assets';
import { Ar_Ico_INVT } from '../../../assets/icons/assets';
import { Btn_CallToAction } from '../../../components/ui/Buttons';

import ScrollAnimation from "../../../components/ui/ScrollAnimation";

// 👇 Animación de scroll personalizada y suave
const smoothScrollTo = (targetY, duration = 800) => {
  const startY = window.scrollY;
  const distance = targetY - startY;
  const startTime = performance.now();

  const animateScroll = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Easing: easeOutCubic (más natural que linear)
    const ease = 1 - Math.pow(1 - progress, 3);
    window.scrollTo(0, startY + distance * ease);

    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  };

  requestAnimationFrame(animateScroll);
};

const handleGoToPlans = (e, sectionId) => {
  e.preventDefault();
  const section = document.getElementById(sectionId);
  if (section) {
    const targetY = section.offsetTop;
    smoothScrollTo(targetY, 800); // 800ms de duración
  }
};

function StartSection() {
  return (
    <div className='w-full flex bg-[#161717] relative flex-col md:flex-row shadow-95-a-001'>
      <div className='flex-1 flex flex-col items-center relative'>
        <div className='w-[90%] flex-1 flex flex-col items-center Arcadia_background rounded-[4rem] z-3 Ar_Padre_Fchild pb-[5rem] justify-end'>
          <div className='z-2 flex flex-col bg-[#0046b4] justify-start items-start Ar_Ico_Fchild w-[35%] md:w-[30%] lg:w-[25%] xl:w-[20%] xl:absolute xl:top-0 xl:left-0'>
            <div className='w-full aspect-9/8 bg-[#e9e8e8] flex justify-center items-center'>
              <img src={Ar_Ico_INVT} alt="" className='w-2/4 pointer-events-none' />
            </div>
            <div className='w-15 h-15'>
              <div className='w-full h-full bg-[#e9e8e8] [mask-image:radial-gradient(circle_at_bottom_right,transparent_70%,black_71%)]'></div>
            </div>
          </div>

          <div className='absolute flex justify-center items-center text-center top-[2rem] right-0 w-[65%] md:w-[70%] lg:w-[75%] xl:w-[80%]'>
            <div className='bg-[#e9e8e8] w-[85%] ibm-plex-mono-medium-italic flex justify-center text-[2.5vw] md:text-[1.5vw] xl:text-[1.2vw] 2xl:text-[1vw]'>
              <h1 className='w-[80%]'>Diseño de páginas web y tiendas online a medida</h1>
            </div>
          </div>

          <div className='w-full flex justify-center xl:justify-end'>
            <div className='flex flex-col items-center w-[90%] xl:w-[75%]'>
              <div className='leading-none text-[5vw] md:text-[3.5vw] xl:text-[2vw] xl:pr-[4rem]'>
                <p className='ibm-plex-mono-light-italic text-[7vw] md:text-[5vw] xl:text-[4vw]'>
                  <span className='text-[7.8vw] md:text-[7vw] xl:text-[4.8vw]'>Creamos</span>
                  <span> tu </span>
                  <span className='ibm-plex-mono-bold text-[8.2vw] md:text-[7.5vw] xl:text-[5.2vw]'> web </span>
                </p>
                <p className='ibm-plex-mono-bold text-[8.2vw] md:text-[7.5vw] xl:text-[5.2vw]'>
                  <span>a </span>
                  <span>medida</span>
                </p>
                <p className='ibm-plex-mono-light'>y nos quedamos a cuidarla.</p>
              </div>
            </div>
          </div>

          <h2 className='px-2 text-center bg-[#0046b4] text-[#e9e8e8] my-[1rem] ibm-plex-mono-semibold text-[2.5vw] md:text-[1.5vw] xl:text-[1.2vw] 2xl:text-[1vw]'>
            Diseño + Hosting + Mantenimiento = Una sola suscripción.
          </h2>

          <img src={Ar_Logo_INVT} alt="Arcadia..." className='w-4/5 h-auto pointer-events-none' />
        </div>

        <div className='min-h-[6rem] flex justify-between items-center bg-[#161717] z-3 rounded-r-full text-[#e9e8e8] w-3/4 pr-[1rem]'>
          <p className='ibm-plex-mono-light text-[3.4vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.2vw] 2xl:text-[1.1vw]'>
            <span className='ibm-plex-mono-semibold-italic'>Tu página web</span>
            <span> lista para </span>
            <span className='ibm-plex-mono-bold'>vender en días, no meses.</span>
          </p>
          <div className='aspect-square Arcadia_background rounded-full w-[25%] md:w-[15%] lg:w-[10%] xl:w-[8%] 2xl:w-[5%]'></div>
        </div>

        <div className='absolute bg-[#e9e8e8] bottom-0 right-0 aspect-square z-2 rounded-tr-[4rem] h-3/8 md: lg:h-1/2 shadow-95-a-001'></div>
      </div>

      <div className='flex flex-col z-1 w-full md:w-[30%] relative'>
        <div className='w-full min-h-[10rem] z-1 bg-[#161717] md:hidden'>
          <div className='Arcadia_background w-[80%] h-[7rem] rounded-bl-[2rem] rounded-r-[2rem] flex justify-center items-center'>
            <Btn_CallToAction
              content='Empieza ahora'
              onClick={(e) => handleGoToPlans(e, 'planes')}
            />
          </div>
        </div>

        <div className='w-full aspect-square flex justify-center items-center'>
          <div className='w-[80%] aspect-square bg-[#e9e8e8] rounded-[4rem] flex justify-center items-center relative shadow-95-a-001'>
            <div className='w-[50%] aspect-square bg-[#e9e8e8] clip-triangulo absolute bottom-0 right-0 rounded-br-[4rem]'></div>
            <div className='w-[40%] aspect-square bg-[#feb94b] clip-triangulo absolute bottom-0 right-0 rounded-br-[4rem]'></div>
            <div className='w-[80%] aspect-square bg-[#161717] rounded-[3rem] flex justify-center items-center'>
              <ScrollAnimation />
            </div>
          </div>
        </div>

        <div className='absolute z-[-1] w-1/2 h-full bg-gray-300 right-0'></div>
          
        <div className='w-full min-h-[15rem] bg-[#161717] z-1 hidden md:flex'>
          <div className='Arcadia_background rounded-bl-[2rem] rounded-r-[2rem] flex justify-center items-center w-[90%] lg:w-[90%] xl:w-[80%] 2xl:w-[80%] h-[8rem] lg:h-[10rem] xl:h-[10rem] 2xl:h-[12rem]'>
            <Btn_CallToAction
              content='Empieza ahora'
              onClick={(e) => handleGoToPlans(e, 'planes')}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartSection;