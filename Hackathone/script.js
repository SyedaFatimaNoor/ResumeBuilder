var _a;
(_a = document.getElementById('form-of-resume')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    // Type assertions 
    var profilePictureInput = document.getElementById('profile-picture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var skillElement = document.getElementById('skill');
    var experienceElement = document.getElementById('experience');
   
    if (profilePictureInput && nameElement && emailElement && phoneElement && educationElement && skillElement && experienceElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var skill = skillElement.value;
        var experience = experienceElement.value;
        
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
       
        var resumeResult = "\n            <h2>Resume</h2>\n            ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile picture\" class=\"profile-picture\">") : "", "\n            <p><strong>Name:</strong> <span id=\"edit-name\" class=\"editable\">").concat(name_1, "</span></p>\n            <p><strong>Email:</strong> <span id=\"edit-email\" class=\"editable\">").concat(email, "</span></p>\n            <p><strong>Phone Number:</strong> <span id=\"edit-phone\" class=\"editable\">").concat(phone, "</span></p>\n\n            <h3>Education</h3>\n            <p id=\"edit-education\" class=\"editable\">").concat(education, "</p>\n\n            <h3>Skills</h3>\n            <p id=\"edit-skill\" class=\"editable\">").concat(skill, "</p>\n\n            <h3>Experience</h3>\n            <p id=\"edit-experience\" class=\"editable\">").concat(experience, "</p>\n        ");
        var resumeResultElement = document.getElementById('resumeResult');
        if (resumeResultElement) {
            resumeResultElement.innerHTML = resumeResult;
            makeContentEditable();
        }
    }
    else {
        console.error('One or more input elements are missing');
    }
});

function makeContentEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            
            if (currentElement.tagName === 'P' || currentElement.tagName === 'SPAN') {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('editing', 'input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                currentElement.style.display = "none";
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
