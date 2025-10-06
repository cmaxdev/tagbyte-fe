import React from 'react';
import Image from 'next/image';


import EmailIcon from "/public/icons/dashboard/hero/email.svg"

export default function HowWeWorkSection() {
  return (
    <section id="cum-lucram" className="py-2 lg:py-4">
      <div className="text-center flex flex-col items-center justify-center gap-[3px]">
        <p className="text-[11px] font-medium italic text-[#1D2633] leading-[12px] mx-auto text-center font-jetbrains-mono">SIMPLU, RAPID ȘI TRANSPARENT</p>
        <h2 className="max-w-[430px] w-full text-center flex flex-row items-center justify-center gap-2 leading-12 font-extrabold text-[40.52px] bg-gradient-to-r from-[#588AFF]/90 from-[41%] to-white/60 to-[100%] bg-clip-text text-transparent">
          <span className="text-[#292D36]">CUM</span>
          <span className=""> LUCRĂM?</span>
        </h2>
      </div>
      
      <div className="flex flex-col lg:flex-row justify-center items-center gap-x-2 lg:gap-5 mt-6 mb-12">

        <div className="w-full max-w-[306px] lg:w-[306px] h-[422px] flex flex-col gap-2 p-[10px]">
          <div className="bg-white h-[280px] rounded-[10px] flex items-center justify-center">
            <Image src="/images/how-we-work/1.png" alt="How We Work" className="w-full h-full" width={574} height={561} />
          </div>
          <div className="flex flex-col justify-between items-center gap-2">
            <p className="text-black text-xs font-extrabold font-jetbrains-mono">Pasul 1</p>
            <p className="text-[#292D36] text-[15px] font-medium font-inter">Programăm un apel gratuit</p>
          </div>
          <p className="text-[#1D2633] font-normal text-[13.71px] text-center leading-[21px] tracking-[0.15px]">Discutăm despre afacerea ta și găsim soluția potrivită pentru buget și obiective.</p>
        </div>

        <div className="w-full max-w-[306px] lg:w-[306px] h-[422px] flex flex-col gap-2 p-[10px]">
          <div className="bg-white h-[280px] rounded-[10px] flex items-center justify-center">
            <Image src="/images/how-we-work/2.png" alt="How We Work" className="w-full h-full" width={574} height={561} />
          </div>
          <div className="flex flex-col justify-between items-center gap-2">
            <p className="text-black text-xs font-extrabold font-jetbrains-mono">Pasul 2</p>
            <p className="text-[#292D36] text-[15px] font-medium font-inter">Alocăm echipa potrivită</p>
          </div>
          <p className="text-[#1D2633] font-normal text-[13.71px] text-center leading-[21px] tracking-[0.15px]">O echipă dedicată se ocupă de proiect, ca tu să te concentrezi pe business.</p>
        </div>

        <div className="w-full max-w-[306px] lg:w-[306px] h-[422px] flex flex-col gap-2 p-[10px]">
          <div className="bg-white h-[280px] rounded-[10px] flex items-center justify-center">
            <Image src="/images/how-we-work/3.png" alt="How We Work" className="w-full h-full" width={574} height={561} />
          </div>
          <div className="flex flex-col justify-between items-center gap-2">
            <p className="text-black text-xs font-extrabold font-jetbrains-mono">Pasul 3</p>
            <p className="text-[#292D36] text-[15px] font-medium font-inter">Livrăm și optimizăm</p>
          </div>
          <p className="text-[#1D2633] font-normal text-[13.71px] text-center leading-[21px] tracking-[0.15px]">Vezi progresul constant și primești livrările la timp, fără bătăi de cap.</p>
        </div>

      </div>
      
      <div className="w-full flex justify-center">
        <a
          href="#cerere-oferta"
          className="px-2 min-w-[145px] bg-black rounded-full h-[34px] text-white font-semibold font-inter text-[15px] flex items-center justify-center gap-1"
        > 
          <EmailIcon className="w-[23px] h-[22px]" />
          CERERE OFERTĂ
        </a>
      </div>
    </section>
  );
}
