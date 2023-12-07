(
  (): void => {
    const buttons = document.querySelectorAll('[aria-label="Favorite Songs"] [aria-label="Remove from Your Library"]');
    buttons.forEach((button): void => {
	  if (!(button instanceof HTMLButtonElement)) {
	    return;
	  }
		  
	  button.scrollIntoView({
        behavior: 'auto',
        block: 'center',
        inline: 'center',
      });
	  
	  button.click();
	});
	
	console.debug(buttons.length);
  }
)();