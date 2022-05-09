
 
 (function () {    
     'use strict';
    jQuery(function() {
       jQuery('.calendar-js').fullCalendar({
          locale: 'cz',
          defaultView: 'month',
          editable: true,
          header: {
             left: 'prev',
             center: 'title',
             right: 'next'
          },
          monthNames: ['LEDEN', 'ÚNOR', 'BŘEZEN', 'DUBEN', 'KVĚTEN', 'ČERVEN', 'ČERVENEC', 'SRPEN', 'ZÁŘÍ', 'ŘÍJEN', 'LISTOPAD', 'PROSINEC'],
        monthNamesShort: ['LEDEN', 'ÚNOR', 'BŘEZEN', 'DUBEN', 'KVĚTEN', 'ČERVEN', 'ČERVENEC', 'SRPEN', 'ZÁŘÍ', 'ŘÍJEN', 'LISTOPAD', 'PROSINEC'],
        dayNames: ['NEDĚLE','PONDĚLÍ', 'ÚTERÝ', 'STŘEDA', 'ČTVRTEK', 'PÁTEK', 'SOBOTA'],
        dayNamesShort: ['NE', 'PO', 'ÚT', 'ST', 'ČT', 'PÁ', 'SO'],
          events: [
             {
                id: '1',
                start: '2022-05-05',
                title: 'Pardubice',
                icon : "images/teams/2.png",
                url: '/akce-pardubice',
                categorie: 'a-tym'
             },
             {
               id: '2',
               start: '2022-05-08',
               title: '18:00',
               icon:"images/content/logo.png",
               url: '/akce', 
               categorie: 'mladez'
             },
          ],
          eventRender: function(event, element) {
             if(event.icon){
               element.find(".fc-title").prepend('<img src="'+event.icon+'" />');
             }
             if(event.icon){
               element.find(".fc-title").addClass(''+event.categorie+'');
             }
            },
       })
    });
 })(jQuery);
