import { useState } from "react";

export const useDevtoolsState = () => {
  const [glassSectionWidth, setGlassSectionWidth] = useState(40);
  const [blur, setBlur] = useState(20);
  const [glassRotation, setGlassRotation] = useState(-16);
  const [gradientRotation, setGradientRotation] = useState(12);

  return {
    glassSectionWidth,
    setGlassSectionWidth,
    blur,
    setBlur,
    glassRotation,
    setGlassRotation,
    gradientRotation,
    setGradientRotation,
  };
};

type DevtoolsProps = ReturnType<typeof useDevtoolsState>;

export const Devtools = ({
  glassSectionWidth,
  setGlassSectionWidth,
  blur,
  setBlur,
  glassRotation,
  setGlassRotation,
  gradientRotation,
  setGradientRotation,
}: DevtoolsProps) => {
  return (
    <div className="fixed bottom-6 flex w-full justify-center">
      <div className="flex flex-wrap justify-center gap-3 rounded-xl bg-white/20 p-4 font-mono text-white backdrop-blur-lg">
        <div className="flex flex-col">
          <label>Glass section width</label>
          <input
            type="range"
            min="5"
            max="100"
            value={glassSectionWidth}
            onChange={(ev) => setGlassSectionWidth(Number(ev.target.value))}
          />
        </div>
        <div className="flex flex-col">
          <label>Blur</label>
          <input
            type="range"
            min="5"
            max="100"
            value={blur}
            onChange={(ev) => setBlur(Number(ev.target.value))}
          />
        </div>
        <div className="flex flex-col">
          <label>Glass rotation</label>
          <input
            type="range"
            min="-180"
            max="180"
            value={glassRotation}
            onChange={(ev) => setGlassRotation(Number(ev.target.value))}
          />
        </div>
        <div className="flex flex-col">
          <label>Gradient rotation</label>
          <input
            type="range"
            min="-180"
            max="180"
            value={gradientRotation}
            onChange={(ev) => setGradientRotation(Number(ev.target.value))}
          />
        </div>
      </div>
    </div>
  );
};
