 document.getElementById('form-of-resume')?.addEventListener('submit', function(event) {
    event.preventDefault();

    // Type assertions 
    const profilePictureInput = document.getElementById('profile-picture') as HTMLInputElement | null;
    const nameElement = document.getElementById('name') as HTMLInputElement | null;
    const emailElement = document.getElementById('email') as HTMLInputElement | null;
    const phoneElement = document.getElementById('phone') as HTMLInputElement | null;
    const educationElement = document.getElementById('education') as HTMLTextAreaElement | null;
    const skillElement = document.getElementById('skill') as HTMLTextAreaElement | null;
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement | null;

   
    if (profilePictureInput && nameElement && emailElement && phoneElement && educationElement && skillElement && experienceElement) {
        const name: string = nameElement.value;
        const email: string = emailElement.value;
        const phone: string = phoneElement.value;
        const education: string = educationElement.value;
        const skill: string = skillElement.value;
        const experience: string = experienceElement.value;

       
        const profilePictureFile: File | undefined = profilePictureInput.files?.[0];
        const profilePictureURL: string = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";

        const resumeResult: string = `
            <h2>Resume</h2>
            ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile picture" class="profile-picture">` : ""}
            <p><strong>Name:</strong> <span id="edit-name" class="editable">${name}</span></p>
            <p><strong>Email:</strong> <span id="edit-email" class="editable">${email}</span></p>
            <p><strong>Phone Number:</strong> <span id="edit-phone" class="editable">${phone}</span></p>

            <h3>Education</h3>
            <p id="edit-education" class="editable">${education}</p>

            <h3>Skills</h3>
            <p id="edit-skill" class="editable">${skill}</p>

            <h3>Experience</h3>
            <p id="edit-experience" class="editable">${experience}</p>
        `;

        const resumeResultElement = document.getElementById('resumeResult');
        if (resumeResultElement) {
            resumeResultElement.innerHTML = resumeResult;
            makeContentEditable();
        }
    } else {
        console.error('One or more input elements are missing');
    }
});

 
function makeContentEditable(): void {
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach((element) => {
        element.addEventListener('click', function () {
            const currentElement = element as HTMLElement;
            const currentValue: string = currentElement.textContent || "";

             if (currentElement.tagName === 'P' || currentElement.tagName === 'SPAN') {
                const input: HTMLInputElement = document.createElement('input');
                input.type = 'text';
                input.value = currentValue;
                input.classList.add('editing', 'input');

                input.addEventListener('blur', function () {
                    currentElement.textContent = input.value;
                    currentElement.style.display = 'inline';
                    input.remove();
                });

                currentElement.style.display = "none";
                currentElement.parentNode?.insertBefore(input, currentElement);
                input.focus();
            }
        });
    });
}
