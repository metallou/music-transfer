(
  (): int => {
    const buttons = document.querySelectorAll('data-testid="playlist-tracklist" [aria-label="Remove from Your Library"]');
    buttons.forEach((button): void => {
	  if (!(button instanceof HTMLButtonElement)) {
	    continue;
	  }
	  
	  button.click();
	});
	
	return buttons.length;
  }
)();