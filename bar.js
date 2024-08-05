
estadoNav = true;

bar.addEventListener('click', () => {

    if (estadoNav) {
        bar.children[0].classList.add('openTop');
        bar.children[1].style.transition = "150px";
        bar.children[1].style.opacity = 0;
        bar.children[2].classList.add('openBotton');
        
        bar.children[0].style.top = "13px";
        bar.children[0].style.transform = "rotate(45deg)";
        bar.children[2].style.top = "-13px";
        bar.children[2].style.transform = "rotate(-45deg)";

        estadoNav = false;
    }else{
        bar.children[0].classList.add('closeTop');
        bar.children[1].style.opacity = 0;
        bar.children[2].classList.add('closeBotton');
        
        bar.children[0].style.top = "0px";
        bar.children[0].style.transform = "rotate(0deg)";
        bar.children[1].style.opacity = 1;
        bar.children[2].style.top = "0px";
        bar.children[2].style.transform = "rotate(0deg)";

        estadoNav = true;
    }
});
