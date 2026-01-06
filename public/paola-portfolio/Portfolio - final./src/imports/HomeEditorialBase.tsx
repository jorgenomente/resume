import svgPaths from "./svg-zensigjvnw";
import clsx from "clsx";
import imgHomePage from "figma:asset/f47c55f1d88b26a37e67343871dc9d0591019bb5.png";
import imgImageNoduxSistemaDeGestionOperativa from "figma:asset/09fc8d4c050466e25519bc62a685d3cfe82da07a.png";
import imgImageHoycomoAplicacionDeDecisionesAlimentarias from "figma:asset/95e9202750db8848415821871809f1ebbe7e5f8a.png";
import imgImagePulsoProductoEditorialDeJournaling from "figma:asset/2eb29f6b1af508fb881fd8ff527e83dd6ab7f03a.png";
import imgHomePage1 from "figma:asset/6ef93c7e2d1d00a02d9986d3a3f2675e72afb9be.png";

function BackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow h-[291.055px] min-h-px min-w-px relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}

function BackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[291.055px] relative shrink-0 w-[270px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}

function HomePageBackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[6392.227px] relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-0 pt-[63.994px] px-[32.627px] relative size-full">{children}</div>
      </div>
    </div>
  );
}
type ParagraphBackgroundImageAndText2Props = {
  text: string;
};

function ParagraphBackgroundImageAndText2({ text }: ParagraphBackgroundImageAndText2Props) {
  return (
    <div className="h-[28.789px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28.8px] left-0 not-italic text-[#2a2a2a] text-[18px] text-nowrap top-[0.13px] tracking-[-0.18px]">{text}</p>
    </div>
  );
}
type ValueCardBackgroundImageAndTextProps = {
  text: string;
};

function ValueCardBackgroundImageAndText({ text }: ValueCardBackgroundImageAndTextProps) {
  return (
    <div className="absolute h-[23.994px] left-0 top-[16.99px] w-[352.002px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#2a2a2a] text-[16px] text-nowrap top-[-1.13px] tracking-[-0.4px]">{text}</p>
    </div>
  );
}
type TextBackgroundImageAndText7Props = {
  text: string;
  additionalClassNames?: string;
};

function TextBackgroundImageAndText7({ text, additionalClassNames = "" }: TextBackgroundImageAndText7Props) {
  return (
    <div className={clsx("absolute bg-[#f5f4f0] h-[32.998px] rounded-[2.09715e+07px]", additionalClassNames)}>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[11.99px] not-italic text-[#6b6b6b] text-[14px] text-nowrap top-[5.87px]">{text}</p>
    </div>
  );
}

function IconBackgroundImage() {
  return (
    <div className="h-[15.996px] overflow-clip relative shrink-0 w-full">
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.67px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 2">
            <path d="M0.666504 0.666504H9.99756" id="Vector" stroke="var(--stroke-0, #2A2A2A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33301" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/2 right-[20.83%] top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 11">
            <path d={svgPaths.p108c0320} id="Vector" stroke="var(--stroke-0, #2A2A2A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33301" />
          </svg>
        </div>
      </div>
    </div>
  );
}
type TextBackgroundImageAndText6Props = {
  text: string;
  additionalClassNames?: string;
};

function TextBackgroundImageAndText6({ text, additionalClassNames = "" }: TextBackgroundImageAndText6Props) {
  return (
    <div className={clsx("absolute h-[23.994px]", additionalClassNames)}>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#2a2a2a] text-[16px] text-nowrap top-[-1.13px]">{text}</p>
    </div>
  );
}
type ParagraphBackgroundImageAndText1Props = {
  text: string;
};

function ParagraphBackgroundImageAndText1({ text }: ParagraphBackgroundImageAndText1Props) {
  return (
    <div className="absolute h-[22.754px] left-0 top-[72.38px] w-[850.02px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a4a4a] text-[14px] text-nowrap top-[0.5px] tracking-[-0.14px]">{text}</p>
    </div>
  );
}
type HeadingBackgroundImageAndText2Props = {
  text: string;
};

function HeadingBackgroundImageAndText2({ text }: HeadingBackgroundImageAndText2Props) {
  return (
    <div className="absolute h-[22.393px] left-0 top-[33.99px] w-[850.02px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.4px] left-0 not-italic text-[#2a2a2a] text-[16px] text-nowrap top-[-0.75px] tracking-[-0.4px]">{text}</p>
    </div>
  );
}
type TextBackgroundImageAndText5Props = {
  text: string;
  additionalClassNames?: string;
};

function TextBackgroundImageAndText5({ text, additionalClassNames = "" }: TextBackgroundImageAndText5Props) {
  return (
    <div className={clsx("h-[17.998px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#8a8a8a] text-[12px] text-nowrap top-[0.25px] tracking-[0.6px] uppercase">{text}</p>
      </div>
    </div>
  );
}
type TextBackgroundImageAndText4Props = {
  text: string;
};

function TextBackgroundImageAndText4({ text }: TextBackgroundImageAndText4Props) {
  return (
    <div className="h-[17.998px] relative shrink-0 w-[3.916px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#e8e6e1] text-[12px] text-nowrap top-[0.25px] tracking-[0.6px] uppercase">{text}</p>
      </div>
    </div>
  );
}
type TextBackgroundImageAndText3Props = {
  text: string;
  additionalClassNames?: string;
};

function TextBackgroundImageAndText3({ text, additionalClassNames = "" }: TextBackgroundImageAndText3Props) {
  return (
    <div className={clsx("h-[17.998px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#d4a89c] text-[12px] text-nowrap top-[0.25px] tracking-[0.6px] uppercase">{text}</p>
      </div>
    </div>
  );
}
type LabelBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function LabelBackgroundImageAndText({ text, additionalClassNames = "" }: LabelBackgroundImageAndTextProps) {
  return (
    <div className={clsx("absolute h-[19.512px] left-0 top-0", additionalClassNames)}>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.512px] left-0 not-italic text-[#d4a89c] text-[13.008px] text-nowrap top-[0.88px] tracking-[1.0406px] uppercase">{text}</p>
    </div>
  );
}

function ContainerBackgroundImage() {
  return (
    <div className="h-[21.006px] relative shrink-0 w-[156.631px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[31.992px] items-center relative size-full">
        <BackgroundImageAndText text="Proyectos" />
        <LinkBackgroundImageAndText2 text="Sobre mí" />
      </div>
    </div>
  );
}
type BackgroundImageAndText1Props = {
  text: string;
};

function BackgroundImageAndText1({ text }: BackgroundImageAndText1Props) {
  return (
    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#4a4a4a] text-[14px] text-nowrap top-[-0.13px]">{text}</p>
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return (
    <div className="basis-0 grow h-[21.006px] min-h-px min-w-px relative shrink-0">
      <BackgroundImageAndText1 text={text} />
    </div>
  );
}
type LinkBackgroundImageAndText2Props = {
  text: string;
};

function LinkBackgroundImageAndText2({ text }: LinkBackgroundImageAndText2Props) {
  return (
    <div className="h-[21.006px] relative shrink-0 w-[58.535px]">
      <BackgroundImageAndText1 text={text} />
    </div>
  );
}
type LinkBackgroundImageAndText1Props = {
  text: string;
};

function LinkBackgroundImageAndText1({ text }: LinkBackgroundImageAndText1Props) {
  return (
    <div className="h-[23.994px] relative shrink-0 w-[90.986px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#2a2a2a] text-[16px] text-nowrap top-[-1.13px]">{text}</p>
      </div>
    </div>
  );
}

function HomePageBackgroundImage() {
  return (
    <div className="absolute h-[504.004px] left-0 top-0 w-[1152.012px]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHomePage} />
    </div>
  );
}
type HomePageBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function HomePageBackgroundImageAndText({ text, additionalClassNames = "" }: HomePageBackgroundImageAndTextProps) {
  return (
    <div className={clsx("absolute h-[22.51px] top-0 w-[14.326px]", additionalClassNames)}>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.512px] left-0 not-italic text-[#2b2b2a] text-[15.008px] text-nowrap top-[-1.13px]">{text}</p>
    </div>
  );
}
type LinkBackgroundImageAndTextProps = {
  text: string;
};

function LinkBackgroundImageAndText({ text }: LinkBackgroundImageAndTextProps) {
  return (
    <div className="absolute bg-[#2a2a2a] h-[50.498px] left-0 rounded-[10px] top-[23.99px] w-[197.188px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.512px] left-[98.99px] not-italic text-[15.008px] text-center text-nowrap text-white top-[12.87px] translate-x-[-50%]">{text}</p>
    </div>
  );
}
type TextBackgroundImageAndText2Props = {
  text: string;
  additionalClassNames?: string;
};

function TextBackgroundImageAndText2({ text, additionalClassNames = "" }: TextBackgroundImageAndText2Props) {
  return (
    <div className={clsx("absolute bg-[rgba(207,168,154,0.12)] border-[0.625px] border-[rgba(207,168,154,0.2)] border-solid h-[25.742px] rounded-[4px] top-[16px]", additionalClassNames)}>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.512px] left-[10px] not-italic text-[#8b7366] text-[11.008px] text-nowrap top-[4.24px] tracking-[0.1101px]">{text}</p>
    </div>
  );
}
type TextBackgroundImageAndText1Props = {
  text: string;
  additionalClassNames?: string;
};

function TextBackgroundImageAndText1({ text, additionalClassNames = "" }: TextBackgroundImageAndText1Props) {
  return (
    <div className={clsx("absolute content-stretch flex h-[20.625px] items-start", additionalClassNames)}>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[25.512px] not-italic relative shrink-0 text-[#2b2b2a] text-[17.008px] text-nowrap tracking-[-0.1701px]">{text}</p>
    </div>
  );
}
type TextBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TextBackgroundImageAndText({ text, additionalClassNames = "" }: TextBackgroundImageAndTextProps) {
  return (
    <div className={clsx("absolute content-stretch flex h-[20.625px] items-start", additionalClassNames)}>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[25.512px] not-italic relative shrink-0 text-[#d9a18a] text-[17.008px] text-nowrap tracking-[-0.1701px]">{text}</p>
    </div>
  );
}
type HeadingBackgroundImageAndText1Props = {
  text: string;
};

function HeadingBackgroundImageAndText1({ text }: HeadingBackgroundImageAndText1Props) {
  return (
    <div className="absolute h-[37.793px] left-0 top-[52.8px] w-[767.998px]">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[37.8px] left-0 not-italic text-[#2b2b2a] text-[28px] text-nowrap top-[-0.13px] tracking-[-0.42px]">{text}</p>
    </div>
  );
}
type ParagraphBackgroundImageAndTextProps = {
  text: string;
};

function ParagraphBackgroundImageAndText({ text }: ParagraphBackgroundImageAndTextProps) {
  return (
    <div className="absolute h-[20.811px] left-0 top-0 w-[767.998px]">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20.813px] left-0 not-italic text-[#cfa89a] text-[13.008px] text-nowrap top-[0.5px] tracking-[1.0406px] uppercase">{text}</p>
    </div>
  );
}
type HeadingBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function HeadingBackgroundImageAndText({ text, additionalClassNames = "" }: HeadingBackgroundImageAndTextProps) {
  return (
    <div className={clsx("h-[95.996px] relative shrink-0 w-full", additionalClassNames)}>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[48px] left-0 not-italic text-[#2b2b2a] text-[40px] top-[-0.63px] tracking-[-0.8px] w-[652px]">{text}</p>
    </div>
  );
}
type HeroVariantControlBackgroundImageAndText1Props = {
  text: string;
};

function HeroVariantControlBackgroundImageAndText1({ text }: HeroVariantControlBackgroundImageAndText1Props) {
  return (
    <div className="content-stretch flex h-[15.625px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.512px] not-italic relative shrink-0 text-[#9a9a9a] text-[13.008px] text-center text-nowrap tracking-[-0.3252px]">{text}</p>
    </div>
  );
}
type HeroVariantControlBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function HeroVariantControlBackgroundImageAndText({ text, additionalClassNames = "" }: HeroVariantControlBackgroundImageAndTextProps) {
  return (
    <div className={clsx("absolute content-stretch flex h-[15.625px] items-start left-[16px] top-[7.87px]", additionalClassNames)}>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[19.512px] not-italic relative shrink-0 text-[#2a2a2a] text-[13.008px] text-center text-nowrap tracking-[-0.3252px]">{text}</p>
    </div>
  );
}

function Container() {
  return <div className="absolute bg-[rgba(255,255,255,0.9)] border-[#e8e6e1] border-[0.625px] border-solid h-[31.504px] left-0 rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-0 w-[86.162px]" data-name="Container" />;
}

function Button() {
  return (
    <div className="absolute h-[31.504px] left-[1.99px] rounded-[8px] top-[1.99px] w-[86.162px]" data-name="Button">
      <Container />
      <HeroVariantControlBackgroundImageAndText text="Narrativa" additionalClassNames="w-[54.17px]" />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[31.504px] items-start left-[92.15px] pb-0 pt-[7.871px] px-[15.996px] rounded-[8px] top-[1.99px] w-[76.738px]" data-name="Button">
      <HeroVariantControlBackgroundImageAndText1 text="Usuario" />
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[31.504px] items-start left-[172.88px] pb-0 pt-[7.871px] px-[15.996px] rounded-[8px] top-[1.99px] w-[85.244px]" data-name="Button">
      <HeroVariantControlBackgroundImageAndText1 text="Sistemas" />
    </div>
  );
}

function HeroVariantControl() {
  return (
    <div className="absolute bg-[rgba(245,244,240,0.6)] h-[35.488px] left-[31.99px] overflow-clip rounded-[10px] top-[96px] w-[1152.012px]" data-name="HeroVariantControl">
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function Text() {
  return (
    <div className="absolute h-[46.143px] left-0 top-[1.88px] w-[607.9px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.512px] left-0 not-italic text-[#2b2b2a] text-[17.008px] top-[-2px] tracking-[-0.1701px] w-[608px]">Trabajo con narrativa, tono y estructura para que un producto se sienta claro, humano y</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[51.035px] left-0 top-[122.59px] w-[607.998px]" data-name="Paragraph">
      <Text />
      <TextBackgroundImageAndText text="consistente" additionalClassNames="left-[81.91px] top-[27.39px] w-[93.252px]" />
      <TextBackgroundImageAndText1 text="en el tiempo." additionalClassNames="left-[175.17px] top-[27.39px] w-[105.869px]" />
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute bg-[rgba(207,168,154,0.12)] border-[0.625px] border-[rgba(207,168,154,0.2)] border-solid h-[25.742px] left-[77.9px] rounded-[4px] top-[16px] w-[116.133px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.512px] left-[10px] not-italic text-[#8b7366] text-[11.008px] text-nowrap top-[4.24px] tracking-[0.1101px]">{`Tono & microcopy`}</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[41.738px] left-0 top-[205.62px] w-[767.998px]" data-name="Container">
      <TextBackgroundImageAndText2 text="Narrativa" additionalClassNames="left-0 w-[69.902px]" />
      <Text1 />
      <TextBackgroundImageAndText2 text="Estructura editorial" additionalClassNames="left-[202.03px] w-[122.109px]" />
    </div>
  );
}

function Link() {
  return (
    <div className="absolute h-[22.51px] left-[221.18px] top-[37.99px] w-[198.652px]" data-name="Link">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.512px] left-0 not-italic text-[#2b2b2a] text-[15.008px] text-nowrap top-[-1.13px]">Cómo trabajo el lenguaje</p>
      <HomePageBackgroundImageAndText text="→" additionalClassNames="left-[184.33px]" />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[74.492px] left-0 top-[279.35px] w-[767.998px]" data-name="Container">
      <LinkBackgroundImageAndText text="Explorar mi trabajo" />
      <Link />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[353.838px] relative shrink-0 w-full" data-name="Container">
      <ParagraphBackgroundImageAndText text="Narrativa · Sentido · Ritmo" />
      <HeadingBackgroundImageAndText1 text="Diseño experiencias donde el sentido guía la forma." />
      <Paragraph />
      <Container1 />
      <Container2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[47.998px] h-[497.832px] items-start left-[31.99px] top-[763.48px] w-[767.998px]" data-name="Container">
      <HeadingBackgroundImageAndText text="Product Designer especializada en sistemas y procesos reales" />
      <Container3 />
    </div>
  );
}

function HomePage() {
  return <div className="absolute bg-[#2a2a2a] h-[504.004px] left-0 opacity-[0.44] top-0 w-[1152.012px]" data-name="HomePage" />;
}

function HomePage1() {
  return <div className="absolute h-[504.004px] left-0 opacity-20 top-0 w-[1152.012px]" data-name="HomePage" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1152 504\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -98.683 -98.683 0 230.4 151.2)\\'><stop stop-color=\\'rgba(212,168,156,0.3)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(106,84,78,0.15)\\' offset=\\'0.25\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'0.5\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1152 504\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -98.683 -98.683 0 921.61 352.8)\\'><stop stop-color=\\'rgba(184,149,106,0.25)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(92,75,53,0.125)\\' offset=\\'0.25\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'0.5\\'/></radialGradient></defs></svg>')" }} />;
}

function Container5() {
  return (
    <div className="absolute h-[504.004px] left-[31.99px] overflow-clip rounded-[10px] top-[195.48px] w-[1152.012px]" data-name="Container">
      <HomePageBackgroundImage />
      <HomePage />
      <HomePage1 />
    </div>
  );
}

function Editorial() {
  return (
    <div className="h-[1357.305px] relative shrink-0 w-[1215.996px]" data-name="Editorial">
      <HeroVariantControl />
      <Container4 />
      <Container5 />
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[31.504px] items-start left-[1.99px] pb-0 pt-[7.871px] px-[15.996px] rounded-[8px] top-[1.99px] w-[85.381px]" data-name="Button">
      <HeroVariantControlBackgroundImageAndText1 text="Narrativa" />
    </div>
  );
}

function Container6() {
  return <div className="absolute bg-[rgba(255,255,255,0.9)] border-[#e8e6e1] border-[0.625px] border-solid h-[31.504px] left-0 rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-0 w-[77.49px]" data-name="Container" />;
}

function Button4() {
  return (
    <div className="absolute h-[31.504px] left-[91.37px] rounded-[8px] top-[1.99px] w-[77.49px]" data-name="Button">
      <Container6 />
      <HeroVariantControlBackgroundImageAndText text="Usuario" additionalClassNames="w-[45.498px]" />
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute content-stretch flex flex-col h-[31.504px] items-start left-[172.85px] pb-0 pt-[7.871px] px-[15.996px] rounded-[8px] top-[1.99px] w-[85.244px]" data-name="Button">
      <HeroVariantControlBackgroundImageAndText1 text="Sistemas" />
    </div>
  );
}

function HeroVariantControl1() {
  return (
    <div className="absolute bg-[rgba(245,244,240,0.6)] h-[35.488px] left-[31.99px] overflow-clip rounded-[10px] top-[96px] w-[1152.012px]" data-name="HeroVariantControl">
      <Button3 />
      <Button4 />
      <Button5 />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[75.586px] left-0 top-[52.8px] w-[767.998px]" data-name="Heading 2">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[37.8px] left-0 not-italic text-[#2b2b2a] text-[28px] top-[-0.13px] tracking-[-0.42px] w-[635px]">Diseño para reducir carga cognitiva y acompañar decisiones reales.</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute h-[46.143px] left-0 top-[1.88px] w-[558.301px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.512px] left-0 not-italic text-[#2b2b2a] text-[17.008px] top-[-2px] tracking-[-0.1701px] w-[559px]">, feedback comprensible y experiencias que se sostienen en el día a día.</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[51.035px] left-0 top-[160.38px] w-[607.998px]" data-name="Paragraph">
      <TextBackgroundImageAndText1 text="Convierto problemas difusos en" additionalClassNames="left-0 top-[1.88px] w-[255.234px]" />
      <TextBackgroundImageAndText text="flujos claros" additionalClassNames="left-[255.23px] top-[1.88px] w-[95.625px]" />
      <Text2 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[41.738px] left-0 top-[243.41px] w-[767.998px]" data-name="Container">
      <TextBackgroundImageAndText2 text="UX Research" additionalClassNames="left-0 w-[89.102px]" />
      <TextBackgroundImageAndText2 text="Decision UX" additionalClassNames="left-[97.1px] w-[85.234px]" />
      <TextBackgroundImageAndText2 text="Flujos simples" additionalClassNames="left-[190.33px] w-[95.693px]" />
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute h-[22.51px] left-[221.18px] top-[37.99px] w-[150.947px]" data-name="Link">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.512px] left-0 not-italic text-[#2b2b2a] text-[15.008px] text-nowrap top-[-1.13px]">Ver decisiones UX</p>
      <HomePageBackgroundImageAndText text="→" additionalClassNames="left-[136.62px]" />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[74.492px] left-0 top-[317.14px] w-[767.998px]" data-name="Container">
      <LinkBackgroundImageAndText text="Explorar mi trabajo" />
      <Link1 />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[391.631px] relative shrink-0 w-full" data-name="Container">
      <ParagraphBackgroundImageAndText text="Usuario · Decisión · Fricción" />
      <Heading />
      <Paragraph1 />
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[51.998px] h-[535.625px] items-start left-[31.99px] pb-0 pt-[-4px] px-0 top-[763.48px] w-[767.998px]" data-name="Container">
      <HeadingBackgroundImageAndText text="Product Designer especializada en sistemas y procesos reales" additionalClassNames="opacity-[0.92]" />
      <Container9 />
    </div>
  );
}

function HomePage2() {
  return <div className="absolute bg-[#2a2a2a] h-[504.004px] left-0 opacity-[0.44] top-0 w-[1152.012px]" data-name="HomePage" />;
}

function HomePage3() {
  return <div className="absolute h-[504.004px] left-0 opacity-20 top-0 w-[1152.012px]" data-name="HomePage" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1152 504\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -98.683 -98.683 0 230.4 151.2)\\'><stop stop-color=\\'rgba(212,168,156,0.3)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(106,84,78,0.15)\\' offset=\\'0.25\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'0.5\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1152 504\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -98.683 -98.683 0 921.61 352.8)\\'><stop stop-color=\\'rgba(184,149,106,0.25)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(92,75,53,0.125)\\' offset=\\'0.25\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'0.5\\'/></radialGradient></defs></svg>')" }} />;
}

function Container11() {
  return (
    <div className="absolute h-[504.004px] left-[31.99px] overflow-clip rounded-[10px] top-[195.48px] w-[1152.012px]" data-name="Container">
      <HomePageBackgroundImage />
      <HomePage2 />
      <HomePage3 />
    </div>
  );
}

function Section() {
  return (
    <div className="h-[1395.098px] relative shrink-0 w-full" data-name="Section">
      <HeroVariantControl1 />
      <Container10 />
      <Container11 />
    </div>
  );
}

function HomePage4() {
  return (
    <HomePageBackgroundImage1>
      <Section />
    </HomePageBackgroundImage1>
  );
}

function HL() {
  return (
    <div className="absolute content-stretch flex flex-col h-[925px] items-start left-0 top-0 w-[1281.25px]" data-name="hL">
      <HomePage4 />
    </div>
  );
}

function Container12() {
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
      <Container12 />
    </div>
  );
}

function Hero() {
  return (
    <div className="bg-[#fafaf8] h-[1421px] relative shrink-0 w-[1281px]" data-name="Hero">
      <HL />
      <Navigation />
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute content-stretch flex flex-col h-[31.504px] items-start left-[1.99px] pb-0 pt-[7.871px] px-[15.996px] rounded-[8px] top-[1.99px] w-[85.381px]" data-name="Button">
      <HeroVariantControlBackgroundImageAndText1 text="Narrativa" />
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute content-stretch flex flex-col h-[31.504px] items-start left-[91.37px] pb-0 pt-[7.871px] px-[15.996px] rounded-[8px] top-[1.99px] w-[76.738px]" data-name="Button">
      <HeroVariantControlBackgroundImageAndText1 text="Usuario" />
    </div>
  );
}

function Container13() {
  return <div className="absolute bg-[rgba(255,255,255,0.9)] border-[#e8e6e1] border-[0.625px] border-solid h-[31.504px] left-0 rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-0 w-[86.24px]" data-name="Container" />;
}

function Button8() {
  return (
    <div className="absolute h-[31.504px] left-[172.1px] rounded-[8px] top-[1.99px] w-[86.24px]" data-name="Button">
      <Container13 />
      <HeroVariantControlBackgroundImageAndText text="Sistemas" additionalClassNames="w-[54.248px]" />
    </div>
  );
}

function HeroVariantControl2() {
  return (
    <div className="absolute bg-[rgba(245,244,240,0.6)] h-[35.488px] left-[31.99px] overflow-clip rounded-[10px] top-[96px] w-[1152.012px]" data-name="HeroVariantControl">
      <Button6 />
      <Button7 />
      <Button8 />
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute h-[46.143px] left-0 top-[1.88px] w-[598.691px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.512px] left-0 not-italic text-[#2b2b2a] text-[17.008px] top-[-2px] tracking-[-0.1701px] w-[599px]">claros para equipos que trabajan con procesos reales y repetibles.</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[51.035px] left-0 top-[122.59px] w-[607.998px]" data-name="Paragraph">
      <TextBackgroundImageAndText1 text="Ordeno complejidad operativa en" additionalClassNames="left-0 top-[1.88px] w-[265.918px]" />
      <TextBackgroundImageAndText text="patrones" additionalClassNames="left-[265.92px] top-[1.88px] w-[70.85px]" />
      <Text3 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute h-[41.738px] left-0 top-[205.62px] w-[767.998px]" data-name="Container">
      <TextBackgroundImageAndText2 text="UX Systems" additionalClassNames="left-0 w-[85.254px]" />
      <TextBackgroundImageAndText2 text="Product Strategy" additionalClassNames="left-[93.25px] w-[111.455px]" />
      <TextBackgroundImageAndText2 text="Escalabilidad" additionalClassNames="left-[212.71px] w-[90.723px]" />
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute h-[22.51px] left-[221.18px] top-[37.99px] w-[225.381px]" data-name="Link">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.512px] left-0 not-italic text-[#2b2b2a] text-[15.008px] text-nowrap top-[-1.13px]">Ver arquitectura de sistemas</p>
      <HomePageBackgroundImageAndText text="→" additionalClassNames="left-[211.05px]" />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute h-[74.492px] left-0 top-[279.35px] w-[767.998px]" data-name="Container">
      <LinkBackgroundImageAndText text="Explorar mi trabajo" />
      <Link2 />
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[353.838px] relative shrink-0 w-full" data-name="Container">
      <ParagraphBackgroundImageAndText text="Sistemas · Escalabilidad · Claridad" />
      <HeadingBackgroundImageAndText1 text="Diseño sistemas que se sostienen en contextos reales." />
      <Paragraph2 />
      <Container14 />
      <Container15 />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[51.998px] h-[497.832px] items-start left-[31.99px] pb-0 pt-[-4px] px-0 top-[763.48px] w-[767.998px]" data-name="Container">
      <HeadingBackgroundImageAndText text="Product Designer especializada en sistemas y procesos reales" additionalClassNames="opacity-[0.92]" />
      <Container16 />
    </div>
  );
}

function HomePage5() {
  return <div className="absolute bg-[#2a2a2a] h-[504.004px] left-0 opacity-[0.44] top-0 w-[1152.012px]" data-name="HomePage" />;
}

function HomePage6() {
  return <div className="absolute h-[504.004px] left-0 opacity-20 top-0 w-[1152.012px]" data-name="HomePage" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1152 504\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -98.683 -98.683 0 230.4 151.2)\\'><stop stop-color=\\'rgba(212,168,156,0.3)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(106,84,78,0.15)\\' offset=\\'0.25\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'0.5\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1152 504\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -98.683 -98.683 0 921.61 352.8)\\'><stop stop-color=\\'rgba(184,149,106,0.25)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(92,75,53,0.125)\\' offset=\\'0.25\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'0.5\\'/></radialGradient></defs></svg>')" }} />;
}

function Container18() {
  return (
    <div className="absolute h-[504.004px] left-[31.99px] overflow-clip rounded-[10px] top-[195.48px] w-[1152.012px]" data-name="Container">
      <HomePageBackgroundImage />
      <HomePage5 />
      <HomePage6 />
    </div>
  );
}

function Section1() {
  return (
    <div className="h-[1357.305px] relative shrink-0 w-full" data-name="Section">
      <HeroVariantControl2 />
      <Container17 />
      <Container18 />
    </div>
  );
}

function HomePage7() {
  return (
    <HomePageBackgroundImage1>
      <Section1 />
    </HomePageBackgroundImage1>
  );
}

function HL1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[925px] items-start left-0 top-0 w-[1281.25px]" data-name="hL">
      <HomePage7 />
    </div>
  );
}

function Container19() {
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
      <Container19 />
    </div>
  );
}

function Recruiter() {
  return (
    <div className="bg-[#fafaf8] h-[1421px] relative shrink-0 w-[1281px]" data-name="Recruiter">
      <HL1 />
      <Navigation1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start justify-center left-[33px] top-[64px]">
      <Editorial />
      <Hero />
      <Recruiter />
    </div>
  );
}

function Container20() {
  return <div className="absolute bg-gradient-to-r blur-[1.5px] filter from-[rgba(212,168,156,0.55)] h-[10px] left-0 rounded-[2.09715e+07px] to-[rgba(0,0,0,0)] top-[27.51px] via-50% via-[rgba(184,149,106,0.35)] w-[80px]" data-name="Container" />;
}

function HomePage8() {
  return (
    <div className="absolute h-[37.51px] left-0 top-[3.13px] w-[216.904px]" data-name="HomePage">
      <LabelBackgroundImageAndText text="Proyectos Seleccionados" additionalClassNames="w-[216.904px]" />
      <Container20 />
    </div>
  );
}

function HomePage9() {
  return (
    <div className="absolute h-[36.006px] left-0 top-[64.63px] w-[671.992px]" data-name="HomePage">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[36px] left-0 not-italic text-[#2a2a2a] text-[24px] text-nowrap top-[-0.88px] tracking-[-0.6px]">Tres proyectos. Tres capas del diseño de producto.</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute content-stretch flex h-[19.375px] items-start left-[448.15px] top-[3.13px] w-[70.107px]" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[26px] not-italic relative shrink-0 text-[#d4a89c] text-[16px] text-nowrap tracking-[-0.16px]">conectan</p>
    </div>
  );
}

function HomePage10() {
  return (
    <div className="absolute h-[25.986px] left-0 top-[124.63px] w-[575.996px]" data-name="HomePage">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#4a4a4a] text-[16px] text-nowrap top-[-0.88px] tracking-[-0.16px]">Sistemas que escalan. Decisiones que guían. Narrativas que</p>
      <Text4 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-[518.26px] not-italic text-[#4a4a4a] text-[16px] text-nowrap top-[-0.88px] tracking-[-0.16px]">.</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[150.615px] relative shrink-0 w-full" data-name="Container">
      <HomePage8 />
      <HomePage9 />
      <HomePage10 />
    </div>
  );
}

function ImageNoduxSistemaDeGestionOperativa() {
  return (
    <div className="h-[461px] relative shrink-0 w-full" data-name="Image (NODUX — Sistema de Gestión Operativa)">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[108.78%] left-[-1.54%] max-w-none top-[-4.4%] w-[105.93%]" src={imgImageNoduxSistemaDeGestionOperativa} />
      </div>
    </div>
  );
}

function ProjectCard() {
  return (
    <div className="bg-[#f5f4f0] content-stretch flex flex-col h-[460.801px] items-start overflow-clip relative rounded-[4px] shrink-0 w-full" data-name="ProjectCard">
      <ImageNoduxSistemaDeGestionOperativa />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex gap-[11.992px] h-[17.998px] items-center left-0 top-0 w-[850.02px]" data-name="Container">
      <TextBackgroundImageAndText3 text="Sistemas · Procesos · Decisión operativa" additionalClassNames="w-[293.799px]" />
      <TextBackgroundImageAndText4 text="·" />
      <TextBackgroundImageAndText5 text="Sistemas" additionalClassNames="w-[64.6px]" />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[131.934px] left-0 top-[111.13px] w-[575.996px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26.4px] left-0 not-italic text-[#4a4a4a] text-[16px] top-[-0.88px] tracking-[-0.16px] w-[576px]">NODUX es un sistema digital de gestión operativa diseñado para equipos que trabajan con pedidos, pagos, proveedores y control de información en el día a día. El proyecto aborda problemas reales de desorden, errores manuales y sobrecarga cognitiva, transformando procesos dispersos en flujos claros, estados comprensibles y acciones concretas.</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[73.64px] size-[15.996px] top-[11.99px]" data-name="Text">
      <IconBackgroundImage />
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute h-[31.992px] left-0 top-[259.06px] w-[89.639px]" data-name="Link">
      <TextBackgroundImageAndText6 text="Ver caso" additionalClassNames="left-0 top-[8px] w-[65.645px]" />
      <Text5 />
    </div>
  );
}

function Container23() {
  return (
    <BackgroundImage1>
      <Container22 />
      <HeadingBackgroundImageAndText2 text="NODUX — Sistema de Gestión Operativa" />
      <ParagraphBackgroundImageAndText1 text="Sistemas · Procesos · Decisión operativa" />
      <Paragraph3 />
      <Link3 />
    </BackgroundImage1>
  );
}

function Container24() {
  return (
    <BackgroundImage>
      <TextBackgroundImageAndText7 text="B2B SaaS" additionalClassNames="left-0 top-0 w-[88.262px]" />
      <TextBackgroundImageAndText7 text="UX Systems" additionalClassNames="left-[96.26px] top-0 w-[103.994px]" />
      <TextBackgroundImageAndText7 text="Flujos" additionalClassNames="left-0 top-[41px] w-[62.646px]" />
    </BackgroundImage>
  );
}

function ProjectCard1() {
  return (
    <div className="content-stretch flex h-[291.055px] items-start justify-between relative shrink-0 w-full" data-name="ProjectCard">
      <Container23 />
      <Container24 />
    </div>
  );
}

function ProjectCard2() {
  return <div className="blur-[1.5px] filter h-[10px] shrink-0 w-full" data-name="ProjectCard" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(212, 168, 156, 0.2) 33.333%, rgba(184, 149, 106, 0.12) 66.667%, rgba(0, 0, 0, 0) 100%)" }} />;
}

function Article() {
  return (
    <div className="content-stretch flex flex-col gap-[31.992px] h-[815.84px] items-start relative shrink-0 w-full" data-name="Article">
      <ProjectCard />
      <ProjectCard1 />
      <ProjectCard2 />
    </div>
  );
}

function ImageHoycomoAplicacionDeDecisionesAlimentarias() {
  return (
    <div className="h-[460.801px] relative shrink-0 w-full" data-name="Image (HOYCOMO — Aplicación de decisiones alimentarias)">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[102.8%] left-[-1.07%] max-w-none top-[-1.52%] w-[102.18%]" src={imgImageHoycomoAplicacionDeDecisionesAlimentarias} />
      </div>
    </div>
  );
}

function ProjectCard3() {
  return (
    <div className="bg-[#f5f4f0] content-stretch flex flex-col h-[460.801px] items-start overflow-clip relative rounded-[4px] shrink-0 w-full" data-name="ProjectCard">
      <ImageHoycomoAplicacionDeDecisionesAlimentarias />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex gap-[11.992px] h-[17.998px] items-center left-0 top-0 w-[850.02px]" data-name="Container">
      <TextBackgroundImageAndText3 text="Usuario · Decisión · UX emocional" additionalClassNames="w-[242.041px]" />
      <TextBackgroundImageAndText4 text="·" />
      <TextBackgroundImageAndText5 text="Decisión" additionalClassNames="w-[61.494px]" />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[131.934px] left-0 top-[111.13px] w-[575.996px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26.4px] left-0 not-italic text-[#4a4a4a] text-[16px] top-[-0.88px] tracking-[-0.16px] w-[557px]">{`HoyComo es una aplicación mobile enfocada en facilitar decisiones cotidianas de alimentación saludable, adaptadas al ritmo y contexto real de las personas. El proyecto combina UX Research y diseño de producto para reducir fricción mental, acompañar hábitos y transformar la pregunta '¿qué como hoy?' en una experiencia simple, cercana y accionable.`}</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[73.64px] size-[15.996px] top-[11.99px]" data-name="Text">
      <IconBackgroundImage />
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute h-[31.992px] left-0 top-[259.06px] w-[89.639px]" data-name="Link">
      <TextBackgroundImageAndText6 text="Ver caso" additionalClassNames="left-0 top-[8px] w-[65.645px]" />
      <Text6 />
    </div>
  );
}

function Container26() {
  return (
    <BackgroundImage1>
      <Container25 />
      <HeadingBackgroundImageAndText2 text="HOYCOMO — Aplicación de decisiones alimentarias" />
      <ParagraphBackgroundImageAndText1 text="Usuario · Decisión · UX emocional" />
      <Paragraph4 />
      <Link4 />
    </BackgroundImage1>
  );
}

function Container27() {
  return (
    <BackgroundImage>
      <TextBackgroundImageAndText7 text="Mobile Design" additionalClassNames="left-0 top-0 w-[117.793px]" />
      <TextBackgroundImageAndText7 text="UX Research" additionalClassNames="left-[125.79px] top-0 w-[108.74px]" />
      <TextBackgroundImageAndText7 text="B2C" additionalClassNames="left-0 top-[41px] w-[51.748px]" />
    </BackgroundImage>
  );
}

function ProjectCard4() {
  return (
    <div className="content-stretch flex h-[291.055px] items-start justify-between relative shrink-0 w-full" data-name="ProjectCard">
      <Container26 />
      <Container27 />
    </div>
  );
}

function ProjectCard5() {
  return <div className="blur-[1.5px] filter h-[10px] shrink-0 w-full" data-name="ProjectCard" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(212, 168, 156, 0.2) 33.333%, rgba(184, 149, 106, 0.12) 66.667%, rgba(0, 0, 0, 0) 100%)" }} />;
}

function Article1() {
  return (
    <div className="content-stretch flex flex-col gap-[31.992px] h-[815.84px] items-start relative shrink-0 w-full" data-name="Article">
      <ProjectCard3 />
      <ProjectCard4 />
      <ProjectCard5 />
    </div>
  );
}

function ImagePulsoProductoEditorialDeJournaling() {
  return (
    <div className="h-[460.801px] relative shrink-0 w-full" data-name="Image (PULSO — Producto editorial de journaling)">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[103.18%] left-[-1.18%] max-w-none top-[-1.59%] w-[102.43%]" src={imgImagePulsoProductoEditorialDeJournaling} />
      </div>
    </div>
  );
}

function ProjectCard6() {
  return (
    <div className="bg-[#f5f4f0] content-stretch flex flex-col h-[460.801px] items-start overflow-clip relative rounded-[4px] shrink-0 w-full" data-name="ProjectCard">
      <ImagePulsoProductoEditorialDeJournaling />
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex gap-[11.992px] h-[17.998px] items-center left-0 top-0 w-[850.02px]" data-name="Container">
      <TextBackgroundImageAndText3 text="Narrativa · Ritmo · Sentido" additionalClassNames="w-[193.105px]" />
      <TextBackgroundImageAndText4 text="·" />
      <TextBackgroundImageAndText5 text="Sentido" additionalClassNames="w-[56.709px]" />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[131.934px] left-0 top-[111.13px] w-[575.996px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26.4px] left-0 not-italic text-[#4a4a4a] text-[16px] top-[-0.88px] tracking-[-0.16px] w-[573px]">Pulso es un proyecto de producto editorial enfocado en journaling y autoconocimiento, que convierte la introspección en una experiencia tangible y sostenida en el tiempo. El diseño integra sistema visual, narrativa y estructura de uso para acompañar procesos emocionales reales, priorizando claridad, ritmo y coherencia.</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[73.64px] size-[15.996px] top-[11.99px]" data-name="Text">
      <IconBackgroundImage />
    </div>
  );
}

function Link5() {
  return (
    <div className="absolute h-[31.992px] left-0 top-[259.06px] w-[89.639px]" data-name="Link">
      <TextBackgroundImageAndText6 text="Ver caso" additionalClassNames="left-0 top-[8px] w-[65.645px]" />
      <Text7 />
    </div>
  );
}

function Container29() {
  return (
    <BackgroundImage1>
      <Container28 />
      <HeadingBackgroundImageAndText2 text="PULSO — Producto editorial de journaling" />
      <ParagraphBackgroundImageAndText1 text="Narrativa · Ritmo · Sentido" />
      <Paragraph5 />
      <Link5 />
    </BackgroundImage1>
  );
}

function Container30() {
  return (
    <BackgroundImage>
      <TextBackgroundImageAndText7 text="Wellbeing" additionalClassNames="left-0 top-0 w-[88.242px]" />
      <TextBackgroundImageAndText7 text="Minimal Design" additionalClassNames="left-[96.24px] top-0 w-[124.18px]" />
      <TextBackgroundImageAndText7 text="Writing" additionalClassNames="left-0 top-[41px] w-[70.459px]" />
    </BackgroundImage>
  );
}

function ProjectCard7() {
  return (
    <div className="content-stretch flex h-[291.055px] items-start justify-between relative shrink-0 w-full" data-name="ProjectCard">
      <Container29 />
      <Container30 />
    </div>
  );
}

function ProjectCard8() {
  return <div className="blur-[1.5px] filter h-[10px] shrink-0 w-full" data-name="ProjectCard" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(212, 168, 156, 0.2) 33.333%, rgba(184, 149, 106, 0.12) 66.667%, rgba(0, 0, 0, 0) 100%)" }} />;
}

function Article2() {
  return (
    <div className="content-stretch flex flex-col gap-[31.992px] h-[815.84px] items-start relative shrink-0 w-full" data-name="Article">
      <ProjectCard6 />
      <ProjectCard7 />
      <ProjectCard8 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] h-[2607.52px] items-start relative shrink-0 w-full" data-name="Container">
      <Article />
      <Article1 />
      <Article2 />
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[95.996px] h-[2854.131px] items-start left-[31.99px] top-[96px] w-[1152.012px]" data-name="Container">
      <Container21 />
      <Container31 />
    </div>
  );
}

function Container33() {
  return <div className="absolute blur-[2px] filter h-[11.992px] left-0 top-0 w-[1215.996px]" data-name="Container" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(212, 168, 156, 0.25) 33.333%, rgba(184, 149, 106, 0.15) 66.667%, rgba(0, 0, 0, 0) 100%)" }} />;
}

function Section2() {
  return (
    <div className="absolute h-[3046.123px] left-[33px] top-[4294px] w-[1215.996px]" data-name="Section">
      <Container32 />
      <Container33 />
    </div>
  );
}

function Container34() {
  return <div className="absolute bg-gradient-to-r blur-[1.5px] filter from-[rgba(212,168,156,0.55)] h-[10px] left-0 rounded-[2.09715e+07px] to-[rgba(0,0,0,0)] top-[27.51px] via-50% via-[rgba(184,149,106,0.35)] w-[63.994px]" data-name="Container" />;
}

function HomePage11() {
  return (
    <div className="absolute h-[37.51px] left-0 top-[3.13px] w-[221.855px]" data-name="HomePage">
      <LabelBackgroundImageAndText text="Por qué trabajar conmigo" additionalClassNames="w-[221.855px]" />
      <Container34 />
    </div>
  );
}

function ValueCard() {
  return <div className="absolute bg-[#d4a89c] h-[0.996px] left-0 opacity-30 top-0 w-[31.992px]" data-name="ValueCard" />;
}

function ValueCard1() {
  return (
    <div className="absolute h-[79.16px] left-0 top-[56.98px] w-[352.002px]" data-name="ValueCard">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26.4px] left-0 not-italic text-[#4a4a4a] text-[16px] top-[-0.88px] tracking-[-0.16px] w-[345px]">Diseño soluciones que escalan y se adaptan al crecimiento del producto o la marca sin perder coherencia.</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute h-[136.143px] left-0 top-0 w-[352.002px]" data-name="Container">
      <ValueCard />
      <ValueCardBackgroundImageAndText text="Pensamiento sistémico" />
      <ValueCard1 />
    </div>
  );
}

function ValueCard2() {
  return <div className="absolute bg-[#d4a89c] h-[0.996px] left-0 opacity-30 top-0 w-[31.992px]" data-name="ValueCard" />;
}

function ValueCard3() {
  return (
    <div className="absolute h-[79.16px] left-0 top-[56.98px] w-[352.002px]" data-name="ValueCard">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26.4px] left-0 not-italic text-[#4a4a4a] text-[16px] top-[-0.88px] tracking-[-0.16px] w-[349px]">Priorizo la usabilidad en contextos reales sobre estéticas que no resuelven problemas concretos.</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute h-[136.143px] left-[400px] top-0 w-[352.002px]" data-name="Container">
      <ValueCard2 />
      <ValueCardBackgroundImageAndText text="Enfoque en lo real" />
      <ValueCard3 />
    </div>
  );
}

function ValueCard4() {
  return <div className="absolute bg-[#d4a89c] h-[0.996px] left-0 opacity-30 top-0 w-[31.992px]" data-name="ValueCard" />;
}

function ValueCard5() {
  return (
    <div className="absolute h-[79.16px] left-0 top-[56.98px] w-[352.002px]" data-name="ValueCard">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26.4px] left-0 not-italic text-[#4a4a4a] text-[16px] top-[-0.88px] tracking-[-0.16px] w-[306px]">Comunico decisiones con criterio claro y trabajo con autonomía dentro de equipos multidisciplinarios.</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute h-[136.143px] left-[800px] top-0 w-[352.002px]" data-name="Container">
      <ValueCard4 />
      <ValueCardBackgroundImageAndText text="Claridad y autonomía" />
      <ValueCard5 />
    </div>
  );
}

function HomePage12() {
  return (
    <div className="absolute h-[136.143px] left-0 top-[88.63px] w-[1152.012px]" data-name="HomePage">
      <Container35 />
      <Container36 />
      <Container37 />
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[224.775px] relative shrink-0 w-full" data-name="Container">
      <HomePage11 />
      <HomePage12 />
    </div>
  );
}

function Section3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[417.393px] items-start left-[33px] pb-0 pt-[96.621px] px-[31.992px] top-[7340.12px] w-[1215.996px]" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[0.625px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container38 />
    </div>
  );
}

function Container39() {
  return <div className="absolute bg-gradient-to-r blur-[1.5px] filter from-[rgba(212,168,156,0.55)] h-[10px] left-0 rounded-[2.09715e+07px] to-[rgba(0,0,0,0)] top-[27.51px] via-50% via-[rgba(184,149,106,0.35)] w-[80px]" data-name="Container" />;
}

function HomePage13() {
  return (
    <div className="absolute h-[37.51px] left-0 top-[3.13px] w-[117.891px]" data-name="HomePage">
      <LabelBackgroundImageAndText text="Cómo trabajo" additionalClassNames="w-[117.891px]" />
      <Container39 />
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute content-stretch flex h-[38.75px] items-start left-[298.91px] top-[0.63px] w-[159.609px]" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[40px] not-italic relative shrink-0 text-[#d4a89c] text-[32px] text-nowrap tracking-[-0.48px]">decisiones</p>
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[80px] left-0 top-0 w-[1023.994px]" data-name="Heading 2">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[40px] left-0 not-italic text-[#2a2a2a] text-[32px] text-nowrap top-[-0.38px] tracking-[-0.48px]">Diseño para que las</p>
      <Text8 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[40px] left-[0.38px] not-italic text-[#2a2a2a] text-[32px] top-[40.93px] tracking-[-0.48px] w-[920px]">difíciles se vuelvan claras y los procesos complejos funcionen en el día a día.</p>
    </div>
  );
}

function HomePage14() {
  return (
    <div className="h-[767.988px] opacity-60 relative shrink-0 w-full" data-name="HomePage">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHomePage1} />
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute bg-[#f5f4f0] content-stretch flex flex-col h-[767.988px] items-start left-0 overflow-clip rounded-[4px] top-[143.99px] w-[1023.994px]" data-name="Container">
      <HomePage14 />
    </div>
  );
}

function HomePage15() {
  return (
    <div className="absolute h-[911.982px] left-0 top-[88.63px] w-[1023.994px]" data-name="HomePage">
      <Heading1 />
      <Container40 />
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[1000.615px] relative shrink-0 w-full" data-name="Container">
      <HomePage13 />
      <HomePage15 />
    </div>
  );
}

function Section4() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1193.232px] items-start left-[33px] pb-0 pl-[95.996px] pr-[96.006px] pt-[96.621px] top-[7757.52px] w-[1215.996px]" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[0.625px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container41 />
    </div>
  );
}

function HomePage16() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.998px] h-[65.576px] items-start left-0 top-0 w-[767.998px]" data-name="HomePage">
      <ParagraphBackgroundImageAndText2 text="Diseño con criterio." />
      <ParagraphBackgroundImageAndText2 text="Sistemas, decisiones y sentido." />
    </div>
  );
}

function HomePage17() {
  return (
    <div className="absolute h-[23.994px] left-0 top-[97.57px] w-[183.887px]" data-name="HomePage">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#2a2a2a] text-[16px] text-nowrap top-[-1.13px]">Conectar en LinkedIn</p>
      <TextBackgroundImageAndText6 text="→" additionalClassNames="left-[168.61px] top-0 w-[15.273px]" />
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[121.563px] relative shrink-0 w-full" data-name="Container">
      <HomePage16 />
      <HomePage17 />
    </div>
  );
}

function Section5() {
  return (
    <div className="absolute content-stretch flex flex-col h-[314.18px] items-start left-[32.63px] pb-0 pl-[31.992px] pr-[416.006px] pt-[96.621px] top-[6078.05px] w-[1215.996px]" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[0.625px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container42 />
    </div>
  );
}

function HomePage18() {
  return (
    <div className="h-[9087px] relative shrink-0 w-full" data-name="HomePage">
      <Frame />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute font-['Inter:Medium',sans-serif] font-medium h-[97.188px] leading-[48.6px] left-[48px] not-italic text-[#f5f5f5] text-[36px] text-center text-nowrap top-0 tracking-[-0.9px] w-[671.992px]" data-name="Heading 2">
      <p className="absolute left-[335.82px] top-[-0.13px] translate-x-[-50%]">Diseño sistemas con intención.</p>
      <p className="absolute left-[335.64px] top-[48.47px] translate-x-[-50%]">Hablemos.</p>
    </div>
  );
}

function Link6() {
  return (
    <div className="absolute content-stretch flex h-[38.75px] items-start left-[204.72px] top-[157.56px] w-[358.555px]" data-name="Link">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[48px] not-italic relative shrink-0 text-[32px] text-center text-nowrap text-white tracking-[-0.8px]">paolazerpak@gmail.com</p>
    </div>
  );
}

function Text9() {
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

function Text10() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[202.48px] size-[20px] top-[17.99px]" data-name="Text">
      <Icon />
    </div>
  );
}

function Link7() {
  return (
    <div className="absolute bg-[#d4a89c] h-[55.986px] left-[252.75px] rounded-[2.09715e+07px] top-[281.17px] w-[262.48px]" data-name="Link">
      <Text9 />
      <Text10 />
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[337.158px] relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Link6 />
      <Link7 />
    </div>
  );
}

function Footer() {
  return (
    <div className="h-[843px] relative shrink-0 w-full" data-name="Footer" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 1281.3 843\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(0 -67.44 -153.75 0 640.62 168.6)\\\'><stop stop-color=\\\'rgba(26,26,26,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(13,13,13,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-0 pl-[256.621px] pr-[256.631px] pt-[127.998px] relative size-full">
          <Container43 />
        </div>
      </div>
    </div>
  );
}

function HL2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[80px] h-[925px] items-start left-0 top-0 w-[1281.25px]" data-name="hL">
      <HomePage18 />
      <Footer />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex h-[63.994px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <LinkBackgroundImageAndText1 text="Paola Zerpa" />
      <ContainerBackgroundImage />
    </div>
  );
}

function Navigation2() {
  return (
    <div className="absolute bg-[rgba(250,250,248,0.8)] content-stretch flex flex-col h-[64.619px] items-start left-0 pb-[0.625px] pt-0 px-[64.619px] top-0 w-[1281.25px]" data-name="Navigation">
      <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[0px_0px_0.625px] border-solid inset-0 pointer-events-none" />
      <Container44 />
    </div>
  );
}

export default function HomeEditorialBase() {
  return (
    <div className="bg-[#fafaf8] relative size-full" data-name="HOME — Editorial base">
      <HL2 />
      <Navigation2 />
    </div>
  );
}