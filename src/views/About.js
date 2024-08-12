export const About = () => {
    const viewAbout = document.createElement('div');
    viewAbout.innerHTML = `
    <h1>
        This is "about" page
    </h1>
    <button id="btnHome">Home</button>
    <button id="btnError">Error</button>
    ` 
    return viewAbout;
};