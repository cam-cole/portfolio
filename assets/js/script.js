$(".navbar-burger").click(function() {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
})

$('#about-button').on("click", function() {
    document.querySelector('#about-me').scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
})

$('#my-work-button').on("click", function() {
    document.querySelector('#my-work').scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    })
})

$('#contact-button').on("click", function() {
    document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    })
})

$('#home-button').on("click", function() {
    document.querySelector('#home').scrollIntoView({
        behavior: 'smooth'
    })
})

$('#submit').on("click", function() {
    var contactName = $("#contact-name").val();
    var emailBody = $("#email-body").val();
    var emailLink = "mailto:camcole065@gmail.com?subject=" + contactName + " wants to connect!&body=" + emailBody;
    window.location.href = emailLink;
})