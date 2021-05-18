let zakat_approved = "<div class='col-sm-12 main-body mb-4 text-center'><h2 class='bangla-font body-heading mt-2 text-center'>এবছর আপনার উপর %zakat_amount% টাকা যাকাত ফরজ হয়েছে</h2><p class='bangla-font text-center'>এবছর (২০২১) নূন্যতম যাকাতযোগ্য সম্পদের পরিমাণ ৩২,৫০০ ৳, যাকাতের পরিমাণ ২.৫০% হারে</p></div>"
let zakat_not_approved = "<div class='col-sm-12 main-body mb-4 text-center'><h2 class='bangla-font body-heading mt-2 text-center'>এবছর আপনার উপর যাকাত ফরজ হয়নি</h2><p class='bangla-font text-center'>এবছর (২০২১) নূন্যতম যাকাতযোগ্য সম্পদের পরিমাণ ৩২,৫০০ ৳, যাকাতের পরিমাণ ২.৫০% হারে</p></div>"

// nisab
const min_value = 32500;

document.querySelector(".calculation-btn").addEventListener('click', () => {
    let form1 = {
        plus_1: parseInt(document.getElementById("plus_1").value),
        plus_2: parseInt(document.getElementById("plus_2").value),
        plus_3: parseInt(document.getElementById("plus_3").value),
        plus_4: parseInt(document.getElementById("plus_4").value),
        plus_5: parseInt(document.getElementById("plus_5").value),
        plus_6: parseInt(document.getElementById("plus_6").value),
        plus_7: parseInt(document.getElementById("plus_7").value),
        minus_1: parseInt(document.getElementById("minus_1").value),
        form1_result: 0
    };
    
    let form2 = {
        plus_8: parseInt(document.getElementById("plus_8").value),
        plus_9: parseInt(document.getElementById("plus_9").value),
        plus_10: parseInt(document.getElementById("plus_10").value),
        plus_11: parseInt(document.getElementById("plus_11").value),
        plus_12: parseInt(document.getElementById("plus_12").value),
        plus_13: parseInt(document.getElementById("plus_13").value),
        plus_14: parseInt(document.getElementById("plus_14").value),
        minus_2: parseInt(document.getElementById("minus_2").value),
        form2_result: 0
    };
    
    let form3 = {
        plus_15: parseInt(document.getElementById("plus_15").value),
        plus_16: parseInt(document.getElementById("plus_16").value),
        plus_17: parseInt(document.getElementById("plus_17").value),
        plus_18: parseInt(document.getElementById("plus_18").value),
        plus_19: parseInt(document.getElementById("plus_19").value),
        plus_20: parseInt(document.getElementById("plus_20").value),
        plus_21: parseInt(document.getElementById("plus_21").value),
        minus_3: parseInt(document.getElementById("minus_3").value),
        form3_result: 0
        
    };
    let form1_result = (form1.plus_1 + form1.plus_2 + form1.plus_3 + form1.plus_4 + form1.plus_5 + form1.plus_6 + form1.plus_7) - form1.minus_1;
    let form2_result = (form2.plus_8 + form2.plus_9 + form2.plus_10 + form2.plus_11 + form2.plus_12 + form2.plus_13 + form2.plus_14) - form2.minus_2;
    let form3_result = (form3.plus_15 + form3.plus_16 + form3.plus_17 + form3.plus_18 + form3.plus_19 + form3.plus_20 + form3.plus_21) - form3.minus_3;

    let forms_sum = form1_result + form2_result + form3_result;

    if (forms_sum >= min_value) {
        let zakat = forms_sum / 40;
        zakat_approved = zakat_approved.replace("%zakat_amount%", zakat);
        document.querySelector(".result").innerHTML = zakat_approved;
    }

    else {
        document.querySelector(".result").innerHTML = zakat_not_approved;
    }
});
