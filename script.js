function showSection(sectionId) {
    var sections = document.getElementsByClassName('section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }
    document.getElementById(sectionId).style.display = 'block';
}

document.getElementById("derivativeForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const func = document.getElementById("function").value;
    const variable = document.getElementById("variable").value;

    try {
        // Menggunakan math.js untuk menghitung turunan parsial
        const derivative = math.derivative(func, variable).toString();
        document.getElementById("result").textContent = `The derivative is: ${derivative}`;
    } catch (error) {
        document.getElementById("result").textContent = `Error: ${error.message}`;
    }
});
