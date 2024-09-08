let fileContent = '';

document.getElementById('fileInput').addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        document.getElementById('filename').value = file.name;
    }
});

function displayFileContent() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            fileContent = e.target.result;
            document.getElementById('fileContent').value = fileContent;
        };

        reader.readAsText(file);
    } else {
        alert('Kein Datei ausgewählt.');
    }
}

function showPopup() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('newFilename').value = file.name;
}

function hidePopup() {
    document.getElementById('overlay').style.display = 'none';
}

function downloadFile() {
    const newFilename = document.getElementById('newFilename').value || 'file.txt';
    hidePopup();
    const content = document.getElementById('fileContent').value;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = newFilename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}


// JavaScript-Code, um die Höhe von .controls zu berechnen und die maximale Höhe von .fileContent entsprechend anzupassen
window.addEventListener('load', function() {
    var controlsHeight = document.querySelector('.controls').offsetHeight;
    var fileContent = document.querySelector('.fileContent');
    fileContent.style.height = `calc(100vh - ${controlsHeight}px - 70px)`;
});