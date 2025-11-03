import '../../Global.css';
import { Btn_GetNow } from './Buttons';

const colorMap = {
  primary: 'bg-orange-200',
  secondary: 'bg-red-200',
  // ...
};


function Card({ tag, title, description, price, benefits,w,variant,pricexyear,reward}) {
    const classes = colorMap[variant] || colorMap.primary;
  const paragraphs = (benefits || '')
    .split(',')
    .map(p => p.trim())
    .filter(p => p);

  return (
    <div className={`${w} bg-[#e9e8e8] shadow-95-a-001 rounded-[2rem] 
    `}>
        <div className={`rounded-[2rem] ${classes}
            p-[2rem]
        `}>
            <div>
                <p className='ibm-plex-mono-light-italic
                    text-[4vw] md:text-[3vw] lg:text-[1.4vw] xl:text-[.8vw]
                '>{tag}</p>
                <p className='ibm-plex-mono-bold leading-none 
                    mt-[.5rem]
                    text-[9vw] md:text-[7.5vw] lg:text-[2.6vw] xl:text-[2vw]
                '>{title}</p>
                <p className='ibm-plex-mono-light leading-none mt-[.5rem]

                '>{description}</p>
            </div>
            <div className='w-full flex justify-center items-center 
                gap-[1rem]
                mt-[1rem]
            '>
                <div>
                    <Btn_GetNow 
                        Cont_button='Comprar'
                        variant={`${variant}`}
                    />
                </div>
                <div>
                    <div className='flex justify-start items-end'>
                        <p className='ibm-plex-mono-bold leading-none
                            text-[6vw] md:text-[5vw] lg:text-[2vw] xl:text-[2vw] 2xl:text-[1.2vw]
                        '>{price}</p>
                        <p className='ibm-plex-mono-semibold-italic leading-none
                            text-[4vw] md:text-[3vw] lg:text-[1.2vw] xl:text-[1vw] 2xl:text-[.8vw]
                        '>{'/MXN'}</p>
                    </div>
                    <p className='text-[3vw] md:text-[2.5vw] lg:text-[.9vw] xl:text-[.9vw] 2xl:text-[.6vw]'>Cancela cuando quieras</p>
                </div>
            </div>
        </div>
        <div className='w-[100%] flex justify-center'>
            <div className='w-[80%] flex-col items-center p-[.5rem] rounded-b-[1rem] flex
                bg-orange-300 leading-none ibm-plex-mono-light
            '>
                <p>
                    {pricexyear}
                </p>
                <p>
                    ({reward})
                </p>
            </div>
        </div>
        <div className='
            p-[2rem]
        '>
            {paragraphs.map((text, index) => (
            <p key={index} className='ibm-plex-mono-bold mb-[.5rem] leading-none
                text-[3.8vw] md:text-[2.5vw] lg:text-[1.1vw] xl:text-[1vw] 2xl:text-[1vw]
            '>{text}</p>
            ))}
        </div>
    </div>
  );
}

export default Card;