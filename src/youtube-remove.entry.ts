(
	(): void => {
		const buttons = document.querySelectorAll<HTMLButtonElement>('ytmusic-playlist-shelf-renderer button[aria-label="J\'aime"][aria-pressed="true"]');
		buttons.forEach((button: HTMLButtonElement, currentIndex: number): void => {
			if (currentIndex === 0) {
				return;
			}
			if (!(button instanceof HTMLButtonElement)) {
				return;
			}

			const parent = button.closest('ytmusic-responsive-list-item-renderer');
			if (parent === null) {
				return;
			}
			
			const selector = parent.querySelector('.multi-select-overlay');
			if (selector === null) {
				return;
			}

			selector.click();
		});

		console.debug(buttons.length);
	}
)();