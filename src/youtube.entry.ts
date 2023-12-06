(
  (): number => {
    const buttons = document.querySelectorAll('ytmusic-playlist-shelf-renderer .like [aria-pressed="false"]');
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