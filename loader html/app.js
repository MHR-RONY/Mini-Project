* {
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

header {
    background-color: #333;
    color: #fff;
    padding: 20px;
    text-align: center;
}

.sidebar {
    width: 200px;
    background-color: #f4f4f4;
    padding: 20px;
    position: fixed;
    height: 100vh;
    overflow: auto;
}

.sidebar ul {
    list-style: none;
    padding: 0;
}

.sidebar ul li {
    margin: 10px 0;
}

main {
    margin-left: 200px;
    flex: 1;
    padding: 20px;
}

.loader-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 15px;
}

.loader {
    width: 100px;
    height: 100px;
    background-color: #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
}

footer {
    background-color: #222;
    color: white;
    text-align: center;
    padding: 10px;
    width: 100%;
}

