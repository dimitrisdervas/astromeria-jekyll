var moment = rome.moment().add( 0 , 'days');
var tomorrow = rome.moment().add( 2 ,'days');
        rome(arrive, { 
            weekStart: 1,
            time: false,
            monthsInCalendar: 2,
            initialValue: moment,
            min: moment
        });


        rome(depart, { 
            weekStart: 1,
            time: false,
            monthsInCalendar: 2,
            dateValidator: rome.val.afterEq(arrive),
            initialValue: rome.moment(arrive).add( 1 ,'day')
        });
