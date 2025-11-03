import '../../GLobal.css';
import { Ar_Logo_Footer } from '../../assets/images/assets';
import { Ar_Ico } from '../../assets/icons/assets';

import { lg_tk } from '../../assets/images/assets';
import { lg_in } from '../../assets/images/assets';
import { lg_yt } from '../../assets/images/assets';
import { lg_w } from '../../assets/images/assets';
import './Footer.css';
import { useState, useRef } from 'react';

function Footer() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const emailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current?.value.trim();

    if (!email) {
      setError(true);
      setSubmitted(false);
      setTimeout(() => setError(false), 3000);
      return;
    }

    setSubmitted(true);
    setError(false);
    e.target.reset();
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className='w-full grayscale'>
      <div className='bg-red-200 pt-[2rem]'>
        <img
          src={Ar_Logo_Footer}
          alt=""
          className='h-auto w-[85%] md:w-[70%] 2xl:w-[60%] translate-y-1'
        />
      </div>

      <div className='w-full bg-[#141414] flex flex-col justify-center items-center py-[5rem]'>
        <div className='Arcadia_background w-[80%] flex flex-col items-center rounded-[4rem] p-[2rem] Ar_footer_pd gap-[1rem]'>
          <div className='first:-mt-[2rem] Ar_footer_fc'>
            <div className='bg-[#ebebeb] pb-[1rem] lg:pb-[2rem] pr-[2rem]
              rounded-br-[2rem] md:rounded-br-[4rem] lg:rounded-br-[4rem] xl:rounded-br-[4rem] 2xl:rounded-br-[4rem]
            '>
              <p className='ibm-plex-mono-bold leading-none text-[7vw] md:text-[6.5vw] lg:text-[5vw] xl:text-[4vw] 2xl:text-[4vw]'>
                <span>Arcadia</span>
                <span className='ibm-plex-mono-bold-italic'>-Studio</span>
              </p>
              <p className='ibm-plex-mono-light leading-none text-[7vw] md:text-[6.5vw] lg:text-[5vw] xl:text-[4vw] 2xl:text-[4vw]'>
                Desarrollo web
              </p>
            </div>
            <div className='w-15 h-15 absolute'>
              <div className='w-full h-full bg-[#ebebeb] [mask-image:radial-gradient(circle_at_bottom_right,transparent_70%,black_71%)]'></div>
            </div>
          </div>

          <div className='flex ibm-plex-mono-light justify-center items-center
            gap-2
            w-[90%] lg:w-[50%]
            lg:absolute lg:bottom-[3rem]  lg:left-[2rem] xl:left-[8rem]
            text-[2.6vw] md:text-[2vw] lg:text-[1.8vw] xl:text-[1vw] 
          '>
            <a 
              href="/" 
              className='bg-[#161717] text-[#ebebeb] 
                transition-all duration-300 ease-out
                hover:scale-105 hover:bg-[#ebebeb] hover:text-[#161717] 
                py-[.6rem] md:py-[1rem]
                pl-[.6rem] md:pl-[1rem]
                w-[30%] xl:w-[20%]
                block text-left no-underline
              '
            >
              inicio
            </a>

            <a 
              href="/" 
              className='bg-[#ebebeb]
                transition-all duration-300 ease-out
                hover:scale-105 hover:bg-[#161717] hover:text-[#ebebeb] 
                py-[.6rem] md:py-[1rem]
                pl-[.6rem] md:pl-[1rem]
                w-[30%] xl:w-[20%]
                block text-left no-underline
              '
            >
              Planes
            </a>

            <a 
              href="/" 
              className='bg-[#161717] text-[#ebebeb]
                transition-all duration-300 ease-out
                hover:scale-105 hover:bg-[#ebebeb] hover:text-[#161717] 
                py-[.6rem] md:py-[1rem]
                pl-[.6rem] md:pl-[1rem]
                w-[30%] xl:w-[20%]
                block text-left no-underline
              '
            >
              Ejemplos
            </a>
          </div>

          {/* ✅ Formulario actualizado según tu solicitud */}
          <form 
            name="vip-ready"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className='bg-[#ebebeb] p-[2rem] rounded-[3rem] leading-none ibm-plex-mono-light flex justify-center items-stretch lg:mt-[1rem] lg:mb-[1rem]
              flex-col lg:flex-row relative
              gap-2
            '
            onSubmit={handleSubmit}
            noValidate
          >
            <input type="hidden" name="form-name" value="vip-ready" />
            <p className='ibm-plex-mono-bold leading-none text-[6vw] md:text-[5.5vw] lg:text-[2.8vw] xl:text-[2vw] 2xl:text-[2.5vw]
            '>
              ¿Listo para una web que sí&nbsp;funcione?
            </p>
            <p className='ibm-plex-mono-semibold mt-[.8rem] text-[3vw] md:text-[2.4vw] lg:text-[1.4vw] xl:text-[1vw] text-right lg:text-left'>
              Déjanos tu correo y platicamos sin&nbsp;compromiso
            </p>
            <input
              ref={emailRef}
              type="email"
              name="email"
              placeholder="Tu correo electrónico"
              className="mt-2 w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black 
              text-[3vw] md:text-[2.4vw] lg:text-[1.4vw] xl:text-[1vw] self-center
              text-center lg:text-left
              "
            />

            <button
              type="submit"
              className="mt-2 w-full bg-black text-white rounded-xl flex items-center justify-center gap-2 ibm-plex-mono-medium text-[3vw] md:text-[2.2vw] lg:text-[1.8vw] xl:text-[1vw] transition-all duration-300 hover:bg-gray-800
               py-2 lg:py-auto
              "
            >
              Enviar →
            </button>

            <div
            className={`font-semibold ibm-plex-mono-medium text-[3vw] md:text-[2.2vw] lg:text-[1.8vw] xl:text-[1vw] 
              bg-[#161717] text-[#a0d9a0]
              px-[1.5rem]
              rounded-lg lg:rounded-full
              overflow-hidden
              transition-all duration-300 ease-out
              grayscale-0 invert-0
              ${
                submitted
                  ? 'h-[4.5rem] pt-[1rem] pb-[1rem] mt-3 opacity-100'
                  : 'h-0 pt-0 pb-0 mt-0 opacity-0'
              }
              lg:absolute lg:bottom-[-2rem] lg:left-1/2 lg:-translate-x-1/2
            `}
          >
            ¡Gracias! Te escribiremos pronto. Como bienvenida, tendrás 5% de descuento si decides trabajar con nosotros.
          </div>

            {error !== null && (
            <div
              className={`font-semibold ibm-plex-mono-medium text-[3vw] md:text-[2.2vw] lg:text-[1.8vw] xl:text-[1vw]
                bg-green-300
                rounded-lg lg:rounded-full
                px-[1.5rem]
                overflow-hidden
                transition-all duration-300 ease-out
                ${error 
                  ? 'py-[1rem] opacity-100 translate-y-0' 
                  : 'py-0 opacity-0 translate-y-2 h-0'
                }
                /* Móvil: margen solo cuando está visible */
                ${error ? 'mt-3' : 'mt-0'}
                /* Desktop: posición absoluta */
                lg:absolute lg:bottom-[-2rem] lg:left-1/2 lg:transform lg:-translate-x-1/2
              `}
            >
              Por favor ingresa tu correo.
            </div>
          )}

            <p className='ibm-plex-mono-light mt-2 text-[3vw] md:text-[2.2vw] lg:text-[1vw] xl:text-[1vw]
              text-center lg:text-left 
            '>
              Solo&nbsp;enviamos contenido que realmente te interesa. Sin spam.
            </p>  
          </form>
          
          {/* Resto del componente sin cambios */}
          <div className='flex bg-[#ebebeb] rounded-full w-[100%] md:w-[80%] lg:w-[60%] xl:w-[45%] xl:absolute xl:top-[2rem] xl:right-[2rem]
            p-[1.5rem] md:p-[2rem] lg:p-[2rem] xl:p-[2rem]
            justify-between        
          '>
            <div className='w-[30%] xl:w-[50%] flex
              -m-[1.5rem] md:-m-[2rem] lg:-m-[2rem] xl:-m-[2rem]
            '>
              <div className='bg-[#161717] w-[80%] h-full relative rounded-l-full overflow-hidden'>
                <div className='h-[45%] aspect-1/1 absolute right-0 bottom-0'>
                  <div className='w-full h-full bg-[#ebebeb] [mask-image:radial-gradient(circle_at_top_left,transparent_70%,black_71%)]'></div>
                </div>
              </div>
              <div className='w-[20%] h-full'>
                <div className='h-[45%] aspect-1/1'>
                  <div className='w-full h-full bg-[#161717] [mask-image:radial-gradient(circle_at_bottom_right,transparent_70%,black_71%)]'></div>
                </div>
              </div>
            </div>
            <div className='flex justify-center
              w-[70%] xl:w-[50%]
              gap-3
              translate-x-[-10%]
            '>
              <img src={lg_tk} alt="" className='w-[20%] h-auto bg-[#ebebeb] rounded-sm lg:p-1
                transition-all duration-300 ease-out
                hover:scale-105 hover:invert
              '/>
              <img src={lg_in} alt="" className='w-[20%] h-auto bg-[#ebebeb] rounded-sm lg:p-1
                transition-all duration-300 ease-out
                hover:scale-105 hover:invert
              ' />
              <img src={lg_yt} alt="" className='w-[20%] h-auto bg-[#ebebeb] rounded-sm lg:p-1
                transition-all duration-300 ease-out
                hover:scale-105 hover:invert
              ' />
              <img src={lg_w} alt="" className='w-[20%] h-auto bg-[#ebebeb] rounded-sm lg:p-1
                transition-all duration-300 ease-out
                hover:scale-105 hover:invert
              ' />             
            </div>
          </div>

          <div className='flex flex-col items-end last:-mb-[2rem] Ar_footer_lc'>
            <div className='bg-[#ebebeb] w-full rounded-tl-[4rem] p-[2rem]'>
              <div className='text-[3vw] md:text-[2.2vw] lg:text-[1.8vw] xl:text-[1.2vw] 2xl:text-[1vw] ibm-plex-mono-light'>
                <p>📧 soporte@arcadia.studio</p>
                <p>📞 +52 8148135618</p>
                <p>📍 México</p>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col text-white items-center text-center mt-[2rem]'>
          <p className='w-[90%] mb-[2rem] xl:mb-auto ibm-plex-mono-light leading-none
            text-[3vw] md:text-[2.2vw] lg:text-[1.8vw] xl:text-[1vw]
          '>
            © 2025 Arcadia Studio. Todos los derechos reservados.
          </p>
          <div className='flex justify-center items-center flex-col lg:flex-row gap-[1.5rem] ibm-plex-mono-light
            text-[3vw] md:text-[2.2vw] lg:text-[1.4vw] xl:text-[1vw]
          '>
            <a
              href="/politica-de-privacidad"
              target="_blank"
              rel="noopener noreferrer"
              className='hover:bg-white hover:text-black hover:px-2 transition-all duration-300 ease-out cursor-pointer inline-block'
            >
              Política de privacidad
            </a>
            <a
              href="/terminos-y-condiciones"
              target="_blank"
              rel="noopener noreferrer"
              className='hover:bg-white hover:text-black hover:px-2 transition-all duration-300 ease-out cursor-pointer inline-block'
            >
              Términos y condiciones
            </a>
            <a
              href="/aviso-de-cookies"
              target="_blank"
              rel="noopener noreferrer"
              className='hover:bg-white hover:text-black hover:px-2 transition-all duration-300 ease-out cursor-pointer inline-block'
            >
              Aviso de cookies
            </a>
            <a
              href="/garantia-de-calidad"
              target="_blank"
              rel="noopener noreferrer"
              className='hover:bg-white hover:text-black hover:px-2 transition-all duration-300 ease-out cursor-pointer inline-block'
            >
              Garantía de calidad
            </a>
          </div>
        </div>
        <div className='absolute
          right-8 lg:right-5
          bottom-8 lg:bottom-5
          w-[10%] lg:w-[5%]
        '>
            <img src={Ar_Ico} alt="" />
        </div>
      </div>
    </div>
  );
}


export default Footer;
