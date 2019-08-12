"use strict";


fetch('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php').then(employeeData => employeeData.json()).then(employeeData => {
    $('button').click( function () { 
        $('div').empty()
        for (let i = 0; i < Object.keys(employeeData).length; i++) {
            console.log("pętla działa")
            $('div').append(`<p>${Object.keys(employeeData)[i]}:  ${Object.values(employeeData)[i]}</p>`); }
    })
})

