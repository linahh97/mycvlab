window.onload = function(){
    var egg = document.getElementById('egg')
    var modalWrapper = document.querySelector('.modalWrapper')
    var firstLetter = 69 //E
    var secondLetter = 71 //G

    function showModal() {
        modalWrapper.classList.remove('hide')
    }

    function hideModal() {
        modalWrapper.classList.add('hide')
    }

    //Tryck in E och G samtidigt
    window.onkeydown = function(gfg){
        if(gfg.keyCode === firstLetter && secondLetter){
            showModal()

            modalWrapper.addEventListener("click", function(e){
                if(e.target === modalWrapper){
                    hideModal()
                }
            })
        }
    }
}