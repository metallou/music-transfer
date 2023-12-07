(
  (): void => {
    const buttons = document.querySelectorAll('ytmusic-playlist-shelf-renderer button[aria-label="J\'aime"][aria-pressed="false"]');
    buttons.forEach((button: HTMLButtonElement): void => {
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