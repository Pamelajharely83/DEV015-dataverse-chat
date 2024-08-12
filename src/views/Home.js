const Home = (props) => {
    const viewHome = document.createElement('div');
    viewHome.innerHTML = `
    <h1>
        Hi hi, this is "home" page
    </h1>
    <button id="btnAbout">About</button>
    ` 
    ;
    return viewHome;
};

export default Home;