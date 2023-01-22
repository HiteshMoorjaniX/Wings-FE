import React from 'react';

const ToolBar = ({openSidebar}) => {
    return (
        <div className='tool-bar'>
            <div className='burger' onClick={openSidebar}>
                Menu
            </div>
        </div>
    );
};

export default ToolBar;