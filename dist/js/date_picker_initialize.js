$(document).ready(function() {
	$(".pashto_datepicker").pDatepicker({
		format: 'YYYY-MM-DD',
		timePicker: {
			enabled: false
		},
	});
	$(".pashto_datetimepicker").pDatepicker({
		format: 'YYYY-MM-DD HH:mm:ss',
		timePicker: {
			enabled: true
		},
	});
	$(".pashto_timepicker").pDatepicker({
		format: 'HH:mm:ss',
		onlyTimePicker: true
	});

	$(".pashto_monthpicker").pDatepicker({
	    format: " MMMM YYYY",
	    altField: '#monthpickerAlt',
	    altFormat: "YYYY MM DD HH:mm:ss",
	    yearPicker: {
		enabled: false
	    },
	    monthPicker: {
		enabled: true
	    },
	    dayPicker: {
		enabled: false
	    }
	});

	$(".pashto_monthpicker").pDatepicker({
	    format: " MMMM",
	    altField: '#monthpickerAlt',
	    altFormat: "YYYY MM DD HH:mm:ss",
	    yearPicker: {
		enabled: false
	    },
	    monthPicker: {
		enabled: true
	    },
	    dayPicker: {
		enabled: false
	    }
	});
        $(".pashto_yearpicker").pDatepicker({
            format: "YYYY",
            altField: '#yearpickerAlt',
            altFormat: "YYYY MM DD HH:mm:ss",
            dayPicker: {
                enabled: false
            },
            monthPicker: {
                enabled: false
            },
            yearPicker: {
                enabled: true
            }
        });

        $(".pashto_yearandmonthpicker").pDatepicker({
            format: "YYYY MM",
            altFormat: "YYYY MM DD HH:mm:ss",
            altField: '#yearAndMonthpickerAlt',
            dayPicker: {
                enabled: false
            },
            monthPicker: {
                enabled: true
            },
            yearPicker: {
                enabled: true
            }
        });

        $(".pashto_englishdigitpicker").pDatepicker({
		format: 'YYYY-MM-DD',
		timePicker: {
			enabled: false
		},
            persianDigit: false
        });
});

