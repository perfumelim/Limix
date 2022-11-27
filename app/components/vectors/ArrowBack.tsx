import * as React from 'react'
import { SVGProps } from 'react'
const SvgArrowBack = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" {...props} className="w-4 h-4">
    <path d="M24 40 8 24 24 8l2.1 2.1-12.4 12.4H40v3H13.7l12.4 12.4Z" />
  </svg>
)
export default SvgArrowBack
