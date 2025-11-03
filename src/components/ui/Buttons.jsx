import '../../Global.css'

const colorMap = {
  primary: 'bg-[#FF9629] text-white',
  secondary: 'bg-[#0046b4] text-[#e9e8e8]',
};

export function Btn_GetNow({ variant = 'primary',Cont_button }) {
  const classes = colorMap[variant] || colorMap.primary;
  return (
    <button className={`ibm-plex-mono-semibold-italic ${classes} 
      tracking-tighter leading-none
      transition-all duration-300 ease-out
      hover:scale-105 hover:shadow-[0_0_12px_rgba(255,255,255,0.4)]
      active:scale-95 active:shadow-none
      focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50
      text-[4vw] md:text-[3vw] lg:text-[1.4vw] xl:text-[.8vw] rounded-full
      px-4 py-2
      `}>
      <span>{Cont_button}</span>
    </button>
  );
}

export function Btn_Examples({ content, onClick }) {
  return (
    <button
      onClick={onClick} // 👈 pasa la función desde el padre
      className="w-[10%] md:w-[6%] lg:w-[4%] xl:w-[4%] 2xl:w-[3%] aspect-square rounded-full bg-[#0046b4] invert flex items-center justify-center text-xl text-white ibm-plex-mono-bold transition-all duration-300 ease-out hover:scale-110 hover:bg-[#0046b4] shadow-[0_0_25px_rgba(255,255,255,0.2)] active:scale-95 active:opacity-80 focus:outline-none"
    >
      {content}
    </button>
  );
}

export function Btn_CallToAction({ content, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-[#161717] text-[#e9e8e8] rounded-full ibm-plex-mono-semibold shadow-[0_0_40px_rgba(255,255,255,0.2)]
        px-[2rem] py-[1rem]
        text-[5vw] md:text-[2vw] xl:text-[1.8vw]

        transition-all duration-300 ease-out
        hover:scale-105
      "
    >
      {content}
    </button>
  );
}