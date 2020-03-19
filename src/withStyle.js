export default (props,style) => {
    if (props.staticContext) {
        props.staticContext.css.push(style._getCss())
    }
}