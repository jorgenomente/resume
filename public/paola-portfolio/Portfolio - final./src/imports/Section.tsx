import clsx from "clsx";
type HomePageBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function HomePageBackgroundImageAndText({ text, additionalClassNames = "" }: HomePageBackgroundImageAndTextProps) {
  return (
    <div className={clsx("absolute bg-[rgba(240,237,232,0.12)] border-[0.625px] border-[rgba(240,237,232,0.15)] border-solid h-[25.742px] rounded-[4px] top-[23.99px]", additionalClassNames)}>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.512px] left-[10px] not-italic text-[#e5e1db] text-[11.008px] text-nowrap top-[4.24px] tracking-[0.1101px]">{text}</p>
    </div>
  );
}
type HeroVariantControlBackgroundImageAndTextProps = {
  text: string;
};

function HeroVariantControlBackgroundImageAndText({ text }: HeroVariantControlBackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex h-[15.625px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.512px] not-italic relative shrink-0 text-[#9a9a9a] text-[13.008px] text-center text-nowrap tracking-[-0.3252px]">{text}</p>
    </div>
  );
}

export default function Section() {
  return (
    <div className="relative size-full" data-name="Section">
      <div className="absolute bg-[rgba(245,244,240,0.6)] h-[35.488px] left-[31.99px] overflow-clip rounded-[10px] top-[96px] w-[1152.012px]" data-name="HeroVariantControl">
        <div className="absolute h-[31.504px] left-[1.99px] rounded-[8px] top-[1.99px] w-[86.162px]" data-name="Button">
          <div className="absolute bg-[rgba(255,255,255,0.9)] border-[#e8e6e1] border-[0.625px] border-solid h-[31.504px] left-0 rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-0 w-[86.162px]" data-name="Container" />
          <div className="absolute content-stretch flex h-[15.625px] items-start left-[16px] top-[7.87px] w-[54.17px]" data-name="HeroVariantControl">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[19.512px] not-italic relative shrink-0 text-[#2a2a2a] text-[13.008px] text-center text-nowrap tracking-[-0.3252px]">Narrativa</p>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col h-[31.504px] items-start left-[92.15px] pb-0 pt-[7.871px] px-[15.996px] rounded-[8px] top-[1.99px] w-[76.738px]" data-name="Button">
          <HeroVariantControlBackgroundImageAndText text="Usuario" />
        </div>
        <div className="absolute content-stretch flex flex-col h-[31.504px] items-start left-[172.88px] pb-0 pt-[7.871px] px-[15.996px] rounded-[8px] top-[1.99px] w-[85.244px]" data-name="Button">
          <HeroVariantControlBackgroundImageAndText text="Sistemas" />
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col h-[442px] items-start left-[32.37px] pb-0 pt-[-4px] px-0 top-[721.01px] w-[768px]" data-name="Container">
        <div className="h-[456.65px] relative shrink-0 w-full" data-name="Container">
          <div className="absolute h-[20.811px] left-0 top-0 w-[767.998px]" data-name="Paragraph">
            <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20.813px] left-0 not-italic text-[#e8d4cc] text-[13.008px] text-nowrap top-[0.5px] tracking-[1.0406px] uppercase">Narrativa · Sentido · Ritmo</p>
          </div>
          <div className="absolute h-[37.793px] left-0 top-[68.81px] w-[767.998px]" data-name="HomePage">
            <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[37.8px] left-0 not-italic text-[#f5f2ee] text-[28px] text-nowrap top-[-0.13px] tracking-[-0.42px]">Diseño experiencias donde el sentido guía la forma.</p>
          </div>
          <div className="absolute h-[73.828px] left-0 top-[154.6px] w-[607.998px]" data-name="HomePage">
            <div className="absolute h-[49.541px] left-0 top-[19.75px] w-[607.9px]" data-name="Text">
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28.914px] left-0 not-italic text-[#f5f2ee] text-[17.008px] top-[-4px] tracking-[-0.1701px] w-[608px]">Trabajo con narrativa, tono y estructura para que un producto se sienta claro, humano y</p>
            </div>
            <div className="absolute content-stretch flex h-[20.625px] items-start left-[81.91px] top-[48.66px] w-[93.252px]" data-name="Text">
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28.914px] not-italic relative shrink-0 text-[#f5c4b8] text-[17.008px] text-nowrap tracking-[-0.1701px]">consistente</p>
            </div>
            <div className="absolute content-stretch flex h-[20.625px] items-start left-[175.17px] top-[48.66px] w-[105.869px]" data-name="Text">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28.914px] not-italic relative shrink-0 text-[#f5f2ee] text-[17.008px] text-nowrap tracking-[-0.1701px]">en el tiempo.</p>
            </div>
          </div>
          <div className="absolute h-[49.736px] left-0 top-[276.43px] w-[767.998px]" data-name="Container">
            <HomePageBackgroundImageAndText text="Narrativa" additionalClassNames="left-0 w-[69.902px]" />
            <div className="absolute bg-[rgba(240,237,232,0.12)] border-[0.625px] border-[rgba(240,237,232,0.15)] border-solid h-[25.742px] left-[77.9px] rounded-[4px] top-[23.99px] w-[116.133px]" data-name="HomePage">
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.512px] left-[10px] not-italic text-[#e5e1db] text-[11.008px] text-nowrap top-[4.24px] tracking-[0.1101px]">{`Tono & microcopy`}</p>
            </div>
            <HomePageBackgroundImageAndText text="Estructura editorial" additionalClassNames="left-[202.03px] w-[122.109px]" />
          </div>
          <div className="absolute h-[82.49px] left-0 top-[374.16px] w-[767.998px]" data-name="Container">
            <div className="absolute bg-[#2a2a2a] h-[50.498px] left-0 rounded-[10px] top-[31.99px] w-[197.188px]" data-name="Link">
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.512px] left-[98.99px] not-italic text-[15.008px] text-center text-nowrap text-white top-[12.87px] translate-x-[-50%]">Explorar mi trabajo</p>
            </div>
            <div className="absolute h-[22.51px] left-[221.18px] top-[45.99px] w-[198.652px]" data-name="Link">
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.512px] left-0 not-italic text-[#f5f2ee] text-[15.008px] text-nowrap top-[-1.13px]">Cómo trabajo el lenguaje</p>
              <div className="absolute h-[22.51px] left-[184.33px] top-0 w-[14.326px]" data-name="HomePage">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.512px] left-0 not-italic text-[#f5f2ee] text-[15.008px] text-nowrap top-[-1.13px]">→</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[504.004px] left-[31.99px] overflow-clip rounded-[10px] top-[195.48px] w-[1152.012px]" data-name="Container">
        <div className="absolute bottom-[8.48px] h-[95.996px] left-[0.38px] opacity-[0.92] w-[767.998px]" data-name="Heading 1">
          <p className="absolute bg-clip-text font-['Inter:Bold',sans-serif] font-bold leading-[48px] left-0 not-italic text-[40px] text-[rgba(42,42,42,0)] top-[-0.63px] tracking-[-0.8px] w-[652px]" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgba(42, 42, 42, 0) 0%, rgba(42, 42, 42, 0) 100%), linear-gradient(162.476deg, rgb(212, 168, 156) 8.4861%, rgb(229, 181, 176) 45.849%, rgb(201, 168, 106) 91.514%)" }}>
            Product Designer especializada en sistemas y procesos reales
          </p>
        </div>
        <div className="absolute h-[504.004px] left-0 top-0 w-[1152.012px]" data-name="HomePage" />
        <div className="absolute bg-[#2a2a2a] h-[504.004px] left-0 opacity-[0.44] top-0 w-[1152.012px]" data-name="HomePage" />
        <div className="absolute h-[504.004px] left-0 opacity-20 top-0 w-[1152.012px]" data-name="HomePage" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1152 504\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -98.683 -98.683 0 230.4 151.2)\\'><stop stop-color=\\'rgba(212,168,156,0.3)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(106,84,78,0.15)\\' offset=\\'0.25\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'0.5\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1152 504\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -98.683 -98.683 0 921.61 352.8)\\'><stop stop-color=\\'rgba(184,149,106,0.25)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(92,75,53,0.125)\\' offset=\\'0.25\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'0.5\\'/></radialGradient></defs></svg>')" }} />
      </div>
    </div>
  );
}