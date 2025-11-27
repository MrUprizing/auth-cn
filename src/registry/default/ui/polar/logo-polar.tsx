interface IconProps extends React.SVGProps<SVGSVGElement> {
  strokeWidth?: number;
  size?: string;
}

export function LogoPolar({ size = "20px", ...props }: IconProps) {
  return (
    <svg
      viewBox="-0.5 -0.5 16 16"
      className="stroke-white dark:stroke-black"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id="Polar-Sh--Streamline-Iconoir"
      {...props}
    >
      <title>Polar Sh</title>
      <desc>
        {"\n    Polar Sh Streamline Icon: https://streamlinehq.com\n  "}
      </desc>
      <path
        d="M7.5 14.337187499999999C3.7239375000000003 14.337187499999999 0.6628125 11.276062499999998 0.6628125 7.5 0.6628125 3.7239375000000003 3.7239375000000003 0.6628125 7.5 0.6628125c3.7760624999999997 0 6.837187500000001 3.061125 6.837187500000001 6.837187500000001 0 3.7760624999999997 -3.061125 6.837187500000001 -6.837187500000001 6.837187500000001Z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
      />
      <path
        d="M7.5 14.337187499999999c-1.5104375 0 -2.7348749999999997 -3.061125 -2.7348749999999997 -6.837187500000001C4.765125 3.7239375000000003 5.9895625 0.6628125 7.5 0.6628125c1.5103749999999998 0 2.7348749999999997 3.061125 2.7348749999999997 6.837187500000001 0 3.7760624999999997 -1.2245 6.837187500000001 -2.7348749999999997 6.837187500000001Z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
      />
      <path
        d="M5.4488125 13.653500000000001c-2.051125 -0.6837500000000001 -2.7348749999999997 -3.6845624999999997 -2.7348749999999997 -5.811625 0 -2.1270625 1.025625 -4.7860625 3.418625 -6.495375"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
      />
      <path
        d="M9.551187500000001 1.3464999999999998c2.051125 0.6837500000000001 2.7348749999999997 3.6846250000000005 2.7348749999999997 5.811625 0 2.1270625 -1.025625 4.7860625 -3.418625 6.495375"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
      />
    </svg>
  );
}
