import svgPaths from "./svg-08po8xckn4";
import clsx from "clsx";
import imgImageWithFallback from "figma:asset/ece298d0ec2c16f10310d45724b276a6035cb503.png";
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return (
    <div className={clsx("h-[42.998px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div className={clsx("relative rounded-[10px] shrink-0 w-full", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[#b8956a] border-[0px_0px_0px_3.75px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">{children}</div>
    </div>
  );
}

function Container({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper1 additionalClassNames="bg-white h-[282.764px]">
      <div className="content-stretch flex flex-col gap-[15.996px] items-start pb-0 pl-[43.75px] pr-[40px] pt-[40px] relative size-full">{children}</div>
    </Wrapper1>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
  additionalClassNames1?: string;
};

function Wrapper({ children, additionalClassNames = "", additionalClassNames1 = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("relative rounded-[10px] shrink-0 w-full", additionalClassNames)}>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[0.625px] relative size-full">
          <div className={clsx("relative shrink-0 w-full", additionalClassNames)}>
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[0.625px] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3e47bd00} id="Vector" stroke="var(--stroke-0, #6B6B6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3610fb80} id="Vector_2" stroke="var(--stroke-0, #6B6B6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}
type HeadingText5Props = {
  text: string;
  additionalClassNames?: string;
};

function HeadingText5({ text, additionalClassNames = "" }: HeadingText5Props) {
  return (
    <div className={clsx("h-[30px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[30px] left-0 not-italic text-[#2a2a2a] text-[20px] text-nowrap top-[0.13px] tracking-[-0.4492px]">{text}</p>
      </div>
    </div>
  );
}
type TextText1Props = {
  text: string;
  additionalClassNames?: string;
};

function TextText1({ text, additionalClassNames = "" }: TextText1Props) {
  return (
    <div className={clsx("absolute content-stretch flex h-[21.25px] items-start top-[4.38px]", additionalClassNames)}>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30.6px] not-italic relative shrink-0 text-[#b8956a] text-[18px] text-nowrap tracking-[-0.4395px]">{text}</p>
    </div>
  );
}
type HeadingText4Props = {
  text: string;
};

function HeadingText4({ text }: HeadingText4Props) {
  return (
    <div className="h-[26.992px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[27px] left-0 not-italic text-[#2a2a2a] text-[18px] text-nowrap top-[0.5px] tracking-[-0.4395px]">{text}</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-0 size-[23.994px] top-[3.99px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pa49a200} id="Vector" stroke="var(--stroke-0, #B8956A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99951" />
          <path d={svgPaths.p29f80000} id="Vector_2" stroke="var(--stroke-0, #B8956A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99951" />
        </g>
      </svg>
    </div>
  );
}
type HeadingText3Props = {
  text: string;
};

function HeadingText3({ text }: HeadingText3Props) {
  return (
    <div className="content-stretch flex h-[38.398px] items-start relative shrink-0 w-full">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[38.4px] min-h-px min-w-px not-italic relative shrink-0 text-[#2a2a2a] text-[32px] tracking-[0.0862px]">{text}</p>
    </div>
  );
}
type ParagraphText5Props = {
  text: string;
};

function ParagraphText5({ text }: ParagraphText5Props) {
  return (
    <div className="h-[21.006px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#8a8a8a] text-[14px] text-nowrap top-[-0.13px] tracking-[0.4496px] uppercase">{text}</p>
    </div>
  );
}
type HeadingText2Props = {
  text: string;
};

function HeadingText2({ text }: HeadingText2Props) {
  return (
    <div className="h-[36.006px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[36px] left-0 not-italic text-[#2a2a2a] text-[24px] text-nowrap top-[-0.25px] tracking-[0.0703px]">{text}</p>
    </div>
  );
}
type ParagraphText4Props = {
  text: string;
};

function ParagraphText4({ text }: ParagraphText4Props) {
  return (
    <div className="h-[25.586px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-0 not-italic text-[#4a4a4a] text-[16px] text-nowrap top-[-0.88px] tracking-[-0.3125px]">{text}</p>
    </div>
  );
}
type ParagraphText3Props = {
  text: string;
};

function ParagraphText3({ text }: ParagraphText3Props) {
  return (
    <div className="h-[21.006px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#f0efe9] border-[0px_0px_0px_1.875px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[25.87px] not-italic text-[#6b6b6b] text-[14px] text-nowrap top-[-0.13px] tracking-[-0.1504px]">{text}</p>
    </div>
  );
}
type HeadingText1Props = {
  text: string;
};

function HeadingText1({ text }: HeadingText1Props) {
  return (
    <div className="h-[30px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[30px] left-0 not-italic text-[#b8956a] text-[20px] text-nowrap top-[0.13px] tracking-[-0.4492px]">{text}</p>
    </div>
  );
}
type ParagraphText2Props = {
  text: string;
};

function ParagraphText2({ text }: ParagraphText2Props) {
  return (
    <div className="h-[21.006px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#6b6b6b] text-[14px] text-nowrap top-[-0.13px] tracking-[-0.1504px]">{text}</p>
    </div>
  );
}
type ParagraphText1Props = {
  text: string;
};

function ParagraphText1({ text }: ParagraphText1Props) {
  return (
    <div className="h-[23.994px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#6b6b6b] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px]">{text}</p>
    </div>
  );
}
type HeadingTextProps = {
  text: string;
};

function HeadingText({ text }: HeadingTextProps) {
  return (
    <div className="h-[23.994px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#2a2a2a] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px]">{text}</p>
    </div>
  );
}
type TextTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TextText({ text, additionalClassNames = "" }: TextTextProps) {
  return (
    <div className={clsx("absolute h-[17.998px] left-0 top-0", additionalClassNames)}>
      <p className="absolute font-['Cousine:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#8a8a8a] text-[12px] text-nowrap top-[-0.13px] tracking-[0.6px] uppercase">{text}</p>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="absolute h-[17.998px] left-0 top-0 w-[960.01px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#8a8a8a] text-[12px] text-nowrap top-[0.25px] tracking-[0.6px] uppercase">{text}</p>
    </div>
  );
}
type ParagraphTextProps = {
  text: string;
};

function ParagraphText({ text }: ParagraphTextProps) {
  return (
    <div className="h-[17.998px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#8a8a8a] text-[12px] text-nowrap top-[0.25px] tracking-[0.6px] uppercase">{text}</p>
    </div>
  );
}

export default function Nodux() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="NODUX">
      <div className="bg-[#fafaf8] h-[11021.143px] relative shrink-0 w-full" data-name="App">
        <div className="absolute content-stretch flex flex-col gap-[63.994px] h-[1270.205px] items-start left-[208px] pb-0 pt-[127.998px] px-[31.992px] top-0 w-[1023.994px]" data-name="Section">
          <div className="h-[380.967px] relative shrink-0 w-full" data-name="Container">
            <Text text="PRODUCT DESIGN · SISTEMAS / UX / NARRATIVA" />
            <div className="absolute h-[123.184px] left-0 top-[49.99px] w-[767.998px]" data-name="Heading 1">
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[61.6px] left-0 not-italic text-[#2a2a2a] text-[56px] top-[-0.75px] tracking-[-1.12px] w-[756px]">Sistema de Gestión Operativa para Equipos Distribuidos</p>
            </div>
            <div className="absolute h-[100.811px] left-0 top-[205.17px] w-[671.992px]" data-name="Paragraph">
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[33.6px] left-0 not-italic text-[#4a4a4a] text-[24px] top-[-1.13px] tracking-[-0.24px] w-[619px]">El problema no era la falta de herramientas, sino la imposibilidad de mantener claridad en procesos críticos dispersos entre múltiples sistemas.</p>
            </div>
            <div className="absolute content-stretch flex gap-[31.992px] h-[42.998px] items-start left-0 top-[337.97px] w-[960.01px]" data-name="Container">
              <Wrapper2 additionalClassNames="w-[176.436px]">
                <TextText text="Rol" additionalClassNames="w-[176.436px]" />
                <p className="absolute font-['Cousine:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#6b6b6b] text-[14px] text-nowrap top-[21.87px]">Lead Product Designer</p>
              </Wrapper2>
              <Wrapper2 additionalClassNames="w-[151.23px]">
                <TextText text="Contexto" additionalClassNames="w-[151.23px]" />
                <p className="absolute font-['Cousine:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#6b6b6b] text-[14px] text-nowrap top-[21.87px]">B2B SaaS · Startup</p>
              </Wrapper2>
              <Wrapper2 additionalClassNames="w-[243.643px]">
                <TextText text="Tipo" additionalClassNames="w-[243.643px]" />
                <p className="absolute font-['Cousine:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#6b6b6b] text-[14px] text-nowrap top-[21.87px]">Sistema complejo · UX crítico</p>
              </Wrapper2>
              <Wrapper2 additionalClassNames="w-[33.613px]">
                <TextText text="Año" additionalClassNames="w-[33.613px]" />
                <p className="absolute font-['Cousine:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#6b6b6b] text-[14px] text-nowrap top-[21.87px]">2024</p>
              </Wrapper2>
            </div>
          </div>
          <Wrapper additionalClassNames="h-[601.25px]" additionalClassNames1="h-[600px]" />
        </div>
        <div className="absolute h-[262.285px] left-[239.99px] top-[1366.2px] w-[960.01px]" data-name="Section">
          <div className="absolute content-stretch flex flex-col gap-[23.994px] h-[262.285px] items-start left-0 top-0 w-[277.334px]" data-name="Container">
            <ParagraphText text="01 · Contexto" />
            <div className="h-[76.797px] relative shrink-0 w-full" data-name="Heading 2">
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[38.4px] left-0 not-italic text-[#2a2a2a] text-[32px] top-0 tracking-[0.0862px] w-[212px]">Dónde existía el problema</p>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[23.994px] h-[262.285px] items-start left-[341.33px] top-0 w-[618.682px]" data-name="Container">
            <div className="h-[86.367px] relative shrink-0 w-full" data-name="Paragraph">
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28.8px] left-0 not-italic text-[#2a2a2a] text-[18px] top-[0.75px] tracking-[-0.6195px] w-[583px]">Una empresa de logística y distribución trabajaba con pedidos críticos que requerían coordinación entre ventas, operaciones, pagos y entregas. Todo sucedía en tiempo real, con margen mínimo para error.</p>
            </div>
            <div className="h-[76.758px] relative shrink-0 w-full" data-name="Paragraph">
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-0 not-italic text-[#4a4a4a] text-[16px] top-[-0.88px] tracking-[-0.4725px] w-[616px]">El equipo operativo gestionaba entre 80 y 120 pedidos diarios usando Excel, WhatsApp, correos y un CRM desactualizado. La información vivía dispersa y el control dependía de la memoria de cada persona.</p>
            </div>
            <div className="h-[51.172px] relative shrink-0 w-full" data-name="Paragraph">
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-0 not-italic text-[#4a4a4a] text-[16px] top-[-0.88px] tracking-[-0.4725px] w-[593px]">El contexto era de alta presión: clientes exigentes, procesos interdependientes y un equipo pequeño que no podía darse el lujo de perder tiempo buscando información.</p>
            </div>
          </div>
        </div>
        <div className="absolute h-[554.463px] left-[239.99px] top-[1820.48px] w-[960.01px]" data-name="Section">
          <div className="absolute content-stretch flex flex-col gap-[23.994px] h-[554.463px] items-start left-0 top-0 w-[277.334px]" data-name="Container">
            <ParagraphText text="02 · Problema" />
            <div className="h-[115.195px] relative shrink-0 w-full" data-name="Heading 2">
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[38.4px] left-0 not-italic text-[#2a2a2a] text-[32px] top-0 tracking-[0.0862px] w-[277px]">El problema no era la falta de datos. Era la falta de claridad.</p>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[31.992px] h-[554.463px] items-start left-[341.33px] top-0 w-[618.682px]" data-name="Container">
            <div className="h-[57.578px] relative shrink-0 w-full" data-name="Paragraph">
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28.8px] left-0 not-italic text-[#2a2a2a] text-[18px] top-[0.75px] tracking-[-0.6195px] w-[603px]">La información existía, pero nadie podía responder con certeza: ¿Este pedido está confirmado? ¿Ya se pagó? ¿Quién lo está gestionando?</p>
            </div>
            <div className="h-[279.912px] relative shrink-0 w-full" data-name="Container">
              <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[0px_0px_0px_1.875px] border-solid inset-0 pointer-events-none" />
              <div className="size-full">
                <div className="content-stretch flex flex-col gap-[15.996px] items-start pl-[25.869px] pr-0 py-0 relative size-full">
                  <div className="content-stretch flex flex-col gap-[3.994px] h-[75.977px] items-start relative shrink-0 w-full" data-name="Container">
                    <HeadingText text="Carga cognitiva insostenible" />
                    <div className="h-[47.988px] relative shrink-0 w-full" data-name="Paragraph">
                      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#6b6b6b] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[507px]">Cada operación requería revisar 3-4 lugares diferentes para confirmar información básica</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[3.994px] h-[51.982px] items-start relative shrink-0 w-full" data-name="Container">
                    <HeadingText text="Errores frecuentes en procesos críticos" />
                    <ParagraphText1 text="Pedidos duplicados, pagos no registrados, entregas mal coordinadas" />
                  </div>
                  <div className="content-stretch flex flex-col gap-[3.994px] h-[51.982px] items-start relative shrink-0 w-full" data-name="Container">
                    <HeadingText text="Falta de visibilidad del estado real" />
                    <ParagraphText1 text="Imposible saber qué estaba pendiente sin preguntar a cada persona involucrada" />
                  </div>
                  <div className="content-stretch flex flex-col gap-[3.994px] h-[51.982px] items-start relative shrink-0 w-full" data-name="Container">
                    <HeadingText text="Dependencia de memoria humana" />
                    <ParagraphText1 text="El conocimiento crítico vivía en las cabezas de 2-3 personas clave" />
                  </div>
                </div>
              </div>
            </div>
            <Wrapper1 additionalClassNames="bg-[#f5f4f0] h-[152.988px]">
              <div className="content-stretch flex flex-col gap-[7.998px] items-start pb-0 pl-[35.742px] pr-[31.992px] pt-[31.992px] relative size-full">
                <div className="h-[60px] relative shrink-0 w-full" data-name="Paragraph">
                  <p className="absolute font-['Inter:Italic',sans-serif] font-normal italic leading-[30px] left-0 text-[#2a2a2a] text-[20px] top-[0.13px] tracking-[-0.4492px] w-[527px]">{`"No necesitamos más features. Necesitamos saber qué está pasando sin tener que preguntar."`}</p>
                </div>
                <ParagraphText2 text="— Gerente de Operaciones, primera conversación" />
              </div>
            </Wrapper1>
          </div>
        </div>
        <div className="absolute h-[771.592px] left-[239.99px] top-[2566.93px] w-[960.01px]" data-name="Section">
          <div className="absolute content-stretch flex flex-col gap-[23.994px] h-[771.592px] items-start left-0 top-0 w-[277.334px]" data-name="Container">
            <ParagraphText text="03 · Enfoque" />
            <div className="h-[76.797px] relative shrink-0 w-full" data-name="Heading 2">
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[38.4px] left-0 not-italic text-[#2a2a2a] text-[32px] top-0 tracking-[0.0862px] w-[201px]">Cómo pensé el diseño</p>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[31.992px] h-[771.592px] items-start left-[341.33px] top-0 w-[618.682px]" data-name="Container">
            <div className="h-[57.578px] relative shrink-0 w-full" data-name="Paragraph">
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28.8px] left-0 not-italic text-[#2a2a2a] text-[18px] top-[0.75px] tracking-[-0.6195px] w-[567px]">No diseñé pantallas. Diseñé un sistema de comprensión. La interfaz vino después de entender cómo funcionaba realmente el trabajo del equipo.</p>
            </div>
            <div className="content-stretch flex flex-col gap-[31.992px] h-[682.021px] items-start relative shrink-0 w-full" data-name="Container">
              <div className="content-stretch flex flex-col gap-[11.992px] h-[126.162px] items-start relative shrink-0 w-full" data-name="Container">
                <HeadingText1 text="Priorizar estados sobre acciones" />
                <div className="h-[51.172px] relative shrink-0 w-full" data-name="Paragraph">
                  <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-0 not-italic text-[#4a4a4a] text-[16px] top-[-0.88px] tracking-[-0.3125px] w-[550px]">Antes de diseñar qué hacer, diseñé cómo entender en qué estado está cada elemento del sistema</p>
                </div>
                <ParagraphText3 text="→ Reducción de incertidumbre en el día a día" />
              </div>
              <div className="content-stretch flex flex-col gap-[11.992px] h-[100.576px] items-start relative shrink-0 w-full" data-name="Container">
                <HeadingText1 text="Hacer visible lo implícito" />
                <ParagraphText4 text="Convertir el conocimiento tácito del equipo en información explícita y accesible" />
                <ParagraphText3 text="→ Menos dependencia de personas clave" />
              </div>
              <div className="content-stretch flex flex-col gap-[11.992px] h-[126.162px] items-start relative shrink-0 w-full" data-name="Container">
                <HeadingText1 text="Diseñar para el peor día" />
                <div className="h-[51.172px] relative shrink-0 w-full" data-name="Paragraph">
                  <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-0 not-italic text-[#4a4a4a] text-[16px] top-[-0.88px] tracking-[-0.3125px] w-[547px]">Optimizar para días de alta carga y múltiples interrupciones, no para demos tranquilas</p>
                </div>
                <ParagraphText3 text="→ Sistema resiliente ante presión operativa" />
              </div>
              <div className="content-stretch flex flex-col gap-[11.992px] h-[100.576px] items-start relative shrink-0 w-full" data-name="Container">
                <HeadingText1 text="Reducir decisiones simultáneas" />
                <ParagraphText4 text="Guiar la atención hacia lo crítico, minimizar ruido visual y cognitivo" />
                <ParagraphText3 text="→ Menos carga mental en operaciones repetitivas" />
              </div>
              <div className="content-stretch flex flex-col gap-[11.992px] h-[100.576px] items-start relative shrink-0 w-full" data-name="Container">
                <HeadingText1 text="Construir sistema, no features aisladas" />
                <ParagraphText4 text="Cada decisión de diseño debía funcionar como parte de un lenguaje coherente" />
                <ParagraphText3 text="→ Escalabilidad y consistencia a largo plazo" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-[#f5f4f0] content-stretch flex flex-col gap-[63.994px] h-[1999.785px] items-start left-[208px] pb-0 pt-[95.996px] px-[31.992px] top-[3434.52px] w-[1023.994px]" data-name="Section">
          <div className="h-[137.988px] relative shrink-0 w-full" data-name="Container">
            <Text text="04 · Decisiones" />
            <div className="absolute h-[95.996px] left-0 top-[41.99px] w-[671.992px]" data-name="Heading 2">
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[48px] left-0 not-italic text-[#2a2a2a] text-[40px] top-0 tracking-[-0.0289px] w-[570px]">Decisiones de UX que marcaron la diferencia</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[47.998px] h-[1605.811px] items-start relative shrink-0 w-full" data-name="Container">
            <Container>
              <HeadingText2 text="Estados del sistema como elemento central" />
              <div className="content-stretch flex flex-col gap-[15.996px] h-[150.762px] items-start relative shrink-0 w-full" data-name="Container">
                <div className="content-stretch flex flex-col gap-[7.998px] h-[54.59px] items-start relative shrink-0 w-full" data-name="Container">
                  <ParagraphText5 text="Qué problema resolvía" />
                  <ParagraphText4 text="Imposibilidad de saber qué estaba pendiente, en proceso o completado sin revisar múltiples fuentes" />
                </div>
                <div className="content-stretch flex flex-col gap-[7.998px] h-[80.176px] items-start relative shrink-0 w-full" data-name="Container">
                  <ParagraphText5 text="Qué cambió para el usuario" />
                  <div className="h-[51.172px] relative shrink-0 w-full" data-name="Paragraph">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-0 not-italic text-[#2a2a2a] text-[16px] top-[-0.88px] tracking-[-0.3125px] w-[842px]">Cada pedido muestra explícitamente su estado actual: pendiente de confirmación, confirmado, en preparación, listo, entregado. Sin ambigüedad. El equipo puede ver de un vistazo qué requiere atención inmediata.</p>
                  </div>
                </div>
              </div>
            </Container>
            <Container>
              <HeadingText2 text="Jerarquía visual basada en prioridad operativa" />
              <div className="content-stretch flex flex-col gap-[15.996px] h-[150.762px] items-start relative shrink-0 w-full" data-name="Container">
                <div className="content-stretch flex flex-col gap-[7.998px] h-[54.59px] items-start relative shrink-0 w-full" data-name="Container">
                  <ParagraphText5 text="Qué problema resolvía" />
                  <ParagraphText4 text="Todo parecía igual de importante, generando parálisis por análisis en momentos de alta carga" />
                </div>
                <div className="content-stretch flex flex-col gap-[7.998px] h-[80.176px] items-start relative shrink-0 w-full" data-name="Container">
                  <ParagraphText5 text="Qué cambió para el usuario" />
                  <div className="h-[51.172px] relative shrink-0 w-full" data-name="Paragraph">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-0 not-italic text-[#2a2a2a] text-[16px] top-[-0.88px] tracking-[-0.3125px] w-[853px]">El sistema destaca automáticamente lo crítico: pedidos con tiempo límite próximo, pagos pendientes de confirmación, anomalías que requieren revisión. La atención se dirige donde más importa.</p>
                  </div>
                </div>
              </div>
            </Container>
            <Container>
              <HeadingText2 text="Contexto inline, no en modales separados" />
              <div className="content-stretch flex flex-col gap-[15.996px] h-[150.762px] items-start relative shrink-0 w-full" data-name="Container">
                <div className="content-stretch flex flex-col gap-[7.998px] h-[54.59px] items-start relative shrink-0 w-full" data-name="Container">
                  <ParagraphText5 text="Qué problema resolvía" />
                  <ParagraphText4 text="Constantemente perdían contexto al navegar entre ventanas para confirmar información relacionada" />
                </div>
                <div className="content-stretch flex flex-col gap-[7.998px] h-[80.176px] items-start relative shrink-0 w-full" data-name="Container">
                  <ParagraphText5 text="Qué cambió para el usuario" />
                  <div className="h-[51.172px] relative shrink-0 w-full" data-name="Paragraph">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-0 not-italic text-[#2a2a2a] text-[16px] top-[-0.88px] tracking-[-0.3125px] w-[856px]">La información relacionada se expande dentro del mismo flujo. Ver detalles de pago, historial de comunicación o datos del cliente sin perder el contexto del pedido principal.</p>
                  </div>
                </div>
              </div>
            </Container>
            <Container>
              <HeadingText2 text="Indicadores de responsabilidad visibles" />
              <div className="content-stretch flex flex-col gap-[15.996px] h-[150.762px] items-start relative shrink-0 w-full" data-name="Container">
                <div className="content-stretch flex flex-col gap-[7.998px] h-[54.59px] items-start relative shrink-0 w-full" data-name="Container">
                  <ParagraphText5 text="Qué problema resolvía" />
                  <ParagraphText4 text="Confusión sobre quién estaba a cargo de qué, generando duplicación de esfuerzos o tareas olvidadas" />
                </div>
                <div className="content-stretch flex flex-col gap-[7.998px] h-[80.176px] items-start relative shrink-0 w-full" data-name="Container">
                  <ParagraphText5 text="Qué cambió para el usuario" />
                  <div className="h-[51.172px] relative shrink-0 w-full" data-name="Paragraph">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-0 not-italic text-[#2a2a2a] text-[16px] top-[-0.88px] tracking-[-0.3125px] w-[818px]">Cada tarea muestra quién la tiene asignada y desde cuándo. Claridad total sobre accountability, sin necesidad de preguntar en el grupo de WhatsApp.</p>
                  </div>
                </div>
              </div>
            </Container>
            <Container>
              <HeadingText2 text="Registro automático de cambios críticos" />
              <div className="content-stretch flex flex-col gap-[15.996px] h-[150.762px] items-start relative shrink-0 w-full" data-name="Container">
                <div className="content-stretch flex flex-col gap-[7.998px] h-[54.59px] items-start relative shrink-0 w-full" data-name="Container">
                  <ParagraphText5 text="Qué problema resolvía" />
                  <ParagraphText4 text="Imposibilidad de rastrear qué había cambiado en un pedido cuando algo salía mal" />
                </div>
                <div className="content-stretch flex flex-col gap-[7.998px] h-[80.176px] items-start relative shrink-0 w-full" data-name="Container">
                  <ParagraphText5 text="Qué cambió para el usuario" />
                  <div className="h-[51.172px] relative shrink-0 w-full" data-name="Paragraph">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-0 not-italic text-[#2a2a2a] text-[16px] top-[-0.88px] tracking-[-0.3125px] w-[840px]">El sistema registra automáticamente quién modificó qué y cuándo. Ante un error, es posible reconstruir qué pasó sin depender de memoria o suposiciones.</p>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[63.994px] h-[2681.367px] items-start left-[208px] pb-0 pt-[95.996px] px-[31.992px] top-[5434.31px] w-[1023.994px]" data-name="Section">
          <div className="content-stretch flex flex-col gap-[23.994px] h-[80.391px] items-start relative shrink-0 w-full" data-name="Container">
            <ParagraphText text="05 · Producto" />
            <HeadingText3 text="Sistema en uso real" />
          </div>
          <div className="content-stretch flex flex-col gap-[63.994px] h-[2344.99px] items-start relative shrink-0 w-full" data-name="Container">
            <div className="content-stretch flex flex-col gap-[15.996px] h-[538.252px] items-start relative shrink-0 w-full" data-name="Container">
              <Wrapper additionalClassNames="h-[501.25px]" additionalClassNames1="h-[500px]" />
              <ParagraphText2 text="Vista principal: estados visibles, prioridades claras, acciones contextuales" />
            </div>
            <div className="content-stretch flex flex-col gap-[15.996px] h-[538.252px] items-start relative shrink-0 w-full" data-name="Container">
              <Wrapper additionalClassNames="h-[501.25px]" additionalClassNames1="h-[500px]" />
              <ParagraphText2 text="Detalle de pedido: información relacionada sin perder contexto" />
            </div>
            <div className="content-stretch flex flex-col gap-[15.996px] h-[538.252px] items-start relative shrink-0 w-full" data-name="Container">
              <Wrapper additionalClassNames="h-[501.25px]" additionalClassNames1="h-[500px]" />
              <ParagraphText2 text="Flujo operativo: transiciones de estado claras y rastreables" />
            </div>
            <div className="content-stretch flex flex-col gap-[15.996px] h-[538.252px] items-start relative shrink-0 w-full" data-name="Container">
              <Wrapper additionalClassNames="h-[501.25px]" additionalClassNames1="h-[500px]" />
              <ParagraphText2 text="Gestión de pagos: validación visual de información crítica" />
            </div>
          </div>
        </div>
        <div className="absolute h-[808.516px] left-[239.99px] top-[8211.67px] w-[960.01px]" data-name="Section">
          <div className="absolute content-stretch flex flex-col gap-[23.994px] h-[808.516px] items-start left-0 top-0 w-[277.334px]" data-name="Container">
            <ParagraphText text="06 · Impacto" />
            <div className="h-[76.797px] relative shrink-0 w-full" data-name="Heading 2">
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[38.4px] left-0 not-italic text-[#2a2a2a] text-[32px] top-0 tracking-[0.0862px] w-[233px]">Qué cambió en la práctica</p>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[31.992px] h-[808.516px] items-start left-[341.33px] top-0 w-[618.682px]" data-name="Container">
            <div className="h-[57.578px] relative shrink-0 w-full" data-name="Paragraph">
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28.8px] left-0 not-italic text-[#2a2a2a] text-[18px] top-[0.75px] tracking-[-0.6195px] w-[616px]">El impacto no se midió en métricas vanidosas, sino en cambios observables en cómo el equipo trabajaba día a día.</p>
            </div>
            <div className="content-stretch flex flex-col gap-[23.994px] h-[526.787px] items-start relative shrink-0 w-full" data-name="Container">
              <div className="h-[86.162px] relative shrink-0 w-full" data-name="Container">
                <Icon />
                <div className="absolute content-stretch flex flex-col gap-[7.998px] h-[86.162px] items-start left-[39.99px] top-0 w-[578.691px]" data-name="Container">
                  <HeadingText4 text="Reducción drástica de errores operativos" />
                  <div className="h-[51.172px] relative shrink-0 w-full" data-name="Paragraph">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-0 not-italic text-[#6b6b6b] text-[16px] top-[-0.88px] tracking-[-0.3125px] w-[502px]">Los errores por información desactualizada o ambigua prácticamente desaparecieron. El equipo ganó confianza en el sistema.</p>
                  </div>
                </div>
              </div>
              <div className="h-[86.162px] relative shrink-0 w-full" data-name="Container">
                <Icon />
                <div className="absolute content-stretch flex flex-col gap-[7.998px] h-[86.162px] items-start left-[39.99px] top-0 w-[578.691px]" data-name="Container">
                  <HeadingText4 text="Incorporación más rápida de nuevos integrantes" />
                  <div className="h-[51.172px] relative shrink-0 w-full" data-name="Paragraph">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-0 not-italic text-[#6b6b6b] text-[16px] top-[-0.88px] tracking-[-0.3125px] w-[566px]">Personas nuevas podían entender qué hacer sin depender constantemente de expertos. El conocimiento pasó de tácito a explícito.</p>
                  </div>
                </div>
              </div>
              <div className="h-[86.162px] relative shrink-0 w-full" data-name="Container">
                <Icon />
                <div className="absolute content-stretch flex flex-col gap-[7.998px] h-[86.162px] items-start left-[39.99px] top-0 w-[578.691px]" data-name="Container">
                  <HeadingText4 text="Menos interrupciones y consultas constantes" />
                  <div className="h-[51.172px] relative shrink-0 w-full" data-name="Paragraph">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-0 not-italic text-[#6b6b6b] text-[16px] top-[-0.88px] tracking-[-0.3125px] w-[561px]">{`Las preguntas de "¿qué pasó con este pedido?" disminuyeron drásticamente. La información estaba disponible cuando se necesitaba.`}</p>
                  </div>
                </div>
              </div>
              <div className="h-[86.162px] relative shrink-0 w-full" data-name="Container">
                <Icon />
                <div className="absolute content-stretch flex flex-col gap-[7.998px] h-[86.162px] items-start left-[39.99px] top-0 w-[578.691px]" data-name="Container">
                  <HeadingText4 text="Mayor claridad en situaciones de alta presión" />
                  <div className="h-[51.172px] relative shrink-0 w-full" data-name="Paragraph">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-0 not-italic text-[#6b6b6b] text-[16px] top-[-0.88px] tracking-[-0.3125px] w-[546px]">{`En días complejos, el sistema funcionaba mejor. El diseño para "el peor día" demostró su valor.`}</p>
                  </div>
                </div>
              </div>
              <div className="h-[86.162px] relative shrink-0 w-full" data-name="Container">
                <Icon />
                <div className="absolute content-stretch flex flex-col gap-[7.998px] h-[86.162px] items-start left-[39.99px] top-0 w-[578.691px]" data-name="Container">
                  <HeadingText4 text="Cambio en la conversación del equipo" />
                  <div className="h-[51.172px] relative shrink-0 w-full" data-name="Paragraph">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-0 not-italic text-[#6b6b6b] text-[16px] top-[-0.88px] tracking-[-0.3125px] w-[577px]">{`Las reuniones pasaron de "¿qué está pasando?" a "¿cómo mejoramos esto?". El tiempo se liberó para decisiones estratégicas.`}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#f5f4f0] h-[144.16px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
              <div className="size-full">
                <div className="content-stretch flex flex-col gap-[7.998px] items-start pb-0 pt-[31.992px] px-[31.992px] relative size-full">
                  <div className="h-[51.172px] relative shrink-0 w-full" data-name="Paragraph">
                    <p className="absolute font-['Inter:Italic',sans-serif] font-normal italic leading-[25.6px] left-0 text-[#2a2a2a] text-[16px] top-[-0.88px] tracking-[-0.3125px] w-[550px]">{`"Antes del sistema, cada día era apagar incendios. Ahora podemos anticipar problemas antes de que ocurran. Esa es la diferencia real."`}</p>
                  </div>
                  <ParagraphText2 text="— Coordinadora de Operaciones, 3 meses después del lanzamiento" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-[#f5f4f0] h-[913.691px] left-[208px] top-[9116.18px] w-[1023.994px]" data-name="Section">
          <div className="absolute h-[118.789px] left-[31.99px] top-[96px] w-[960.01px]" data-name="Container">
            <Text text="07 · Reflexión" />
            <div className="absolute h-[76.797px] left-0 top-[41.99px] w-[671.992px]" data-name="Heading 2">
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[38.4px] left-0 not-italic text-[#2a2a2a] text-[32px] top-0 tracking-[0.0862px] w-[642px]">Qué demuestra este proyecto sobre mi forma de diseñar</p>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[23.994px] h-[554.912px] items-start left-[31.99px] top-[262.78px] w-[767.998px]" data-name="Container">
            <div className="h-[91.787px] relative shrink-0 w-full" data-name="Paragraph">
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[30.6px] left-0 not-italic text-[#2a2a2a] text-[18px] top-[0.38px] tracking-[-0.4395px] w-[760px]">Este proyecto es representativo de cómo abordo problemas complejos en contextos reales. No diseño para impresionar en Behance. Diseño para que sistemas complejos sean comprensibles y utilizables por personas bajo presión.</p>
            </div>
            <div className="h-[122.383px] relative shrink-0 w-full" data-name="Paragraph">
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[30.6px] left-0 not-italic text-[#2a2a2a] text-[18px] text-nowrap top-[0.38px] tracking-[-0.4395px]">Mi enfoque prioriza</p>
              <TextText1 text="pensamiento sistémico" additionalClassNames="left-[158.71px] w-[184.6px]" />
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[30.6px] left-0 not-italic text-[#2a2a2a] text-[18px] top-[0.38px] tracking-[-0.4395px] w-[745px]">sobre features aisladas. Cada decisión de diseño considera cómo afecta al conjunto, cómo escala, cómo se mantiene en el tiempo. No busco soluciones brillantes que funcionen en demos. Busco soluciones resilientes que funcionen en lunes caóticos.</p>
            </div>
            <div className="h-[91.787px] relative shrink-0 w-full" data-name="Paragraph">
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[30.6px] left-0 not-italic text-[#2a2a2a] text-[18px] text-nowrap top-[0.38px] tracking-[-0.4395px]">Trabajo con</p>
              <TextText1 text="claridad como principio fundamental" additionalClassNames="left-[98.37px] w-[292.373px]" />
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[30.6px] left-0 not-italic text-[#2a2a2a] text-[18px] top-[0.38px] tracking-[-0.4395px] w-[745px]">. En productos operativos, la ambigüedad genera errores costosos. Por eso diseño estados explícitos, flujos predecibles, jerarquías que guían decisiones. El objetivo no es solo que funcione, sino que sea imposible malinterpretar.</p>
            </div>
            <div className="h-[91.787px] relative shrink-0 w-full" data-name="Paragraph">
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[30.6px] left-0 not-italic text-[#2a2a2a] text-[18px] text-nowrap top-[0.38px] tracking-[-0.4395px]">Diseño para</p>
              <TextText1 text="uso sostenido, no para primeras impresiones" additionalClassNames="left-[100.33px] w-[358.574px]" />
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[30.6px] left-0 not-italic text-[#2a2a2a] text-[18px] top-[0.38px] tracking-[-0.4395px] w-[743px]">. Me importa más cómo se siente el sistema después de 3 meses de uso diario que en la primera semana. Priorizo reducción de carga cognitiva, consistencia, y que el diseño envejezca bien.</p>
            </div>
            <div className="h-[61.191px] relative shrink-0 w-full" data-name="Paragraph">
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[30.6px] left-0 not-italic text-[#2a2a2a] text-[18px] text-nowrap top-[0.38px] tracking-[-0.4395px]">Como Product Designer, no vendo interfaces. Vendo</p>
              <TextText1 text="capacidad de resolver problemas reales" additionalClassNames="left-[424.72px] w-[318.633px]" />
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[30.6px] left-0 not-italic text-[#2a2a2a] text-[18px] text-nowrap top-[30.97px] tracking-[-0.4395px]">con diseño bien pensado, ejecutado con criterio, y construido para durar.</p>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[47.998px] h-[504.912px] items-start left-[208px] pb-0 pt-[95.996px] px-[31.992px] top-[10029.87px] w-[1023.994px]" data-name="Section">
          <div className="content-stretch flex flex-col gap-[23.994px] h-[80.391px] items-start relative shrink-0 w-full" data-name="Container">
            <ParagraphText text="08 · Explorar más" />
            <HeadingText3 text="Otras versiones de este caso" />
          </div>
          <div className="h-[184.531px] relative shrink-0 w-full" data-name="Container">
            <div className="absolute content-stretch flex flex-col gap-[15.996px] h-[184.531px] items-start left-0 pb-[1.875px] pt-[33.867px] px-[33.867px] rounded-[10px] top-0 w-[464.004px]" data-name="Button">
              <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[1.875px] border-solid inset-0 pointer-events-none rounded-[10px]" />
              <div className="content-stretch flex h-[30px] items-center justify-between relative shrink-0 w-full" data-name="Container">
                <HeadingText5 text="Caso completo" additionalClassNames="w-[131.885px]" />
                <Icon1 />
              </div>
              <div className="h-[44.805px] relative shrink-0 w-full" data-name="Paragraph">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.4px] left-0 not-italic text-[#6b6b6b] text-[14px] top-[0.5px] tracking-[-0.1504px] w-[397px]">Versión extendida con proceso de diseño detallado, wireframes, investigación de usuarios y evolución del sistema</p>
              </div>
              <ParagraphText text="Lectura de 12 minutos" />
            </div>
            <div className="absolute content-stretch flex flex-col gap-[15.996px] h-[184.531px] items-start left-[496px] pb-[1.875px] pt-[33.867px] px-[33.867px] rounded-[10px] top-0 w-[464.014px]" data-name="Button">
              <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[1.875px] border-solid inset-0 pointer-events-none rounded-[10px]" />
              <div className="content-stretch flex h-[30px] items-center justify-between relative shrink-0 w-full" data-name="Container">
                <HeadingText5 text="Versión CV / LinkedIn" additionalClassNames="w-[185.244px]" />
                <Icon1 />
              </div>
              <div className="h-[44.805px] relative shrink-0 w-full" data-name="Paragraph">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.4px] left-0 not-italic text-[#6b6b6b] text-[14px] top-[0.5px] tracking-[-0.1504px] w-[326px]">Resumen ejecutivo optimizado para reclutadores y evaluaciones rápidas de perfil profesional</p>
              </div>
              <ParagraphText text="Lectura de 2 minutos" />
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col h-[486.357px] items-start left-[208px] pb-0 pl-[175.996px] pr-[176.006px] pt-[96.621px] top-[10534.79px] w-[1023.994px]" data-name="Section">
          <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[0.625px_0px_0px] border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex flex-col gap-[31.992px] h-[293.74px] items-start relative shrink-0 w-full" data-name="Container">
            <div className="h-[72.012px] relative shrink-0 w-full" data-name="Paragraph">
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[36px] left-[336.35px] not-italic text-[#2a2a2a] text-[24px] text-center top-[-0.25px] tracking-[0.0703px] translate-x-[-50%] w-[594px]">Diseño productos digitales con claridad, criterio y enfoque sistémico.</p>
            </div>
            <div className="content-stretch flex gap-[23.994px] h-[59.736px] items-start justify-center relative shrink-0 w-full" data-name="Container">
              <div className="bg-[#2a2a2a] h-[59.736px] relative rounded-[10px] shrink-0 w-[241.689px]" data-name="Button">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.998px] items-center px-[31.992px] py-0 relative size-full">
                  <div className="basis-0 grow h-[23.994px] min-h-px min-w-px relative shrink-0" data-name="Text">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[77.5px] not-italic text-[16px] text-center text-nowrap text-white top-[-0.5px] tracking-[-0.3125px] translate-x-[-50%]">Conectar en LinkedIn</p>
                    </div>
                  </div>
                  <div className="relative shrink-0 size-[15.996px]" data-name="Icon">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <g id="Icon">
                        <path d={svgPaths.p137135c0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33301" />
                        <path d={svgPaths.p38636b70} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33301" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="h-[59.736px] relative rounded-[10px] shrink-0 w-[209.902px]" data-name="Button">
                <div aria-hidden="true" className="absolute border-[#e8e6e1] border-[1.875px] border-solid inset-0 pointer-events-none rounded-[10px]" />
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[105.37px] not-italic text-[#2a2a2a] text-[16px] text-center text-nowrap top-[17.37px] tracking-[-0.3125px] translate-x-[-50%]">Ver otros proyectos</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[7.998px] h-[98.008px] items-start pb-0 pt-[47.998px] px-0 relative shrink-0 w-full" data-name="Container">
              <div className="h-[21.006px] relative shrink-0 w-full" data-name="Paragraph">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[336.9px] not-italic text-[#8a8a8a] text-[14px] text-center text-nowrap top-[-0.13px] tracking-[-0.1504px] translate-x-[-50%]">Paola Zerpa · Product Designer</p>
              </div>
              <div className="h-[21.006px] relative shrink-0 w-full" data-name="Paragraph">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[335.54px] not-italic text-[#8a8a8a] text-[14px] text-center text-nowrap top-[-0.13px] tracking-[-0.1504px] translate-x-[-50%]">Especializada en sistemas, UX para productos complejos y diseño para uso real</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}