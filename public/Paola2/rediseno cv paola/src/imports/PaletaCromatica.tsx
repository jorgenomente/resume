function Container() {
  return <div className="absolute bg-[#c7b9ff] left-[1134px] rounded-[20px] shadow-[0px_4px_60px_0px_rgba(0,0,0,0.04)] size-[120px] top-0" data-name="Container" />;
}

function Container1() {
  return <div className="absolute bg-[#f47dcf] left-[972px] rounded-[20px] shadow-[0px_4px_60px_0px_rgba(0,0,0,0.04)] size-[120px] top-0" data-name="Container" />;
}

function Container2() {
  return <div className="absolute bg-[#f3d9a4] left-[810px] rounded-[20px] shadow-[0px_4px_60px_0px_rgba(0,0,0,0.04)] size-[120px] top-0" data-name="Container" />;
}

function Container3() {
  return <div className="absolute bg-[#d7a86e] left-[648px] rounded-[20px] shadow-[0px_4px_60px_0px_rgba(0,0,0,0.04)] size-[120px] top-0" data-name="Container" />;
}

function Container4() {
  return <div className="absolute bg-[#88a879] left-[486px] rounded-[20px] shadow-[0px_4px_60px_0px_rgba(0,0,0,0.04)] size-[120px] top-0" data-name="Container" />;
}

function Container5() {
  return <div className="absolute bg-[#425a41] left-[324px] rounded-[20px] shadow-[0px_4px_60px_0px_rgba(0,0,0,0.04)] size-[120px] top-0" data-name="Container" />;
}

function Container6() {
  return <div className="absolute bg-[#f6f1e7] left-[162px] rounded-[20px] shadow-[0px_4px_60px_0px_rgba(0,0,0,0.04)] size-[120px] top-0" data-name="Container" />;
}

function Container7() {
  return <div className="absolute bg-[#13293d] left-0 rounded-[20px] shadow-[0px_4px_60px_0px_rgba(0,0,0,0.04)] size-[120px] top-0" data-name="Container" />;
}

export default function PaletaCromatica() {
  return (
    <div className="relative size-full" data-name="Paleta cromatica">
      <Container />
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
      <Container6 />
      <Container7 />
    </div>
  );
}