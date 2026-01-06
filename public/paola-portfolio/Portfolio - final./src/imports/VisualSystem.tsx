import clsx from "clsx";
type Button1Props = {
  additionalClassNames?: string;
};

function Button1({ children, additionalClassNames = "" }: React.PropsWithChildren<Button1Props>) {
  return (
    <div className={clsx("h-[27.461px] relative shrink-0", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[#2a2a2a] border-[0px_0px_1.875px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[20px] relative shrink-0 w-full">
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#6b6b6b] text-[14px] text-nowrap top-[-0.13px]">{children}</p>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("h-[27.461px] relative shrink-0", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[0px_0px_1.875px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type ContainerText5Props = {
  text: string;
};

function ContainerText5({ text }: ContainerText5Props) {
  return (
    <div className="h-[20px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#8a8a8a] text-[14px] text-nowrap top-[0.25px] tracking-[-0.1504px]">{text}</p>
    </div>
  );
}
type ButtonText3Props = {
  text: string;
};

function ButtonText3({ text }: ButtonText3Props) {
  return (
    <Wrapper additionalClassNames="w-[125.156px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-[63.5px] not-italic text-[#6b6b6b] text-[16px] text-center text-nowrap top-[-0.88px] tracking-[-0.3125px] translate-x-[-50%]">{text}</p>
    </Wrapper>
  );
}
type ParagraphText2Props = {
  text: string;
};

function ParagraphText2({ text }: ParagraphText2Props) {
  return (
    <div className="h-[25.586px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[0.625px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-0 not-italic text-[#4a4a4a] text-[16px] text-nowrap top-[-0.88px] tracking-[-0.3125px]">{text}</p>
    </div>
  );
}
type ContainerText4Props = {
  text: string;
};

function ContainerText4({ text }: ContainerText4Props) {
  return (
    <div className="h-[25.586px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-0 not-italic text-[#b8956a] text-[16px] text-nowrap top-[-0.88px] tracking-[-0.3125px]">{text}</p>
    </div>
  );
}
type ContainerText3Props = {
  text: string;
};

function ContainerText3({ text }: ContainerText3Props) {
  return (
    <div className="h-[22.754px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#8a8a8a] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px]">{text}</p>
    </div>
  );
}
type Text2Props = {
  text: string;
};

function Text2({ text }: Text2Props) {
  return <Wrapper1>{text}</Wrapper1>;
}
type ContainerText2Props = {
  text: string;
};

function ContainerText2({ text }: ContainerText2Props) {
  return (
    <div className="h-[25.586px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-0 not-italic text-[#2a2a2a] text-[16px] text-nowrap top-[-0.88px] tracking-[-0.3125px]">{text}</p>
    </div>
  );
}
type ButtonText2Props = {
  text: string;
};

function ButtonText2({ text }: ButtonText2Props) {
  return (
    <Wrapper additionalClassNames="w-[92.773px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-[46px] not-italic text-[#6b6b6b] text-[16px] text-center text-nowrap top-[-0.88px] tracking-[-0.3125px] translate-x-[-50%]">{text}</p>
    </Wrapper>
  );
}

function Button() {
  return (
    <Wrapper additionalClassNames="w-[98.721px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-[49.5px] not-italic text-[#6b6b6b] text-[16px] text-center text-nowrap top-[-0.88px] tracking-[-0.3125px] translate-x-[-50%]">{`Layout & Grid`}</p>
    </Wrapper>
  );
}
type ButtonText1Props = {
  text: string;
};

function ButtonText1({ text }: ButtonText1Props) {
  return (
    <Wrapper additionalClassNames="w-[86.133px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-[43px] not-italic text-[#6b6b6b] text-[16px] text-center text-nowrap top-[-0.88px] tracking-[-0.3125px] translate-x-[-50%]">{text}</p>
    </Wrapper>
  );
}
type ButtonTextProps = {
  text: string;
};

function ButtonText({ text }: ButtonTextProps) {
  return (
    <Wrapper additionalClassNames="w-[96.953px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-[48px] not-italic text-[#6b6b6b] text-[16px] text-center text-nowrap top-[-0.88px] tracking-[-0.3125px] translate-x-[-50%]">{text}</p>
    </Wrapper>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col h-[80.781px] items-start left-0 top-0 w-[292.061px]">
      <HeadingText2 text="Visual System" />
      <ParagraphText text="Paola Zerpa · Product Designer Portfolio" />
    </div>
  );
}
type HeadingText2Props = {
  text: string;
};

function HeadingText2({ text }: HeadingText2Props) {
  return (
    <div className="h-[55.195px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[55.2px] left-0 not-italic text-[#2a2a2a] text-[48px] text-nowrap top-[0.38px] tracking-[-0.6084px]">{text}</p>
    </div>
  );
}
type ContainerText1Props = {
  text: string;
};

function ContainerText1({ text }: ContainerText1Props) {
  return (
    <div className="h-[15.996px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#b8956a] text-[12px] text-nowrap top-[0.63px] tracking-[0.6px] uppercase">{text}</p>
    </div>
  );
}
type ParagraphText1Props = {
  text: string;
};

function ParagraphText1({ text }: ParagraphText1Props) {
  return (
    <div className="h-[25.586px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Italic',sans-serif] font-normal italic leading-[25.6px] left-0 text-[#4a4a4a] text-[16px] text-nowrap top-[-0.88px] tracking-[-0.3125px]">{text}</p>
    </div>
  );
}
type ParagraphTextProps = {
  text: string;
};

function ParagraphText({ text }: ParagraphTextProps) {
  return (
    <div className="h-[25.586px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-0 not-italic text-[#4a4a4a] text-[16px] text-nowrap top-[-0.88px] tracking-[-0.3125px]">{text}</p>
    </div>
  );
}
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return (
    <div className="h-[32.402px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32.4px] left-0 not-italic text-[#2a2a2a] text-[24px] text-nowrap top-[-0.13px] tracking-[-0.1697px]">{text}</p>
    </div>
  );
}
type HeadingText1Props = {
  text: string;
  additionalClassNames?: string;
};

function HeadingText1({ text, additionalClassNames = "" }: HeadingText1Props) {
  return (
    <div className={clsx("absolute h-[32.402px]", additionalClassNames)}>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32.4px] left-0 not-italic text-[#2a2a2a] text-[24px] text-nowrap top-[-0.13px] tracking-[-0.1697px]">{text}</p>
    </div>
  );
}
type ContainerTextProps = {
  text: string;
};

function ContainerText({ text }: ContainerTextProps) {
  return (
    <div className="absolute h-[27.988px] left-0 top-0 w-[62.666px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#b8956a] text-[18px] text-nowrap top-[0.13px] tracking-[-0.4395px]">{text}</p>
    </div>
  );
}
type TextTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TextText({ text, additionalClassNames = "" }: TextTextProps) {
  return (
    <div className={clsx("absolute content-stretch flex h-[18.75px] items-start top-[3.13px]", additionalClassNames)}>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] not-italic relative shrink-0 text-[#b8956a] text-[16px] text-nowrap tracking-[-0.3125px]">{text}</p>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="absolute h-[44.99px] left-0 top-0 w-[393.418px]">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[45px] left-0 not-italic text-[#2a2a2a] text-[36px] text-nowrap top-[-0.38px] tracking-[-0.1709px]">{text}</p>
    </div>
  );
}
type HeadingTextProps = {
  text: string;
};

function HeadingText({ text }: HeadingTextProps) {
  return (
    <div className="h-[44.99px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[45px] left-0 not-italic text-[#2a2a2a] text-[36px] text-nowrap top-[-0.38px] tracking-[-0.1709px]">{text}</p>
    </div>
  );
}

export default function VisualSystem() {
  return (
    <div className="relative size-full" data-name="Visual System">
      <div className="absolute bg-[#fafaf8] h-[925px] left-0 top-0 w-[1295px]" data-name="Visual System for Portfolio">
        <div className="absolute bg-[#fafaf8] h-[925px] left-0 top-0 w-[1295px]" data-name="App">
          <div className="absolute h-[470.986px] left-0 top-[108.87px] w-[1280px]" data-name="DesignPrinciples">
            <div className="absolute content-stretch flex flex-col h-[121.748px] items-start left-0 top-0 w-[640px]" data-name="Container">
              <HeadingText text="Principios de Diseño" />
              <div className="h-[76.758px] relative shrink-0 w-full" data-name="Paragraph">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-0 not-italic text-[#4a4a4a] text-[16px] text-nowrap top-[-0.88px] tracking-[-0.3125px]">Este sistema visual representa</p>
                <TextText text="claridad, criterio, profundidad y madurez profesional" additionalClassNames="left-[223.66px] w-[378.662px]" />
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-0 not-italic text-[#4a4a4a] text-[16px] top-[-0.88px] tracking-[-0.3125px] w-[607px]">. Cada decisión está guiada por principios que priorizan la función sobre la forma, la claridad sobre el impacto, y la sostenibilidad sobre las tendencias.</p>
              </div>
            </div>
            <div className="absolute content-stretch flex flex-col h-[255.859px] items-start left-0 top-[121.75px] w-[1280px]" data-name="Container">
              <div className="h-[51.172px] relative shrink-0 w-full" data-name="Container">
                <ContainerText text="01" />
                <HeadingText1 text="Claridad antes que impacto" additionalClassNames="left-[110.66px] top-0 w-[394.668px]" />
                <div className="absolute content-stretch flex flex-col h-[51.172px] items-start left-[553.33px] top-0 w-[726.67px]" data-name="Container">
                  <ParagraphText text="La comunicación directa y comprensible es prioritaria sobre efectos visuales llamativos." />
                  <ParagraphText1 text="Jerarquías claras, espacio generoso, contraste bien definido" />
                </div>
              </div>
              <div className="h-[51.172px] relative shrink-0 w-full" data-name="Container">
                <ContainerText text="02" />
                <HeadingText1 text="Menos elementos, más intención" additionalClassNames="left-[110.66px] top-0 w-[394.668px]" />
                <div className="absolute content-stretch flex flex-col h-[51.172px] items-start left-[553.33px] top-0 w-[726.67px]" data-name="Container">
                  <ParagraphText text="Cada elemento visual tiene un propósito específico. No hay ornamento sin función." />
                  <ParagraphText1 text="Componentes simples, paleta reducida, tipografía limitada" />
                </div>
              </div>
              <div className="h-[51.172px] relative shrink-0 w-full" data-name="Container">
                <ContainerText text="03" />
                <HeadingText1 text="La estética acompaña al contenido" additionalClassNames="left-[110.66px] top-0 w-[394.668px]" />
                <div className="absolute content-stretch flex flex-col h-[51.172px] items-start left-[553.33px] top-0 w-[726.67px]" data-name="Container">
                  <ParagraphText text="El diseño visual está al servicio del contenido, nunca compite con él." />
                  <ParagraphText1 text="Fondos sutiles, texturas refinadas, color como apoyo" />
                </div>
              </div>
              <div className="h-[51.172px] relative shrink-0 w-full" data-name="Container">
                <ContainerText text="04" />
                <HeadingText1 text="Diseñado para lectura y comprensión" additionalClassNames="left-[110.66px] top-0 w-[394.668px]" />
                <div className="absolute content-stretch flex flex-col h-[51.172px] items-start left-[553.33px] top-0 w-[726.67px]" data-name="Container">
                  <ParagraphText text="Prioridad en legibilidad, ritmo de lectura y jerarquía de información." />
                  <ParagraphText1 text="Espaciado vertical amplio, líneas de lectura cómodas, pausas visuales" />
                </div>
              </div>
              <div className="h-[51.172px] relative shrink-0 w-full" data-name="Container">
                <ContainerText text="05" />
                <HeadingText1 text="Escalable a largo plazo" additionalClassNames="left-[110.66px] top-0 w-[394.668px]" />
                <div className="absolute content-stretch flex flex-col h-[51.172px] items-start left-[553.33px] top-0 w-[726.67px]" data-name="Container">
                  <ParagraphText text="Sistema flexible que crece sin perder coherencia ni identidad." />
                  <ParagraphText1 text="Tokens reutilizables, componentes modulares, reglas claras" />
                </div>
              </div>
            </div>
            <div className="absolute border-[#e8e6e1] border-[0.625px_0px_0px] border-solid h-[93.379px] left-0 top-[377.61px] w-[1280px]" data-name="Container">
              <HeadingText1 text="Identidad Visual" additionalClassNames="left-0 top-0 w-[283.994px]" />
              <div className="absolute h-[92.754px] left-[331.99px] top-0 w-[948.008px]" data-name="Container">
                <div className="absolute content-stretch flex flex-col h-[92.754px] items-start left-0 top-0 w-[273.34px]" data-name="Container">
                  <ContainerText1 text="Esencia" />
                  <div className="h-[51.172px] relative shrink-0 w-full" data-name="Paragraph">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-0 not-italic text-[#4a4a4a] text-[16px] top-[-0.88px] tracking-[-0.3125px] w-[256px]">Sofisticación silenciosa, claridad profesional, pensamiento sistémico</p>
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col h-[92.754px] items-start left-[337.33px] top-0 w-[273.34px]" data-name="Container">
                  <ContainerText1 text="Inspiración" />
                  <div className="h-[76.758px] relative shrink-0 w-full" data-name="Paragraph">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-0 not-italic text-[#4a4a4a] text-[16px] top-[-0.88px] tracking-[-0.3125px] w-[253px]">Mármol refinado, oro sutil, texturas orgánicas, escultura clásica contemporánea</p>
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col h-[92.754px] items-start left-[674.67px] top-0 w-[273.34px]" data-name="Container">
                  <ContainerText1 text="Diferenciación" />
                  <div className="h-[51.172px] relative shrink-0 w-full" data-name="Paragraph">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-0 not-italic text-[#4a4a4a] text-[16px] top-[-0.88px] tracking-[-0.3125px] w-[264px]">No genérico, no template, no trendy. Editorial + digital moderno</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col h-[26.211px] items-start left-0 pb-0 pl-0 pr-[15px] pt-[0.625px] top-[579.85px] w-[1295px]" data-name="Footer">
            <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[0.625px_0px_0px] border-solid inset-0 pointer-events-none" />
            <ParagraphText text="Este sistema visual está diseñado para representar claridad, criterio y pensamiento sistémico." />
          </div>
        </div>
        <div className="absolute bg-[rgba(255,255,255,0.6)] content-stretch flex flex-col h-[108.867px] items-start left-0 pb-[0.625px] pl-0 pr-[15px] pt-0 top-0 w-[1295px]" data-name="App">
          <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[0px_0px_0.625px] border-solid inset-0 pointer-events-none" />
          <div className="h-[108.242px] relative shrink-0 w-full" data-name="Container">
            <Container />
            <div className="absolute content-stretch flex gap-[47.998px] h-[27.461px] items-start left-0 top-[80.78px] w-[1280px]" data-name="Container">
              <Button1 additionalClassNames="w-[125.156px]">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-[63.5px] not-italic text-[#2a2a2a] text-[16px] text-center text-nowrap top-[-0.88px] tracking-[-0.3125px] translate-x-[-50%]">Design Principles</p>
              </Button1>
              <ButtonText text="Color System" />
              <ButtonText1 text="Typography" />
              <Button />
              <ButtonText2 text="Components" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#fafaf8] h-[1588px] left-[1372px] top-0 w-[1276px]" data-name="Visual System for Portfolio">
        <div className="absolute bg-[#fafaf8] content-stretch flex flex-col gap-[0.625px] h-[1588.047px] items-start left-0 pb-0 pt-[108.867px] px-0 top-0 w-[1276.25px]" data-name="App">
          <div className="content-stretch flex flex-col h-[1452.969px] items-start relative shrink-0 w-full" data-name="ColorSystem">
            <div className="h-[102.344px] relative shrink-0 w-full" data-name="Container">
              <Text text="Sistema de Color" />
              <div className="absolute content-stretch flex flex-col h-[102.344px] items-start left-[441.42px] top-0 w-[724.473px]" data-name="Container">
                <div className="h-[51.172px] relative shrink-0 w-full" data-name="Paragraph">
                  <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-0 not-italic text-[#4a4a4a] text-[16px] text-nowrap top-[-0.88px] tracking-[-0.3125px]">La paleta está inspirada en</p>
                  <TextText text="mármol refinado, texturas orgánicas y oro sutil" additionalClassNames="left-[197.61px] w-[335.195px]" />
                  <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-0 not-italic text-[#4a4a4a] text-[16px] top-[-0.88px] tracking-[-0.3125px] w-[724px]">. Prioriza neutrales cálidos que transmiten sofisticación silenciosa y profesionalidad.</p>
                </div>
                <div className="h-[51.172px] relative shrink-0 w-full" data-name="Paragraph">
                  <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-0 not-italic text-[#4a4a4a] text-[16px] top-[-0.88px] tracking-[-0.3125px] w-[649px]">El oro se usa como acento estratégico, nunca como protagonista. Los fondos son claros y luminosos, generando sensación de espacio y claridad.</p>
                </div>
              </div>
            </div>
            <div className="h-[286.328px] relative shrink-0 w-full" data-name="Section">
              <div className="absolute content-stretch flex flex-col h-[57.988px] items-start left-0 top-0 w-[283.057px]" data-name="Container">
                <Text1 text="Fondos" />
                <ParagraphText text="Bases neutras cálidas" />
              </div>
              <div className="absolute h-[228.34px] left-0 top-[57.99px] w-[1276.25px]" data-name="Container">
                <div className="absolute content-stretch flex flex-col h-[228.34px] items-start left-0 top-0 w-[393.418px]" data-name="ColorCard">
                  <div className="bg-[#fafaf8] h-[160px] rounded-[4px] shrink-0 w-full" data-name="Container" />
                  <div className="content-stretch flex flex-col h-[68.34px] items-start relative shrink-0 w-full" data-name="Container">
                    <ContainerText2 text="Background Primary" />
                    <Text2 text="#FAFAF8" />
                    <ContainerText3 text="Fondo principal del sitio" />
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col h-[228.34px] items-start left-[441.42px] top-0 w-[393.418px]" data-name="ColorCard">
                  <div className="bg-[#f5f4f0] h-[160px] rounded-[4px] shrink-0 w-full" data-name="Container" />
                  <div className="content-stretch flex flex-col h-[68.34px] items-start relative shrink-0 w-full" data-name="Container">
                    <ContainerText2 text="Background Secondary" />
                    <Text2 text="#F5F4F0" />
                    <ContainerText3 text="Tarjetas, secciones secundarias" />
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col h-[228.34px] items-start left-[882.83px] top-0 w-[393.418px]" data-name="ColorCard">
                  <div className="bg-white h-[160px] rounded-[4px] shrink-0 w-full" data-name="Container" />
                  <div className="content-stretch flex flex-col h-[68.34px] items-start relative shrink-0 w-full" data-name="Container">
                    <ContainerText2 text="Background Tertiary" />
                    <Text2 text="#FFFFFF" />
                    <ContainerText3 text="Elementos elevados, overlays" />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[286.328px] relative shrink-0 w-full" data-name="Section">
              <div className="absolute content-stretch flex flex-col h-[57.988px] items-start left-0 top-0 w-[283.057px]" data-name="Container">
                <Text1 text="Texto" />
                <ParagraphText text="Jerarquía de grises cálidos" />
              </div>
              <div className="absolute h-[228.34px] left-0 top-[57.99px] w-[1276.25px]" data-name="Container">
                <div className="absolute content-stretch flex flex-col h-[228.34px] items-start left-0 top-0 w-[295.068px]" data-name="ColorCard">
                  <div className="bg-[#2a2a2a] h-[160px] rounded-[4px] shrink-0 w-full" data-name="Container" />
                  <div className="content-stretch flex flex-col h-[68.34px] items-start relative shrink-0 w-full" data-name="Container">
                    <ContainerText2 text="Text Primary" />
                    <Text2 text="#2A2A2A" />
                    <ContainerText3 text="Títulos, contenido principal" />
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col h-[228.34px] items-start left-[327.06px] top-0 w-[295.068px]" data-name="ColorCard">
                  <div className="bg-[#4a4a4a] h-[160px] rounded-[4px] shrink-0 w-full" data-name="Container" />
                  <div className="content-stretch flex flex-col h-[68.34px] items-start relative shrink-0 w-full" data-name="Container">
                    <ContainerText2 text="Text Secondary" />
                    <Text2 text="#4A4A4A" />
                    <ContainerText3 text="Párrafos, descripciones" />
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col h-[228.34px] items-start left-[654.12px] top-0 w-[295.068px]" data-name="ColorCard">
                  <div className="bg-[#6b6b6b] h-[160px] rounded-[4px] shrink-0 w-full" data-name="Container" />
                  <div className="content-stretch flex flex-col h-[68.34px] items-start relative shrink-0 w-full" data-name="Container">
                    <ContainerText2 text="Text Tertiary" />
                    <Text2 text="#6B6B6B" />
                    <ContainerText3 text="Meta información, subtextos" />
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col h-[228.34px] items-start left-[981.18px] top-0 w-[295.068px]" data-name="ColorCard">
                  <div className="bg-[#8a8a8a] h-[160px] rounded-[4px] shrink-0 w-full" data-name="Container" />
                  <div className="content-stretch flex flex-col h-[68.34px] items-start relative shrink-0 w-full" data-name="Container">
                    <ContainerText2 text="Text Muted" />
                    <Text2 text="#8A8A8A" />
                    <ContainerText3 text="Placeholder, disabled" />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[286.328px] relative shrink-0 w-full" data-name="Section">
              <div className="absolute content-stretch flex flex-col h-[57.988px] items-start left-0 top-0 w-[283.057px]" data-name="Container">
                <Text1 text="Acentos" />
                <ParagraphText text="Oro y tonos cálidos" />
              </div>
              <div className="absolute h-[228.34px] left-0 top-[57.99px] w-[1276.25px]" data-name="Container">
                <div className="absolute content-stretch flex flex-col h-[228.34px] items-start left-0 top-0 w-[393.418px]" data-name="ColorCard">
                  <div className="bg-[#b8956a] h-[160px] rounded-[4px] shrink-0 w-full" data-name="Container" />
                  <div className="content-stretch flex flex-col h-[68.34px] items-start relative shrink-0 w-full" data-name="Container">
                    <ContainerText2 text="Gold Primary" />
                    <Text2 text="#B8956A" />
                    <ContainerText3 text="Acento principal, hover states" />
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col h-[228.34px] items-start left-[441.42px] top-0 w-[393.418px]" data-name="ColorCard">
                  <div className="bg-[#d4c5a8] h-[160px] rounded-[4px] shrink-0 w-full" data-name="Container" />
                  <div className="content-stretch flex flex-col h-[68.34px] items-start relative shrink-0 w-full" data-name="Container">
                    <ContainerText2 text="Gold Subtle" />
                    <Text2 text="#D4C5A8" />
                    <ContainerText3 text="Acento suave, backgrounds" />
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col h-[228.34px] items-start left-[882.83px] top-0 w-[393.418px]" data-name="ColorCard">
                  <div className="bg-[#d4a89c] h-[160px] rounded-[4px] shrink-0 w-full" data-name="Container" />
                  <div className="content-stretch flex flex-col h-[68.34px] items-start relative shrink-0 w-full" data-name="Container">
                    <ContainerText2 text="Warm Coral" />
                    <Text2 text="#D4A89C" />
                    <ContainerText3 text="Acento secundario, estados cálidos" />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[286.328px] relative shrink-0 w-full" data-name="Section">
              <div className="absolute content-stretch flex flex-col h-[57.988px] items-start left-0 top-0 w-[283.057px]" data-name="Container">
                <Text1 text="Bordes" />
                <ParagraphText text="Separadores sutiles" />
              </div>
              <div className="absolute h-[228.34px] left-0 top-[57.99px] w-[1276.25px]" data-name="Container">
                <div className="absolute content-stretch flex flex-col h-[228.34px] items-start left-0 top-0 w-[393.418px]" data-name="ColorCard">
                  <div className="bg-[#e8e6e1] h-[160px] rounded-[4px] shrink-0 w-full" data-name="Container" />
                  <div className="content-stretch flex flex-col h-[68.34px] items-start relative shrink-0 w-full" data-name="Container">
                    <ContainerText2 text="Border Primary" />
                    <Text2 text="#E8E6E1" />
                    <ContainerText3 text="Bordes principales, separadores" />
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col h-[228.34px] items-start left-[441.42px] top-0 w-[393.418px]" data-name="ColorCard">
                  <div className="bg-[#f0efe9] h-[160px] rounded-[4px] shrink-0 w-full" data-name="Container" />
                  <div className="content-stretch flex flex-col h-[68.34px] items-start relative shrink-0 w-full" data-name="Container">
                    <ContainerText2 text="Border Subtle" />
                    <Text2 text="#F0EFE9" />
                    <ContainerText3 text="Bordes sutiles, divisores internos" />
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col h-[228.34px] items-start left-[882.83px] top-0 w-[393.418px]" data-name="ColorCard">
                  <div className="bg-[#d4cfc5] h-[160px] rounded-[4px] shrink-0 w-full" data-name="Container" />
                  <div className="content-stretch flex flex-col h-[68.34px] items-start relative shrink-0 w-full" data-name="Container">
                    <ContainerText2 text="Border Strong" />
                    <Text2 text="#D4CFC5" />
                    <ContainerText3 text="Bordes hover, estados activos" />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[205.313px] relative shrink-0 w-full" data-name="Section">
              <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[0.625px_0px_0px] border-solid inset-0 pointer-events-none" />
              <HeadingText1 text="Reglas de Uso" additionalClassNames="left-0 top-[0.63px] w-[283.057px]" />
              <div className="absolute content-stretch flex flex-col h-[204.688px] items-start left-[331.05px] top-[0.63px] w-[945.195px]" data-name="Container">
                <div className="content-stretch flex flex-col h-[51.172px] items-start relative shrink-0 w-full" data-name="Container">
                  <ContainerText4 text="Usar el oro con moderación" />
                  <ParagraphText text="Solo en hover states, CTAs principales y detalles de énfasis. Nunca como color dominante." />
                </div>
                <div className="content-stretch flex flex-col h-[51.172px] items-start relative shrink-0 w-full" data-name="Container">
                  <ContainerText4 text="Priorizar fondos claros" />
                  <ParagraphText text="El fondo principal (#FAFAF8) transmite amplitud y claridad. Usar backgrounds oscuros solo en casos específicos." />
                </div>
                <div className="content-stretch flex flex-col h-[51.172px] items-start relative shrink-0 w-full" data-name="Container">
                  <ContainerText4 text="Mantener contraste adecuado" />
                  <ParagraphText text="Texto principal (#2A2A2A) sobre fondos claros garantiza WCAG AA. No usar text-muted para contenido importante." />
                </div>
                <div className="content-stretch flex flex-col h-[51.172px] items-start relative shrink-0 w-full" data-name="Container">
                  <ContainerText4 text="Coherencia en interacciones" />
                  <ParagraphText text="Gold Primary (#B8956A) es el color de hover universal. Mantener consistencia en toda la interfaz." />
                </div>
              </div>
            </div>
          </div>
          <ParagraphText2 text="Este sistema visual está diseñado para representar claridad, criterio y pensamiento sistémico." />
        </div>
        <div className="absolute bg-[rgba(255,255,255,0.6)] border-[0px_0px_0.625px] border-black border-solid h-[108.242px] left-0 top-0 w-[1276.25px]" data-name="App">
          <Container />
          <div className="absolute content-stretch flex gap-[47.998px] h-[27.461px] items-start left-0 top-[80.78px] w-[1276.25px]" data-name="Container">
            <ButtonText3 text="Design Principles" />
            <Button1 additionalClassNames="w-[96.953px]">
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-[48px] not-italic text-[#2a2a2a] text-[16px] text-center text-nowrap top-[-0.88px] tracking-[-0.3125px] translate-x-[-50%]">Color System</p>
            </Button1>
            <ButtonText1 text="Typography" />
            <Button />
            <ButtonText2 text="Components" />
          </div>
        </div>
      </div>
      <div className="absolute bg-[#fafaf8] h-[1249px] left-[2725px] top-0 w-[1276px]" data-name="Visual System for Portfolio">
        <div className="absolute bg-[#fafaf8] content-stretch flex flex-col gap-[0.625px] h-[1248.652px] items-start left-0 pb-0 pt-[108.867px] px-0 top-0 w-[1276.25px]" data-name="App">
          <div className="content-stretch flex flex-col h-[1113.574px] items-start relative shrink-0 w-full" data-name="TypographySystem">
            <div className="h-[102.344px] relative shrink-0 w-full" data-name="Container">
              <Text text="Sistema Tipográfico" />
              <div className="absolute content-stretch flex flex-col h-[102.344px] items-start left-[441.42px] top-0 w-[724.473px]" data-name="Container">
                <div className="h-[51.172px] relative shrink-0 w-full" data-name="Paragraph">
                  <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-0 not-italic text-[#4a4a4a] text-[16px] text-nowrap top-[-0.88px] tracking-[-0.3125px]">La tipografía prioriza</p>
                  <TextText text="legibilidad, jerarquía clara y ritmo pausado" additionalClassNames="left-[153.22px] w-[305.322px]" />
                  <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-0 not-italic text-[#4a4a4a] text-[16px] top-[-0.88px] tracking-[-0.3125px] w-[688px]">. Usa familias system fonts para rendimiento óptimo y sensación contemporánea.</p>
                </div>
                <div className="h-[51.172px] relative shrink-0 w-full" data-name="Paragraph">
                  <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-0 not-italic text-[#4a4a4a] text-[16px] top-[-0.88px] tracking-[-0.3125px] w-[661px]">El sistema está diseñado con espaciado vertical generoso y líneas de lectura cómodas para contenido editorial.</p>
                </div>
              </div>
            </div>
            <div className="h-[200.781px] relative shrink-0 w-full" data-name="Section">
              <HeadingText1 text="Familias Tipográficas" additionalClassNames="left-0 top-0 w-[283.057px]" />
              <div className="absolute content-stretch flex flex-col h-[200.781px] items-start left-[331.05px] top-0 w-[945.195px]" data-name="Container">
                <div className="content-stretch flex flex-col h-[107.197px] items-start pb-[0.625px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
                  <div aria-hidden="true" className="absolute border-[#f0efe9] border-[0px_0px_0.625px] border-solid inset-0 pointer-events-none" />
                  <ContainerText1 text="Primary Font" />
                  <div className="h-[44.99px] relative shrink-0 w-full" data-name="Container">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[45px] left-0 not-italic text-[#2a2a2a] text-[36px] text-nowrap top-[-0.38px] tracking-[-0.5309px]">System Sans-Serif</p>
                  </div>
                  <Wrapper1>{`-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`}</Wrapper1>
                  <ParagraphText text="Para headlines, títulos, UI y contenido general. Moderna, legible y con excelente rendimiento." />
                </div>
                <div className="content-stretch flex flex-col h-[93.584px] items-start relative shrink-0 w-full" data-name="Container">
                  <ContainerText1 text="Monospace Font" />
                  <div className="h-[32.002px] relative shrink-0 w-full" data-name="Container">
                    <p className="absolute font-['Cousine:Regular',sans-serif] leading-[32px] left-0 not-italic text-[#2a2a2a] text-[24px] text-nowrap top-[-0.75px]">SF Mono, Menlo, Monaco</p>
                  </div>
                  <Wrapper1>{`'SF Mono', 'Menlo', 'Monaco', monospace`}</Wrapper1>
                  <ParagraphText text="Para código, datos técnicos y meta información." />
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col h-[605.137px] items-start relative shrink-0 w-full" data-name="Section">
              <Text1 text="Escala Tipográfica" />
              <div className="content-stretch flex flex-col h-[572.734px] items-start relative shrink-0 w-full" data-name="Container">
                <div className="h-[95.996px] relative shrink-0 w-full" data-name="Container">
                  <div className="absolute content-stretch flex flex-col h-[95.996px] items-start left-0 top-0 w-[283.057px]" data-name="Container">
                    <ContainerText1 text="H1 / Display" />
                    <Text2 text="48px" />
                    <div className="content-stretch flex flex-col h-[60px] items-start relative shrink-0 w-full" data-name="Container">
                      <ContainerText5 text="Weight: 600" />
                      <ContainerText5 text="Line: 1.2" />
                      <ContainerText5 text="Tracking: -0.02em" />
                    </div>
                  </div>
                  <div className="absolute content-stretch flex flex-col h-[80.781px] items-start left-[331.05px] top-0 w-[945.195px]" data-name="Container">
                    <HeadingText2 text="Product Designer" />
                    <ParagraphText text="Uso: Hero principal, título de página. Máximo impacto con claridad." />
                  </div>
                </div>
                <div className="h-[95.996px] relative shrink-0 w-full" data-name="Container">
                  <div className="absolute content-stretch flex flex-col h-[95.996px] items-start left-0 top-0 w-[283.057px]" data-name="Container">
                    <ContainerText1 text="H2 / Section Title" />
                    <Text2 text="36px" />
                    <div className="content-stretch flex flex-col h-[60px] items-start relative shrink-0 w-full" data-name="Container">
                      <ContainerText5 text="Weight: 600" />
                      <ContainerText5 text="Line: 1.3" />
                      <ContainerText5 text="Tracking: -0.01em" />
                    </div>
                  </div>
                  <div className="absolute content-stretch flex flex-col h-[70.576px] items-start left-[331.05px] top-0 w-[945.195px]" data-name="Container">
                    <HeadingText text="Proyectos Seleccionados" />
                    <ParagraphText text="Uso: Títulos de sección principal. Jerarquía fuerte sin competir con H1." />
                  </div>
                </div>
                <div className="h-[75.996px] relative shrink-0 w-full" data-name="Container">
                  <div className="absolute content-stretch flex flex-col h-[75.996px] items-start left-0 top-0 w-[283.057px]" data-name="Container">
                    <ContainerText1 text="H3 / Subsection" />
                    <Text2 text="24px" />
                    <div className="content-stretch flex flex-col h-[40px] items-start relative shrink-0 w-full" data-name="Container">
                      <ContainerText5 text="Weight: 600" />
                      <ContainerText5 text="Line: 1.4" />
                    </div>
                  </div>
                  <div className="absolute content-stretch flex flex-col h-[57.988px] items-start left-[331.05px] top-0 w-[945.195px]" data-name="Container">
                    <Text1 text="NODUX — Sistema de Gestión Operativa" />
                    <ParagraphText text="Uso: Títulos de proyecto, subsecciones. Destaca sin romper ritmo." />
                  </div>
                </div>
                <div className="h-[75.996px] relative shrink-0 w-full" data-name="Container">
                  <div className="absolute content-stretch flex flex-col h-[75.996px] items-start left-0 top-0 w-[283.057px]" data-name="Container">
                    <ContainerText1 text="Body Large / Lead" />
                    <Text2 text="20px" />
                    <div className="content-stretch flex flex-col h-[40px] items-start relative shrink-0 w-full" data-name="Container">
                      <ContainerText5 text="Weight: 400" />
                      <ContainerText5 text="Line: 1.7" />
                    </div>
                  </div>
                  <div className="absolute content-stretch flex flex-col h-[51.172px] items-start left-[331.05px] top-0 w-[945.195px]" data-name="Container">
                    <ParagraphText text="Diseño sistemas y experiencias digitales claras, funcionales y usables que ordenan procesos y tienen sentido en el uso real." />
                    <ParagraphText text="Uso: Párrafos introductorios, descripciones importantes, lead text." />
                  </div>
                </div>
                <div className="h-[76.758px] relative shrink-0 w-full" data-name="Container">
                  <div className="absolute content-stretch flex flex-col h-[75.996px] items-start left-0 top-0 w-[283.057px]" data-name="Container">
                    <ContainerText1 text="Body / Default" />
                    <Text2 text="16px" />
                    <div className="content-stretch flex flex-col h-[40px] items-start relative shrink-0 w-full" data-name="Container">
                      <ContainerText5 text="Weight: 400" />
                      <ContainerText5 text="Line: 1.6" />
                    </div>
                  </div>
                  <div className="absolute content-stretch flex flex-col h-[76.758px] items-start left-[331.05px] top-0 w-[945.195px]" data-name="Container">
                    <div className="h-[51.172px] relative shrink-0 w-full" data-name="Paragraph">
                      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-0 not-italic text-[#4a4a4a] text-[16px] top-[-0.88px] tracking-[-0.3125px] w-[919px]">Ayudo a equipos a transformar desafíos complejos de producto y operación en soluciones digitales estructuradas, escalables y fáciles de usar.</p>
                    </div>
                    <ParagraphText text="Uso: Contenido general, descripciones de proyecto, párrafos de lectura." />
                  </div>
                </div>
                <div className="h-[75.996px] relative shrink-0 w-full" data-name="Container">
                  <div className="absolute content-stretch flex flex-col h-[75.996px] items-start left-0 top-0 w-[283.057px]" data-name="Container">
                    <ContainerText1 text="Body Small" />
                    <Text2 text="14px" />
                    <div className="content-stretch flex flex-col h-[40px] items-start relative shrink-0 w-full" data-name="Container">
                      <ContainerText5 text="Weight: 400" />
                      <ContainerText5 text="Line: 1.5" />
                    </div>
                  </div>
                  <div className="absolute content-stretch flex flex-col h-[51.172px] items-start left-[331.05px] top-0 w-[945.195px]" data-name="Container">
                    <ParagraphText text="B2B SaaS · Herramientas internas · UX Systems · Flujos · Soporte a decisiones" />
                    <ParagraphText text="Uso: Etiquetas, tags, meta información, descripciones secundarias." />
                  </div>
                </div>
                <div className="h-[75.996px] relative shrink-0 w-full" data-name="Container">
                  <div className="absolute content-stretch flex flex-col h-[75.996px] items-start left-0 top-0 w-[283.057px]" data-name="Container">
                    <ContainerText1 text="Caption / Meta" />
                    <Text2 text="12px" />
                    <div className="content-stretch flex flex-col h-[40px] items-start relative shrink-0 w-full" data-name="Container">
                      <ContainerText5 text="Weight: 400" />
                      <ContainerText5 text="Line: 1.4" />
                    </div>
                  </div>
                  <div className="absolute content-stretch flex flex-col h-[51.172px] items-start left-[331.05px] top-0 w-[945.195px]" data-name="Container">
                    <div className="h-[25.586px] relative shrink-0 w-full" data-name="Paragraph">
                      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-0 not-italic text-[#4a4a4a] text-[16px] text-nowrap top-[-0.88px] tracking-[0.4875px] uppercase">Product Design · Sistemas Operativos</p>
                    </div>
                    <ParagraphText text="Uso: Categorías, labels, timestamps, información muy secundaria." />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[205.313px] relative shrink-0 w-full" data-name="Section">
              <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[0.625px_0px_0px] border-solid inset-0 pointer-events-none" />
              <HeadingText1 text="Reglas Tipográficas" additionalClassNames="left-0 top-[0.63px] w-[283.057px]" />
              <div className="absolute content-stretch flex flex-col h-[204.688px] items-start left-[331.05px] top-[0.63px] w-[945.195px]" data-name="Container">
                <div className="content-stretch flex flex-col h-[51.172px] items-start relative shrink-0 w-full" data-name="Container">
                  <ContainerText4 text="Espaciado vertical generoso" />
                  <ParagraphText text="Mínimo 64px entre secciones principales. El espacio es estructura." />
                </div>
                <div className="content-stretch flex flex-col h-[51.172px] items-start relative shrink-0 w-full" data-name="Container">
                  <ContainerText4 text="Líneas de lectura cómodas" />
                  <ParagraphText text="Máximo 70 caracteres por línea. Leading amplio (1.6-1.7) para lectura pausada." />
                </div>
                <div className="content-stretch flex flex-col h-[51.172px] items-start relative shrink-0 w-full" data-name="Container">
                  <ContainerText4 text="Jerarquía clara y consistente" />
                  <ParagraphText text="Usar la escala definida. No crear tamaños intermedios sin justificación." />
                </div>
                <div className="content-stretch flex flex-col h-[51.172px] items-start relative shrink-0 w-full" data-name="Container">
                  <ContainerText4 text="Color con propósito" />
                  <ParagraphText text="Text Primary para títulos, Secondary para body, Tertiary para meta. Consistencia siempre." />
                </div>
              </div>
            </div>
          </div>
          <ParagraphText2 text="Este sistema visual está diseñado para representar claridad, criterio y pensamiento sistémico." />
        </div>
        <div className="absolute bg-[rgba(255,255,255,0.6)] border-[0px_0px_0.625px] border-black border-solid h-[108.242px] left-0 top-0 w-[1276.25px]" data-name="App">
          <Container />
          <div className="absolute content-stretch flex gap-[47.998px] h-[27.461px] items-start left-0 top-[80.78px] w-[1276.25px]" data-name="Container">
            <ButtonText3 text="Design Principles" />
            <ButtonText text="Color System" />
            <Button1 additionalClassNames="w-[86.133px]">
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-[43px] not-italic text-[#2a2a2a] text-[16px] text-center text-nowrap top-[-0.88px] tracking-[-0.3125px] translate-x-[-50%]">Typography</p>
            </Button1>
            <Button />
            <ButtonText2 text="Components" />
          </div>
        </div>
      </div>
      <div className="absolute bg-white h-[466px] left-px overflow-clip top-[1012px] w-[1294px]">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[25.6px] left-[41px] not-italic text-[36px] text-black text-nowrap top-[44px] tracking-[-0.3125px]">Identidad visual de marca:</p>
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[25.6px] left-[41px] not-italic text-[20px] text-black text-nowrap top-[124px] tracking-[-0.3125px]">Sofisticación silenciosa + claridad profesional + pensamiento sistémico</p>
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[25.6px] left-[41px] not-italic text-[20px] text-black text-nowrap top-[207px] tracking-[-0.3125px]">Mármol refinado · Oro sutil · Texturas orgánicas · Escultura clásica reinterpretada</p>
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[25.6px] left-[41px] not-italic text-[20px] text-black text-nowrap top-[290px] tracking-[-0.3125px]">
          No genérico · No template · No trendy
          <br aria-hidden="true" />
          Editorial + digital moderno
        </p>
        <div className="absolute bg-[#d4c5a8] h-[52px] left-[437px] top-[370px] w-[460px]">
          <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[25.6px] left-[230px] not-italic text-[20px] text-black text-center text-nowrap top-0 tracking-[-0.3125px] translate-x-[-50%]">
            Diseño con claridad, criterio y silencio visual.
            <br aria-hidden="true" />
            {` Lo estético acompaña al contenido, no lo eclipsa.`}
          </p>
        </div>
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[25.6px] left-[41px] not-italic text-[32px] text-black text-nowrap top-[98px] tracking-[-0.3125px]">Esencia</p>
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[25.6px] left-[41px] not-italic text-[32px] text-black text-nowrap top-[181px] tracking-[-0.3125px]">Inspiración</p>
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[25.6px] left-[41px] not-italic text-[32px] text-black text-nowrap top-[264px] tracking-[-0.3125px]">Diferenciación</p>
      </div>
    </div>
  );
}