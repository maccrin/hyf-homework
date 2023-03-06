import React from 'react'
const MyChildren = (props) => {
    const { children } = props;
    return (
        <div className="children">
            {children}
        </div>
    )
}

export default MyChildren;