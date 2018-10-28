function GroupCards() {
    console.log("entre al metodo");
    let cards;
    let colapsible;
    for(i=0;i<4;i++){
        cards='<div class="card">\n' +
            '                            <div class="card-header" id="headingOne">\n' +
            '                                <h5 class="mb-0">\n' +
            '                                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse'+i+'" aria-expanded="true" aria-controls="collapse'+i+'">\n' +
                                                  'Card'+i+
            '                                    </button>\n' +
            '                                </h5>\n' +
            '                            </div>\n' +
            '\n' +
            '                            <div id="collapse'+i+'" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">\n' +
            '                                <div class="card-body">\n' +
            '                                    Esta es la carta '+i+'\n' +
            '                                </div>\n' +
            '                            </div>\n' +
            '                        </div>'//fin de cards
        colapsible=document.getElementById("accordionExample");
        colapsible.insertAdjacentHTML("afterend", cards)
    }

}