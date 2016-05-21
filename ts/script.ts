console.log( 'Hi' );

const MAX_DEG_X = 50;
const MAX_DEG_Y = 50;

const logo = <HTMLElement>document.getElementsByClassName( 'logo' )[ 0 ];

function handleMouseMove( e: MouseEvent ) {
  const x = e.pageX;
  const y = e.pageY;
  // console.log( 'x: %d, y: %d', x, y );

  const halfX = window.innerWidth/2;
  const halfY = window.innerHeight/2;

  const signX = x > halfX ? 1 : -1;
  const signY = y > halfY ? -1 : 1;

  const xpart = Math.abs( x - halfX );
  const ypart = Math.abs( y - halfY );
  //halfX:MAX_DEG_X = x:halfX
  const degX = (xpart*MAX_DEG_X)/halfX;
  const degY = (ypart*MAX_DEG_Y)/halfY;

  // logo.style.transform = `rotateY(${degX*signX}deg)`;
  // logo.style.transform = `rotateY(${degY*signY}deg)`;
  logo.style.transform = `rotateY(${degX*signX}deg) rotateX(${degY*signY}deg)`;
}

function toggleFollow( e: MouseEvent ) {
  const isActive = logo.classList.contains( 'active' );
  if( isActive ) {
    window.removeEventListener( 'mousemove', handleMouseMove );
    logo.style.transform = '';
    logo.classList.remove( 'active' );
  } else {
    logo.classList.add( 'active' );
    window.addEventListener( 'mousemove', handleMouseMove );
    handleMouseMove( e ); // Kick start
  }
}

window.addEventListener( 'click', toggleFollow );