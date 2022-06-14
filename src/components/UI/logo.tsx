import { NavLink } from "react-router-dom"
import logo from "../../images/logo.svg"

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <NavLink to="/" className={`${className ? `${className}` : ""}`}>
      <img src={logo} alt="Hekto logo" className="w-24 h-8" />
    </NavLink>
  )
}
