import '../../../GLobal.css';
import Card from '../../../components/ui/Card';
import { Btn_GetNow } from '../../../components/ui/Buttons';

function Plans() {
  return (
    <div id="planes" className='w-full flex flex-col justify-center items-center pt-[4rem] md:pt-[6rem] lg:pt-[5rem] xl:pt-[5rem] 2xl:pt-[7rem]'>
      <div className='flex flex-col justify-center items-center'>
        <p className='px-5 py-1 bg-green-200 rounded-full ibm-plex-mono-regular mb-2 text-[4vw] md:text-[2.2vw] lg:text-[2vw] xl:text-[1.3vw] 2xl:text-[1.1vw]'>
          Grandes Ofertas
        </p>
        <p className='ibm-plex-mono-bold leading-none text-[4.5vw] md:text-[3vw] lg:text-[2.5vw] xl:text-[1.8vw] 2xl:text-[1.4vw]'>
          Tu web, tu ritmo, tu presupuesto
        </p>
        <p className='ibm-plex-mono-light text-center w-[85%] xl:w-[100%] text-[2.5vw] md:text-[1.5vw] lg:text-[2vw] xl:text-[1.2vw] 2xl:text-[1vw]'>
          Planes diseñados para emprendedores, PYMES y profesionales —sin complicaciones, sin contratos largos.
        </p>
      </div>

      <div className='w-full flex justify-center items-center flex-col lg:flex-row gap-[2rem] mt-[2rem]'>
        <div className='transition-all duration-300 hover:translate-y-[-8px] hover:ring-4 hover:ring-[#FF9629] hover:ring-opacity-70 cursor-pointer rounded-[2rem]'>
          <Card
            w='w-[20rem] md:w-[30rem] lg:w-[17rem] xl:w-[20rem]'
            tag='Plan de Suscripción'
            title='Arcadia Básico'
            description='Simple, confiable y sin estrés.'
            price='$1,299'
            benefits="✓ 1 web (5 secciones),✓ Diseño responsivo,✓ Dominio + hosting incluidos,✓ Formulario de contacto,✓ Soporte en 48 hrs,✓ Actualizaciones básicas "
            variant="primary"
            pricexyear="$12,990 MXN/año"
            reward="-17% ¡ahorras $2,649!"
          />
          <div className='w-full flex justify-center p-[.5rem]'>
            <p>saber mas</p>
          </div>
        </div>

        <div className='transition-all duration-300 ease-out hover:scale-[1.04] hover:translate-y-[-12px] hover:z-10 hover:ring-4 hover:ring-[#0146b4] hover:ring-opacity-70 cursor-pointer rounded-[2rem] px-2 py-8 bg-[#ED7B61] invert'>
          <Card
            w='w-[20rem] md:w-[30rem] lg:w-[17rem] xl:w-[20rem]'
            tag='Plan de Suscripción'
            title='Arcadia Pro'
            description='Necesito una web que venda y crezca conmigo.'
            price='$4,999'
            benefits="✓ Todo lo de Flexible, ✓ Tienda online, ✓ Pagos: PayPal Stripe Oxxo,✓ Panel de administración intuitivo,✓ Blog incluido,✓ Soporte prioritario,✓ Copias de seguridad semanales,✓ 3 hrs/mes de actualizaciones,✓ Reporte mensual de rendimiento"
            variant="secondary"
            pricexyear="$47,990 MXN/año"
            reward="20% menos + 1 mes gratis"
          />
          <div className='w-full flex justify-center p-[.5rem]'>
            <p>saber mas</p>
          </div>
        </div>

        <div className='transition-all duration-300 hover:translate-y-[-8px] hover:ring-4 hover:ring-[#FF9629] hover:ring-opacity-70 cursor-pointer rounded-[2rem]'>
          <Card
            w='w-[20rem] md:w-[30rem] lg:w-[17rem] xl:w-[20rem]'
            tag='Plan de Suscripción'
            title='Arcadia Flexible'
            description='Control total'
            price='$2,999'
            benefits="✓ Todo lo de Básico, ✓ Hasta 8 secciones, ✓ Blog integrado, ✓ Soporte primordial,✓ 2 hrs/mes de actualizaciones,✓ Integración con WhatsApp y redes,✓ Google Analytics básico"
            variant="primary"
            pricexyear="$29,990 MXN/año"
            reward="-17% ¡ahorras $5,098!"
          />
          <div className='w-full flex justify-center p-[.5rem]'>
            <p>saber mas</p>
          </div>
        </div>
      </div>

      <div className='w-full flex flex-col items-center justify-center mt-[3rem]'>
        <div className='bg-orange-200 rounded-[2rem] shadow-xl flex transition-all duration-300 hover:scale-[1.04] hover:ring-4 hover:ring-[#FF9629] hover:ring-opacity-70 cursor-pointer w-[80%] md:w-[80%] lg:w-[80%] xl:w-[60%] flex-col lg:flex-row gap-[1rem]'>
          <div className='h-full bg-orange-300 rounded-[2rem] w-[90%] md:w-[90%] lg:w-[35%] p-[2rem]'>
            <p className='ibm-plex-mono-light-italic text-[4vw] md:text-[3vw] lg:text-[1.4vw] xl:text-[.8vw]'>
              Opción de compra única
            </p>
            <p className='ibm-plex-mono-bold leading-none text-[9vw] md:text-[7.5vw] lg:text-[2.6vw] xl:text-[2vw] py-[.5rem]'>
              <span>Tu Web Definitiva</span>
            </p>
            <p className='ibm-plex-mono-light text-[3vw] md:text-[2vw] lg:text-[1vw] xl:text-[.8vw]'>
              paga una vez y posee tu web para siempre.
            </p>
          </div>

          <div className='flex justify-center items-center p-[2rem] flex-col w-[90%] lg:w-[65%] gap-[1rem]'>
            <div className='flex justify-center items-center'>
              <div className='ibm-plex-mono-bold text-[3vw] md:text-[2vw] lg:text-[1vw] xl:text-[.8vw]'>
                <p>✓ Todo lo del plan Arcadia Pro</p>
                <p>✓ Entrega final: dominio, hosting, código fuente y acceso completo</p>
                <p>✓ Mantenimiento y soporte incluidos por 6 meses</p>

                <p className='mt-[.5rem]'>❌ Sin soporte ni actualizaciones después</p>
              </div>
            </div>

            <div className='flex justify-center items-center gap-[1rem]'>
              <div>
                <Btn_GetNow Cont_button='Comprar' variant='primary' />
              </div>
              <div>
                <p className='ibm-plex-mono-bold leading-none 
                text-[6vw] md:text-[5vw] lg:text-[3vw] xl:text-[2.5vw] 2xl:text-[2vw]'>
                  <span>$48,990</span>
                  <span className='ibm-plex-mono-semibold-italic text-[4vw] md:text-[3vw] lg:text-[1.2vw] xl:text-[1vw] 2xl:text-[.8vw]'>/MXN</span>
                </p>
                <p className='ibm-plex-mono-light-italic text-[3vw] md:text-[2.5vw] lg:text-[.9vw] xl:text-[.9vw] 2xl:text-[.6vw]'>
                  Cancela cuando quieras
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Plans;
