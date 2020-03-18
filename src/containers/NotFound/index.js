import React from 'react';
const NotFound = (props) => {
    let { staticContext } = props;
    staticContext && (staticContext.notFound=true)
    return (
        <div>
            404,sorry,the page is not found
        </div>
    )
}
export default NotFound;