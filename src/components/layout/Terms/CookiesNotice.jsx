import '../../../GLobal.css';
import { Ar_Ico } from '../../../assets/icons/assets';

import Footer from '../Footer'

function CookiesNotice() {
  return (
    <>
      <div className='w-full min-h-[30rem] bg-[#161717] text-[#e9e8e8] grayscale ibm-plex-mono-light text-justify
        p-[4rem]
      '>
        <div className='w-1/8 aspect-9/8 flex justify-center items-center'>
          <img src={Ar_Ico} alt="" className='w-2/4 pointer-events-none' />
        </div>
        <p className='text-right ibm-plex-mono-bold'>Aviso de Cookies</p> <br />
        <p>** Última actualización:** Octubre 2025</p><br />
        <p>
            Este sitio web **no utiliza cookies**, ni tecnologías de rastreo (como Google Analytics, Facebook Pixel, etc.).
            No almacenamos ni accedemos a información en tu dispositivo. Tu visita es completamente anónima.
            La única forma en que guardamos tu información es si **tú decides enviarnos tu correo** a través del formulario de contacto.
        </p>
      </div>
      <Footer/>
    </>
  );
}

export default CookiesNotice;