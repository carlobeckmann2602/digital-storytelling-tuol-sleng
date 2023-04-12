import { Chapter, CHAPTERS } from '../../../helpers/constants'
import './Navbar.scss'
import { useState } from 'react'
import classNames from 'classnames'
import { BsArrowLeft } from 'react-icons/bs'
import { BsArrowRight } from 'react-icons/bs'

interface NavbarProps {
  currentChapter: Chapter
}

function Navbar(props: NavbarProps) {
  const currentKey = props.currentChapter
  const [sidemenu, setSidemenu] = useState(false)

  const showSidemenu = () => {
    setSidemenu(!sidemenu)
    if (!sidemenu) {
      if (typeof window != 'undefined' && window.document) {
        document.body.style.overflow = 'hidden'
      }
    } else {
      document.body.style.overflow = 'unset'
    }
  }

  function renderNavItem(
    key: string,
    value: { time: string; title: string; place: string; person: string },
  ): JSX.Element {
    return (
      <li
        key={key}
        className={classNames({ active: currentKey === key }, value.person, 'navbar-item')}
      >
        <a href={`#${key}`} key={key}>
          {value.title}
        </a>
      </li>
    )
  }

  return (
    <>
      <div className='navbar' onClick={showSidemenu}>
        <BsArrowLeft className='icon' /> <span>Menü</span>
      </div>
      <div className={sidemenu ? 'nav-overlay active' : 'nav-overlay'} onClick={showSidemenu}></div>
      <nav className={sidemenu ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidemenu}>
          <li>
            <ul className='header-items'>
              <li>
                <a href='#GENERAL_INFO'>Projektinformationen</a>
              </li>
              <li className='navbar-toggle'>
                <span>Menü</span>
                <BsArrowRight className='icon' />
              </li>
            </ul>
          </li>
          <li>
            <ul className='title-items'>
              {Array.from(CHAPTERS).map(([key, value]) => {
                return renderNavItem(key, value)
              })}
            </ul>
          </li>
          <li></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
