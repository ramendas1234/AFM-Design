/*!
 * Start Bootstrap - SB Admin v7.0.5 (https://startbootstrap.com/template/sb-admin)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
 */
// 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

jQuery(document).ready(function($){
    $(document).on('click','.dashboard-notice-logo',function(){
        $(".dashboard-notice").toggleClass("d-none");
        $(".dashboard-notice-logo").toggleClass("d-none");
    });

    $(document).on('click','.dashboard-notice a.btn',function(){
        
        $(".dashboard-notice").toggleClass("d-none");
        $(".dashboard-notice-logo").toggleClass("d-none");
    });

    $(document).on('click','#chat-send-btn', function(){
        var txt = $('.chat-input').val();
        $('.chat-input').val('');
        var dt = new Date();
        var time = dt.getHours() + ":" + dt.getMinutes();
        


        $('.chat-conversation-list').last().append(`<li class="mar-btm">
                                        
                                        <div class="media-body pad-hor speech-right">
                                            <div class="speech">
                                                <a href="#" class="media-heading">Lucy Doe</a>
                                                <p>${txt}</p>
                                                <p class="speech-time text-right">
                                                    <i class="fa-regular fa-clock"></i> ${time}
                                                </p>
                                            </div>
                                        </div>
                                    </li>`);
        $("div").scrollTop(1500);

        
    });
});