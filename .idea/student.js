async function getStudent(){
        const nameTextArea = document.getElementById("name");

        let response = await fetch('http://localhost:8080/Salutations/Hi?name=' + nameTextArea.value);
        let data = await response.text();
        console.log(data);
}

function initPage(){
    const button = document.getElementById('getStudentButton')
    button.addEventListener("click", getStudent);
}




window.onload = (event) => {
    initPage();
};