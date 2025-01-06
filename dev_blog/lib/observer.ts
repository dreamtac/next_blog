export const getIntersectionObserver = () => {
    const observer = new IntersectionObserver(entries => {
        console.log(entries);
    });
    return observer;
};
