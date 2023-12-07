(
  (): void => {
    const buttons = document.querySelectorAll('ytmusic-playlist-shelf-renderer button[aria-label="J\'aime"][aria-pressed="true"]');
    buttons.forEach((button: HTMLButtonElement, currentIndex: number): void => {
      if (currentIndex === 0) {
	    return;
	  }
	  
	  const parent = button.closest('ytmusic-responsive-list-item-renderer');
	  const selector = parent.querySelector('.multi-select-overlay');
	  
	  selector.click();
	});
	
	console.debug(buttons.length);
  }
)();