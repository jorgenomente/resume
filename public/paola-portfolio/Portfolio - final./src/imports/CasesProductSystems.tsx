import svgPaths from "./svg-u437swnn67";
import clsx from "clsx";
import imgNoduxCase from "figma:asset/9a49176d47f0e4185b6c59b22c0c40e576c3a58d.png";
import imgContainer from "figma:asset/b1db3f784c51101756a38b4cb82c8f5a50743062.png";
import imgContainer1 from "figma:asset/88f8b7d15e37d88b8ba6b1b7bfc66183ee1c6545.png";
import imgContainer2 from "figma:asset/62037183be2a187cc0134686d073b647570d23e4.png";
import imgContainer3 from "figma:asset/008023c312f2bb785be92b49dc695025b6288e3e.png";
import imgContainer4 from "figma:asset/eb2df116923d8e0d1f0bdb5814f647bdfab901a3.png";
import imgContainer5 from "figma:asset/4618f17e9d15a0cab5d660db6982ac4fec76739f.png";
import imgContainer6 from "figma:asset/92d22f76664e2fe4c735e2af051b9b47ed2dd9ca.png";
import imgContainer7 from "figma:asset/db8ac94b89fbbaf8299ad57203f27bc0d284ecc1.png";
import imgContainer8 from "figma:asset/624c413c5f047b4d478d37b4129327e24c5c99a7.png";

function ContainerBackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[315px] relative rounded-[10px] shrink-0 w-full">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">{children}</div>
    </div>
  );
}

function BackgroundImage3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[25.986px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#4a4a4a] text-[16px] text-nowrap top-[-0.88px] tracking-[-0.16px]">{children}</p>
    </div>
  );
}
type BackgroundImage2Props = {
  additionalClassNames?: string;
};

function BackgroundImage2({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage2Props>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}

function BackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[22.754px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#6b6b6b] text-[14px] text-nowrap top-[0.5px] tracking-[-0.14px]">{children}</p>
    </div>
  );
}

function FooterBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 1281.3 593.15\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(0 -47.452 -153.75 0 640.62 118.63)\\\'><stop stop-color=\\\'rgba(26,26,26,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(13,13,13,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }} className="h-[593.154px] relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-0 pl-[256.621px] pr-[256.631px] pt-[127.998px] relative size-full">{children}</div>
      </div>
    </div>
  );
}
type ParagraphBackgroundImageAndText5Props = {
  text: string;
};

function ParagraphBackgroundImageAndText5({ text }: ParagraphBackgroundImageAndText5Props) {
  return <BackgroundImage1>{text}</BackgroundImage1>;
}

function ContainerBackgroundImage() {
  return (
    <div className="h-[21.006px] relative shrink-0 w-[156.631px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[31.992px] items-center relative size-full">
        <BackgroundImageAndText5 text="Proyectos" />
        <LinkBackgroundImageAndText2 text="Sobre mí" />
      </div>
    </div>
  );
}
type BackgroundImageAndText6Props = {
  text: string;
};

function BackgroundImageAndText6({ text }: BackgroundImageAndText6Props) {
  return (
    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#4a4a4a] text-[14px] text-nowrap top-[-0.13px]">{text}</p>
    </div>
  );
}
type BackgroundImageAndText5Props = {
  text: string;
};

function BackgroundImageAndText5({ text }: BackgroundImageAndText5Props) {
  return (
    <div className="basis-0 grow h-[21.006px] min-h-px min-w-px relative shrink-0">
      <BackgroundImageAndText6 text={text} />
    </div>
  );
}
type LinkBackgroundImageAndText2Props = {
  text: string;
};

function LinkBackgroundImageAndText2({ text }: LinkBackgroundImageAndText2Props) {
  return (
    <div className="h-[21.006px] relative shrink-0 w-[58.535px]">
      <BackgroundImageAndText6 text={text} />
    </div>
  );
}
type LinkBackgroundImageAndText1Props = {
  text: string;
};

function LinkBackgroundImageAndText1({ text }: LinkBackgroundImageAndText1Props) {
  return (
    <BackgroundImage2 additionalClassNames="h-[23.994px] w-[90.986px]">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#2a2a2a] text-[16px] text-nowrap top-[-1.13px]">{text}</p>
    </BackgroundImage2>
  );
}

function IconBackgroundImage1() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full">
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
type TextBackgroundImageAndTextProps = {
  text: string;
};

function TextBackgroundImageAndText({ text }: TextBackgroundImageAndTextProps) {
  return (
    <div className="absolute h-[23.994px] left-[40px] top-[16px] w-[154.482px]">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[77.5px] not-italic text-[16px] text-center text-nowrap text-white top-[-1.13px] tracking-[-0.4px] translate-x-[-50%]">{text}</p>
    </div>
  );
}
type LinkBackgroundImageAndTextProps = {
  text: string;
};

function LinkBackgroundImageAndText({ text }: LinkBackgroundImageAndTextProps) {
  return (
    <div className="absolute content-stretch flex h-[38.75px] items-start left-[204.72px] top-[157.56px] w-[358.555px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[48px] not-italic relative shrink-0 text-[32px] text-center text-nowrap text-white tracking-[-0.8px]">{text}</p>
    </div>
  );
}
type HeadingBackgroundImageProps = {
  text: string;
  text1: string;
};

function HeadingBackgroundImage({ text, text1 }: HeadingBackgroundImageProps) {
  return (
    <div className="absolute font-['Inter:Medium',sans-serif] font-medium h-[97.188px] leading-[48.6px] left-[48px] not-italic text-[#f5f5f5] text-[36px] text-center text-nowrap top-0 tracking-[-0.9px] w-[671.992px]">
      <p className="absolute left-[335.82px] top-[-0.13px] translate-x-[-50%]">{text}</p>
      <p className="absolute left-[335.64px] top-[48.47px] translate-x-[-50%]">{text1}</p>
    </div>
  );
}
type ParagraphBackgroundImageAndText4Props = {
  text: string;
};

function ParagraphBackgroundImageAndText4({ text }: ParagraphBackgroundImageAndText4Props) {
  return (
    <div className="h-[20.811px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20.813px] left-0 not-italic text-[#d4a89c] text-[13.008px] text-nowrap top-[0.5px] tracking-[1.0406px] uppercase">{text}</p>
    </div>
  );
}

function BackgroundImage() {
  return (
    <div className="h-[82.471px] relative shrink-0 w-full">
      <ButtonBackgroundImageAndText text="Ver versión extendida" />
      <ButtonBackgroundImageAndText1 text="Contactar" />
    </div>
  );
}
type ButtonBackgroundImageAndText1Props = {
  text: string;
};

function ButtonBackgroundImageAndText1({ text }: ButtonBackgroundImageAndText1Props) {
  return (
    <div className="absolute border-[#e8e6e1] border-[0px_0px_2.5px] border-solid h-[50.479px] left-[440.45px] top-[31.99px] w-[139.102px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[69.99px] not-italic text-[#6b6b6b] text-[16px] text-center text-nowrap top-[10.87px] translate-x-[-50%]">{text}</p>
    </div>
  );
}
type ButtonBackgroundImageAndTextProps = {
  text: string;
};

function ButtonBackgroundImageAndText({ text }: ButtonBackgroundImageAndTextProps) {
  return (
    <div className="absolute border-[#2a2a2a] border-[0px_0px_2.5px] border-solid h-[50.479px] left-[188.45px] top-[31.99px] w-[228.008px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[113.99px] not-italic text-[#2a2a2a] text-[16px] text-center text-nowrap top-[10.87px] translate-x-[-50%]">{text}</p>
    </div>
  );
}
type BackgroundImageAndText4Props = {
  text: string;
};

function BackgroundImageAndText4({ text }: BackgroundImageAndText4Props) {
  return (
    <div className="h-[25.586px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[25.6px] left-0 not-italic text-[#d4a89c] text-[16px] text-nowrap top-[-1.5px] tracking-[-0.16px]">{text}</p>
    </div>
  );
}
type ParagraphBackgroundImageAndText3Props = {
  text: string;
};

function ParagraphBackgroundImageAndText3({ text }: ParagraphBackgroundImageAndText3Props) {
  return (
    <div className="h-[25.586px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-0 not-italic text-[#2a2a2a] text-[16px] text-nowrap top-[-1.5px] tracking-[-0.16px]">{text}</p>
    </div>
  );
}
type BackgroundImageAndText3Props = {
  text: string;
};

function BackgroundImageAndText3({ text }: BackgroundImageAndText3Props) {
  return (
    <div className="h-[22.402px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.4px] left-0 not-italic text-[#6b6b6b] text-[14px] text-nowrap top-[0.5px] tracking-[-0.14px]">{text}</p>
    </div>
  );
}
type ParagraphBackgroundImageAndText2Props = {
  text: string;
};

function ParagraphBackgroundImageAndText2({ text }: ParagraphBackgroundImageAndText2Props) {
  return <BackgroundImage3>{text}</BackgroundImage3>;
}
type ParagraphBackgroundImageAndText1Props = {
  text: string;
};

function ParagraphBackgroundImageAndText1({ text }: ParagraphBackgroundImageAndText1Props) {
  return (
    <div className="h-[31.992px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[32px] left-0 not-italic text-[#d4a89c] text-[20px] text-nowrap top-[-0.25px] tracking-[-0.2px]">{text}</p>
    </div>
  );
}
type InsightBlockBackgroundImageAndTextProps = {
  text: string;
};

function InsightBlockBackgroundImageAndText({ text }: InsightBlockBackgroundImageAndTextProps) {
  return (
    <BackgroundImage2 additionalClassNames="h-[32.5px] w-[316.025px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.5px] left-0 not-italic text-[#2a2a2a] text-[20px] text-nowrap top-[-1.25px] tracking-[-0.5px]">{text}</p>
    </BackgroundImage2>
  );
}
type BackgroundImageAndText2Props = {
  text: string;
};

function BackgroundImageAndText2({ text }: BackgroundImageAndText2Props) {
  return (
    <div className="h-[30px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[30px] left-0 not-italic text-[#2a2a2a] text-[20px] text-nowrap top-[-0.5px] tracking-[-0.5px]">{text}</p>
    </div>
  );
}
type BackgroundImageAndText1Props = {
  text: string;
};

function BackgroundImageAndText1({ text }: BackgroundImageAndText1Props) {
  return (
    <div className="content-stretch flex h-[44.99px] items-start relative shrink-0 w-full">
      <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[45px] min-h-px min-w-px not-italic relative shrink-0 text-[#2a2a2a] text-[36px] text-center tracking-[-0.9px]">{text}</p>
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex h-[44.99px] items-start relative shrink-0 w-full">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[45px] min-h-px min-w-px not-italic relative shrink-0 text-[#2a2a2a] text-[36px] text-center tracking-[-0.9px]">{text}</p>
    </div>
  );
}
type ParagraphBackgroundImageAndTextProps = {
  text: string;
};

function ParagraphBackgroundImageAndText({ text }: ParagraphBackgroundImageAndTextProps) {
  return (
    <div className="h-[25.586px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-0 not-italic text-[#2a2a2a] text-[16px] text-nowrap top-[-1.5px] tracking-[-0.4px]">{text}</p>
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

function Heading() {
  return (
    <div className="h-[86.387px] relative shrink-0 w-full" data-name="Heading 1">
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[43.2px] left-[0.38px] not-italic text-[#2a2a2a] text-[34px] top-[-0.85px] tracking-[-0.9px] w-[544px]">
        <p className="mb-0">Sistema digital de gestión operativa</p>
        <p>para tiendas y comercios reales</p>
      </div>
    </div>
  );
}

function NoduxCase() {
  return (
    <div className="content-stretch flex flex-col gap-[15.996px] h-[128px] items-start relative shrink-0 w-full" data-name="NoduxCase">
      <ParagraphBackgroundImageAndText text="NODUX" />
      <Heading />
    </div>
  );
}

function NoduxCase1() {
  return (
    <div className="h-[22.402px] relative shrink-0 w-full" data-name="NoduxCase">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.4px] left-[0.38px] not-italic text-[#6b6b6b] text-[14px] top-[-0.28px] tracking-[-0.14px] w-[337px]">Pedidos · pagos · vencimientos · control diario</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[31.992px] h-[183px] items-start left-[0.38px] top-[181.03px] w-[544px]" data-name="Container">
      <NoduxCase />
      <NoduxCase1 />
    </div>
  );
}

function NoduxCase2() {
  return (
    <div className="h-[544.014px] relative shrink-0 w-full" data-name="NoduxCase">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgNoduxCase} />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start left-[608px] overflow-clip rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[544.014px] top-0" data-name="Container">
      <NoduxCase2 />
    </div>
  );
}

function Section() {
  return (
    <div className="absolute h-[544.014px] left-[64.62px] top-[216.97px] w-[1152.012px]" data-name="Section">
      <Container />
      <Container1 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[29.238px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[29.25px] left-[448.23px] not-italic text-[#4a4a4a] text-[18px] text-center text-nowrap top-[0.13px] tracking-[-0.18px] translate-x-[-50%]">El problema no era falta de información</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[29.238px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[29.25px] left-[448.07px] not-italic text-[#4a4a4a] text-[18px] text-center text-nowrap top-[0.13px] tracking-[-0.18px] translate-x-[-50%]">Era exceso de fricción para acceder a ella</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[29.238px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[29.25px] left-[448.47px] not-italic text-[#4a4a4a] text-[18px] text-center text-nowrap top-[0.13px] tracking-[-0.18px] translate-x-[-50%]">NODUX organiza procesos tal como los equipos ya trabajan</p>
    </div>
  );
}

function NoduxCase3() {
  return (
    <div className="content-stretch flex flex-col gap-[15.996px] h-[151.699px] items-start pb-0 pt-[31.992px] px-0 relative shrink-0 w-full" data-name="NoduxCase">
      <Paragraph />
      <Paragraph1 />
      <Paragraph2 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[47.998px] h-[337.676px] items-start relative shrink-0 w-full" data-name="Container">
      <BackgroundImageAndText text="El sistema no debe competir con los procesos." />
      <BackgroundImageAndText1 text="Debe reflejarlos." />
      <NoduxCase3 />
    </div>
  );
}

function Section1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[530.293px] items-start left-[32.63px] pb-0 pt-[96.621px] px-[160px] top-[1389.21px] w-[1215.996px]" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[0.625px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container2 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[30px] left-0 top-0 w-[320px]" data-name="Heading 2">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[30px] left-0 not-italic text-[#2a2a2a] text-[20px] text-nowrap top-[-0.5px] tracking-[-0.5px]">Enfoque de diseño</p>
    </div>
  );
}

function InsightBlock() {
  return (
    <div className="bg-[#d4a89c] h-[0.996px] opacity-40 relative shrink-0 w-[23.994px]" data-name="InsightBlock">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-[#f5f4f0] content-stretch flex flex-col gap-[15.996px] h-[130px] items-start justify-center left-0 pl-[31.992px] pr-0 py-0 rounded-[4px] top-0 w-[380.01px]" data-name="Container">
      <InsightBlock />
      <InsightBlockBackgroundImageAndText text="Arquitectura modular y escalable" />
    </div>
  );
}

function InsightBlock1() {
  return (
    <div className="bg-[#d4a89c] h-[0.996px] opacity-40 relative shrink-0 w-[23.994px]" data-name="InsightBlock">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bg-[#f5f4f0] content-stretch flex flex-col gap-[15.996px] h-[130px] items-start justify-center left-[404px] pl-[31.992px] pr-0 py-0 rounded-[4px] top-0 w-[380.01px]" data-name="Container">
      <InsightBlock1 />
      <InsightBlockBackgroundImageAndText text="Flujos basados en roles reales" />
    </div>
  );
}

function InsightBlock2() {
  return (
    <div className="bg-[#d4a89c] h-[0.996px] opacity-40 relative shrink-0 w-[23.994px]" data-name="InsightBlock">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
    </div>
  );
}

function InsightBlock3() {
  return (
    <BackgroundImage2 additionalClassNames="h-[65px] w-[316.025px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.5px] left-0 not-italic text-[#2a2a2a] text-[20px] top-[-1.25px] tracking-[-0.5px] w-[251px]">Jerarquía visual que prioriza acciones</p>
    </BackgroundImage2>
  );
}

function Container5() {
  return (
    <div className="absolute bg-[#f5f4f0] content-stretch flex flex-col gap-[15.996px] h-[145.977px] items-start justify-center left-0 pl-[31.992px] pr-0 py-0 rounded-[4px] top-[153.99px] w-[380.01px]" data-name="Container">
      <InsightBlock2 />
      <InsightBlock3 />
    </div>
  );
}

function InsightBlock4() {
  return (
    <div className="bg-[#d4a89c] h-[0.996px] opacity-40 relative shrink-0 w-[23.994px]" data-name="InsightBlock">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-[#f5f4f0] content-stretch flex flex-col gap-[15.996px] h-[145.977px] items-start justify-center left-[404px] pl-[31.992px] pr-0 py-0 rounded-[4px] top-[153.99px] w-[380.01px]" data-name="Container">
      <InsightBlock4 />
      <InsightBlockBackgroundImageAndText text="Estados claros en cada etapa" />
    </div>
  );
}

function InsightBlock5() {
  return (
    <div className="bg-[#d4a89c] h-[0.996px] opacity-40 relative shrink-0 w-[23.994px]" data-name="InsightBlock">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-[#f5f4f0] content-stretch flex flex-col gap-[15.996px] h-[130px] items-start justify-center left-0 pl-[31.992px] pr-0 py-0 rounded-[4px] top-[323.96px] w-[380.01px]" data-name="Container">
      <InsightBlock5 />
      <InsightBlockBackgroundImageAndText text="Feedback inmediato" />
    </div>
  );
}

function InsightBlock6() {
  return (
    <div className="bg-[#d4a89c] h-[0.996px] opacity-40 relative shrink-0 w-[23.994px]" data-name="InsightBlock">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute bg-[#f5f4f0] content-stretch flex flex-col gap-[15.996px] h-[130px] items-start justify-center left-[404px] pl-[31.992px] pr-0 py-0 rounded-[4px] top-[323.96px] w-[380.01px]" data-name="Container">
      <InsightBlock6 />
      <InsightBlockBackgroundImageAndText text="Diseño para velocidad operativa" />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute h-[453.965px] left-[368px] top-0 w-[784.014px]" data-name="Container">
      <Container3 />
      <Container4 />
      <Container5 />
      <Container6 />
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[453.965px] relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Container9 />
    </div>
  );
}

function Section2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[646.582px] items-start left-[32.63px] pb-0 pt-[96.621px] px-[31.992px] top-[1919.5px] w-[1215.996px]" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[0.625px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container10 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11.992px] h-[104.365px] items-start left-0 top-0 w-[552.002px]" data-name="Container">
      <ParagraphBackgroundImageAndText1 text="Vista unificada de procesos" />
      <ParagraphBackgroundImageAndText2 text="Todo el flujo operativo visible en una sola pantalla." />
      <BackgroundImageAndText3 text="Qué cambia: Se elimina la necesidad de cambiar entre múltiples sistemas." />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11.992px] h-[104.365px] items-start left-[600px] top-0 w-[552.012px]" data-name="Container">
      <ParagraphBackgroundImageAndText1 text="Estados con código de color" />
      <ParagraphBackgroundImageAndText2 text="Identificación visual inmediata del estado de cada tarea." />
      <BackgroundImageAndText3 text="Qué cambia: Reducción del tiempo de comprensión del estado operativo." />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11.992px] h-[104.365px] items-start left-0 top-[152.36px] w-[552.002px]" data-name="Container">
      <ParagraphBackgroundImageAndText1 text="Acciones contextuales" />
      <ParagraphBackgroundImageAndText2 text="Cada rol ve solo las acciones que puede ejecutar." />
      <BackgroundImageAndText3 text="Qué cambia: Menos fricción cognitiva, más velocidad de ejecución." />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11.992px] h-[104.365px] items-start left-[600px] top-[152.36px] w-[552.012px]" data-name="Container">
      <ParagraphBackgroundImageAndText1 text="Historial de cambios automático" />
      <ParagraphBackgroundImageAndText2 text="Registro de cada modificación sin trabajo manual." />
      <BackgroundImageAndText3 text="Qué cambia: Trazabilidad total, responsabilidad clara." />
    </div>
  );
}

function NoduxCase4() {
  return (
    <div className="h-[256.729px] relative shrink-0 w-full" data-name="NoduxCase">
      <Container11 />
      <Container12 />
      <Container13 />
      <Container14 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-[63.994px] h-[350.723px] items-start relative shrink-0 w-full" data-name="Container">
      <BackgroundImageAndText2 text="Decisiones de UX que marcaron la diferencia" />
      <NoduxCase4 />
    </div>
  );
}

function Section3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[543.34px] items-start left-[32.63px] pb-0 pt-[96.621px] px-[31.992px] top-[2566.08px] w-[1215.996px]" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[0.625px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container15 />
    </div>
  );
}

function Container16() {
  return (
    <ContainerBackgroundImage1>
      <img alt="" className="absolute h-[223.72%] left-[0.11%] max-w-none top-[0.1%] w-full" src={imgContainer} />
    </ContainerBackgroundImage1>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col gap-[7.998px] h-[55.986px] items-start relative shrink-0 w-full" data-name="Container">
      <ParagraphBackgroundImageAndText3 text="Dashboard principal" />
      <BackgroundImageAndText3 text="Vista general del estado operativo en tiempo real." />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.996px] h-[386.982px] items-start left-0 top-0 w-[560.01px]" data-name="Container">
      <Container16 />
      <Container17 />
    </div>
  );
}

function Container19() {
  return (
    <ContainerBackgroundImage1>
      <img alt="" className="absolute h-[153.77%] left-[0.11%] max-w-none top-[-0.09%] w-full" src={imgContainer1} />
    </ContainerBackgroundImage1>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-[7.998px] h-[55.986px] items-start relative shrink-0 w-full" data-name="Container">
      <ParagraphBackgroundImageAndText3 text="Gestión de pedidos" />
      <BackgroundImageAndText3 text="Vista general y seguimiento de pedidos por semana." />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.996px] h-[386.982px] items-start left-[592px] top-0 w-[560.01px]" data-name="Container">
      <Container19 />
      <Container20 />
    </div>
  );
}

function Container22() {
  return (
    <ContainerBackgroundImage1>
      <img alt="" className="absolute h-[211.92%] left-[-0.01%] max-w-none top-[0.02%] w-full" src={imgContainer2} />
    </ContainerBackgroundImage1>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col gap-[7.998px] h-[55.986px] items-start relative shrink-0 w-full" data-name="Container">
      <ParagraphBackgroundImageAndText3 text="Control de vencimientos" />
      <BackgroundImageAndText3 text="Seguimiento y alertas visuales para estados más claros." />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.996px] h-[386.982px] items-start left-0 top-[418.97px] w-[560.01px]" data-name="Container">
      <Container22 />
      <Container23 />
    </div>
  );
}

function Container25() {
  return (
    <ContainerBackgroundImage1>
      <img alt="" className="absolute h-[213.59%] left-0 max-w-none top-[-0.15%] w-full" src={imgContainer3} />
    </ContainerBackgroundImage1>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col gap-[7.998px] h-[55.986px] items-start relative shrink-0 w-full" data-name="Container">
      <ParagraphBackgroundImageAndText3 text="Control y seguimiento de pagos a proveedores" />
      <BackgroundImageAndText3 text="Indicadores visuales que sustentan la experiencia." />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.996px] h-[386.982px] items-start left-[592px] top-[418.97px] w-[560.01px]" data-name="Container">
      <Container25 />
      <Container26 />
    </div>
  );
}

function NoduxCase5() {
  return (
    <div className="h-[805.957px] relative shrink-0 w-full" data-name="NoduxCase">
      <Container18 />
      <Container21 />
      <Container24 />
      <Container27 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col gap-[63.994px] h-[899.951px] items-start relative shrink-0 w-full" data-name="Container">
      <BackgroundImageAndText2 text="Producto en uso real" />
      <NoduxCase5 />
    </div>
  );
}

function Section4() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1092.568px] items-start left-[32.63px] pb-0 pt-[96.621px] px-[31.992px] top-[3109.42px] w-[1215.996px]" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[0.625px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container28 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute font-['Inter:Regular',sans-serif] font-normal h-[162.5px] leading-[32.5px] left-0 not-italic text-[#2a2a2a] text-[20px] top-0 tracking-[-0.5px] w-[320px]" data-name="Heading 2">
      <p className="absolute left-0 top-[-1.25px] w-[300px]">El impacto de NODUX no se mide en métricas de engagement.</p>
      <p className="absolute left-0 top-[96.25px] w-[228px]">Se mide en procesos que funcionan.</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[23.994px] h-[174.326px] items-start left-[368px] top-0 w-[784.014px]" data-name="Container">
      <BackgroundImageAndText4 text="Reducción del 60% en errores operativos" />
      <BackgroundImageAndText4 text="40% menos tiempo en gestión de pedidos" />
      <BackgroundImageAndText4 text="Trazabilidad completa de procesos" />
      <BackgroundImageAndText4 text="Onboarding de nuevos operadores reducido a la mitad" />
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[174.326px] relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Container29 />
    </div>
  );
}

function Section5() {
  return (
    <div className="absolute content-stretch flex flex-col h-[366.943px] items-start left-[32.63px] pb-0 pt-[96.621px] px-[31.992px] top-[4201.99px] w-[1215.996px]" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[0.625px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container30 />
    </div>
  );
}

function NoduxCase6() {
  return (
    <div className="h-[65px] relative shrink-0 w-full" data-name="NoduxCase">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.5px] left-[384.35px] not-italic text-[#2a2a2a] text-[20px] text-center top-[-1.25px] tracking-[-0.2px] translate-x-[-50%] w-[731px]">NODUX muestra mi forma de diseñar sistemas: entender el problema operativo real, diseñar arquitectura escalable y priorizar claridad sobre decoración.</p>
    </div>
  );
}

function NoduxCase7() {
  return (
    <div className="h-[29.238px] relative shrink-0 w-full" data-name="NoduxCase">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[29.25px] left-[384.28px] not-italic text-[#4a4a4a] text-[18px] text-center text-nowrap top-[0.13px] tracking-[-0.18px] translate-x-[-50%]">Diseño para que las personas trabajen mejor. Sin fricción. Con claridad.</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col gap-[47.998px] h-[272.705px] items-start relative shrink-0 w-full" data-name="Container">
      <NoduxCase6 />
      <NoduxCase7 />
      <BackgroundImage />
    </div>
  );
}

function Section6() {
  return (
    <div className="absolute content-stretch flex flex-col h-[465.322px] items-start left-[32.63px] pb-0 pl-[223.994px] pr-[224.004px] pt-[96.621px] top-[4568.94px] w-[1215.996px]" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[0.625px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container31 />
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
    <div className="absolute h-[21.006px] left-[64.62px] top-[5098.25px] w-[120.107px]" data-name="Link">
      <Text1 />
      <BackToHomeBackgroundImageAndText text="Volver a Home" />
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute content-stretch flex h-[24.375px] items-start left-[34.32px] top-[32.5px] w-[84.678px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[#d4a89c] text-[20px] text-nowrap tracking-[-0.5px]">operativo</p>
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute h-[60px] left-0 top-0 w-[320px]" data-name="Heading 2">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[30px] left-0 not-italic text-[#2a2a2a] text-[20px] text-nowrap top-[-0.5px] tracking-[-0.5px]">El problema no era tecnológico.</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[30px] left-0 not-italic text-[#2a2a2a] text-[20px] text-nowrap top-[29.5px] tracking-[-0.5px]">Era</p>
      <Text2 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[30px] left-[118.99px] not-italic text-[#2a2a2a] text-[20px] text-nowrap top-[29.5px] tracking-[-0.5px]">.</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[46.211px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[23.1px] left-0 not-italic text-[#6b6b6b] text-[14px] top-[-0.5px] tracking-[-0.14px] w-[364px]">Equipos operativos gestionaban pedidos, inventario y logística usando múltiples herramientas desconectadas.</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[46.211px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[23.1px] left-0 not-italic text-[#6b6b6b] text-[14px] top-[-0.5px] tracking-[-0.14px] w-[374px]">Resultado: errores frecuentes, duplicación de tareas, falta de trazabilidad.</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.998px] h-[129.229px] items-start left-0 top-0 w-[376.006px]" data-name="Container">
      <ParagraphBackgroundImageAndText4 text="Contexto" />
      <Paragraph3 />
      <Paragraph4 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[46.211px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[23.1px] left-0 not-italic text-[#6b6b6b] text-[14px] top-[-0.5px] tracking-[-0.14px] w-[356px]">No había un sistema unificado para seguir el estado de cada proceso.</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[46.211px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[23.1px] left-0 not-italic text-[#6b6b6b] text-[14px] top-[-0.5px] tracking-[-0.14px] w-[328px]">Los equipos perdían tiempo buscando información básica.</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.998px] h-[129.229px] items-start left-[408px] top-0 w-[376.016px]" data-name="Container">
      <ParagraphBackgroundImageAndText4 text="Fricción real" />
      <Paragraph5 />
      <Paragraph6 />
    </div>
  );
}

function NoduxCase8() {
  return (
    <div className="h-[129.229px] relative shrink-0 w-full" data-name="NoduxCase">
      <Container32 />
      <Container33 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="font-['Inter:Italic',sans-serif] font-normal h-[60px] italic leading-[30px] relative shrink-0 text-[#2a2a2a] text-[20px] text-nowrap tracking-[-0.2px] w-full" data-name="Paragraph">
      <p className="absolute left-0 top-[-0.5px]">{`"No necesitamos más funcionalidades.`}</p>
      <p className="absolute left-0 top-[29.5px]">{`Necesitamos ver todo el proceso en un solo lugar."`}</p>
    </div>
  );
}

function NoduxCase9() {
  return (
    <div className="bg-[#f5f4f0] h-[162.383px] relative rounded-[4px] shrink-0 w-full" data-name="NoduxCase">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[15.996px] items-start pb-0 pt-[31.992px] px-[31.992px] relative size-full">
          <Paragraph7 />
          <BackgroundImageAndText3 text="— Líder de Operaciones" />
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[47.998px] h-[339.609px] items-start left-[368px] top-0 w-[784.014px]" data-name="Container">
      <NoduxCase8 />
      <NoduxCase9 />
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute h-[339.609px] left-[31.99px] top-[96px] w-[1152.012px]" data-name="Container">
      <Heading3 />
      <Container34 />
    </div>
  );
}

function Container36() {
  return <div className="absolute blur-[2px] filter h-[11.992px] left-0 top-0 w-[1215.996px]" data-name="Container" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(212, 168, 156, 0.25) 33.333%, rgba(184, 149, 106, 0.15) 66.667%, rgba(0, 0, 0, 0) 100%)" }} />;
}

function Section7() {
  return (
    <div className="absolute border-[#e8e6e1] border-[0.625px_0px_0px] border-solid h-[532.227px] left-[32.63px] top-[856.98px] w-[1215.996px]" data-name="Section">
      <Container35 />
      <Container36 />
    </div>
  );
}

function NoduxCase10() {
  return (
    <div className="h-[5155.234px] relative shrink-0 w-full" data-name="NoduxCase">
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

function Text3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[202.48px] size-[20px] top-[17.99px]" data-name="Text">
      <IconBackgroundImage1 />
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute bg-[#d4a89c] h-[55.986px] left-[252.75px] rounded-[2.09715e+07px] top-[281.17px] w-[262.48px]" data-name="Link">
      <TextBackgroundImageAndText text="Conectar en LinkedIn" />
      <Text3 />
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[337.158px] relative shrink-0 w-full" data-name="Container">
      <HeadingBackgroundImage text="Diseño sistemas con intención." text1="Hablemos." />
      <LinkBackgroundImageAndText text="paolazerpak@gmail.com" />
      <Link2 />
    </div>
  );
}

function Footer() {
  return (
    <FooterBackgroundImage>
      <Container37 />
    </FooterBackgroundImage>
  );
}

function HL() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[80px] h-[925px] items-start left-0 top-0 w-[1281.25px]" data-name="hL">
      <NoduxCase10 />
      <Footer />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex h-[63.994px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <LinkBackgroundImageAndText1 text="Paola Zerpa" />
      <ContainerBackgroundImage />
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute bg-[rgba(250,250,248,0.8)] content-stretch flex flex-col h-[64.619px] items-start left-0 pb-[0.625px] pt-0 px-[64.619px] top-0 w-[1281.25px]" data-name="Navigation">
      <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[0px_0px_0.625px] border-solid inset-0 pointer-events-none" />
      <Container38 />
    </div>
  );
}

function Nodux() {
  return (
    <div className="bg-[#fafaf8] h-[5828px] relative shrink-0 w-[1281px]" data-name="Nodux">
      <HL />
      <Navigation />
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[15.996px] top-[2.5px]" data-name="Text">
      <IconBackgroundImage />
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute h-[21.006px] left-[64.62px] top-[95.99px] w-[120.107px]" data-name="Link">
      <Text4 />
      <BackToHomeBackgroundImageAndText text="Volver a Home" />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[89.98px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[45px] left-0 not-italic text-[#2a2a2a] text-[36px] top-[-1px] tracking-[-0.9px] w-[570px]">Diseño que reduce fricción en cada decisión</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[116.953px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[29.25px] left-0 not-italic text-[#4a4a4a] text-[18px] top-[0.13px] tracking-[-0.18px] w-[647px]">{`HoyComo es una aplicación mobile diseñada para acompañar decisiones cotidianas de alimentación saludable desde una mirada humana y realista. UX Research + diseño de producto para reducir fricción mental y transformar la pregunta "¿qué como hoy?" en una experiencia clara y accionable.`}</p>
    </div>
  );
}

function HoycomoCase() {
  return (
    <div className="content-stretch flex flex-col gap-[15.996px] h-[264.512px] items-start relative shrink-0 w-full" data-name="HoycomoCase">
      <ParagraphBackgroundImageAndText text="HOYCOMO — Aplicación mobile de decisiones alimentarias" />
      <Heading4 />
      <Paragraph8 />
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[31.992px] h-[318.906px] items-start left-0 top-0 w-[688.018px]" data-name="Container">
      <HoycomoCase />
      <BackgroundImageAndText3 text="UX que acompaña decisiones humanas · Mobile · UX Research" />
    </div>
  );
}

function Container40() {
  return <div className="bg-gradient-to-b from-[#f5f4f0] h-[13.125px] shrink-0 to-[#e8e6e1] w-full" data-name="Container" />;
}

function Container41() {
  return (
    <div className="absolute bg-[#f5f4f0] h-[24.375px] left-[946.39px] rounded-[32px] top-0 w-[11.25px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[5.625px] relative rounded-[inherit] size-full">
        <Container40 />
      </div>
      <div aria-hidden="true" className="absolute border-[#2a2a2a] border-[5.625px] border-solid inset-0 pointer-events-none rounded-[32px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Section8() {
  return (
    <div className="absolute h-[318.906px] left-[64.62px] top-[216.97px] w-[1152.012px]" data-name="Section">
      <Container39 />
      <Container41 />
    </div>
  );
}

function HoycomoCase1() {
  return (
    <div className="content-stretch flex flex-col gap-[23.994px] h-[113.975px] items-start relative shrink-0 w-full" data-name="HoycomoCase">
      <BackgroundImageAndText text="Las personas no necesitan más opciones." />
      <BackgroundImageAndText1 text="Necesitan menos carga." />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[29.238px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[29.25px] left-[448.18px] not-italic text-[#4a4a4a] text-[18px] text-center text-nowrap top-[0.13px] tracking-[-0.18px] translate-x-[-50%]">El usuario no busca recetas</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[29.238px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[29.25px] left-[448.29px] not-italic text-[#4a4a4a] text-[18px] text-center text-nowrap top-[0.13px] tracking-[-0.18px] translate-x-[-50%]">Busca alivio</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[29.238px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[29.25px] left-[448.34px] not-italic text-[#4a4a4a] text-[18px] text-center text-nowrap top-[0.13px] tracking-[-0.18px] translate-x-[-50%]">{`Busca sentir que está "bien" con lo que elige`}</p>
    </div>
  );
}

function HoycomoCase2() {
  return (
    <div className="content-stretch flex flex-col gap-[15.996px] h-[151.699px] items-start pb-0 pt-[31.992px] px-0 relative shrink-0 w-full" data-name="HoycomoCase">
      <Paragraph9 />
      <Paragraph10 />
      <Paragraph11 />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col gap-[47.998px] h-[313.672px] items-start relative shrink-0 w-full" data-name="Container">
      <HoycomoCase1 />
      <HoycomoCase2 />
    </div>
  );
}

function Section9() {
  return (
    <div className="absolute content-stretch flex flex-col h-[506.289px] items-start left-[32.63px] pb-0 pt-[96.621px] px-[160px] top-[1083.79px] w-[1215.996px]" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[0.625px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container42 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute h-[60px] left-0 top-0 w-[320px]" data-name="Heading 2">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[30px] left-0 not-italic text-[#2a2a2a] text-[20px] top-[-0.5px] tracking-[-0.5px] w-[233px]">Diseñar para acompañar decisiones, no imponerlas</p>
    </div>
  );
}

function InsightBlock7() {
  return (
    <div className="bg-[#d4a89c] h-[0.996px] opacity-40 relative shrink-0 w-[23.994px]" data-name="InsightBlock">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute bg-[#f5f4f0] content-stretch flex flex-col gap-[15.996px] h-[130px] items-start justify-center left-0 pl-[31.992px] pr-0 py-0 rounded-[4px] top-0 w-[380.01px]" data-name="Container">
      <InsightBlock7 />
      <InsightBlockBackgroundImageAndText text="Reducir decisiones simultáneas" />
    </div>
  );
}

function InsightBlock8() {
  return (
    <div className="bg-[#d4a89c] h-[0.996px] opacity-40 relative shrink-0 w-[23.994px]" data-name="InsightBlock">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute bg-[#f5f4f0] content-stretch flex flex-col gap-[15.996px] h-[130px] items-start justify-center left-[404px] pl-[31.992px] pr-0 py-0 rounded-[4px] top-0 w-[380.01px]" data-name="Container">
      <InsightBlock8 />
      <InsightBlockBackgroundImageAndText text="Sugerir sin imponer" />
    </div>
  );
}

function InsightBlock9() {
  return (
    <div className="bg-[#d4a89c] h-[0.996px] opacity-40 relative shrink-0 w-[23.994px]" data-name="InsightBlock">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute bg-[#f5f4f0] content-stretch flex flex-col gap-[15.996px] h-[130px] items-start justify-center left-0 pl-[31.992px] pr-0 py-0 rounded-[4px] top-[153.99px] w-[380.01px]" data-name="Container">
      <InsightBlock9 />
      <InsightBlockBackgroundImageAndText text="Diseñar estados calmos" />
    </div>
  );
}

function InsightBlock10() {
  return (
    <div className="bg-[#d4a89c] h-[0.996px] opacity-40 relative shrink-0 w-[23.994px]" data-name="InsightBlock">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute bg-[#f5f4f0] content-stretch flex flex-col gap-[15.996px] h-[130px] items-start justify-center left-[404px] pl-[31.992px] pr-0 py-0 rounded-[4px] top-[153.99px] w-[380.01px]" data-name="Container">
      <InsightBlock10 />
      <InsightBlockBackgroundImageAndText text="UX emocional + funcional" />
    </div>
  );
}

function InsightBlock11() {
  return (
    <div className="bg-[#d4a89c] h-[0.996px] opacity-40 relative shrink-0 w-[23.994px]" data-name="InsightBlock">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute bg-[#f5f4f0] content-stretch flex flex-col gap-[15.996px] h-[130px] items-start justify-center left-0 pl-[31.992px] pr-0 py-0 rounded-[4px] top-[307.99px] w-[380.01px]" data-name="Container">
      <InsightBlock11 />
      <InsightBlockBackgroundImageAndText text="Lenguaje cercano" />
    </div>
  );
}

function InsightBlock12() {
  return (
    <div className="bg-[#d4a89c] h-[0.996px] opacity-40 relative shrink-0 w-[23.994px]" data-name="InsightBlock">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute bg-[#f5f4f0] content-stretch flex flex-col gap-[15.996px] h-[130px] items-start justify-center left-[404px] pl-[31.992px] pr-0 py-0 rounded-[4px] top-[307.99px] w-[380.01px]" data-name="Container">
      <InsightBlock12 />
      <InsightBlockBackgroundImageAndText text="Ritmo antes que eficiencia" />
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute h-[437.988px] left-[368px] top-0 w-[784.014px]" data-name="Container">
      <Container43 />
      <Container44 />
      <Container45 />
      <Container46 />
      <Container47 />
      <Container48 />
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[437.988px] relative shrink-0 w-full" data-name="Container">
      <Heading5 />
      <Container49 />
    </div>
  );
}

function Section10() {
  return (
    <div className="absolute content-stretch flex flex-col h-[630.605px] items-start left-[32.63px] pb-0 pt-[96.621px] px-[31.992px] top-[1590.08px] w-[1215.996px]" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[0.625px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container50 />
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11.992px] h-[104.365px] items-start left-0 top-0 w-[552.002px]" data-name="Container">
      <ParagraphBackgroundImageAndText1 text="Sugerencias contextuales" />
      <ParagraphBackgroundImageAndText2 text="El sistema propone según el día, no según reglas rígidas." />
      <BackgroundImageAndText3 text="Qué cambia: el usuario siente que la app lo entiende, no que lo controla." />
    </div>
  );
}

function Paragraph12() {
  return <BackgroundImage3>{`El usuario adapta, no "falla".`}</BackgroundImage3>;
}

function Container52() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11.992px] h-[104.365px] items-start left-[600px] top-0 w-[552.012px]" data-name="Container">
      <ParagraphBackgroundImageAndText1 text="Planificación flexible" />
      <Paragraph12 />
      <BackgroundImageAndText3 text="Qué cambia: se elimina la culpa, se refuerza la autonomía." />
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11.992px] h-[104.365px] items-start left-0 top-[152.36px] w-[552.002px]" data-name="Container">
      <ParagraphBackgroundImageAndText1 text="Microcontenidos" />
      <ParagraphBackgroundImageAndText2 text="Mini lecturas que refuerzan hábitos sin abrumar." />
      <BackgroundImageAndText3 text="Qué cambia: información útil sin saturación ni interrupciones." />
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11.992px] h-[104.365px] items-start left-[600px] top-[152.36px] w-[552.012px]" data-name="Container">
      <ParagraphBackgroundImageAndText1 text="Flujos simples" />
      <ParagraphBackgroundImageAndText2 text="Menos pasos = menos fricción." />
      <BackgroundImageAndText3 text="Qué cambia: el usuario llega al resultado sin agotarse en el proceso." />
    </div>
  );
}

function HoycomoCase3() {
  return (
    <div className="h-[256.729px] relative shrink-0 w-full" data-name="HoycomoCase">
      <Container51 />
      <Container52 />
      <Container53 />
      <Container54 />
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col gap-[63.994px] h-[350.723px] items-start relative shrink-0 w-full" data-name="Container">
      <BackgroundImageAndText2 text="Decisiones de UX que marcaron la diferencia" />
      <HoycomoCase3 />
    </div>
  );
}

function Section11() {
  return (
    <div className="absolute content-stretch flex flex-col h-[543.34px] items-start left-[32.63px] pb-0 pt-[96.621px] px-[31.992px] top-[2220.68px] w-[1215.996px]" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[0.625px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container55 />
    </div>
  );
}

function Container56() {
  return (
    <div className="h-[644.756px] relative rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none rounded-[10px] size-full" src={imgContainer4} />
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[44.805px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.4px] left-0 not-italic text-[#6b6b6b] text-[14px] top-[0.5px] tracking-[-0.14px] w-[303px]">Sin preguntas invasivas. Solo lo necesario para empezar.</p>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col gap-[7.998px] h-[78.389px] items-start relative shrink-0 w-full" data-name="Container">
      <ParagraphBackgroundImageAndText3 text="Onboarding" />
      <Paragraph13 />
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.996px] h-[739.141px] items-start left-0 top-0 w-[362.676px]" data-name="Container">
      <Container56 />
      <Container57 />
    </div>
  );
}

function Container59() {
  return (
    <div className="h-[644.756px] relative rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none rounded-[10px] size-full" src={imgContainer5} />
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col gap-[7.998px] h-[55.986px] items-start relative shrink-0 w-full" data-name="Container">
      <ParagraphBackgroundImageAndText3 text="Home contextual" />
      <BackgroundImageAndText3 text="Sugiere según el momento, no según un plan rígido." />
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.996px] h-[739.141px] items-start left-[394.67px] top-0 w-[362.676px]" data-name="Container">
      <Container59 />
      <Container60 />
    </div>
  );
}

function Container62() {
  return (
    <div className="h-[644.756px] relative rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none rounded-[10px] size-full" src={imgContainer6} />
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col gap-[7.998px] h-[55.986px] items-start relative shrink-0 w-full" data-name="Container">
      <ParagraphBackgroundImageAndText3 text="Receta" />
      <BackgroundImageAndText3 text="Información clara, sin distracciones innecesarias." />
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.996px] h-[739.141px] items-start left-[789.34px] top-0 w-[362.676px]" data-name="Container">
      <Container62 />
      <Container63 />
    </div>
  );
}

function Container65() {
  return (
    <div className="h-[644.756px] relative rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none rounded-[10px] size-full" src={imgContainer7} />
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col gap-[7.998px] h-[55.986px] items-start relative shrink-0 w-full" data-name="Container">
      <ParagraphBackgroundImageAndText3 text="Mini lecturas" />
      <BackgroundImageAndText3 text="Contenido breve que acompaña, no que interrumpe." />
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.996px] h-[716.738px] items-start left-0 top-[771.13px] w-[362.676px]" data-name="Container">
      <Container65 />
      <Container66 />
    </div>
  );
}

function Container68() {
  return (
    <div className="h-[644.756px] relative rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none rounded-[10px] size-full" src={imgContainer8} />
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col gap-[7.998px] h-[55.986px] items-start relative shrink-0 w-full" data-name="Container">
      <ParagraphBackgroundImageAndText3 text="Búsqueda por ingrediente" />
      <BackgroundImageAndText3 text="Reduce fricción: usa lo que ya tienes." />
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.996px] h-[716.738px] items-start left-[394.67px] top-[771.13px] w-[362.676px]" data-name="Container">
      <Container68 />
      <Container69 />
    </div>
  );
}

function HoycomoCase4() {
  return (
    <div className="h-[1487.871px] relative shrink-0 w-full" data-name="HoycomoCase">
      <Container58 />
      <Container61 />
      <Container64 />
      <Container67 />
      <Container70 />
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col gap-[63.994px] h-[1581.865px] items-start relative shrink-0 w-full" data-name="Container">
      <BackgroundImageAndText2 text="Producto en uso real" />
      <HoycomoCase4 />
    </div>
  );
}

function Section12() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1774.482px] items-start left-[32.63px] pb-0 pt-[96.621px] px-[31.992px] top-[2764.02px] w-[1215.996px]" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[0.625px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container71 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="absolute font-['Inter:Regular',sans-serif] font-normal h-[162.5px] leading-[32.5px] left-0 not-italic text-[#2a2a2a] text-[20px] top-0 tracking-[-0.5px] w-[320px]" data-name="Heading 2">
      <p className="absolute left-0 top-[-1.25px] w-[282px]">El impacto de HOYCOMO no se mide en calorías contadas.</p>
      <p className="absolute left-0 top-[96.25px] w-[313px]">Se mide en decisiones que dejaron de cansar.</p>
    </div>
  );
}

function Container72() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[23.994px] h-[174.326px] items-start left-[368px] top-0 w-[784.014px]" data-name="Container">
      <BackgroundImageAndText4 text="Menos desgaste mental al decidir" />
      <BackgroundImageAndText4 text="Más continuidad en hábitos alimenticios" />
      <BackgroundImageAndText4 text="Mejor relación con la comida" />
      <BackgroundImageAndText4 text="Sensación real de acompañamiento" />
    </div>
  );
}

function Container73() {
  return (
    <div className="h-[174.326px] relative shrink-0 w-full" data-name="Container">
      <Heading6 />
      <Container72 />
    </div>
  );
}

function Section13() {
  return (
    <div className="absolute content-stretch flex flex-col h-[366.943px] items-start left-[32.63px] pb-0 pt-[96.621px] px-[31.992px] top-[4538.51px] w-[1215.996px]" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[0.625px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container73 />
    </div>
  );
}

function HoycomoCase5() {
  return (
    <div className="h-[65px] relative shrink-0 w-full" data-name="HoycomoCase">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.5px] left-[384.39px] not-italic text-[#2a2a2a] text-[20px] text-center top-[-1.25px] tracking-[-0.2px] translate-x-[-50%] w-[677px]">HOYCOMO muestra mi forma de diseñar productos: entender el contexto emocional del usuario y reducir fricción sin agregar complejidad.</p>
    </div>
  );
}

function HoycomoCase6() {
  return (
    <div className="h-[29.238px] relative shrink-0 w-full" data-name="HoycomoCase">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[29.25px] left-[384.36px] not-italic text-[#4a4a4a] text-[18px] text-center text-nowrap top-[0.13px] tracking-[-0.18px] translate-x-[-50%]">Diseño claridad. Para que las decisiones cotidianas no cansen.</p>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col gap-[47.998px] h-[272.705px] items-start relative shrink-0 w-full" data-name="Container">
      <HoycomoCase5 />
      <HoycomoCase6 />
      <BackgroundImage />
    </div>
  );
}

function Section14() {
  return (
    <div className="absolute content-stretch flex flex-col h-[465.322px] items-start left-[32.63px] pb-0 pl-[223.994px] pr-[224.004px] pt-[96.621px] top-[4905.45px] w-[1215.996px]" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[0.625px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container74 />
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[15.996px] top-[2.5px]" data-name="Text">
      <IconBackgroundImage />
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute h-[21.006px] left-[64.62px] top-[5434.77px] w-[120.107px]" data-name="Link">
      <Text5 />
      <BackToHomeBackgroundImageAndText text="Volver a Home" />
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute content-stretch flex h-[24.375px] items-start left-[46.69px] top-[36.25px] w-[74.814px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[32.5px] not-italic relative shrink-0 text-[#d4a89c] text-[20px] text-nowrap tracking-[-0.5px]">decisión</p>
    </div>
  );
}

function Heading7() {
  return (
    <div className="absolute h-[65px] left-0 top-0 w-[320px]" data-name="Heading 2">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.5px] left-0 not-italic text-[#2a2a2a] text-[20px] text-nowrap top-[-1.25px] tracking-[-0.5px]">El problema no es la comida.</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.5px] left-0 not-italic text-[#2a2a2a] text-[20px] text-nowrap top-[31.25px] tracking-[-0.5px]">Es la</p>
      <Text6 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.5px] left-[121.5px] not-italic text-[#2a2a2a] text-[20px] text-nowrap top-[31.25px] tracking-[-0.5px]">.</p>
    </div>
  );
}

function Container75() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.998px] h-[82.314px] items-start left-0 top-0 w-[376.006px]" data-name="Container">
      <ParagraphBackgroundImageAndText4 text="Fatiga" />
      <ParagraphBackgroundImageAndText5 text="Decidir qué comer todos los días agota." />
      <ParagraphBackgroundImageAndText5 text="La fricción aparece antes de cocinar." />
    </div>
  );
}

function Paragraph14() {
  return <BackgroundImage1>{`Sensación de "fallar" incluso queriendo comer mejor.`}</BackgroundImage1>;
}

function Container76() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.998px] h-[82.314px] items-start left-[408px] top-0 w-[376.016px]" data-name="Container">
      <ParagraphBackgroundImageAndText4 text="Culpa" />
      <ParagraphBackgroundImageAndText5 text="Planes rígidos que no se cumplen." />
      <Paragraph14 />
    </div>
  );
}

function HoycomoCase7() {
  return (
    <div className="h-[82.314px] relative shrink-0 w-full" data-name="HoycomoCase">
      <Container75 />
      <Container76 />
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="font-['Inter:Italic',sans-serif] font-normal h-[65px] italic leading-[32.5px] relative shrink-0 text-[#2a2a2a] text-[20px] text-nowrap tracking-[-0.2px] w-full" data-name="Paragraph">
      <p className="absolute left-0 top-[-1.25px]">{`"El problema no es saber qué comer,`}</p>
      <p className="absolute left-0 top-[31.25px]">{`es decidir sin agotarse en el intento."`}</p>
    </div>
  );
}

function HoycomoCase8() {
  return (
    <div className="bg-[#f5f4f0] h-[128.984px] relative rounded-[4px] shrink-0 w-full" data-name="HoycomoCase">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-0 pt-[31.992px] px-[31.992px] relative size-full">
          <Paragraph15 />
        </div>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[47.998px] h-[259.297px] items-start left-[368px] top-0 w-[784.014px]" data-name="Container">
      <HoycomoCase7 />
      <HoycomoCase8 />
    </div>
  );
}

function Container78() {
  return (
    <div className="absolute h-[259.297px] left-[31.99px] top-[96px] w-[1152.012px]" data-name="Container">
      <Heading7 />
      <Container77 />
    </div>
  );
}

function Container79() {
  return <div className="absolute blur-[2px] filter h-[11.992px] left-0 top-0 w-[1215.996px]" data-name="Container" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(212, 168, 156, 0.25) 33.333%, rgba(184, 149, 106, 0.15) 66.667%, rgba(0, 0, 0, 0) 100%)" }} />;
}

function Section15() {
  return (
    <div className="absolute border-[#e8e6e1] border-[0.625px_0px_0px] border-solid h-[451.914px] left-[32.63px] top-[631.88px] w-[1215.996px]" data-name="Section">
      <Container78 />
      <Container79 />
    </div>
  );
}

function HoycomoCase9() {
  return (
    <div className="h-[5491.748px] relative shrink-0 w-full" data-name="HoycomoCase">
      <Link3 />
      <Section8 />
      <Section9 />
      <Section10 />
      <Section11 />
      <Section12 />
      <Section13 />
      <Section14 />
      <Link4 />
      <Section15 />
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[202.48px] size-[20px] top-[17.99px]" data-name="Text">
      <IconBackgroundImage1 />
    </div>
  );
}

function Link5() {
  return (
    <div className="absolute bg-[#d4a89c] h-[55.986px] left-[252.75px] rounded-[2.09715e+07px] top-[281.17px] w-[262.48px]" data-name="Link">
      <TextBackgroundImageAndText text="Conectar en LinkedIn" />
      <Text7 />
    </div>
  );
}

function Container80() {
  return (
    <div className="h-[337.158px] relative shrink-0 w-full" data-name="Container">
      <HeadingBackgroundImage text="Diseño sistemas con intención." text1="Hablemos." />
      <LinkBackgroundImageAndText text="paolazerpak@gmail.com" />
      <Link5 />
    </div>
  );
}

function Footer1() {
  return (
    <FooterBackgroundImage>
      <Container80 />
    </FooterBackgroundImage>
  );
}

function HL1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[80px] h-[925px] items-start left-0 top-0 w-[1281.25px]" data-name="hL">
      <HoycomoCase9 />
      <Footer1 />
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex h-[63.994px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <LinkBackgroundImageAndText1 text="Paola Zerpa" />
      <ContainerBackgroundImage />
    </div>
  );
}

function Navigation1() {
  return (
    <div className="absolute bg-[rgba(250,250,248,0.8)] content-stretch flex flex-col h-[64.619px] items-start left-0 pb-[0.625px] pt-0 px-[64.619px] top-0 w-[1281.25px]" data-name="Navigation">
      <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[0px_0px_0.625px] border-solid inset-0 pointer-events-none" />
      <Container81 />
    </div>
  );
}

function HoyComo() {
  return (
    <div className="bg-[#fafaf8] h-[6165px] relative shrink-0 w-[1281px]" data-name="HoyComo">
      <HL1 />
      <Navigation1 />
    </div>
  );
}

export default function CasesProductSystems() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative size-full" data-name="CASES — Product Systems">
      <Nodux />
      <HoyComo />
    </div>
  );
}