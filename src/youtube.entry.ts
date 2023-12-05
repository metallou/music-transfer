(
  (): int => {
    const buttons = document.querySelectorAll('ytmusic-playlist-shelf-renderer .like [aria-pressed="false"]');
    buttons.forEach((button): void => {
	  if (!(button instanceof HTMLButtonElement)) {
	    continue;
	  }
	  
	  button.click();
	});
	
	return buttons.length;
  }
)();