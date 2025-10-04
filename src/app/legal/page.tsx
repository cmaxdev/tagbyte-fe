import React from 'react';
import NavigationHeader from '@/components/dashboard/NavigationHeader';

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Header */}
      <NavigationHeader />
      
        <div className="max-w-[960px] w-full mx-auto pt-20 px-4 py-8">
            {/* Terms and Conditions */}
            <div className="my-16">
                <h1 className="text-4xl lg:text-[42px] text-black font-semibold  leading-[48px] font-inter text-center py-8">
                    TERMENI ȘI CONDIȚII
                </h1>

                <div className="px-4 lg:px-24 text-[#171E29] text-[13.83px] font-extrabold opacity-70 font-inter italic leading-[22px] tracking-normal">
                    <ul>
                        <li>1. Preambul</li>
                        <li className="flex">Acest document stabilește termenii și condițiile de utilizare a site-ului și serviciilor oferite de Ad Boost SRL (CUI: [introdu CUI], sediul social: [adresa], România). Prin accesarea site-ului, utilizatorul acceptă acești termeni.</li>
                        <li>2. Definiții</li>
                        <li className="flex"><p className="px-2">&bull;</p>"Utilizator / Client": persoană fizică sau juridică care accesează site-ul sau solicită serviciile.</li>
                        <li className="flex"><p className="px-2">&bull;</p>"Servicii": web design, software, aplicații mobile, branding, video promo, mentenanță etc.</li>
                        <li className="flex"><p className="px-2">&bull;</p>"Pachet Start" și "Custom": tipuri de oferte cu preț fix vs ofertă personalizată.</li>
                        <li>3. Acceptarea serviciilor</li>
                        <li>Contratările se fac prin formular de ofertă, semnare de contract, plata avansului (dacă este cazul) și definirea exactă a cerințelor.</li>
                        <li>Ad Boost SRL își rezervă dreptul de a refuza proiecte care sunt ilegale, imorale sau care nu se potrivesc cu viziunea companiei.</li>
                        <li>4. Obligațiile părților</li>
                        <li className="flex"><p className="px-2">&bull;</p>Ad Boost SRL: execuție la timp, conform specificațiilor agreate, suport și comunicare transparentă.</li>
                        <li className="flex"><p className="px-2">&bull;</p>Clientul: furnizarea în timp util a materialelor (texte, imagini etc.), feedback prompt, plata conform acordului.</li>
                        <li>5. Termene de livrare</li>
                        <li className="flex">Pentru pachete Start, termenele sunt estimative (ex: website 2 săptămâni). Pentru proiecte Custom, termenele se stabilesc în contract. Întârzierile cauzate de client (nefeedback, materiale lipsă) nu sunt responsabilitatea Ad Boost SRL.</li>
                        <li>6. Proprietate intelectuală</li>
                        <li >După achitarea integrală, clientul primește drepturi asupra designului, codului etc. Ad Boost SRL își rezervă dreptul de a folosi proiectul în portofoliu (cu acord de publicare).</li>
                        <li>7. Plăți și penalități</li>
                        <li className="flex"><p className="px-2">&bull;</p>Plata se poate face în avans (ex: 30-50%) și restul după livrare.</li>
                        <li className="flex"><p className="px-2">&bull;</p>Întârzieri de plată pot genera penalități conform legislației aplicabile (ex: Legea 193/2000 din România privind plata creanțelor).</li>
                        <li>8. Garanții și exonerări</li>
                        <li>Se garantează funcționarea serviciilor în condițiile specificate, dar nu se garantează că site-ul va obține anumite poziții SEO sau trafic. Ad Boost SRL nu răspunde pentru daune indirecte.</li>
                        <li>9. Reziliere</li>
                        <li>Clientul poate solicita anularea proiectului înainte de livrare, dar pierde proporțional avansul plătit. Pentru proiecte custom, termeni de reziliere se specifică în contract.</li>
                        <li>10. Confidențialitate și date personale</li>
                        <li>Prelucrarea datelor se va face conform Politicii de Confidențialitate și GDPR / legislația aplicabilă.</li>
                        <li>11. Dispute și lege aplicabilă</li>
                        <li>Acest contract este guvernat de legislația română și, acolo unde este relevant, de legislația UE. Pentru clienți din SUA, se va specifica un tribunal competent (ex: instanțele din București sau jurisdicția convenită).</li>
                        <li>12. Modificări</li>
                        <li>Ad Boost SRL își rezervă dreptul de a modifica acești termeni, notificând utilizatorii cu 30 de zile înainte.</li>
                    </ul>
                </div>
            </div>

            <div className="my-16">
                <h1 className="text-4xl lg:text-[42px] text-black font-semibold  leading-[48px] font-inter text-center uppercase pt-32 pb-12">Politica de cookies</h1>

                <div className="px-4 lg:px-24 text-[#171E29] text-[13.83px] font-extrabold opacity-70 font-inter italic leading-[22px] tracking-normal">
                    <ul>
                        <li>1. Ce sunt cookie-urile Cookie-urile sunt fișiere mici stocate pe dispozitivul tău în timpul navigării pe site.</li>
                        <li>2. Tipuri de cookie-uri</li>
                        <li className="flex"><p className="px-2">&bull;</p>Strict necesare: funcționare site (formular, navigare)</li>
                        <li className="flex"><p className="px-2">&bull;</p>De performanță / analiză: Google Analytics, statistici</li>
                        <li className="flex"><p className="px-2">&bull;</p>Funcționale / preferințe: limba, preferințe UI</li>
                        <li className="flex"><p className="px-2">&bull;</p>Marketing / publicitate: remarketing, tracking</li>
                        <li>3. Cum folosim cookie-urile</li>
                        <li className="flex"><p className="px-2">&bull;</p>Pentru analiza traficului și îmbunătățirea experienței</li>
                        <li className="flex"><p className="px-2">&bull;</p>Pentru a oferi reclame relevante (dacă activezi această opțiune)</li>
                        <li className="flex"><p className="px-2">&bull;</p>Pentru funcționalități esențiale</li>
                        <li>4. Consimțământ și control</li>
                        <li>La prima accesare afișăm banner cookie (accept / refuz). Poți gestiona cookie-urile în setările browserului.Refuzul anumitor cookie-uri poate afecta funcționalitatea site-ului.</li>
                        <li>5. Terți și cookie-uri terțe</li>
                        <li>Site-ul poate include cookie-uri de la terți (Google Analytics, Facebook Pixel etc.). Noi controlăm ce astfel de servicii folosim și le menționăm.</li>
                        <li>6. Durata cookie-urilor</li>
                        <li>Specifica durata (ex: session cookie - până la închidere browser, persistent cookie - 1 an etc.)</li>
                    </ul>
                </div>
            </div>
            
            <div className="my-16">
                <h1 className="text-4xl lg:text-[42px] text-black font-semibold  leading-[48px] font-inter text-center uppercase pt-32 pb-12">Politica de confidențialitate</h1>

                <div className="px-4 lg:px-24 text-[#171E29] text-[13.83px] font-extrabold opacity-70 font-inter italic leading-[22px] tracking-normal">
                    <ul>
                        <li>1. Introducere Ad Boost SRL (date sediu, contact) se angajează să protejeze datele personale ale utilizatorilor, respectând GDPR (UE) și legislația aplicabilă în SUA când este cazul.</li>
                        <li>2. Ce date colectăm</li>
                        <li className="flex"><p className="px-2">&bull;</p>Date pe care le furnizezi: nume, email, telefon, mesaj, proiect, fișiere atasate.</li>
                        <li className="flex"><p className="px-2">&bull;</p>Date colectate automat: IP, user agent, cookies, date de trafic, dispozitiv.</li>
                        <li>3. Scopurile colectării</li>
                        <li className="flex"><p className="px-2">&bull;</p>Pentru a răspunde solicitărilor, a trimite oferte, a furniza suport.</li>
                        <li className="flex"><p className="px-2">&bull;</p>Pentru marketing (cu consimțământ) și analiză trafic.</li>
                        <li className="flex"><p className="px-2">&bull;</p>Pentru optimizarea serviciilor și securitate.</li>
                        <li>4. Baza legală</li>
                        <li className="flex"><p className="px-2">&bull;</p>Consimțământ explicit (ex: checkbox)</li>
                        <li className="flex"><p className="px-2">&bull;</p>Execuția contractului</li>
                        <li className="flex"><p className="px-2">&bull;</p>Interes legitim, dacă nu prevalează drepturile persoanei</li>
                        <li>5. Divulgarea către terți</li>
                        <li>Poate fi necesară partajarea datelor cu subcontractori (hosting, procesatori plăți) cu obligație de confidențialitate. Transferuri internaționale vor folosi mecanisme adecvate (ex: clauze contractuale standard, decizii de adecvare) pentru a proteja drepturile UE.</li>
                        <li>6. Durata de păstrare</li>
                        <li>Păstrăm datele cât este necesar pentru scopurile declarate (ex: 3-5 ani), sau conform obligațiilor legale. Datele de marketing pot fi păstrate până la retragerea consimțământului.</li>
                        <li>7. Drepturile persoanei vizate</li>
                        <li className="flex"><p className="px-2">&bull;</p>DREPTUL DE ACCES</li>
                        <li className="flex"><p className="px-2">&bull;</p>RECTIFICARE</li>
                        <li className="flex"><p className="px-2">&bull;</p>ȘTERGERE („dreptul de a fi uitat")</li>
                        <li className="flex"><p className="px-2">&bull;</p>RESTRICȚIONARE</li>
                        <li className="flex"><p className="px-2">&bull;</p>OBIECȚIE</li>
                        <li className="flex"><p className="px-2">&bull;</p>PORTABILITATE</li>
                        <li className="flex"><p className="px-2">&bull;</p>RETRAGERE CONSIMȚĂMÂNT (caz de marketing)</li>
                        <li className="flex"><p className="px-2">&bull;</p>Reclamă la ANSPDCP (România) sau autoritatea competentă din UE/SUA</li>
                        <li>8. Securitate</li>
                        <li>Se aplică măsuri tehnice și organizatorice (criptare, backup, acces restricționat) pentru a proteja datele.</li>
                        <li>9. Modificări ale politicii</li>
                        <li>Orice modificare se va publica și data. Utilizatorii vor fi anunțați dacă schimbările sunt semnificative.</li>
                        <li>10. Contact</li>
                        <li>Pentru întrebări referitoare la date personale, contactează: email: contact@adboost.ro Poți indica un DPO dacă este cazul.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  );
}