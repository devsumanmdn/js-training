const tag = document.getElementById("test-tag");

let charCounts = [];

const intervalId = setInterval(() => {
  const charCode = Math.floor(Math.random() * 26);
  charCounts[charCode] = (charCounts[charCode] || 0) + 1;

  const char = String.fromCharCode(65 + charCode);

  tag.innerHTML = char;

  if (charCounts.filter((e) => !!e).length === 26) {
    clearInterval(intervalId);
    console.log(charCounts);

    let maxCount = 1;

    charCounts.forEach((count) => {
      if (count > maxCount) {
        maxCount = count;
      }
    });

    const htmlText = charCounts
      .map((charCount, index) => {
        const countPercent = (charCount / maxCount) * 100;

        setTimeout(() => {
          const ele = document.getElementById('bar-' + index);
          console.log(ele)
          ele.style.width = `${countPercent}%`;
        }, 10*index)

        return `
      <div class="char-container">
        <span class="char">
          ${String.fromCharCode(65 + index)}:
        </span>
        <div class="bar" id="bar-${index}" style="width: 0%">
        </div>
        <span class="percent">${Math.floor(countPercent)}%</span>
      </div>
    `;
      })
      .join("");


      const containerElement = document.getElementById("container");

    containerElement.innerHTML = htmlText;
  }
}, 10);
