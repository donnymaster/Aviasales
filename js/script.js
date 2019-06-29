(
    function(){
        let choice = 0;

        const groupBut = document.querySelector('.group_but');
        
        groupBut.addEventListener('click', (event) => {
            // console.log(event);
            let varEvent = event.path || (event.composedPath && event.composedPath());
            if(choice == 0){
               choice = varEvent[0]; 
               choice.style.color = "white";
               choice.style.backgroundColor = "#2196f3";
               choice.style.borderTop = "1px solid #64b5f5";
               choice.style.borderBottom = "1px solid #64b5f5";
            }else if(choice != 0 && varEvent[0].className != choice.className){
               choice.style = "";
               choice = varEvent[0]; 
               choice.style.color = "white";
               choice.style.backgroundColor = "#2196f3";
               choice.style.borderTop = "1px solid #64b5f5";
               choice.style.borderBottom = "1px solid #64b5f5";
            }else if(varEvent[0].className == choice.className){
                choice.style = "";
                choice = 0;
            }
            console.log(choice);
        });
    }
    )();

    (
        function(){
            let funHideMenu = () => {
                document.body.style = "";
                menu.style = "";
                fon.style.display = 'none';
                hideMenu.style = "";
            }

            let choice = 0;
            let mobileMenu = document.querySelector('.mobile-nav');
            let menu = document.querySelector('.left_menu');
            let fon = document.querySelector('.hide-menu');
            let hideMenu = document.querySelector('.hideMenu');

            mobileMenu.addEventListener('click', () => {
                    document.body.style.overflow = "hidden";
                    menu.style.display = "block";
                    menu.style.position = "fixed";
                    menu.style.left = "0";
                    menu.style.top = "0";
                    menu.style.paddingTop = "3vh";
                    menu.style.paddingBottom = "60vh";
                    menu.style.borderRadius = "initial";
                    fon.style.display = 'block';
                    hideMenu.style.display = "block";
            });




            fon.addEventListener('click', funHideMenu);
            hideMenu.addEventListener('click', funHideMenu);

            
        }
    )();
