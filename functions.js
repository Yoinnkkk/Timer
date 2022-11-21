function modeSwap() {
    const body = document.body;
    const wrapper = document.getElementById("wrapper");
    const text = document.getElementById("text");
    text.style.color = `rgba(${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},.7)`
}