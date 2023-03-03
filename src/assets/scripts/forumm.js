const means = document.querySelector(".vote-bar-left");
const end = document.querySelector(".vote-bar-right");
const bar = document.querySelector(".vote-bar");

let meansCount = 0;
let endCount = 0;

const updatePercentage = () => {
    let meansPercentage = Math.round(meansCount / (meansCount + endCount) * 100);
    meansPercentage = Math.min(meansPercentage, 90);
    meansPercentage = Math.max(meansPercentage, 10);
    means.style.width = meansPercentage + '%';
    end.style.width = (100 - meansPercentage) + '%';
    means.firstElementChild.textContent = `${Math.round(meansCount / (meansCount + endCount) * 100)}% (${meansCount}/${meansCount + endCount})`;
    end.firstElementChild.textContent = `${Math.round(endCount / (meansCount + endCount) * 100)}% (${endCount}/${meansCount + endCount})`;
}

means.addEventListener('click', (e) => {
    meansCount++;
    updatePercentage();
});

end.addEventListener('click', (e) => {
    endCount++;
    updatePercentage();
});