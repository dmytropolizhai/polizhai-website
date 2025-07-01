export function openNewTab(url: string): void {
    const win: Window | null = window.open(url, '_blank');
    if (win != null) {
        win.focus();
    }
}