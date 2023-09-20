const name = document.getElementById("name");

const tagsContainer = document.querySelector(".tags");

const addName = () => {
    
    const newName = document.createElement("div");
    newName.setAttribute("class", "tag");

    newName.innerText = `Hi I am ${name.value}`;

    tagsContainer.append(newName);
};
