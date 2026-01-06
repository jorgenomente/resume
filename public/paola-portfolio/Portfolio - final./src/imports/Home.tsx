import clsx from "clsx";
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return (
    <div className={clsx("h-[32.998px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow h-[294.346px] min-h-px min-w-px relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("h-[33.994px] relative rounded-[2.09715e+07px] shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type ParagraphText2Props = {
  text: string;
};

function ParagraphText2({ text }: ParagraphText2Props) {
  return (
    <div className="h-[76.758px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-0 not-italic text-[#4a4a4a] text-[16px] top-[-0.88px] tracking-[-0.9125px] w-[295px]">{text}</p>
    </div>
  );
}
type TextText3Props = {
  text: string;
  additionalClassNames?: string;
};

function TextText3({ text, additionalClassNames = "" }: TextText3Props) {
  return (
    <div className={clsx("absolute bg-[#f5f4f0] h-[32.998px] rounded-[2.09715e+07px] top-0", additionalClassNames)}>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[11.99px] not-italic text-[#6b6b6b] text-[14px] text-nowrap top-[5.87px] tracking-[-0.4504px]">{text}</p>
    </div>
  );
}
type LinkTextProps = {
  text: string;
  additionalClassNames?: string;
};

function LinkText({ text, additionalClassNames = "" }: LinkTextProps) {
  return (
    <div className="absolute h-[23.994px] left-0 top-[270.35px] w-[79.629px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#2a2a2a] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.9125px]">{text}</p>
      <Text text="→" additionalClassNames="left-[66.04px]" />
    </div>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div className={clsx("absolute h-[23.994px] top-0 w-[13.584px]", additionalClassNames)}>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#2a2a2a] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.9125px]">{text}</p>
    </div>
  );
}
type ParagraphText1Props = {
  text: string;
  additionalClassNames?: string;
};

function ParagraphText1({ text, additionalClassNames = "" }: ParagraphText1Props) {
  return (
    <div className={clsx("absolute h-[25.205px] left-0 top-[121.98px]", additionalClassNames)}>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.2px] left-0 not-italic text-[#4a4a4a] text-[14px] text-nowrap top-[-0.25px] tracking-[-0.6104px]">{text}</p>
    </div>
  );
}
type TextText2Props = {
  text: string;
  additionalClassNames?: string;
};

function TextText2({ text, additionalClassNames = "" }: TextText2Props) {
  return (
    <div className={clsx("h-[17.998px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#8a8a8a] text-[12px] text-nowrap top-[0.25px] tracking-[0.6px] uppercase">{text}</p>
      </div>
    </div>
  );
}
type TextText1Props = {
  text: string;
};

function TextText1({ text }: TextText1Props) {
  return (
    <div className="h-[17.998px] relative shrink-0 w-[4.17px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#e8e6e1] text-[12px] text-nowrap top-[0.25px] tracking-[0.6px] uppercase">{text}</p>
      </div>
    </div>
  );
}
type Text4Props = {
  text: string;
  additionalClassNames?: string;
};

function Text4({ text, additionalClassNames = "" }: Text4Props) {
  return (
    <div className={clsx("absolute h-[17.998px]", additionalClassNames)}>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#b8956a] text-[12px] text-nowrap top-[0.25px] tracking-[0.6px] uppercase">{text}</p>
    </div>
  );
}
type TextTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TextText({ text, additionalClassNames = "" }: TextTextProps) {
  return (
    <div className={clsx("h-[17.998px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#b8956a] text-[12px] text-nowrap top-[0.25px] tracking-[0.6px] uppercase">{text}</p>
      </div>
    </div>
  );
}
type Text3Props = {
  text: string;
  additionalClassNames?: string;
};

function Text3({ text, additionalClassNames = "" }: Text3Props) {
  return (
    <div className={clsx("absolute h-[23.994px] left-0", additionalClassNames)}>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#2a2a2a] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px]">{text}</p>
    </div>
  );
}
type Text2Props = {
  text: string;
};

function Text2({ text }: Text2Props) {
  return (
    <div className="h-[23.994px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#2a2a2a] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px]">{text}</p>
    </div>
  );
}
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return (
    <div className="h-[17.998px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#b8956a] text-[12px] text-nowrap top-[0.25px] tracking-[0.6px] uppercase">{text}</p>
    </div>
  );
}
type ParagraphTextProps = {
  text: string;
};

function ParagraphText({ text }: ParagraphTextProps) {
  return (
    <div className="h-[25.586px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-0 not-italic text-[#4a4a4a] text-[16px] text-nowrap top-[-0.88px] tracking-[-0.9125px]">{text}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Home">
      <div className="bg-[#fafaf8] h-[5177.09px] relative shrink-0 w-full" data-name="App">
        <div className="absolute content-stretch flex flex-col gap-[80px] h-[293.945px] items-start left-[128.62px] top-[128px] w-[720px]" data-name="Section">
          <div className="h-[18.389px] relative shrink-0 w-full" data-name="Heading 1">
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18.4px] left-0 not-italic text-[#2a2a2a] text-[16px] text-nowrap top-[-0.63px] tracking-[-0.3125px]">Product Designer especializada en sistemas y procesos reales</p>
          </div>
          <div className="content-stretch flex flex-col gap-[31.992px] h-[91.572px] items-start relative shrink-0 w-full" data-name="Container">
            <div className="content-stretch flex gap-[7.998px] h-[33.994px] items-start relative shrink-0 w-full" data-name="Container">
              <Wrapper additionalClassNames="w-[96.279px]">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[48px] not-italic text-[#8a8a8a] text-[12px] text-center text-nowrap top-[8.25px] tracking-[0.6px] translate-x-[-50%] uppercase">Sistemas</p>
              </Wrapper>
              <Wrapper additionalClassNames="w-[89.756px]">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[45px] not-italic text-[#8a8a8a] text-[12px] text-center text-nowrap top-[8.25px] tracking-[0.6px] translate-x-[-50%] uppercase">Usuario</p>
              </Wrapper>
              <Wrapper additionalClassNames="bg-[#2a2a2a] w-[103.389px]">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[52.5px] not-italic text-[12px] text-center text-nowrap text-white top-[8.25px] tracking-[0.6px] translate-x-[-50%] uppercase">Narrativa</p>
              </Wrapper>
            </div>
            <ParagraphText text="Diseño espacios digitales donde el sentido importa más que la optimización." />
          </div>
          <div className="content-stretch flex gap-[23.994px] h-[55.986px] items-center relative shrink-0 w-full" data-name="Container">
            <div className="bg-[#2a2a2a] h-[55.986px] relative rounded-[10px] shrink-0 w-[188.516px]" data-name="Button">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[93.99px] not-italic text-[16px] text-center text-nowrap text-white top-[15.5px] tracking-[-0.9125px] translate-x-[-50%]">Explorar mi trabajo</p>
              </div>
            </div>
            <div className="h-[23.994px] relative shrink-0 w-[59.561px]" data-name="Button">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[30.5px] not-italic text-[#2a2a2a] text-[16px] text-center text-nowrap top-[-0.5px] tracking-[-0.9125px] translate-x-[-50%]">Sobre mí</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[3032.441px] left-[64.63px] top-[581.94px] w-[1151.992px]" data-name="Section">
          <div className="absolute h-[115.566px] left-[63.99px] top-[96px] w-[1024.004px]" data-name="Container">
            <Text4 text="Proyectos Seleccionados" additionalClassNames="left-0 top-0 w-[1024.004px]" />
            <Text3 text="Tres proyectos. Tres capas del diseño de producto." additionalClassNames="top-[49.99px] w-[1024.004px]" />
            <div className="absolute h-[25.586px] left-0 top-[89.98px] w-[540px]" data-name="Paragraph">
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-0 not-italic text-[#4a4a4a] text-[16px] text-nowrap top-[-0.88px] tracking-[-0.9125px]">Sistemas que escalan. Decisiones que guían. Narrativas que conectan.</p>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[31.992px] h-[806.963px] items-start left-[63.99px] pb-[0.625px] pt-0 px-0 top-[275.56px] w-[1024.004px]" data-name="Article">
            <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[0px_0px_0.625px] border-solid inset-0 pointer-events-none" />
            <div className="bg-[#f5f4f0] content-stretch flex flex-col h-[400px] items-start overflow-clip relative rounded-[4px] shrink-0 w-full" data-name="Container">
              <div className="h-[400px] shrink-0 w-full" data-name="ImageWithFallback" />
            </div>
            <div className="content-stretch flex h-[294.346px] items-start justify-between relative shrink-0 w-full" data-name="Container">
              <Wrapper1>
                <div className="absolute content-stretch flex gap-[11.992px] h-[17.998px] items-center left-0 top-0 w-[708.184px]" data-name="Container">
                  <TextText text="Sistemas · Procesos · Decisión operativa" additionalClassNames="w-[294.365px]" />
                  <TextText1 text="·" />
                  <TextText2 text="Sistemas" additionalClassNames="w-[64.287px]" />
                </div>
                <Text3 text="NODUX — Sistema de Gestión Operativa" additionalClassNames="top-[66px] w-[708.184px]" />
                <ParagraphText1 text="Sistemas operativos · Procesos reales · Escalabilidad" additionalClassNames="w-[708.184px]" />
                <div className="absolute h-[51.172px] left-0 top-[171.18px] w-[708.184px]" data-name="Paragraph">
                  <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-0 not-italic text-[#4a4a4a] text-[16px] top-[-0.88px] tracking-[-0.9125px] w-[656px]">Diseño de herramienta interna para gestión operativa compleja. Enfoque en claridad de procesos y reducción de errores.</p>
                </div>
                <LinkText text="Ver caso" />
              </Wrapper1>
              <Wrapper2 additionalClassNames="w-[267.822px]">
                <TextText3 text="B2B SaaS" additionalClassNames="left-0 w-[84.463px]" />
                <TextText3 text="UX Systems" additionalClassNames="left-[96.46px] w-[99.316px]" />
                <TextText3 text="Flujos" additionalClassNames="left-[207.76px] w-[60.059px]" />
              </Wrapper2>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[31.992px] h-[806.963px] items-start left-[63.99px] pb-[0.625px] pt-0 px-0 top-[1162.52px] w-[1024.004px]" data-name="Article">
            <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[0px_0px_0.625px] border-solid inset-0 pointer-events-none" />
            <div className="bg-[#f5f4f0] content-stretch flex flex-col h-[400px] items-start overflow-clip relative rounded-[4px] shrink-0 w-full" data-name="Container">
              <div className="h-[400px] shrink-0 w-full" data-name="ImageWithFallback" />
            </div>
            <div className="content-stretch flex h-[294.346px] items-start justify-between relative shrink-0 w-full" data-name="Container">
              <Wrapper1>
                <div className="absolute content-stretch flex gap-[11.992px] h-[17.998px] items-center left-0 top-0 w-[685.889px]" data-name="Container">
                  <TextText text="Usuario · Decisión · UX emocional" additionalClassNames="w-[242.803px]" />
                  <TextText1 text="·" />
                  <TextText2 text="Decisión" additionalClassNames="w-[61.494px]" />
                </div>
                <Text3 text="HOYCOMO — App de Delivery" additionalClassNames="top-[66px] w-[685.889px]" />
                <ParagraphText1 text="Decisión diaria · UX emocional · Reducción de fricción" additionalClassNames="w-[685.889px]" />
                <div className="absolute h-[51.172px] left-0 top-[171.18px] w-[685.889px]" data-name="Paragraph">
                  <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-0 not-italic text-[#4a4a4a] text-[16px] top-[-0.88px] tracking-[-0.9125px] w-[627px]">Rediseño de experiencia mobile para delivery de alimentos. Optimización de flujos de pedido y seguimiento en tiempo real.</p>
                </div>
                <LinkText text="Ver caso" />
              </Wrapper1>
              <Wrapper2 additionalClassNames="w-[290.117px]">
                <TextText3 text="Mobile Design" additionalClassNames="left-0 w-[111.836px]" />
                <TextText3 text="UX Research" additionalClassNames="left-[123.83px] w-[103.984px]" />
                <TextText3 text="B2C" additionalClassNames="left-[239.8px] w-[50.313px]" />
              </Wrapper2>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[31.992px] h-[806.963px] items-start left-[63.99px] pb-[0.625px] pt-0 px-0 top-[2049.48px] w-[1024.004px]" data-name="Article">
            <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[0px_0px_0.625px] border-solid inset-0 pointer-events-none" />
            <div className="bg-[#f5f4f0] content-stretch flex flex-col h-[400px] items-start overflow-clip relative rounded-[4px] shrink-0 w-full" data-name="Container">
              <div className="h-[400px] shrink-0 w-full" data-name="ImageWithFallback" />
            </div>
            <div className="content-stretch flex h-[294.346px] items-start justify-between relative shrink-0 w-full" data-name="Container">
              <Wrapper1>
                <div className="absolute content-stretch flex gap-[11.992px] h-[17.998px] items-center left-0 top-0 w-[697.842px]" data-name="Container">
                  <TextText text="Narrativa · Ritmo · Sentido" additionalClassNames="w-[193.711px]" />
                  <TextText1 text="·" />
                  <TextText2 text="Sentido" additionalClassNames="w-[56.699px]" />
                </div>
                <Text3 text="PULSO — Dashboard de Métricas" additionalClassNames="top-[66px] w-[697.842px]" />
                <ParagraphText1 text="Narrativa · Ritmo · Experiencia introspectiva" additionalClassNames="w-[697.842px]" />
                <div className="absolute h-[51.172px] left-0 top-[171.18px] w-[697.842px]" data-name="Paragraph">
                  <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-0 not-italic text-[#4a4a4a] text-[16px] top-[-0.88px] tracking-[-0.9125px] w-[644px]">Sistema de visualización de datos para análisis operativo. Jerarquía clara de información y diseño orientado a decisiones rápidas.</p>
                </div>
                <LinkText text="Ver caso" />
              </Wrapper1>
              <Wrapper2 additionalClassNames="w-[278.164px]">
                <TextText3 text="Analytics" additionalClassNames="left-0 w-[80.117px]" />
                <TextText3 text="Data Viz" additionalClassNames="left-[92.11px] w-[75.469px]" />
                <TextText3 text="Dashboards" additionalClassNames="left-[179.57px] w-[98.594px]" />
              </Wrapper2>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[47.998px] h-[375.361px] items-start left-[64.63px] pb-0 pt-[96.621px] px-[63.994px] top-[3614.38px] w-[1151.992px]" data-name="Section">
          <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[0.625px_0px_0px] border-solid inset-0 pointer-events-none" />
          <Text1 text="Por qué trabajar conmigo" />
          <div className="h-[116.748px] relative shrink-0 w-full" data-name="Container">
            <div className="absolute content-stretch flex flex-col gap-[15.996px] h-[116.748px] items-start left-0 top-0 w-[298.672px]" data-name="Container">
              <Text2 text="Pensamiento sistémico" />
              <ParagraphText2 text="Diseño soluciones que escalan y se adaptan al crecimiento del negocio sin perder coherencia." />
            </div>
            <div className="absolute content-stretch flex flex-col gap-[15.996px] h-[116.748px] items-start left-[362.67px] top-0 w-[298.672px]" data-name="Container">
              <Text2 text="Enfoque en lo real" />
              <ParagraphText2 text="Priorizo la usabilidad en contextos reales sobre estéticas que no resuelven problemas concretos." />
            </div>
            <div className="absolute content-stretch flex flex-col gap-[15.996px] h-[116.748px] items-start left-[725.33px] top-0 w-[298.672px]" data-name="Container">
              <Text2 text="Claridad y autonomía" />
              <div className="h-[76.758px] relative shrink-0 w-full" data-name="Paragraph">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-0 not-italic text-[#4a4a4a] text-[16px] top-[-0.88px] tracking-[-0.9125px] w-[275px]">Comunico decisiones con criterio claro y trabajo con autonomía dentro de equipos multidisciplinarios.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute border-[#e8e6e1] border-[0.625px_0px_0px] border-solid h-[456.943px] left-[64.63px] top-[3989.75px] w-[1151.992px]" data-name="Section">
          <Text4 text="Sobre mí" additionalClassNames="left-[63.99px] top-[96px] w-[1024.004px]" />
          <div className="absolute content-stretch flex flex-col gap-[47.998px] h-[198.33px] items-start left-[63.99px] top-[161.99px] w-[640px]" data-name="Container">
            <Text2 text="Paola Zerpa" />
            <div className="content-stretch flex flex-col gap-[23.994px] h-[126.338px] items-start relative shrink-0 w-full" data-name="Container">
              <div className="h-[51.172px] relative shrink-0 w-full" data-name="Paragraph">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-0 not-italic text-[#4a4a4a] text-[16px] top-[-0.88px] tracking-[-0.9125px] w-[615px]">Product Designer con enfoque en sistemas operativos y herramientas internas. Mi trabajo se centra en reducir complejidad, aumentar autonomía y diseñar para escalar.</p>
              </div>
              <div className="h-[51.172px] relative shrink-0 w-full" data-name="Paragraph">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-0 not-italic text-[#4a4a4a] text-[16px] top-[-0.88px] tracking-[-0.9125px] w-[624px]">Creo en el diseño como herramienta de claridad, no de decoración. Cada decisión visual debe tener un propósito funcional que mejore la experiencia del usuario.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col h-[320.596px] items-start left-[64.63px] pb-0 pl-[63.994px] pr-[367.998px] pt-[96.621px] top-[4446.69px] w-[1151.992px]" data-name="Section">
          <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[0.625px_0px_0px] border-solid inset-0 pointer-events-none" />
          <div className="h-[127.979px] relative shrink-0 w-full" data-name="Container">
            <div className="absolute content-stretch flex flex-col gap-[7.998px] h-[55.986px] items-start left-0 top-0 w-[720px]" data-name="Container">
              <Text2 text="Diseño con criterio." />
              <Text2 text="Sistemas, decisiones y sentido." />
            </div>
            <div className="absolute h-[23.994px] left-0 top-[103.98px] w-[163.301px]" data-name="Link">
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#2a2a2a] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.9125px]">Conectar en LinkedIn</p>
              <Text text="→" additionalClassNames="left-[149.72px]" />
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[63.994px] h-[409.805px] items-start left-[64.63px] pb-0 pt-[96.621px] px-[63.994px] top-[4767.29px] w-[1151.992px]" data-name="Footer">
          <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[0.625px_0px_0px] border-solid inset-0 pointer-events-none" />
          <div className="h-[99.57px] relative shrink-0 w-full" data-name="Container">
            <div className="absolute content-stretch flex flex-col gap-[15.996px] h-[99.57px] items-start left-0 top-0 w-[480px]" data-name="Container">
              <Text1 text="Contacto" />
              <div className="h-[23.994px] relative shrink-0 w-full" data-name="Paragraph">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#2a2a2a] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.9125px]">paolazerpak@gmail.com</p>
              </div>
              <ParagraphText text="Disponible para proyectos freelance y posiciones full-time" />
            </div>
            <div className="absolute h-[99.57px] left-[543.99px] top-0 w-[480.01px]" data-name="Container">
              <Text4 text="Links" additionalClassNames="left-0 top-0 w-[480.01px]" />
              <div className="absolute content-stretch flex h-[18.75px] items-start left-0 top-[36.49px] w-[55.967px]" data-name="Link">
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#2a2a2a] text-[16px] text-nowrap tracking-[-0.9125px]">LinkedIn</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col h-[53.623px] items-start pb-0 pt-[32.617px] px-0 relative shrink-0 w-full" data-name="Container">
            <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[0.625px_0px_0px] border-solid inset-0 pointer-events-none" />
            <div className="h-[21.006px] relative shrink-0 w-full" data-name="Paragraph">
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#8a8a8a] text-[14px] text-nowrap top-[-0.13px] tracking-[-0.4504px]">© 2024 Paola Zerpa · Product Designer Portfolio</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}