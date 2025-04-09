import { IconProps } from './types'

const Icon: React.FC<IconProps> = ({
  icon,
  currentColor = 'white',
  className
}) => {
  switch (icon) {
    case 'arrow':
      return (
        <svg
          width="9"
          height="7"
          viewBox="0 0 9 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <path
            d="M4.50002 0.309143L8.75003 6.30914H0.25L4.50002 0.309143Z"
            fill={currentColor}
          />
        </svg>
      )
    default:
      return null
  }
}

export default Icon
