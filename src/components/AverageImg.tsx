import { useEffect, useRef } from "react";
interface Prop {
  url: string;
  setPrimaryColor: (primary: string) => void;
}

const AverageImg = ({ url, setPrimaryColor }: Prop) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;
    image.crossOrigin = "Anonymous";
    image.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");

      canvas.width = image.width;
      canvas.height = image.height;
      ctx?.drawImage(image, 0, 0);

      const imgData = ctx?.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imgData?.data;
      // console.log({ pixels });

      let totalR = 0,
        totalG = 0,
        totalB = 0;
      if (!pixels || !pixels.length) return;

      for (let i = 0; i < pixels.length; i += 4) {
        totalR += pixels[i];
        totalG += pixels[i + 1];
        totalB += pixels[i + 2];
      }

      const totalPixels = pixels.length / 4;

      const avgR = Math.round(totalR / totalPixels);
      const avgG = Math.round(totalG / totalPixels);
      const avgB = Math.round(totalB / totalPixels);

      setPrimaryColor(`rgb(${avgR}, ${avgG}, ${avgB})`);

      console.log(`Average color: RGB(${avgR}, ${avgG}, ${avgB})`);
    };
  }, [url]);

  return (
    <>
      <img
        alt="Image"
        ref={imageRef}
        className="image absolute z-1 w-30 h-30 object-contain rounded-2"
        src={url}
      />
      <canvas ref={canvasRef} style={{ display: "none" }} />
    </>
  );
};

export default AverageImg;
