import '../../../GLobal.css';
import { Ar_Ico } from '../../../assets/icons/assets';
import Footer from '../Footer';

function TermsAndConditions() {
  return (
    <>
      <div className='w-full min-h-[30rem] bg-[#161717] text-[#e9e8e8] grayscale ibm-plex-mono-light text-justify p-[4rem]'>
        <div className='w-1/8 aspect-square flex justify-center items-center mx-auto mb-8'>
          <img src={Ar_Ico} alt="Arcadia Studio" className='w-1/2 pointer-events-none' />
        </div>
        <p className='text-right ibm-plex-mono-bold'>Términos y Condiciones</p>
        <br />
        <p><strong>Última actualización:</strong> Octubre 2025</p>
        <p><strong>Propietario:</strong> Arcadia Studio</p>
        <br />
        <p>
          <strong>Uso del sitio web</strong><br />
          Este sitio web (arcadia.studio) tiene fines informativos y de generación de leads. No constituye una oferta vinculante de servicios.
        </p>
        <br />
        <p>
          <strong>Formulario de contacto</strong><br />
          Al enviar tu correo a través del formulario, aceptas que Arcadia Studio se comunique contigo vía email o WhatsApp para ofrecerte una asesoría gratuita. <strong>No estás obligado a contratar ningún servicio.</strong>
        </p>
        <br />
        <p>
          <strong>Propiedad intelectual</strong><br />
          Todo el contenido del sitio (diseño, texto, imágenes, logotipo) es propiedad de Arcadia Studio. Queda prohibida su reproducción sin autorización previa.
        </p>
        <br />
        <p>
          <strong>Disponibilidad del servicio</strong><br />
          Arcadia Studio se reserva el derecho de modificar, suspender o descontinuar cualquier parte del sitio en cualquier momento, sin previo aviso.
        </p>
        <br />
        <p>
          <strong>Ley aplicable</strong><br />
          Estos términos se rigen por las leyes de los Estados Unidos Mexicanos. Cualquier disputa se resolverá en las jurisdicciones de la Ciudad de México o Monterrey, a elección de Arcadia Studio.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default TermsAndConditions;