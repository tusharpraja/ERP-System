import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderToggler,
  CHeaderNav,
  CForm,
  CFormInput,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilMenu, cilSearch, cilBell } from '@coreui/icons'
import { AppHeaderDropdown } from './index'

const AppHeader = () => {
  const headerRef = useRef(null)
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  useEffect(() => {
    const onScroll = () => {
      headerRef.current?.classList.toggle(
        'shadow-sm',
        window.scrollY > 0,
      )
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <CHeader position="sticky" className="mb-4 p-0" ref={headerRef} style={{ height: '76px' }}>
      <CContainer
        fluid
        className="d-flex align-items-center px-4"
        style={{ height: '76px' }}
      >
        {/* Sidebar toggler */}
        <CHeaderToggler
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
          className="p-2"
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>

        {/* Centered, small search bar */}
        <CForm
          className="mx-auto"
          style={{ width: '250px' }}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="input-group" style={{ height: '32px' }}>
            <CFormInput
              type="search"
              placeholder="Search..."
              className="rounded-start"
              style={{ height: '32px' }}
            />
            <button
              type="submit"
              className="btn btn-outline-secondary rounded-end"
              style={{ height: '32px' }}
            >
              <CIcon icon={cilSearch} />
            </button>
          </div>
        </CForm>

        {/* Right‐side nav: notifications + profile */}
        <CHeaderNav className="d-flex align-items-center">
          <CDropdown variant="nav-item" placement="bottom-end">
            <CDropdownToggle caret={false} className="p-2">
              <CIcon icon={cilBell} size="lg" />
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem header className="bg-light fw-bold">
                Notifications
              </CDropdownItem>
              <CDropdownItem>🔔 You have a new message from Admin</CDropdownItem>
              <CDropdownItem>✅ Task "Project Update" marked as complete</CDropdownItem>
              <CDropdownItem>📅 Meeting scheduled for 3 PM today</CDropdownItem>
              <CDropdownItem>📢 New company policy has been published</CDropdownItem>
              <CDropdownItem href="/notifications" className="text-center text-primary">
                View all notifications
              </CDropdownItem>
            </CDropdownMenu>
          </CDropdown>

          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
