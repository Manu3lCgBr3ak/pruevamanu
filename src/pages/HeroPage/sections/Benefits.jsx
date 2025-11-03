import '../../../GLobal.css';
import { Ar_Ico } from '../../../assets/icons/assets';

function Benefits() {
  return (
    <div className='w-full relative z-10'>
      <div className='w-[85%] min-h-[20rem] bg-[#feb94b] rounded-br-[3rem] flex justify-center items-center shadow-95-a-001 md:gap-[4rem] flex-col md:flex-row py-4'>
        <div className='bg-[#161717] rounded-[2rem] text-[#e9e8e8] ibm-plex-mono-bold flex flex-col w-[90%] md:w-[50%] text-[2.5vw] md:text-[1.5vw] xl:text-[1.2vw] 2xl:text-[1vw] gap-[.5rem] px-[2rem] py-[2rem]'>
          <p>
            <span>✅ Listas en días, no meses</span>
          </p>
          <p>
            <span>✅ Todo incluido en tu suscripción: hosting, dominio y SSL</span>
          </p>
          <p className='flex flex-col invert bg-[#161717] text-[#2fbdf2]'>
            <span>✅ Diseño único</span>
            <span className='ibm-plex-mono-light ml-[1rem]'>Nada de plantillas. Hecho para tu marca.</span>
          </p>
          <p>
            <span>✅ Soporte técnico continuo</span>
          </p>
          <p>
            <span>✅ Suscripción o pago único —tú eliges</span>
          </p>
        </div>
        <img src={Ar_Ico} alt="Arcadia..." className='w-[20%]' />
      </div>
    </div>
  );
}

export default Benefits;