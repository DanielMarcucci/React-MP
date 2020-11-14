import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/sidebar.css'

interface ISidebarProps {
  visible: Boolean;
  onVisible?: (() => void) | undefined;
}

const Sidebar = (props: ISidebarProps) => {
  let { visible, onVisible } = props

  return (
    <nav className={`bg-gray-900 sidebar mobileMenu ${visible ? 'open' : ''}`}>
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item text-center mb-3">
            <i className="fas fa-user fa-7x my-4" />
            <p className="card-text m-0"><b className="text-muted">Pedro Ramón</b></p>
            <p className="card-text"><small className="text-muted">Digitador</small></p>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/prosecutorsOffices" onClick={onVisible}>
              <i className="far fa-building mr-2" />
              Fiscalías
            </Link>
            <Link className="nav-link" to="/googleMaps" onClick={onVisible}>
              <i className="fas fa-map-marker-alt mr-2" />
              Mapa
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default React.memo(Sidebar)
