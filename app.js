function schovejModal(){
        let modal = document.getElementById("modal");
        let backdrop = document.getElementById("backdrop");
        modal.classList.add("hide");
        backdrop.classList.add("hide");
    }

    function zobrazModal(){
        let modal = document.getElementById("modal");
        let backdrop = document.getElementById("backdrop");
        modal.classList.remove("hide");
        backdrop.classList.remove("hide");
    }

    function zobrazSeznam(){
        let btnWeby = document.getElementById("list");
        let btnForm = document.getElementById("formular");
        let divList = document.getElementById("divList");
        let divForm = document.getElementById("divForm");
    
        btnWeby.classList.add("btn-primary");
        btnForm.classList.remove("btn-primary");
        divList.classList.remove("hide");
        divForm.classList.add("hide");
    }
    
    function zobrazFormular(){
        let btnWeby = document.getElementById("list");
        let btnForm = document.getElementById("formular");
        let divList = document.getElementById("divList");
        let divForm = document.getElementById("divForm");
    
        btnWeby.classList.remove("btn-primary");
        btnForm.classList.add("btn-primary");
        divList.classList.add("hide");
        divForm.classList.remove("hide");
    }