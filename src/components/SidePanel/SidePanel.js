import React from 'react'
import { Menu } from 'semantic-ui-react'
import UserPanel from './UserPanel'
// 用户界面左手面
class SidePanel extends React.Component {
  render() {
    return (
      <Menu
        size="large"
        inverted
        fixed="left"
        vertical
        style={{ background: "#4c3c4c", fonSize: "1.2rem" }}
      >
        <UserPanel />
      </Menu>
    )
  }
}

export default SidePanel
