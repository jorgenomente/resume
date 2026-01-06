import svgPaths from "./svg-pj1uqca63u";
import clsx from "clsx";
type BackgroundImageAndText2Props = {
  text: string;
};

function BackgroundImageAndText2({ text }: BackgroundImageAndText2Props) {
  return (
    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#4a4a4a] text-[14px] text-nowrap top-[-0.13px]">{text}</p>
    </div>
  );
}
type BackgroundImageAndText1Props = {
  text: string;
};

function BackgroundImageAndText1({ text }: BackgroundImageAndText1Props) {
  return (
    <div className="h-[32.5px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.5px] left-0 not-italic text-[#2a2a2a] text-[20px] text-nowrap top-[-1.25px] tracking-[-0.2px]">{text}</p>
    </div>
  );
}
type PulsoCaseBackgroundImageAndTextProps = {
  text: string;
};

function PulsoCaseBackgroundImageAndText({ text }: PulsoCaseBackgroundImageAndTextProps) {
  return (
    <div className="absolute h-[81.23px] left-0 top-0 w-[80px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.2px] left-0 not-italic text-[#8a8a8a] text-[12px] top-[-0.13px] tracking-[0.6px] uppercase w-[77px]">{text}</p>
    </div>
  );
}
type ParagraphBackgroundImageAndTextProps = {
  text: string;
};

function ParagraphBackgroundImageAndText({ text }: ParagraphBackgroundImageAndTextProps) {
  return (
    <div className="h-[29.238px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[29.25px] left-0 not-italic text-[#4a4a4a] text-[18px] text-nowrap top-[0.13px] tracking-[-0.18px]">{text}</p>
    </div>
  );
}
type HeadingBackgroundImageAndTextProps = {
  text: string;
};

function HeadingBackgroundImageAndText({ text }: HeadingBackgroundImageAndTextProps) {
  return (
    <div className="h-[40px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[40px] left-0 not-italic text-[#2a2a2a] text-[32px] text-nowrap top-[-0.38px] tracking-[-0.32px]">{text}</p>
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText({ text, additionalClassNames = "" }: BackgroundImageAndTextProps) {
  return (
    <div className={clsx("absolute h-[19.199px]", additionalClassNames)}>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.2px] left-0 not-italic text-[#8a8a8a] text-[12px] text-nowrap top-[-0.13px] tracking-[0.6px] uppercase">{text}</p>
    </div>
  );
}
type BackToHomeBackgroundImageAndTextProps = {
  text: string;
};

function BackToHomeBackgroundImageAndText({ text }: BackToHomeBackgroundImageAndTextProps) {
  return (
    <div className="absolute h-[21.006px] left-[23.99px] top-0 w-[96.113px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#6b6b6b] text-[14px] text-nowrap top-[-0.13px]">{text}</p>
    </div>
  );
}

function IconBackgroundImage() {
  return (
    <div className="h-[15.996px] overflow-clip relative shrink-0 w-full">
      <div className="absolute bottom-[20.83%] left-[20.83%] right-1/2 top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 11">
            <path d={svgPaths.p12a59780} id="Vector" stroke="var(--stroke-0, #6B6B6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33301" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.67px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 2">
            <path d="M9.99756 0.666504H0.666504" id="Vector" stroke="var(--stroke-0, #6B6B6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33301" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[15.996px] top-[2.5px]" data-name="Text">
      <IconBackgroundImage />
    </div>
  );
}

function Link() {
  return (
    <div className="absolute h-[21.006px] left-[64.62px] top-[95.99px] w-[120.107px]" data-name="Link">
      <Text />
      <BackToHomeBackgroundImageAndText text="Volver a Home" />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[19.199px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.2px] left-0 not-italic text-[#d4a89c] text-[12px] text-nowrap top-[-0.13px] tracking-[0.96px] uppercase">Narrativa · Ritmo · Sentido</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[123.184px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[61.6px] left-[0.38px] not-italic text-[#2a2a2a] text-[56px] top-[-1.17px] tracking-[-1.4px] w-[718px]">Escribir también es una forma de escucharse.</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[65px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.5px] left-0 not-italic text-[#4a4a4a] text-[20px] top-[-1.25px] tracking-[-0.5px] w-[641px]">PULSO nace de la necesidad de tener un espacio donde escribir sin ser medido, evaluado o interrumpido.</p>
    </div>
  );
}

function Section() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.996px] h-[239.375px] items-start left-[64.62px] top-[216.97px] w-[671.992px]" data-name="Section">
      <Paragraph />
      <Heading />
      <Paragraph1 />
    </div>
  );
}

function Section1() {
  return <div className="absolute bg-[#f5f4f0] h-[576.006px] left-[64.62px] opacity-60 rounded-[4px] top-[552.34px] w-[1152.012px]" data-name="Section" />;
}

function Paragraph2() {
  return (
    <div className="h-[45.488px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[45.5px] left-[288.07px] not-italic text-[#2a2a2a] text-[28px] text-center text-nowrap top-[-0.38px] tracking-[-0.28px] translate-x-[-50%]">Hay días en que la mente necesita espacio.</p>
    </div>
  );
}

function PulsoCase() {
  return (
    <div className="h-[45.488px] relative shrink-0 w-full" data-name="PulsoCase">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[45.5px] left-[287.52px] not-italic text-[#2a2a2a] text-[28px] text-center text-nowrap top-[-0.38px] tracking-[-0.28px] translate-x-[-50%]">PULSO no busca resolverlo todo.</p>
    </div>
  );
}

function PulsoCase1() {
  return (
    <div className="h-[45.488px] relative shrink-0 w-full" data-name="PulsoCase">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[45.5px] left-[288.58px] not-italic text-[#2a2a2a] text-[28px] text-center text-nowrap top-[-0.38px] tracking-[-0.28px] translate-x-[-50%]">Busca acompañar.</p>
    </div>
  );
}

function PulsoCase2() {
  return (
    <div className="h-[45.488px] relative shrink-0 w-full" data-name="PulsoCase">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[45.5px] left-[288.29px] not-italic text-[#2a2a2a] text-[28px] text-center text-nowrap top-[-0.38px] tracking-[-0.28px] translate-x-[-50%]">Dar ritmo.</p>
    </div>
  );
}

function PulsoCase3() {
  return (
    <div className="h-[45.488px] relative shrink-0 w-full" data-name="PulsoCase">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[45.5px] left-[288.21px] not-italic text-[#2a2a2a] text-[28px] text-center text-nowrap top-[-0.38px] tracking-[-0.28px] translate-x-[-50%]">Dar lugar.</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[31.992px] h-[341.924px] items-start pb-0 pt-[63.994px] px-0 relative shrink-0 w-full" data-name="Container">
      <PulsoCase />
      <PulsoCase1 />
      <PulsoCase2 />
      <PulsoCase3 />
    </div>
  );
}

function Section2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[80px] h-[467.412px] items-start left-[352.63px] top-[1320.34px] w-[575.996px]" data-name="Section">
      <Paragraph2 />
      <Container />
    </div>
  );
}

function PulsoCase4() {
  return (
    <div className="absolute h-[81.23px] left-0 top-0 w-[80px]" data-name="PulsoCase">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.2px] left-0 not-italic text-[#8a8a8a] text-[12px] top-[-0.13px] tracking-[0.6px] uppercase w-[75px]">01 · Diseño</p>
    </div>
  );
}

function PulsoCase5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11.992px] h-[81.23px] items-start left-[111.99px] top-0 w-[696.025px]" data-name="PulsoCase">
      <HeadingBackgroundImageAndText text="Sin notificaciones" />
      <ParagraphBackgroundImageAndText text="El bienestar emocional no necesita recordatorios." />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[81.23px] relative shrink-0 w-full" data-name="Container">
      <PulsoCase4 />
      <PulsoCase5 />
    </div>
  );
}

function PulsoCase6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11.992px] h-[81.23px] items-start left-[111.99px] top-0 w-[696.025px]" data-name="PulsoCase">
      <HeadingBackgroundImageAndText text="Sin métricas" />
      <ParagraphBackgroundImageAndText text="No todo debe medirse para tener valor." />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[81.23px] relative shrink-0 w-full" data-name="Container">
      <PulsoCaseBackgroundImageAndText text="02 · Diseño" />
      <PulsoCase6 />
    </div>
  );
}

function PulsoCase7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11.992px] h-[81.23px] items-start left-[111.99px] top-0 w-[696.025px]" data-name="PulsoCase">
      <HeadingBackgroundImageAndText text="Sin compartir" />
      <ParagraphBackgroundImageAndText text="Lo que se escribe es íntimo." />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[81.23px] relative shrink-0 w-full" data-name="Container">
      <PulsoCaseBackgroundImageAndText text="03 · Diseño" />
      <PulsoCase7 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[95.996px] h-[435.684px] items-start left-[343.99px] top-0 w-[808.018px]" data-name="Container">
      <Container1 />
      <Container2 />
      <Container3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[435.684px] relative shrink-0 w-full" data-name="Container">
      <BackgroundImageAndText text="Diseño" additionalClassNames="left-0 top-0 w-[280px]" />
      <Container4 />
    </div>
  );
}

function Section3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[628.301px] items-start left-[32.63px] pb-0 pt-[96.621px] px-[31.992px] top-[2524.37px] w-[1215.996px]" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[0.625px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container5 />
    </div>
  );
}

function PulsoCase8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[31.992px] h-[225.977px] items-start left-[96px] top-[243.19px] w-[575.996px]" data-name="PulsoCase">
      <BackgroundImageAndText1 text="Es de noche." />
      <BackgroundImageAndText1 text="Abrís PULSO." />
      <BackgroundImageAndText1 text="La página en blanco." />
      <BackgroundImageAndText1 text="Sin avisos. Sin instrucciones." />
    </div>
  );
}

function PulsoCase9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[31.992px] h-[193.477px] items-start left-[96px] pb-0 pt-[31.992px] px-0 top-[565.17px] w-[575.996px]" data-name="PulsoCase">
      <BackgroundImageAndText1 text="Escribís." />
      <BackgroundImageAndText1 text="No editás." />
      <BackgroundImageAndText1 text="No corregís." />
    </div>
  );
}

function PulsoCase10() {
  return (
    <div className="absolute h-[32.5px] left-[96px] top-[918.63px] w-[960.02px]" data-name="PulsoCase">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.5px] left-0 not-italic text-[#2a2a2a] text-[20px] text-nowrap top-[-1.25px] tracking-[-0.2px]">Solo dejás salir lo que estaba adentro.</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#f5f4f0] h-[1079.131px] relative shrink-0 w-full" data-name="Container">
      <BackgroundImageAndText text="Experiencia" additionalClassNames="left-[96px] top-[128px] w-[960.02px]" />
      <PulsoCase8 />
      <PulsoCase9 />
      <PulsoCase10 />
    </div>
  );
}

function Section4() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1271.748px] items-start left-[32.63px] pb-0 pt-[96.621px] px-[31.992px] top-[3152.67px] w-[1215.996px]" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[0.625px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container6 />
    </div>
  );
}

function PulsoCase11() {
  return (
    <div className="h-[90.977px] relative shrink-0 w-full" data-name="PulsoCase">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[45.5px] left-[288.09px] not-italic text-[#2a2a2a] text-[28px] text-center top-[-0.38px] tracking-[-0.28px] translate-x-[-50%] w-[528px]">En un mundo que pide optimizar, medir y registrar todo,</p>
    </div>
  );
}

function PulsoCase12() {
  return (
    <div className="h-[45.488px] relative shrink-0 w-full" data-name="PulsoCase">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[45.5px] left-[288.25px] not-italic text-[#2a2a2a] text-[28px] text-center text-nowrap top-[-0.38px] tracking-[-0.28px] translate-x-[-50%]">PULSO invita simplemente a estar.</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[47.998px] h-[184.463px] items-start relative shrink-0 w-full" data-name="Container">
      <PulsoCase11 />
      <PulsoCase12 />
    </div>
  );
}

function PulsoCase13() {
  return (
    <div className="h-[45.488px] relative shrink-0 w-full" data-name="PulsoCase">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[45.5px] left-[288.45px] not-italic text-[#2a2a2a] text-[28px] text-center text-nowrap top-[-0.38px] tracking-[-0.28px] translate-x-[-50%]">A veces, lo más radical no es hacer más.</p>
    </div>
  );
}

function PulsoCase14() {
  return (
    <div className="h-[45.488px] relative shrink-0 w-full" data-name="PulsoCase">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[45.5px] left-[288.53px] not-italic text-[#2a2a2a] text-[28px] text-center text-nowrap top-[-0.38px] tracking-[-0.28px] translate-x-[-50%]">Es escribir.</p>
    </div>
  );
}

function PulsoCase15() {
  return (
    <div className="h-[45.488px] relative shrink-0 w-full" data-name="PulsoCase">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[45.5px] left-[288.12px] not-italic text-[#2a2a2a] text-[28px] text-center text-nowrap top-[-0.38px] tracking-[-0.28px] translate-x-[-50%]">Y escucharse.</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[47.998px] h-[296.455px] items-start pb-0 pt-[63.994px] px-0 relative shrink-0 w-full" data-name="Container">
      <PulsoCase13 />
      <PulsoCase14 />
      <PulsoCase15 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] h-[560.918px] items-start relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container8 />
    </div>
  );
}

function Section5() {
  return (
    <div className="absolute content-stretch flex flex-col h-[753.535px] items-start left-[32.63px] pb-0 pt-[96.621px] px-[320px] top-[4424.41px] w-[1215.996px]" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[0.625px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container9 />
    </div>
  );
}

function PulsoCase16() {
  return (
    <div className="h-[59.99px] relative shrink-0 w-full" data-name="PulsoCase">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[60px] left-[287.88px] not-italic text-[#2a2a2a] text-[48px] text-center text-nowrap top-[-0.38px] tracking-[1.2px] translate-x-[-50%]">PULSO</p>
    </div>
  );
}

function PulsoCase17() {
  return (
    <div className="h-[22.402px] relative shrink-0 w-full" data-name="PulsoCase">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[22.4px] left-[287.71px] not-italic text-[#d4a89c] text-[14px] text-center text-nowrap top-[0.5px] tracking-[1.12px] translate-x-[-50%] uppercase">Escritura · Ritmo · Silencio</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[31.992px] h-[114.385px] items-start relative shrink-0 w-full" data-name="Container">
      <PulsoCase16 />
      <PulsoCase17 />
    </div>
  );
}

function Section6() {
  return (
    <div className="absolute content-stretch flex flex-col h-[307.002px] items-start left-[32.63px] pb-0 pt-[96.621px] px-[320px] top-[5177.95px] w-[1215.996px]" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[0.625px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container10 />
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[15.996px] top-[2.5px]" data-name="Text">
      <IconBackgroundImage />
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute h-[21.006px] left-[64.62px] top-[5548.95px] w-[120.107px]" data-name="Link">
      <Text1 />
      <BackToHomeBackgroundImageAndText text="Volver a Home" />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[52.002px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[52px] left-[175.6px] not-italic text-[#2a2a2a] text-[32px] text-center text-nowrap top-[-0.75px] tracking-[-0.32px] translate-x-[-50%]">No dicta rutinas.</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[52.002px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[52px] left-[176.5px] not-italic text-[#2a2a2a] text-[32px] text-center text-nowrap top-[-0.75px] tracking-[-0.32px] translate-x-[-50%]">No corrige.</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[52.002px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[52px] left-[175.57px] not-italic text-[#2a2a2a] text-[32px] text-center text-nowrap top-[-0.75px] tracking-[-0.32px] translate-x-[-50%]">No analiza.</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[52.002px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[52px] left-[176.4px] not-italic text-[#2a2a2a] text-[32px] text-center text-nowrap top-[-0.75px] tracking-[-0.32px] translate-x-[-50%]">Solo ofrece espacio.</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.4)] content-stretch flex flex-col gap-[47.998px] items-start left-[383.99px] pb-0 pt-[47.998px] px-[47.998px] size-[447.998px] top-[96px]" data-name="Container">
      <Paragraph3 />
      <Paragraph4 />
      <Paragraph5 />
      <Paragraph6 />
    </div>
  );
}

function Container12() {
  return <div className="absolute blur-[2px] filter h-[11.992px] left-0 top-0 w-[1215.996px]" data-name="Container" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(212, 168, 156, 0.25) 33.333%, rgba(184, 149, 106, 0.15) 66.667%, rgba(0, 0, 0, 0) 100%)" }} />;
}

function Section7() {
  return (
    <div className="absolute border-[#e8e6e1] border-[0.625px_0px_0px] border-solid h-[640.615px] left-[32.63px] top-[1883.75px] w-[1215.996px]" data-name="Section">
      <Container11 />
      <Container12 />
    </div>
  );
}

function PulsoCase18() {
  return (
    <div className="h-[5605.928px] relative shrink-0 w-full" data-name="PulsoCase">
      <Link />
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Link1 />
      <Section7 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute font-['Inter:Medium',sans-serif] font-medium h-[97.188px] leading-[48.6px] left-[48px] not-italic text-[#f5f5f5] text-[36px] text-center text-nowrap top-0 tracking-[-0.9px] w-[671.992px]" data-name="Heading 2">
      <p className="absolute left-[335.82px] top-[-0.13px] translate-x-[-50%]">Diseño sistemas con intención.</p>
      <p className="absolute left-[335.64px] top-[48.47px] translate-x-[-50%]">Hablemos.</p>
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute content-stretch flex h-[38.75px] items-start left-[204.72px] top-[157.56px] w-[358.555px]" data-name="Link">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[48px] not-italic relative shrink-0 text-[32px] text-center text-nowrap text-white tracking-[-0.8px]">paolazerpak@gmail.com</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute h-[23.994px] left-[40px] top-[16px] w-[154.482px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[77.5px] not-italic text-[16px] text-center text-nowrap text-white top-[-1.13px] tracking-[-0.4px] translate-x-[-50%]">Conectar en LinkedIn</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.83px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 2">
            <path d="M0.833333 0.833333H12.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/2 right-[20.83%] top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 14">
            <path d={svgPaths.p2f52ca80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[202.48px] size-[20px] top-[17.99px]" data-name="Text">
      <Icon />
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute bg-[#d4a89c] h-[55.986px] left-[252.75px] rounded-[2.09715e+07px] top-[281.17px] w-[262.48px]" data-name="Link">
      <Text2 />
      <Text3 />
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[337.158px] relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Link2 />
      <Link3 />
    </div>
  );
}

function Footer() {
  return (
    <div className="h-[593.154px] relative shrink-0 w-full" data-name="Footer" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 1281.3 593.15\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(0 -47.452 -153.75 0 640.62 118.63)\\\'><stop stop-color=\\\'rgba(26,26,26,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(13,13,13,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-0 pl-[256.621px] pr-[256.631px] pt-[127.998px] relative size-full">
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function HL() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[80px] h-[925px] items-start left-0 top-0 w-[1281.25px]" data-name="hL">
      <PulsoCase18 />
      <Footer />
    </div>
  );
}

function Link4() {
  return (
    <div className="h-[23.994px] relative shrink-0 w-[90.986px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#2a2a2a] text-[16px] text-nowrap top-[-1.13px]">Paola Zerpa</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="basis-0 grow h-[21.006px] min-h-px min-w-px relative shrink-0" data-name="Link">
      <BackgroundImageAndText2 text="Proyectos" />
    </div>
  );
}

function Link6() {
  return (
    <div className="h-[21.006px] relative shrink-0 w-[58.535px]" data-name="Link">
      <BackgroundImageAndText2 text="Sobre mí" />
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[21.006px] relative shrink-0 w-[156.631px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[31.992px] items-center relative size-full">
        <Link5 />
        <Link6 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex h-[63.994px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Link4 />
      <Container14 />
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute bg-[rgba(250,250,248,0.8)] content-stretch flex flex-col h-[64.619px] items-start left-0 pb-[0.625px] pt-0 px-[64.619px] top-0 w-[1281.25px]" data-name="Navigation">
      <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[0px_0px_0.625px] border-solid inset-0 pointer-events-none" />
      <Container15 />
    </div>
  );
}

export default function PulsoDisenoComoEspacio() {
  return (
    <div className="bg-[#fafaf8] relative size-full" data-name="PULSO — Diseño como espacio">
      <HL />
      <Navigation />
    </div>
  );
}