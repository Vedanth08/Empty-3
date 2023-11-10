
function updateCounterelement(counterId, initialValue, finalvalue) {

    let countupdate = initialValue;

    let counterElement1 = document.getElementById(counterId);

    
    function countervalueUpdate(){

        counterElement1.textContent = countupdate + "+";

        countupdate++;

        if(countupdate <= finalvalue) {
            setTimeout(countervalueUpdate, 50);
        }
    
    }

    countervalueUpdate();

}

updateCounterelement("companyinfo-propertyCountervalue1",0,100);
updateCounterelement("companyinfo-propertyCountervalue2",0,530);
updateCounterelement("companyinfo-propertyCountervalue3",0,360);
updateCounterelement("companyinfo-propertyCountervalue4",0,200);

