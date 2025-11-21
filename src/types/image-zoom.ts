import type { ImgHTMLAttributes } from "react";
import type { UncontrolledProps } from "react-medium-image-zoom";

export type ImageZoomProps = {
  /**
   * Image source (string or StaticImageData)
   */
  src: string | { src: string; width: number; height: number };

  /**
   * Image alt text
   */
  alt: string;

  /**
   * Image width
   */
  width?: number | string;

  /**
   * Image height
   */
  height?: number | string;

  /**
   * Image props when zoom in
   */
  zoomInProps?: ImgHTMLAttributes<HTMLImageElement>;

  /**
   * Props for `react-medium-image-zoom`
   */
  rmiz?: UncontrolledProps;
};
