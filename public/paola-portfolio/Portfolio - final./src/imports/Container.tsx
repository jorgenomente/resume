import imgHomePage from "figma:asset/f47c55f1d88b26a37e67343871dc9d0591019bb5.png";

function HomePage() {
  return (
    <div className="absolute h-[504.004px] left-0 top-0 w-[1152.012px]" data-name="HomePage">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHomePage} />
    </div>
  );
}

function HomePage1() {
  return <div className="absolute bg-[#2a2a2a] h-[504.004px] left-0 opacity-[0.44] top-0 w-[1152.012px]" data-name="HomePage" />;
}

function HomePage2() {
  return <div className="absolute h-[504.004px] left-0 opacity-20 top-0 w-[1152.012px]" data-name="HomePage" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1152 504\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -98.683 -98.683 0 230.4 151.2)\\'><stop stop-color=\\'rgba(212,168,156,0.3)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(106,84,78,0.15)\\' offset=\\'0.25\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'0.5\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1152 504\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -98.683 -98.683 0 921.61 352.8)\\'><stop stop-color=\\'rgba(184,149,106,0.25)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(92,75,53,0.125)\\' offset=\\'0.25\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'0.5\\'/></radialGradient></defs></svg>')" }} />;
}

export default function Container() {
  return (
    <div className="overflow-clip relative rounded-[10px] size-full" data-name="Container">
      <HomePage />
      <HomePage1 />
      <HomePage2 />
    </div>
  );
}