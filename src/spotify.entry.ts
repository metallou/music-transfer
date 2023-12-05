(
  (): void => {
    const buttonsToUnlike = document.querySelectorAll('data-testid="playlist-tracklist" [aria-label="Remove from Your Library"]');
    for(const buttonToUnlike of buttonsToUnlike) {
	  if (!(buttonToUnlike instanceof HTMLButtonElement) {
	    continue;
	  }
	  
	  buttonToUnlike.click();
	}
  }
)();