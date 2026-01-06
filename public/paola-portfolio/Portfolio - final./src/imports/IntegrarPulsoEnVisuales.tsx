type ParagraphText1Props = {
  text: string;
};

function ParagraphText1({ text }: ParagraphText1Props) {
  return (
    <div className="h-[35.996px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[36px] left-0 not-italic text-[#2a2a2a] text-[20px] text-nowrap top-[-0.38px] tracking-[-0.8492px]">{text}</p>
    </div>
  );
}
type ParagraphTextProps = {
  text: string;
};

function ParagraphText({ text }: ParagraphTextProps) {
  return (
    <div className="h-[30.596px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[30.6px] left-0 not-italic text-[#4a4a4a] text-[18px] text-nowrap top-[0.38px] tracking-[-0.7995px]">{text}</p>
    </div>
  );
}
type HeadingTextProps = {
  text: string;
};

function HeadingText({ text }: HeadingTextProps) {
  return (
    <div className="h-[41.602px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[41.6px] left-0 not-italic text-[#2a2a2a] text-[32px] text-nowrap top-[0.25px] tracking-[0.7262px]">{text}</p>
    </div>
  );
}
type SectionLabelTextProps = {
  text: string;
};

function SectionLabelText({ text }: SectionLabelTextProps) {
  return (
    <div className="absolute h-[17.998px] left-0 top-0 w-[280px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#8a8a8a] text-[12px] text-nowrap top-[0.25px] tracking-[0.6px] uppercase">{text}</p>
    </div>
  );
}

export default function IntegrarPulsoEnVisuales() {
  return (
    <div className="bg-white relative size-full" data-name="Integrar PULSO en Visuales">
      <div className="absolute bg-[#fafaf8] h-[6256.484px] left-0 top-0 w-[1281.25px]" data-name="PulsoCaseStudy">
        <div className="absolute h-[277.158px] left-[304.62px] top-[240px] w-[672.012px]" data-name="Section">
          <div className="absolute content-stretch flex flex-col gap-[23.994px] h-[165.176px] items-start left-0 top-0 w-[672.012px]" data-name="Container">
            <div className="h-[17.998px] relative shrink-0 w-full" data-name="Paragraph">
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#b8956a] text-[12px] text-nowrap top-[0.25px] tracking-[0.6px] uppercase">Narrativa · Ritmo · Sentido</p>
            </div>
            <div className="h-[123.184px] relative shrink-0 w-full" data-name="Heading 1">
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[61.6px] left-0 not-italic text-[#2a2a2a] text-[56px] top-[0.5px] tracking-[-0.8192px] w-[663px]">Escribir también es una forma de escucharse.</p>
            </div>
          </div>
          <div className="absolute h-[63.984px] left-0 top-[213.17px] w-[600px]" data-name="Paragraph">
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32px] left-0 not-italic text-[#4a4a4a] text-[20px] top-[-0.25px] tracking-[-0.6492px] w-[577px]">PULSO nace de la necesidad de tener un espacio donde escribir sin ser medido, evaluado o interrumpido.</p>
          </div>
        </div>
        <div className="absolute bg-[#f5f4f0] h-[500px] left-[154.62px] opacity-60 rounded-[6px] top-[677.16px] w-[972.012px]" data-name="Section" />
        <div className="absolute content-stretch flex flex-col h-[685.918px] items-start left-[340.63px] px-[63.994px] py-0 top-[1377.16px] w-[600px]" data-name="Section">
          <div className="content-stretch flex flex-col gap-[31.992px] h-[273.945px] items-start relative shrink-0 w-full" data-name="Container">
            <div className="h-[83.984px] relative shrink-0 w-full" data-name="CenteredText">
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[42px] left-[236.14px] not-italic text-[#2a2a2a] text-[28px] text-center top-[-0.25px] tracking-[0.084px] translate-x-[-50%] w-[401px]">Hay días en que la mente está llena.</p>
            </div>
            <div className="h-[41.992px] relative shrink-0 w-full" data-name="CenteredText">
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[42px] left-[236.14px] not-italic text-[#2a2a2a] text-[28px] text-center text-nowrap top-[-0.25px] tracking-[0.084px] translate-x-[-50%]">Pensamientos que se repiten.</p>
            </div>
            <div className="h-[83.984px] relative shrink-0 w-full" data-name="CenteredText">
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[42px] left-[236.11px] not-italic text-[#2a2a2a] text-[28px] text-center top-[-0.25px] tracking-[0.084px] translate-x-[-50%] w-[403px]">Emociones que no encuentran lugar.</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[31.992px] h-[211.973px] items-start pb-0 pt-[95.996px] px-0 relative shrink-0 w-full" data-name="Container">
            <div className="h-[41.992px] relative shrink-0 w-full" data-name="CenteredText">
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[42px] left-[236.26px] not-italic text-[#2a2a2a] text-[28px] text-center text-nowrap top-[-0.25px] tracking-[0.084px] translate-x-[-50%]">PULSO no busca resolver eso.</p>
            </div>
            <div className="h-[41.992px] relative shrink-0 w-full" data-name="CenteredText">
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[42px] left-[236.01px] not-italic text-[#2a2a2a] text-[28px] text-center text-nowrap top-[-0.25px] tracking-[0.084px] translate-x-[-50%]">Busca darle espacio.</p>
            </div>
          </div>
        </div>
        <div className="absolute bg-[rgba(255,255,255,0.4)] content-stretch flex flex-col gap-[47.998px] h-[451.162px] items-start left-[429.62px] pb-0 pt-[63.994px] px-[47.998px] top-[2063.08px] w-[422.012px]" data-name="Section">
          <div className="h-[44.795px] relative shrink-0 w-full" data-name="CenteredText">
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[44.8px] left-[163.17px] not-italic text-[#2a2a2a] text-[32px] text-center text-nowrap top-[-0.5px] tracking-[0.32px] translate-x-[-50%]">No dicta rutinas.</p>
          </div>
          <div className="h-[44.795px] relative shrink-0 w-full" data-name="CenteredText">
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[44.8px] left-[163.99px] not-italic text-[#2a2a2a] text-[32px] text-center text-nowrap top-[-0.5px] tracking-[0.32px] translate-x-[-50%]">No corrige.</p>
          </div>
          <div className="h-[44.795px] relative shrink-0 w-full" data-name="CenteredText">
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[44.8px] left-[163.06px] not-italic text-[#2a2a2a] text-[32px] text-center text-nowrap top-[-0.5px] tracking-[0.32px] translate-x-[-50%]">No analiza.</p>
          </div>
          <div className="h-[44.795px] relative shrink-0 w-full" data-name="CenteredText">
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[44.8px] left-[163.01px] not-italic text-[#2a2a2a] text-[32px] text-center text-nowrap top-[-0.5px] tracking-[0.32px] translate-x-[-50%]">Solo ofrece espacio.</p>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[160px] h-[608.574px] items-start left-[254.62px] top-[2714.24px] w-[772.012px]" data-name="Section">
          <div className="h-[96.191px] relative shrink-0 w-full" data-name="Container">
            <SectionLabelText text="01 · Diseño" />
            <div className="absolute content-stretch flex flex-col gap-[23.994px] h-[96.191px] items-start left-[343.99px] top-0 w-[428.018px]" data-name="Container">
              <HeadingText text="Sin notificaciones" />
              <ParagraphText text="El bienestar emocional no necesita recordatorios." />
            </div>
          </div>
          <div className="h-[96.191px] relative shrink-0 w-full" data-name="Container">
            <SectionLabelText text="02 · Diseño" />
            <div className="absolute content-stretch flex flex-col gap-[23.994px] h-[96.191px] items-start left-[343.99px] top-0 w-[428.018px]" data-name="Container">
              <HeadingText text="Sin métricas" />
              <ParagraphText text="No todo debe medirse para tener valor." />
            </div>
          </div>
          <div className="h-[96.191px] relative shrink-0 w-full" data-name="Container">
            <SectionLabelText text="03 · Diseño" />
            <div className="absolute content-stretch flex flex-col gap-[23.994px] h-[96.191px] items-start left-[343.99px] top-0 w-[428.018px]" data-name="Container">
              <HeadingText text="Sin compartir" />
              <ParagraphText text="Lo que se escribe es íntimo." />
            </div>
          </div>
        </div>
        <div className="absolute bg-[#f5f4f0] content-stretch flex flex-col gap-[95.986px] h-[1137.9px] items-start left-[154.62px] pb-0 pt-[160px] px-[186.006px] top-[3522.81px] w-[972.012px]" data-name="Section">
          <div className="h-[17.998px] relative shrink-0 w-full" data-name="SectionLabel">
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#8a8a8a] text-[12px] text-nowrap top-[0.25px] tracking-[0.6px] uppercase">Experiencia</p>
          </div>
          <div className="content-stretch flex flex-col gap-[31.992px] h-[239.961px] items-start relative shrink-0 w-full" data-name="Container">
            <ParagraphText1 text="Es de noche." />
            <ParagraphText1 text="Abrís PULSO." />
            <ParagraphText1 text="Pantalla en blanco." />
            <ParagraphText1 text="Sin avisos. Sin prompts." />
          </div>
          <div className="content-stretch flex flex-col gap-[31.992px] h-[171.973px] items-start relative shrink-0 w-full" data-name="Container">
            <ParagraphText1 text="Escribís." />
            <ParagraphText1 text="No editás." />
            <ParagraphText1 text="No corregís." />
          </div>
          <div className="h-[99.99px] relative shrink-0 w-full" data-name="Paragraph">
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[36px] left-0 not-italic text-[#2a2a2a] text-[20px] text-nowrap top-[63.62px] tracking-[-0.8492px]">Solo dejás salir lo que estaba adentro.</p>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[95.996px] h-[539.941px] items-start left-[354.62px] top-[4860.71px] w-[572.012px]" data-name="Section">
          <div className="content-stretch flex flex-col gap-[47.998px] h-[173.975px] items-start relative shrink-0 w-full" data-name="Container">
            <div className="h-[83.984px] relative shrink-0 w-full" data-name="Paragraph">
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[42px] left-[286.47px] not-italic text-[#2a2a2a] text-[28px] text-center top-[0.38px] tracking-[0.4668px] translate-x-[-50%] w-[489px]">En un mundo que pide optimizar, medir y registrar todo,</p>
            </div>
            <div className="h-[41.992px] relative shrink-0 w-full" data-name="Paragraph">
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[42px] left-[286.78px] not-italic text-[#2a2a2a] text-[28px] text-center text-nowrap top-[0.38px] tracking-[0.4668px] translate-x-[-50%]">PULSO invita simplemente a estar.</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[47.998px] h-[269.971px] items-start pb-0 pt-[47.998px] px-0 relative shrink-0 w-full" data-name="Container">
            <div className="h-[41.992px] relative shrink-0 w-full" data-name="Paragraph">
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[42px] left-[285.95px] not-italic text-[#2a2a2a] text-[28px] text-center text-nowrap top-[0.38px] tracking-[0.4668px] translate-x-[-50%]">A veces, lo más radical no es hacer más.</p>
            </div>
            <div className="h-[41.992px] relative shrink-0 w-full" data-name="Paragraph">
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[42px] left-[286.41px] not-italic text-[#2a2a2a] text-[28px] text-center text-nowrap top-[0.38px] tracking-[0.4668px] translate-x-[-50%]">Es escribir.</p>
            </div>
            <div className="h-[41.992px] relative shrink-0 w-full" data-name="Paragraph">
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[42px] left-[285.85px] not-italic text-[#2a2a2a] text-[28px] text-center text-nowrap top-[0.38px] tracking-[0.4668px] translate-x-[-50%]">Y escucharse.</p>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[23.994px] h-[199.219px] items-start left-[354.62px] pb-0 pt-[96.621px] px-0 top-[5600.65px] w-[572.012px]" data-name="Section">
          <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[0.625px_0px_0px] border-solid inset-0 pointer-events-none" />
          <div className="h-[57.598px] relative shrink-0 w-full" data-name="Heading 2">
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[57.6px] left-[285.96px] not-italic text-[#2a2a2a] text-[48px] text-center text-nowrap top-[0.63px] tracking-[0.8316px] translate-x-[-50%]">PULSO</p>
          </div>
          <div className="h-[21.006px] relative shrink-0 w-full" data-name="Paragraph">
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[286.44px] not-italic text-[#b8956a] text-[14px] text-center text-nowrap top-[-0.13px] tracking-[1.0496px] translate-x-[-50%] uppercase">Escritura · Ritmo · Silencio</p>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col h-[216.611px] items-start left-0 pb-0 pl-[128.623px] pr-[996.23px] pt-[96.621px] top-[6039.87px] w-[1281.25px]" data-name="Section">
          <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[0.625px_0px_0px] border-solid inset-0 pointer-events-none" />
          <div className="h-[23.994px] relative shrink-0 w-full" data-name="Button">
            <div className="absolute h-[23.994px] left-0 top-0 w-[14.18px]" data-name="Text">
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[7px] not-italic text-[#2a2a2a] text-[16px] text-center text-nowrap top-[-0.5px] tracking-[-0.3125px] translate-x-[-50%]">←</p>
            </div>
            <div className="absolute h-[23.994px] left-[22.18px] top-0 w-[134.219px]" data-name="Text">
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[67px] not-italic text-[#2a2a2a] text-[16px] text-center text-nowrap top-[-0.5px] tracking-[-0.3125px] translate-x-[-50%]">Volver a proyectos</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[rgba(250,250,248,0.95)] content-stretch flex flex-col h-[64.619px] items-start left-0 pb-[0.625px] pt-0 px-[64.629px] top-[1955px] w-[1281.25px]" data-name="PulsoCaseStudy">
        <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[0px_0px_0.625px] border-solid inset-0 pointer-events-none" />
        <div className="h-[63.994px] relative shrink-0 w-full" data-name="Container">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between px-[63.994px] py-0 relative size-full">
              <div className="h-[23.994px] relative shrink-0 w-[88.184px]" data-name="Button">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[44px] not-italic text-[#2a2a2a] text-[16px] text-center text-nowrap top-[-0.5px] tracking-[-0.3125px] translate-x-[-50%]">Paola Zerpa</p>
                </div>
              </div>
              <div className="h-[21.006px] relative shrink-0 w-[153.838px]" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[31.992px] items-start relative size-full">
                  <div className="basis-0 grow h-[21.006px] min-h-px min-w-px relative shrink-0" data-name="Button">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[32.5px] not-italic text-[#4a4a4a] text-[14px] text-center text-nowrap top-[-0.13px] tracking-[-0.1504px] translate-x-[-50%]">Proyectos</p>
                    </div>
                  </div>
                  <div className="h-[21.006px] relative shrink-0 w-[57.295px]" data-name="Text">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#4a4a4a] text-[14px] text-nowrap top-[-0.13px] tracking-[-0.1504px]">Sobre mí</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}