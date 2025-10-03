import React from 'react';
import Image from 'next/image';


import EmailIcon from "/public/icons/dashboard/hero/email.svg"

export default function HowWeWorkSection() {
  return (
    <section id="cum-lucram" className="py-16 lg:py-24">
      <div className="text-center">
        <p className="text-sm font-semibold italic text-[#171E29] leading-relaxed opacity-70 mx-auto text-center px-4">SIMPLU, RAPID ȘI TRANSPARENT</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          <span className="text-black font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-[42px]">CUM</span>
          <span className="bg-[linear-gradient(to_right,#588AFF_15%,#C2E0FF_90%)] bg-clip-text text-transparent font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-[42px]"> LUCRĂM?</span>
        </h2>
      </div>
      
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-10 my-10">

        <div className="w-full max-w-[306px] lg:w-[306px] h-[422px] flex flex-col gap-2">
          <div className="bg-white h-[280px] rounded-[10px] flex items-center justify-center">
            <Image src="/images/how-we-work/1.png" alt="How We Work" className="w-full h-auto" width={574} height={561} />
          </div>
          <div className="flex flex-col justify-between items-center gap-2">
            <p className="text-black text-xs font-extrabold">Pasul 1</p>
            <p className="text-black text-[15px] font-medium">Programăm un apel gratuit</p>
          </div>
          <p className="text-[#1d26337a] font-normal text-[15px] text-center">Discutăm despre afacerea ta și găsim soluția potrivită pentru buget și obiective.</p>
        </div>

        <div className="w-full max-w-[306px] lg:w-[306px] h-[422px] flex flex-col gap-2">
          <div className="bg-white h-[280px] rounded-[10px] flex items-center justify-center">
            <Image src="/images/how-we-work/2.png" alt="How We Work" className="w-full h-auto" width={574} height={561} />
          </div>
          <div className="flex flex-col justify-between items-center gap-2">
            <p className="text-black text-xs font-extrabold">Pasul 2</p>
            <p className="text-black text-[15px] font-medium">Alocăm echipa potrivită</p>
          </div>
          <p className="text-[#1d26337a] font-normal text-[15px] text-center">O echipă dedicată se ocupă de proiect, ca tu să te concentrezi pe business.</p>
        </div>

        <div className="w-full max-w-[306px] lg:w-[306px] h-[422px] flex flex-col gap-2">
          <div className="bg-white h-[280px] rounded-[10px] flex items-center justify-center">
            <Image src="/images/how-we-work/3.png" alt="How We Work" className="w-full h-auto" width={574} height={561} />
          </div>
          <div className="flex flex-col justify-between items-center gap-2">
            <p className="text-black text-xs font-extrabold">Pasul 3</p>
            <p className="text-black text-[15px] font-medium">Livrăm și optimizăm</p>
          </div>
          <p className="text-[#1d26337a] font-normal text-[15px] text-center">Vezi progresul constant și primești livrările la timp, fără bătăi de cap.</p>
        </div>

      </div>
      
      <div className="w-full flex justify-center">
        <a
          href="#cerere-oferta"
          className="w-[145px] bg-black rounded-full h-[34px] text-white font-semibold text-sm flex items-center justify-center gap-1"
        > 
          <EmailIcon className="w-[23px] h-[22px]" />
          Cerere Ofertă
        </a>
      </div>
    </section>
  );
}
