//
import React from 'react'
//
import { Grid, Header, Icon, Dropdown } from 'semantic-ui-react';
import firebase from '../../firebase'
// 用户界面
class UserPanel extends React.Component {
  //
  dropdownOptions = () => [
    //
    {
      key: "user",
      text: (
        <span>
          登錄為 <strong>用戶</strong>
        </span>
      ),
      disabled: true
    },
    //
    {
      key: "avatar",
      text: <span>改變頭像</span>
    },
    //
    {
      key: "signout",
      text: <span onClick={this.handleSignout}>登出</span>
    },
  ]

  handleSignout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => console.log("登出!!!"))
  }

  render() {
    return(
      <Grid style={{ background: "#4c3c4c" }}>
        <Grid.Column>
          <Grid.Row style={{ padding: "1.2em", margin: 0 }}>
            {/* App header */}
            <Header inverted floated="left" as="h2">
              <Icon name="code" />
              <Header.Content>BrainStone</Header.Content>
            </Header>

          </Grid.Row>

          {/* Usre Dropdown */}
          <Header style={{ padding: "0.25em" }} as="h4" inverted>
            <Dropdown trigger={
              <span>用戶</span>
            } options={this.dropdownOptions()}/>
          </Header>
        </Grid.Column>
      </Grid>
    )
  }
}

export default UserPanel