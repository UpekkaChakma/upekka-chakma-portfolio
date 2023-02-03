import React from 'react'
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'


const Tooltip = () => {
    return (
        <ReactTooltip anchorId="Home" content="Home" place="right" variant="info" />
    )
}

export default Tooltip