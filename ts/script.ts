interface NodeListOf<TNode extends Node> extends Array<TNode> { } // trick to work with for-of

const MAX_DEG_X = 50;
const MAX_DEG_Y = 50;
let winFollow = false;

const logo = document.querySelector('.logo') as HTMLElement;
const job = document.querySelectorAll('.job > a') as NodeListOf<HTMLElement>;

function handleMouseMove(e: MouseEvent) {
  const x = e.pageX;
  const y = e.pageY;
  // console.log( 'x: %d, y: %d', x, y );

  const halfX = window.innerWidth / 2;
  const halfY = window.innerHeight / 2;

  const signX = x > halfX ? 1 : -1;
  const signY = y > halfY ? -1 : 1;

  const xpart = Math.abs(x - halfX);
  const ypart = Math.abs(y - halfY);

  const degX = (xpart * MAX_DEG_X) / halfX;
  const degY = (ypart * MAX_DEG_Y) / halfY;

  logo.style.transform = `rotateY(${degX * signX}deg) rotateX(${degY * signY}deg)`;
}

function isActive() {
  return logo.classList.contains('active');
}
function startFollow(e: MouseEvent) {
  if (isActive()) return;

  logo.classList.add('active');
  window.addEventListener('mousemove', handleMouseMove);
  handleMouseMove(e); // Kick start
}
function stopFollow(e: MouseEvent) {
  if (!isActive()) return;

  window.removeEventListener('mousemove', handleMouseMove);
  logo.style.transform = '';
  logo.classList.remove('active');
}

window.addEventListener('click', e => {
  if( isActive() ) {
    winFollow = false;
    stopFollow( e );
  } else {
    winFollow = true;
    startFollow( e );
  }
});


for (const element of job) {
  const variation = element.dataset['variation' ];
  element.addEventListener('mouseenter', e => {
    logo.classList.add(variation);
    if (!winFollow) startFollow(e);
  });
  element.addEventListener('mouseleave', e => {
    logo.classList.remove(variation);
    if (!winFollow) stopFollow(e);
  });
}