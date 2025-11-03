import '../../../GLobal.css';
import { Ar_Ico } from '../../../assets/icons/assets';
import Footer from '../Footer';

function QualityGuarantee() {
  return (
    <>
      <div className='w-full min-h-[30rem] bg-[#161717] text-[#e9e8e8] grayscale ibm-plex-mono-light text-justify p-[4rem]'>
        <div className='w-1/8 aspect-square flex justify-center items-center mx-auto mb-8'>
          <img src={Ar_Ico} alt="Arcadia Studio" className='w-1/2 pointer-events-none' />
        </div>
        <p className='text-right ibm-plex-mono-bold'>Garantía de Calidad</p>
        <br />
        <p><strong>Arcadia Studio se compromete con la excelencia.</strong></p>
        <br />
        <p>
          <strong>Nuestro compromiso</strong><br />
          <ul className='list-disc pl-6 mt-2 space-y-1'>
            <li>Entregamos sitios web <strong>funcionales, responsivos y listos para funcionar</strong> desde el primer día.</li>
            <li>Incluimos <strong>soporte técnico incluido</strong> en todos nuestros planes (tiempos de respuesta según el plan contratado).</li>
            <li>Realizamos pruebas en múltiples dispositivos antes de entregar cualquier proyecto.</li>
          </ul>
        </p>
        <br />
        <p>
          <strong>¿Qué no cubre la garantía?</strong><br />
          <ul className='list-disc pl-6 mt-2 space-y-1'>
            <li>Cambios de opinión después de la entrega final.</li>
            <li>Problemas causados por modificaciones hechas por terceros.</li>
            <li>Contenido proporcionado por el cliente (textos, imágenes, logotipos).</li>
          </ul>
        </p>
        <br />
        <p>
          <strong>¿Cómo reportar un problema?</strong><br />
          Si encuentras un error funcional en tu sitio web dentro de los primeros 30 días posteriores a la entrega, escríbenos a <a href="mailto:soporte@arcadia.studio" className="underline">soporte@arcadia.studio</a> y lo corregiremos sin costo adicional.<br /><br />
          Construimos webs que funcionan — porque tu éxito es nuestro éxito.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default QualityGuarantee;