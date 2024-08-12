export const Error = () => {
    const viewError = document.createElement('div');
    viewError.innerHTML = `
    <h1>
        This is "error" page
    </h1>
    <button id="btnHome">Home</button>
    ` 
    return viewError;
};