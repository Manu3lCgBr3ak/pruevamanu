import '../../../GLobal.css';
import { Ar_Ico } from '../../../assets/icons/assets';
import Footer from '../Footer';

function LegalPolicy() {
  return (
    <>
      <div className='w-full min-h-[30rem] bg-[#161717] text-[#e9e8e8] grayscale ibm-plex-mono-light text-justify p-[4rem]'>
        <div className='w-1/8 aspect-square flex justify-center items-center mx-auto mb-8'>
          <img src={Ar_Ico} alt="Arcadia Studio" className='w-1/2 pointer-events-none' />
        </div>
        <p className='text-right ibm-plex-mono-bold'>Política de Privacidad</p>
        <br />
        <p><strong>Última actualización:</strong> Octubre 2025</p>
        <p><strong>Responsable:</strong> Arcadia Studio (L. Manuel C. G.)</p>
        <br />
        <p>
          <strong>¿Qué datos personales recopilamos?</strong><br />
          Únicamente el <strong>correo electrónico</strong> que tú nos proporcionas voluntariamente al llenar el formulario de contacto en nuestro sitio web.
        </p>
        <br />
        <p>
          <strong>¿Para qué lo usamos?</strong><br />
          Tu correo lo usamos exclusivamente para:
          <ul className='list-disc pl-6 mt-2 space-y-1'>
            <li>Responderte y ofrecerte una <strong>asesoría personalizada sin compromiso</strong>.</li>
            <li>Enviar información relevante sobre nuestros servicios de desarrollo web, <strong>solo si tú lo solicitas</strong>.</li>
          </ul>
        </p>
        <br />
        <p>
          <strong>¿Con quién lo compartimos?</strong><br />
          <strong>No compartimos tu correo con terceros</strong>, agencias, ni plataformas publicitarias. Tu información se mantiene únicamente entre tú y Arcadia Studio.
        </p>
        <br />
        <p>
          <strong>¿Cuánto tiempo lo conservamos?</strong><br />
          Mientras consideremos que hay interés mutuo en una posible colaboración. Si en algún momento deseas que eliminemos tu correo, solo escríbenos a <a href="mailto:soporte@arcadia.studio" className="underline">soporte@arcadia.studio</a> y lo haremos de inmediato.
        </p>
        <br />
        <p>
          <strong>Tus derechos (ARCO)</strong><br />
          Tienes derecho a:
          <ul className='list-disc pl-6 mt-2 space-y-1'>
            <li><strong>Acceder</strong>, <strong>rectificar</strong>, <strong>cancelar</strong> o <strong>oponerte</strong> al uso de tus datos.</li>
          </ul>
          Para ejercerlos, envía un correo a <a href="mailto:soporte@arcadia.studio" className="underline">soporte@arcadia.studio</a> con tu solicitud.
        </p>
        <br />
        <p>
          <strong>Cambios</strong><br />
          Actualizaremos esta política si cambia la forma en que manejamos tus datos. Cualquier modificación se publicará aquí.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default LegalPolicy;