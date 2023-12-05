(
  (): void => {
	let loop = true;
	
	let test = 10;
	while (loop) {
	  loop = false;
	  test--;
	  const buttonToUnlike = document.querySelector('[aria-label="Remove from Your Library"]');
	  if (buttonToUnlike instanceof HTMLButtonElement) {
	    loop = true;
		
		buttonToUnlike.scrollIntoView({
            behavior: 'auto',
            block: 'center',
            inline: 'center',
        });
		
		buttonToUnlike.click();
	  }
	  
	  if (test === 0) {
	    loop = false;
	  }
	}
  }
)();