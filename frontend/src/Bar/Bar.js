import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import AddMeasure from './AddMeasure';

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Bar = () => (
  <ElevationScroll>
    <AppBar style={{ alignItems: 'center' }}>
      <Toolbar>
        <AddMeasure />
      </Toolbar>
    </AppBar>
  </ElevationScroll>
);


export default Bar;
