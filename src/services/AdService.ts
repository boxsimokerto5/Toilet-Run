/**
 * AdService.ts
 * Manages Start.io ads for the application.
 */

declare global {
  interface Window {
    startio: any;
  }
}

export const AdService = {
  /**
   * Shows a banner ad in a specific container.
   * @param containerId The ID of the HTML element where the banner will be placed.
   */
  showBanner: (containerId: string) => {
    const call = () => {
      if (window.startio) {
        window.startio('banner', {
          container: containerId,
          type: 'standard',
        });
      }
    };

    if (window.startio && typeof window.startio === 'function') {
      call();
    } else {
      window.startio = window.startio || function() { (window.startio.q = window.startio.q || []).push(arguments) };
      window.startio.q.push(call);
    }
  },

  /**
   * Shows an interstitial ad.
   */
  showInterstitial: () => {
    const call = () => {
      if (window.startio) {
        window.startio('interstitial');
      }
    };

    if (window.startio && typeof window.startio === 'function') {
      call();
    } else {
      window.startio = window.startio || function() { (window.startio.q = window.startio.q || []).push(arguments) };
      window.startio.q.push(call);
    }
  },
};
