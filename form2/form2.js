"use strict"
const forms = document.forms;

if (forms.length) {
    for ( const form of forms ) {
        const file = form.querySelector['input [type="file"]'];
        file ? file.addEventListener('change', formAddFile) : null;
        
    }
    
}
function formAddFile(e) {
    const formInputFile = e.target;
    const formFiles = formInputFile.files;
    const fileName = formFiles.length ? formFiles[0].name : '';
    
    
}