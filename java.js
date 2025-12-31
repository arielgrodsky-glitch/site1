function Like(btn) {
    const item = btn.closest(".items").dataset.id;
    const c = btn.querySelector(".like-count");
    const liked = btn.classList.toggle("liked");

    c.textContent = +c.textContent + (liked ? 1 : -1);

    localStorage.setItem(item, JSON.stringify({
        liked,
        count: c.textContent
    }));
}
document.querySelectorAll(".items").forEach(i => {
    const d = JSON.parse(localStorage.getItem(i.dataset.id) || "{}");
    if (d.count) i.querySelector(".like-count").textContent = d.count;
    if (d.liked) i.querySelector("button").classList.add("liked");
});
function View(el) {
    let viewsSpan = el.closest('.items, .service_wrap').querySelector('.views');
    let currentViews = parseInt(viewsSpan.textContent.replace(/[^\d]/g, '')) || 0;
    currentViews++;
    viewsSpan.textContent = `👁 ${currentViews} views`;
}
