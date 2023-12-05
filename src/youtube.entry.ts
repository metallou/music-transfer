(
  (): void => {
	let loop = true;
	
	let test = 10;
	while (loop) {
	  loop = false;
	  test--;
	  const buttonToLike = document.querySelector('.like [aria-pressed="false"]');
	  if (buttonToLike instanceof HTMLButtonElement) {
	    loop = true;
		
		button.scrollIntoView({
            behavior: 'auto',
            block: 'center',
            inline: 'center',
        });
		
		buttonToLike.click();
	  }
	  
	  if (test === 0) {
	    loop = false;
	  }
	}
  }
)();