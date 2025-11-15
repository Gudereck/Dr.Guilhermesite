$(document).ready(function () {
    // Menu mobile toggle
    $("#mobile_btn").on("click", function () {
        $("#mobile_menu").toggleClass("active");
        $(this).find("i").toggleClass("fa-x");
    });

    // Smooth scroll rápido e preciso
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        
        // Fechar menu mobile
        $("#mobile_menu").removeClass("active");
        $("#mobile_btn").find("i").removeClass("fa-x").addClass("fa-bars");
        
        const target = $(this.getAttribute('href'));
        if (target.length) {
            const headerHeight = $('#navbar').outerHeight();
            const targetPosition = target.offset().top - headerHeight;
            
            // Scroll mais rápido (500ms)
            $('html, body').animate({
                scrollTop: targetPosition
            }, 500);
        }
    });

    // Scroll spy simplificado
    $(window).on("scroll", function () {
        const scrollPosition = $(window).scrollTop();
        const headerHeight = $('header').outerHeight();
        
        // Atualizar header
        if (scrollPosition > 50) {
            $('header').addClass("scrolled");
        } else {
            $('header').removeClass("scrolled");
        }
        
        // Atualizar navegação ativa
        $('section').each(function() {
            const section = $(this);
            const sectionTop = section.offset().top - headerHeight - 50;
            const sectionBottom = sectionTop + section.outerHeight();
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                const sectionId = section.attr('id');
                
                $('.nav_item').removeClass('active');
                $(`.nav_item a[href="#${sectionId}"]`).parent().addClass('active');
            }
        });
    });

    // SCROLLREVEAL SIMPLES E FUNCIONAL
    if (typeof ScrollReveal !== 'undefined') {
        ScrollReveal().reveal('.service, .comentario-card, .endereco-card, .contact-item, .instrucao-item', {
            duration: 800,
            distance: '30px',
            origin: 'bottom',
            interval: 100
        });
    }
});