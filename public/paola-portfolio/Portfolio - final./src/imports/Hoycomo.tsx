import clsx from "clsx";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[25.596px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-0 not-italic text-[#4a4a4a] text-[16px] text-nowrap top-[-0.88px] tracking-[-0.4725px]">{children}</p>
    </div>
  );
}
type ParagraphText3Props = {
  text: string;
};

function ParagraphText3({ text }: ParagraphText3Props) {
  return (
    <div className="h-[25.596px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-0 not-italic text-[#2a2a2a] text-[16px] text-nowrap top-[-0.88px] tracking-[-0.4725px]">{text}</p>
    </div>
  );
}
type ParagraphText2Props = {
  text: string;
};

function ParagraphText2({ text }: ParagraphText2Props) {
  return <Wrapper>{text}</Wrapper>;
}
type HeadingText4Props = {
  text: string;
};

function HeadingText4({ text }: HeadingText4Props) {
  return (
    <div className="h-[27.998px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#b8956a] text-[20px] text-nowrap top-[-0.13px] tracking-[-0.6492px]">{text}</p>
    </div>
  );
}
type HeadingText3Props = {
  text: string;
};

function HeadingText3({ text }: HeadingText3Props) {
  return (
    <div className="h-[30px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[30px] left-0 not-italic text-[#2a2a2a] text-[20px] text-nowrap top-[0.13px] tracking-[-0.6492px]">{text}</p>
    </div>
  );
}
type HeadingText2Props = {
  text: string;
};

function HeadingText2({ text }: HeadingText2Props) {
  return (
    <div className="h-[77px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#2a2a2a] text-[20px] text-nowrap top-[calc(50%-13.63px)] tracking-[-0.6492px]">{text}</p>
    </div>
  );
}
type HeadingText1Props = {
  text: string;
};

function HeadingText1({ text }: HeadingText1Props) {
  return (
    <div className="h-[77px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#2a2a2a] text-[20px] text-nowrap top-[calc(50%-14.06px)] tracking-[-0.6492px]">{text}</p>
    </div>
  );
}
type HeadingTextProps = {
  text: string;
  additionalClassNames?: string;
};

function HeadingText({ text, additionalClassNames = "" }: HeadingTextProps) {
  return (
    <div className={clsx("h-[77px] relative shrink-0", additionalClassNames)}>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#2a2a2a] text-[20px] text-nowrap top-[calc(50%-13.5px)] tracking-[-0.6492px]">{text}</p>
    </div>
  );
}
type ParagraphText1Props = {
  text: string;
};

function ParagraphText1({ text }: ParagraphText1Props) {
  return (
    <div className="h-[22.002px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-0 not-italic text-[#6b6b6b] text-[14px] text-nowrap top-[0.5px] tracking-[-0.2904px]">{text}</p>
    </div>
  );
}
type ParagraphTextProps = {
  text: string;
};

function ParagraphText({ text }: ParagraphTextProps) {
  return (
    <div className="h-[25.596px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-0 not-italic text-[#b8956a] text-[16px] text-nowrap top-[-0.88px] tracking-[-0.4725px]">{text}</p>
    </div>
  );
}

export default function Hoycomo() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="HOYCOMO">
      <div className="bg-[#fafaf8] h-[5998.73px] relative shrink-0 w-full" data-name="App">
        <div className="absolute h-[640px] left-[111.99px] top-0 w-[1216.016px]" data-name="Section">
          <div className="absolute content-stretch flex flex-col gap-[31.992px] h-[197px] items-start left-[0.01px] top-[242px] w-[576px]" data-name="Container">
            <div className="h-[136px] relative shrink-0 w-full" data-name="Container">
              <div className="absolute h-[23.994px] left-0 top-0 w-[576.006px]" data-name="Heading 1">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#2a2a2a] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.6325px]">Decidir qué comer también cansa.</p>
              </div>
              <div className="absolute h-[84px] left-0 top-[48px] w-[520px]" data-name="Paragraph">
                <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#4a4a4a] text-[18px] top-[0.13px] tracking-[-0.6195px] w-[513px]">
                  <p className="mb-0">{`HOYCOMO `}</p>
                  <p>Reduce la fatiga de decisión y acompaña elecciones cotidianas sin imponer hábitos.</p>
                </div>
              </div>
            </div>
            <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
              <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#6b6b6b] text-[14px] text-nowrap top-[-0.13px]">Product Design · UX Research · Mobile UX</p>
            </div>
          </div>
          <div className="absolute bg-[rgba(255,255,255,0)] h-[640px] left-[856.01px] rounded-[10px] shadow-[0px_4px_24px_0px_rgba(0,0,0,0.08)] top-[68px] w-[360px]" data-name="ImageWithFallback" />
        </div>
        <div className="absolute content-stretch flex flex-col h-[479.795px] items-start left-[80px] pb-0 pt-[96.621px] px-[31.992px] top-[768px] w-[1280px]" data-name="Section">
          <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[0.625px_0px_0px] border-solid inset-0 pointer-events-none" />
          <div className="h-[287.178px] relative shrink-0 w-full" data-name="Container">
            <div className="absolute h-[60px] left-0 top-0 w-[320px]" data-name="Heading 2">
              <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[30px] left-0 not-italic text-[#2a2a2a] text-[20px] top-[0.13px] tracking-[-0.6492px] w-[294px]">
                {`El problema no es la comida. `}
                <br aria-hidden="true" />
                Es la decisión.
              </p>
            </div>
            <div className="absolute h-[287.178px] left-[383.99px] top-0 w-[832.021px]" data-name="Container">
              <div className="absolute h-[143.184px] left-0 top-0 w-[832.021px]" data-name="Container">
                <div className="absolute content-stretch flex flex-col gap-[7.998px] h-[87px] items-start left-[0.01px] top-[0.38px] w-[400px]" data-name="Container">
                  <ParagraphText text="Fatiga" />
                  <ParagraphText1 text="Decidir qué comer todos los días agota." />
                  <ParagraphText1 text="La fricción aparece antes de cocinar." />
                </div>
                <div className="absolute content-stretch flex flex-col gap-[7.998px] h-[55.596px] items-start left-[432px] top-[0.38px] w-[400.02px]" data-name="Container">
                  <ParagraphText text="Culpa" />
                  <ParagraphText1 text="Planes rígidos que no se cumplen." />
                  <ParagraphText1 text="Sensación de “fallar” incluso queriendo comer mejor." />
                </div>
              </div>
              <div className="absolute h-[64.004px] left-0 top-[223.17px] w-[600px]" data-name="Paragraph">
                <div className="absolute font-['Inter:Italic',sans-serif] font-normal italic leading-[32px] left-0 text-[#2a2a2a] text-[20px] top-[-0.25px] tracking-[-0.6492px] w-[559px]">
                  <p className="mb-0">{`"El problema no es saber qué comer, `}</p>
                  <p>{`es decidir sin agotarse en el intento."`}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col h-[500.596px] items-start left-[80px] pb-0 pt-[128.623px] px-[240px] top-[1247.79px] w-[1280px]" data-name="Section">
          <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[0.625px_0px_0px] border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex flex-col gap-[31.992px] h-[243.975px] items-start relative shrink-0 w-full" data-name="Container">
            <div className="h-[95.996px] leading-[48px] not-italic relative shrink-0 text-[#2a2a2a] text-[36px] text-center text-nowrap tracking-[-0.3509px] w-full" data-name="Heading 2">
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal left-[399.68px] top-[0.5px] translate-x-[-50%]">Las personas no necesitan más opciones.</p>
              <p className="absolute font-['Inter:Bold',sans-serif] font-bold left-[400.04px] top-[48.5px] translate-x-[-50%]">Necesitan menos carga.</p>
            </div>
            <div className="content-stretch flex flex-col gap-[15.996px] h-[115.986px] items-start relative shrink-0 w-full" data-name="Container">
              <div className="h-[27.998px] relative shrink-0 w-full" data-name="Paragraph">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[399.5px] not-italic text-[#4a4a4a] text-[18px] text-center text-nowrap top-[0.13px] tracking-[-0.6195px] translate-x-[-50%]">El usuario no busca recetas</p>
              </div>
              <div className="h-[27.998px] relative shrink-0 w-full" data-name="Paragraph">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[399.69px] not-italic text-[#4a4a4a] text-[18px] text-center text-nowrap top-[0.13px] tracking-[-0.6195px] translate-x-[-50%]">Busca alivio</p>
              </div>
              <div className="h-[27.998px] relative shrink-0 w-full" data-name="Paragraph">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[399.92px] not-italic text-[#4a4a4a] text-[18px] text-center text-nowrap top-[0.13px] tracking-[-0.6195px] translate-x-[-50%]">{`Busca sentir que está "bien" con lo que elige`}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col h-[645.313px] items-start left-[80px] pb-0 pt-[96.621px] px-[31.992px] top-[1748.39px] w-[1280px]" data-name="Section">
          <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[0.625px_0px_0px] border-solid inset-0 pointer-events-none" />
          <div className="h-[452.695px] relative shrink-0 w-full" data-name="Container">
            <div className="absolute h-[30px] left-0 top-0 w-[320px]" data-name="Heading 2">
              <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[30px] left-[0.01px] not-italic text-[#2a2a2a] text-[20px] top-[-0.01px] tracking-[-0.6492px] w-[328px]">Diseñar para acompañar decisiones, no imponerlas</p>
            </div>
            <div className="absolute h-[452.695px] left-[383.99px] top-0 w-[832.021px]" data-name="Container">
              <div className="absolute bg-[#f5f4f0] content-stretch flex flex-col h-[129.57px] items-start left-0 pb-0 pt-[31.992px] px-[31.992px] rounded-[4px] top-0 w-[400.01px]" data-name="Container">
                <HeadingText text="Reducir decisiones simultáneas" additionalClassNames="w-full" />
              </div>
              <div className="absolute bg-[#f5f4f0] content-stretch flex flex-col h-[129.57px] items-start left-[432px] pb-0 pt-[31.992px] px-[31.992px] rounded-[4px] top-0 w-[400.02px]" data-name="Container">
                <HeadingText text="Sugerir sin imponer" additionalClassNames="w-[336px]" />
              </div>
              <div className="absolute bg-[#f5f4f0] content-stretch flex flex-col h-[129.57px] items-start left-0 pb-0 pt-[31.992px] px-[31.992px] rounded-[4px] top-[161.56px] w-[400.01px]" data-name="Container">
                <HeadingText1 text="Diseñar estados calmos" />
              </div>
              <div className="absolute bg-[#f5f4f0] content-stretch flex flex-col h-[129.57px] items-start left-[432px] pb-0 pt-[31.992px] px-[31.992px] rounded-[4px] top-[161.56px] w-[400.02px]" data-name="Container">
                <HeadingText1 text="UX emocional + funcional" />
              </div>
              <div className="absolute bg-[#f5f4f0] content-stretch flex flex-col h-[130px] items-start left-[0.01px] pb-0 pt-[31.992px] px-[31.992px] rounded-[4px] top-[322.99px] w-[400px]" data-name="Container">
                <HeadingText2 text="Lenguaje cercano" />
              </div>
              <div className="absolute bg-[#f5f4f0] content-stretch flex flex-col h-[130px] items-start left-[432.01px] pb-0 pt-[31.992px] px-[31.992px] rounded-[4px] top-[322.99px] w-[400px]" data-name="Container">
                <HeadingText2 text="Ritmo antes que eficiencia" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col h-[557.773px] items-start left-[80px] pb-0 pt-[96.621px] px-[31.992px] top-[2393.7px] w-[1280px]" data-name="Section">
          <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[0.625px_0px_0px] border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex flex-col gap-[63.994px] h-[365.156px] items-start relative shrink-0 w-full" data-name="Container">
            <HeadingText3 text="Decisiones de UX que marcaron la diferencia" />
            <div className="h-[271.162px] relative shrink-0 w-full" data-name="Container">
              <div className="absolute content-stretch flex flex-col gap-[11.992px] h-[103.584px] items-start left-0 top-0 w-[576.006px]" data-name="Container">
                <HeadingText4 text="Sugerencias contextuales" />
                <ParagraphText2 text="El sistema propone según el día, no según reglas rígidas." />
                <ParagraphText1 text="Qué cambia: el usuario siente que la app lo entiende, no que lo controla." />
              </div>
              <div className="absolute content-stretch flex flex-col gap-[11.992px] h-[103.584px] items-start left-[640px] top-0 w-[576.016px]" data-name="Container">
                <HeadingText4 text="Planificación flexible" />
                <Wrapper>{`El usuario adapta, no "falla".`}</Wrapper>
                <ParagraphText1 text="Qué cambia: se elimina la culpa, se refuerza la autonomía." />
              </div>
              <div className="absolute content-stretch flex flex-col gap-[11.992px] h-[103.584px] items-start left-0 top-[167.58px] w-[576.006px]" data-name="Container">
                <HeadingText4 text="Microcontenidos" />
                <ParagraphText2 text="Mini lecturas que refuerzan hábitos sin abrumar." />
                <ParagraphText1 text="Qué cambia: información útil sin saturación ni interrupciones." />
              </div>
              <div className="absolute content-stretch flex flex-col gap-[11.992px] h-[103.584px] items-start left-[640px] top-[167.58px] w-[576.016px]" data-name="Container">
                <HeadingText4 text="Flujos simples" />
                <ParagraphText2 text="Menos pasos = menos fricción." />
                <ParagraphText1 text="Qué cambia: el usuario llega al resultado sin agotarse en el proceso." />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col h-[1805.215px] items-start left-[80px] pb-0 pt-[96.621px] px-[31.992px] top-[2951.47px] w-[1280px]" data-name="Section">
          <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[0.625px_0px_0px] border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex flex-col gap-[63.994px] h-[1612.598px] items-start relative shrink-0 w-full" data-name="Container">
            <HeadingText3 text="Producto en uso real" />
            <div className="h-[1518.604px] relative shrink-0 w-full" data-name="Container">
              <div className="absolute content-stretch flex flex-col gap-[15.996px] h-[735.303px] items-start left-0 top-0 w-[373.34px]" data-name="Container">
                <div className="bg-[rgba(255,255,255,0)] h-[663.711px] rounded-[10px] shadow-[0px_2px_16px_0px_rgba(0,0,0,0.06)] shrink-0 w-full" data-name="ImageWithFallback" />
                <div className="content-stretch flex flex-col gap-[7.998px] h-[55.596px] items-start relative shrink-0 w-full" data-name="Container">
                  <ParagraphText3 text="Onboarding" />
                  <ParagraphText1 text="Sin preguntas invasivas. Solo lo necesario para empezar." />
                </div>
              </div>
              <div className="absolute content-stretch flex flex-col gap-[15.996px] h-[735.303px] items-start left-[421.34px] top-0 w-[373.34px]" data-name="Container">
                <div className="bg-[rgba(255,255,255,0)] h-[663.711px] rounded-[10px] shadow-[0px_2px_16px_0px_rgba(0,0,0,0.06)] shrink-0 w-full" data-name="ImageWithFallback" />
                <div className="content-stretch flex flex-col gap-[7.998px] h-[55.596px] items-start relative shrink-0 w-full" data-name="Container">
                  <ParagraphText3 text="Home contextual" />
                  <ParagraphText1 text="Sugiere según el momento, no según un plan rígido." />
                </div>
              </div>
              <div className="absolute content-stretch flex flex-col gap-[15.996px] h-[735.303px] items-start left-[842.68px] top-0 w-[373.34px]" data-name="Container">
                <div className="bg-[rgba(255,255,255,0)] h-[663.711px] rounded-[10px] shadow-[0px_2px_16px_0px_rgba(0,0,0,0.06)] shrink-0 w-full" data-name="ImageWithFallback" />
                <div className="content-stretch flex flex-col gap-[7.998px] h-[55.596px] items-start relative shrink-0 w-full" data-name="Container">
                  <ParagraphText3 text="Receta" />
                  <ParagraphText1 text="Información clara, sin distracciones innecesarias." />
                </div>
              </div>
              <div className="absolute content-stretch flex flex-col gap-[15.996px] h-[735.303px] items-start left-0 top-[783.3px] w-[373.34px]" data-name="Container">
                <div className="bg-[rgba(255,255,255,0)] h-[663.711px] rounded-[10px] shadow-[0px_2px_16px_0px_rgba(0,0,0,0.06)] shrink-0 w-full" data-name="ImageWithFallback" />
                <div className="content-stretch flex flex-col gap-[7.998px] h-[55.596px] items-start relative shrink-0 w-full" data-name="Container">
                  <ParagraphText3 text="Mini lecturas" />
                  <ParagraphText1 text="Contenido breve que acompaña, no que interrumpe." />
                </div>
              </div>
              <div className="absolute content-stretch flex flex-col gap-[15.996px] h-[735.303px] items-start left-[421.34px] top-[783.3px] w-[373.34px]" data-name="Container">
                <div className="bg-[rgba(255,255,255,0)] h-[663.711px] rounded-[10px] shadow-[0px_2px_16px_0px_rgba(0,0,0,0.06)] shrink-0 w-full" data-name="ImageWithFallback" />
                <div className="content-stretch flex flex-col gap-[7.998px] h-[55.596px] items-start relative shrink-0 w-full" data-name="Container">
                  <ParagraphText3 text="Búsqueda por ingrediente" />
                  <ParagraphText1 text="Reduce fricción: usa lo que ya tienes." />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col h-[501.357px] items-start left-[80px] pb-0 pt-[96.621px] px-[31.992px] top-[4756.69px] w-[1280px]" data-name="Section">
          <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[0.625px_0px_0px] border-solid inset-0 pointer-events-none" />
          <div className="h-[308.74px] relative shrink-0 w-full" data-name="Container">
            <div className="absolute h-[60px] left-0 top-0 w-[320px]" data-name="Heading 2">
              <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[30px] left-[0.01px] not-italic text-[#2a2a2a] text-[20px] top-[-0.31px] tracking-[-0.6492px] w-[345px]">El impacto de HOYCOMO no se mide en calorías contadas.</p>
            </div>
            <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[30px] left-[0.01px] not-italic text-[#2a2a2a] text-[20px] top-[59.69px] tracking-[-0.6492px] w-[345px]">Se mide en decisiones que dejaron de cansar.</p>
            <div className="absolute content-stretch flex flex-col gap-[24px] h-[308.74px] items-start left-[383.99px] top-0 w-[832.021px]" data-name="Container">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                <ParagraphText text="Menos desgaste mental al decidir" />
              </div>
              <div className="content-stretch flex flex-col h-[26px] items-start relative shrink-0 w-full" data-name="Container">
                <ParagraphText text="Más continuidad en hábitos alimenticios" />
              </div>
              <div className="content-stretch flex flex-col h-[26px] items-start relative shrink-0 w-full" data-name="Container">
                <ParagraphText text="Mejor relación con la comida" />
              </div>
              <div className="content-stretch flex flex-col h-[26px] items-start relative shrink-0 w-full" data-name="Container">
                <ParagraphText text="Sensación real de acompañamiento" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col h-[528.066px] items-start left-[80px] pb-0 pt-[128.623px] px-[290px] top-[5258.05px] w-[1280px]" data-name="Section">
          <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[0.625px_0px_0px] border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex flex-col gap-[47.998px] h-[271.445px] items-start relative shrink-0 w-full" data-name="Container">
            <div className="h-[64.004px] relative shrink-0 w-full" data-name="Paragraph">
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32px] left-[349.5px] not-italic text-[#2a2a2a] text-[20px] text-center top-[-15.67px] tracking-[-0.6492px] translate-x-[-50%] w-[693px]">
                HOYCOMO muestra mi forma de diseñar productos:
                <br aria-hidden="true" />
                {` entender el contexto emocional del usuario`}
                <br aria-hidden="true" />
                {` y reducir fricción sin agregar complejidad.`}
              </p>
            </div>
            <div className="h-[27.998px] relative shrink-0 w-full" data-name="Paragraph">
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[349.58px] not-italic text-[#4a4a4a] text-[18px] text-center text-nowrap top-[0.13px] tracking-[-0.6195px] translate-x-[-50%]">Diseño claridad. Para que las decisiones cotidianas no cansen.</p>
            </div>
            <div className="content-stretch flex gap-[23.994px] h-[83.447px] items-start justify-center pb-0 pt-[31.992px] px-0 relative shrink-0 w-full" data-name="Container">
              <div className="h-[51.455px] relative shrink-0 w-[200.684px]" data-name="Button">
                <div aria-hidden="true" className="absolute border-[#2a2a2a] border-[0px_0px_1.875px] border-solid inset-0 pointer-events-none" />
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-[100.49px] not-italic text-[#2a2a2a] text-[16px] text-center text-nowrap top-[11.12px] tracking-[-0.4725px] translate-x-[-50%]">Ver versión extendida</p>
                </div>
              </div>
              <div className="h-[51.455px] relative shrink-0 w-[118.467px]" data-name="Button">
                <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[0px_0px_1.875px] border-solid inset-0 pointer-events-none" />
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-[58.99px] not-italic text-[#6b6b6b] text-[16px] text-center text-nowrap top-[11.12px] tracking-[-0.4725px] translate-x-[-50%]">Contactar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col h-[116.621px] items-start left-[80px] pb-0 pt-[48.623px] px-[31.992px] top-[5786.11px] w-[1280px]" data-name="Footer">
          <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[0.625px_0px_0px] border-solid inset-0 pointer-events-none" />
          <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
            <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-[608.48px] not-italic text-[#8a8a8a] text-[14px] text-center text-nowrap top-[-0.13px] translate-x-[-50%]">Paola Zerpa · Product Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
}