document.addEventListener("DOMContentLoaded", function() {
    var navLinks = document.querySelectorAll('.nav-link a');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            var targetSectionId = link.getAttribute('href').substring(1);
            var targetSection = document.getElementById(targetSectionId);

            // Scroll to the target section with smooth scrolling
            targetSection.scrollIntoView({ behavior: 'smooth' });

            // Optionally, you can adjust the scroll position if needed
            // targetSection.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        });
    });
    var skillBars = document.querySelectorAll('.skill-bar');
    
    skillBars.forEach(function(skillBar) {
        var percent = skillBar.getAttribute('data-percent');
        skillBar.style.width = percent + '%';
    });
});
// Trigger animation when the skill section is scrolled into view
document.addEventListener("DOMContentLoaded", function() {
    // Select the skill section
    var skillSection = document.querySelector('.skills');

    // Create a new Intersection Observer
    var observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            // If the skill section enters the viewport
            if (entry.isIntersecting) {
                // Trigger your animation here
                // For example, add a CSS class to animate skill bars
                animateSkillBars();
                
                // Once the animation is triggered, disconnect the observer
                observer.disconnect();
            }
        });
    });

    // Observe the skill section
    observer.observe(skillSection);
});

function animateSkillBars() {
    var skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(skillBar => {
        const percent = skillBar.getAttribute("data-percent");
        skillBar.style.width = percent + "%";
    });
    
}
document.getElementById("downloadButton").addEventListener("click", function() {
    // Replace the link with your Google Drive file's direct download link
    window.location.href = "https://drive.google.com/uc?export=download&id=11FhfMI7uoNP9dDBSBU0w-Qflo-pfBJyx";
});


https://drive.google.com/file/d/11FhfMI7uoNP9dDBSBU0w-Qflo-pfBJyx/view?usp=drivesdk