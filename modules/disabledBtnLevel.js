export default function disabledBtnLevel(parent){
    const arrOfLevelBtns = Array.from(parent.children);
    arrOfLevelBtns.forEach(btn => {
        btn.disabled = 'true';
    })
}