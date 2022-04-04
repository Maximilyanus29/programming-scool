const mymodal = () => {
    const overlay=document.getElementById("overlay");
    const modal=document.getElementById("modal");
    const toggleModal=()=>{
        overlay.classList.toggle("show");
        modal.classList.toggle("show");
    }
    document.querySelectorAll(".open-modal").forEach(el=>{
        el.addEventListener("click", evt=>{
            toggleModal();
        });
    })
    overlay.addEventListener("click", evt=>{
        console.log(123);
        toggleModal();
    })
};

export default mymodal;