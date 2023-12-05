(
  (): void => {
    const buttonToLike = document.querySelector('ytmusic-playlist-shelf-renderer .like [aria-pressed="false"]');
    for(const buttonToLike of buttons) {
	  if (!(buttonToLike instanceof HTMLButtonElement) {
	    continue;
	  }
	  
	  buttonToLike.click();
	}
  }
)();