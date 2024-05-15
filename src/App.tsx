import { Devtools, useDevtoolsState } from "./devtools";
import { useGetPointerMovement } from "./utils/use-get-pointer-movement";

function App() {
  const pointerProps = useGetPointerMovement(true);
  const devtoolsState = useDevtoolsState();

  return (
    <div className="min-h-screen bg-black font-sans">
      <div
        style={
          {
            "--glassSectionWidth": `${devtoolsState.glassSectionWidth}px`,
            "--blur": `${devtoolsState.blur}px`,
            "--glassRotation": `${devtoolsState.glassRotation}deg`,
            "--gradientRotation": `${devtoolsState.gradientRotation}deg`,
          } as React.CSSProperties
        }
        {...pointerProps}
        className="circular-fadeout grid h-full min-h-screen w-full place-items-center overflow-clip bg-black"
      >
        <div
          className="relative grid h-full w-full place-items-center [grid-area:1/1]"
          role="figure"
        >
          <div className="h-1/2 w-1/2 rotate-[var(--gradientRotation,12deg)] rounded-[3vw] bg-primary-gradient mix-blend-hard-light"></div>
          <div className="absolute inset-0 translate-x-[calc(var(--x,0)*5%)] translate-y-[calc(var(--y,0)*5%)] rotate-[var(--glassRotation,-16deg)] scale-[2] bg-frost bg-[size:var(--glassSectionWidth,20px)] mix-blend-color-dodge backdrop-blur-[var(--blur,20px)]"></div>
        </div>
        <div className="mix-blend-exclusion [grid-area:1/1]">
          <h1 className="text-violet text-[10vw] font-semibold leading-snug">
            Frosted Glass
          </h1>
        </div>
      </div>

      <Devtools {...devtoolsState} />
    </div>
  );
}

export default App;
