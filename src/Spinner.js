import React from 'react'
import { Loader, Dimmer } from 'semantic-ui-react'

const Spinner = () => (
  <Dimmer active>
    <Loader size="huge" content={"load緊啊煩......"} />
  </Dimmer>
)

export default Spinner