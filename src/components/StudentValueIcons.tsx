import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const baseProps = {
  'aria-hidden': true,
  fill: 'none',
  focusable: false,
  stroke: 'currentColor',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  strokeWidth: 1.8,
  viewBox: '0 0 64 64',
} satisfies IconProps

export function OnlineMeetingIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M13 18.5h28a8 8 0 0 1 8 8v9a8 8 0 0 1-8 8H28.5L18 52v-8.5h-5a8 8 0 0 1-8-8v-9a8 8 0 0 1 8-8Z" />
      <path d="M22 28h13a4 4 0 0 1 4 4v2.5a4 4 0 0 1-4 4H22a4 4 0 0 1-4-4V32a4 4 0 0 1 4-4Z" />
      <path d="m39 32 8-5v13l-8-5" />
      <path d="M51 13.5c1.2 3 2.6 4.4 5.5 5.5-2.9 1.1-4.3 2.5-5.5 5.5-1.1-3-2.5-4.4-5.5-5.5 3-1.1 4.4-2.5 5.5-5.5Z" />
    </svg>
  )
}

export function TechniqueReviewIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M9 30c7.5-8 24-11 37-2" />
      <path d="M12 33c7.5-4 20-6 32-1" opacity="0.55" />
      <path d="M18 28c-.8 2-1.2 4-1.2 6" />
      <path d="M24 25.5c-1.6 2.3-2.7 4.8-3.2 7.5" />
      <path d="M31 24c-2 2.3-3.5 5-4.4 8" />
      <circle cx="38" cy="39" r="10.5" />
      <path d="m45.5 46.5 8.5 8.5" />
      <path d="M34 40c3.2-3.8 7.5-5.1 12-3.9" />
      <path d="M53 12.5c1 2.4 2.2 3.6 4.5 4.5-2.3.9-3.5 2.1-4.5 4.5-.9-2.4-2.1-3.6-4.5-4.5 2.4-.9 3.6-2.1 4.5-4.5Z" />
    </svg>
  )
}

export function MaterialsSourcingIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M35 21h15l3 31H21l2-25" />
      <path d="M31 21c0-6 3-10 8-10s8 4 8 10" />
      <path d="M29 21c0-4 2-7 5-8.8" opacity="0.55" />
      <path d="M16 30h9a6 6 0 0 1 6 6v13a6 6 0 0 1-6 6h-9a6 6 0 0 1-6-6V36a6 6 0 0 1 6-6Z" />
      <path d="M17.5 30v-7.5a3.5 3.5 0 0 1 7 0V30" />
      <path d="M38 33.5 32 50" />
      <path d="M46 34.5 38 51" />
      <path d="M44 33.5 49 36" />
      <path d="M53 11.5c1 2.4 2.2 3.6 4.5 4.5-2.3.9-3.5 2.1-4.5 4.5-.9-2.4-2.1-3.6-4.5-4.5 2.4-.9 3.6-2.1 4.5-4.5Z" />
    </svg>
  )
}

export function IndicationsIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M34 9c8 3.5 12 10.5 10.5 19.5-.5 3.2 3.5 6 3.5 9.5 0 2.2-2.4 3.4-4.2 4" />
      <path d="M27.5 13C20 18 15.8 26.5 17 36c.8 6.7 5.7 12.4 12.5 15.2" />
      <path d="M30 54c.3-5.2 2.1-9.6 5.2-13" />
      <path d="M30.5 28c3.4-4 7.4-5.3 11.8-3.8" />
      <path d="M32 34.5c1.8 1.4 4.1 1.4 5.8 0" />
      <path d="M23 38c4.8 8 13 11 21.5 8" />
      <circle cx="16" cy="20" r="8" />
      <path d="m12 20 2.5 2.5L20 17" />
      <circle cx="49" cy="49" r="7" />
      <path d="M46 49h6" />
    </svg>
  )
}

export function PracticeVideoIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M8 19a7 7 0 0 1 7-7h25a7 7 0 0 1 7 7v18a7 7 0 0 1-7 7H15a7 7 0 0 1-7-7V19Z" />
      <path d="m25 23 12 8-12 8V23Z" />
      <path d="M43 17c7 2.8 10.5 8.4 9.5 16-.3 2.2 2.8 4.2 2.8 6.5 0 1.9-2.1 2.9-3.6 3.5" />
      <path d="M48 28c2.8-1.7 5-1.6 6.8.2" />
      <path d="M48.5 35.5c1.2 1.1 2.5 1.1 3.8.1" />
      <path d="M45.5 43c2.5 2.5 5.5 3.4 8.8 2.5" />
      <path d="M11 12.5c1 2.4 2.2 3.6 4.5 4.5-2.3.9-3.5 2.1-4.5 4.5-.9-2.4-2.1-3.6-4.5-4.5 2.4-.9 3.6-2.1 4.5-4.5Z" />
    </svg>
  )
}

export function ServiceSystemIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M17 47V36c0-5 4-9 9-9h9c5 0 9-4 9-9v-5" />
      <circle cx="15" cy="49" r="7" />
      <circle cx="32" cy="27" r="7" />
      <circle cx="49" cy="12" r="7" />
      <path d="M49 12h13" />
      <path d="m57 7 5 5-5 5" />
      <path d="M49 9v7" />
      <path d="M47 9h4l-2 2" />
      <path d="M32 23.5c.8 2 1.8 3 3.8 3.8-2 .8-3 1.8-3.8 3.8-.8-2-1.8-3-3.8-3.8 2-.8 3-1.8 3.8-3.8Z" />
      <path d="M15 49h.1" />
    </svg>
  )
}
