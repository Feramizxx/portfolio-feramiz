const scrollTop = (behavior = 'auto') => {
    window.scroll({
        top: 0,
        left: 0,
        behavior
    });
}
export default scrollTop