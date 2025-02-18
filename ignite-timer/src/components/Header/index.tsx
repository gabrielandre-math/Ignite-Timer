import { HeaderContainer } from "./styles"
import IgniteLogo from '../../assets/Ignite-logo.svg'
import { Scroll, Timer } from "phosphor-react"
import { NavLink } from "react-router-dom"
export const Header = () => {
  return (
    <HeaderContainer>
      <img src={IgniteLogo} />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}