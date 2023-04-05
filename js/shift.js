const card = $('.shifting-card');

const handleMove = e => {
  const corta = $(e.currentTarget);
  const { left, top } = $(corta).position(), x = left, y = top;
  const { width, height } = $(corta)[0].getBoundingClientRect();
  $(corta).css("perspective", height + 50);
  const cx = x + width / 2;
  const cy = y + height / 2;
  const { pageX, pageY } = e;
  const dx = (cx - pageX) / (width / 2);
  const dy = (cy - pageY) / (height / 2);
  const chill = $(corta).children(".shifting-child");
  chill.css("transition", "transform 0.05s");
  chill.css("transform", `rotateX(${5 * dy * -1}deg) rotateY(${5 * dx}deg)`);
};


const handleOut = e => {
  const corta = $(e.currentTarget);
  const chill = $(corta).children(".shifting-child");
  chill.css("transition", "transform 0.5s");
  chill.css("transform", `rotate(0)`);
};



card.on('mousemove', handleMove);
card.on('mouseout', handleOut);